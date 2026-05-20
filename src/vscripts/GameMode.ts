import { reloadable } from "./lib/tstl-utils";
import { EventSpy } from "./survivors/EventSpy";
import { HeroSelection } from "./survivors/HeroSelection";
import "./modifiers/modifier_survivors_mouse_movement";
import "./modifiers/modifier_hide_healthbar";
import { EnemyManager } from "./survivors/EnemyManager";
import { LevelManager } from "./survivors/LevelManager";
import { PickupManager } from "./survivors/PickupManager";
import { PowerupManager } from "./survivors/PowerupManager";
import { SURVIVORS_ENEMIES } from "./survivors/SurvivorsEnemies";
import { SURVIVORS_POWERUPS } from "./survivors/SurvivorsPowerUps";

type SurvivorsMouseMovementModifier = CDOTA_Modifier_Lua & {
    SetMouseTarget?: (target: Vector) => void;
    SetMovementSpeed?: (speed: number) => void;
};

declare global {
    interface CDOTAGameRules {
        Addon: GameMode;
    }
}

@reloadable
export class GameMode {
    public heroSelection!: HeroSelection;

    private engineReady = false;
    private heroChosen = false;
    private runStarted = false;
    private lastState = -1;
    private runStartTime = 0;
    private killCount = 0;
    private goldCollected = 0;

    private levelManager = new LevelManager();
    private isChoosingPowerup = false;

    private enemyManager!: EnemyManager;
    private pickupManager!: PickupManager;
    private powerupManager!: PowerupManager;
    private activePlayerHero?: CDOTA_BaseNPC_Hero;
    private activeHeroByPlayer = new Map<PlayerID, CDOTA_BaseNPC_Hero>();
    private mouseMovementModifierByPlayer = new Map<PlayerID, SurvivorsMouseMovementModifier>();

    private readonly survivorMoveSpeed = 430;
    private readonly survivorStopDistance = 48;

    public static Precache(this: void, context: CScriptPrecacheContext) {
        print("[PRECACHE] Starting Survivors precache");

        // Base units
        PrecacheUnitByNameSync("npc_survivors_enemy", context);
        PrecacheUnitByNameSync("npc_survivors_xp_gem", context);

        // Core base assets
        PrecacheResource("model", "models/events/crownfall/survivors/survivor_gem.vmdl", context);
        PrecacheResource("particle", "particles/generic_gameplay/rune_bounty_owner.vpcf", context);

        print("[PRECACHE] Dynamically precaching all enemies...");
        for (const [key, enemy] of Object.entries(SURVIVORS_ENEMIES)) {
            // Precache single models
            if (enemy.modelName) {
                PrecacheResource("model", enemy.modelName, context);
            }
            // Precache array of models (like the vase variants)
            if (enemy.modelNames) {
                for (const model of enemy.modelNames) {
                    PrecacheResource("model", model, context);
                }
            }
            // Precache specific enemy particles
            if (enemy.deathEffectParticle) {
                PrecacheResource("particle", enemy.deathEffectParticle, context);
            }
            if (enemy.resurrectParticleName) {
                PrecacheResource("particle", enemy.resurrectParticleName, context);
            }
            if (enemy.absorbParticleName) {
                PrecacheResource("particle", enemy.absorbParticleName, context);
            }
            if (enemy.attacks) {
                for (const attack of enemy.attacks) {
                    if (attack.particleName) {
                        PrecacheResource("particle", attack.particleName, context);
                    }
                }
            }
        }

        print("[PRECACHE] Dynamically precaching all powerups...");
        for (const [key, powerup] of Object.entries(SURVIVORS_POWERUPS)) {
            if (powerup.particle) {
                PrecacheResource("particle", powerup.particle, context);
            }
            if (powerup.impactParticle) {
                PrecacheResource("particle", powerup.impactParticle, context);
            }
            if (powerup.modifierParticle) {
                PrecacheResource("particle", powerup.modifierParticle, context);
            }
            if (powerup.hitStatusEffectParticle) {
                PrecacheResource("particle", powerup.hitStatusEffectParticle, context);
            }
            if (powerup.explosionParticle) {
                PrecacheResource("particle", powerup.explosionParticle, context);
            }
        }

        print("[PRECACHE] Survivors precache complete");
    }

    public static Activate(this: void) {
        if (GameRules.Addon) {
            print("GameMode already activated, skipping duplicate Activate()");
            return;
        }

        print("=== NEST TYPESCRIPT BOOTSTRAP ===");

        GameRules.Addon = new GameMode();
        GameRules.Addon.Start();
    }

    public Start() {
        //EventSpy.Start();
        this.patchRequiredDotaEntities();
        this.setupGameRules();

        PrecacheUnitByNameAsync("npc_dota_hero_vengefulspirit", () => {
            print("[PRECACHE] Vengeful Spirit done");
        }, -1);

        PrecacheUnitByNameAsync("npc_dota_hero_skywrath_mage", () => {
            print("[PRECACHE] Skywrath Mage done");
        }, -1);

        PrecacheUnitByNameAsync("npc_dota_hero_kez", () => {
            print("[PRECACHE] Kez done");
        }, -1);

        this.pickupManager = new PickupManager(
            () => this.activePlayerHero,
            (hero, amount) => this.addExperience(hero, amount),
            () => this.isRunPausedForChoice(),
        );
        this.enemyManager = new EnemyManager(
            () => this.activePlayerHero,
            this.pickupManager,
            () => this.isRunPausedForChoice(),
        );
        this.powerupManager = new PowerupManager(
            this.enemyManager,
            () => this.isRunPausedForChoice(),
        );

        this.heroSelection = new HeroSelection((playerId, hero, definition) => {
            print(`[RUN] Hero selection complete for player ${playerId}: ${hero.GetUnitName()}`);
            this.activePlayerHero = hero;
            this.activeHeroByPlayer.set(playerId, hero);
            this.attachMouseMovementModifier(playerId, hero);
            this.powerupManager.initializeHero(hero, definition);
            this.syncHeroXpHud(hero);

            this.heroChosen = true;
            this.tryStartRun();
        });

        this.heroSelection.start();

        CustomGameEventManager.RegisterListener("survivors_mouse_world_position", (_, event) => {
            this.onMouseWorldPosition(event as any);
        });

        CustomGameEventManager.RegisterListener("survivors_select_powerup", (_, event) => {
            this.onPowerupSelected(event as any);
        });

        ListenToGameEvent("game_rules_state_change", () => this.onGameRulesStateChange(), undefined);
        ListenToGameEvent("npc_spawned", event => this.onNPCSpawned(event), undefined);
        ListenToGameEvent("entity_killed", event => this.onEntityKilled(event), undefined);
        ListenToGameEvent("player_connect_full", () => print("Player connected full"), undefined);

        const mode = GameRules.GetGameModeEntity();
        mode.SetThink("globalThink", this, "GlobalThink", 1.0);

        // Timers.CreateTimer(2.0, () => {
        //     print("=== DELAYED ENTITY INSPECTION ===");
        //     this.inspectSurvivorsEntities();
        // });

        print("Bootstrap complete");
    }

    private patchRequiredDotaEntities() {
        if (!Entities.FindByClassname(undefined, "ent_dota_game_events")) {
            print("Creating ent_dota_game_events");

            SpawnEntityFromTableSynchronous("ent_dota_game_events", {
                targetname: "custom_ent_dota_game_events",
                origin: "0 0 600",
            });
        }

        for (let i = 1; i <= 5; i++) {
            if (!Entities.FindByName(undefined, `custom_goodguys_start_${i}`)) {
                SpawnEntityFromTableSynchronous("info_player_start_goodguys", {
                    targetname: `custom_goodguys_start_${i}`,
                    origin: `${-256 + i * 64} 0 600`,
                    angles: "0 0 0",
                });
            }

            if (!Entities.FindByName(undefined, `custom_badguys_start_${i}`)) {
                SpawnEntityFromTableSynchronous("info_player_start_badguys", {
                    targetname: `custom_badguys_start_${i}`,
                    origin: `${256 + i * 64} 0 600`,
                    angles: "0 180 0",
                });
            }
        }
    }

    private setupGameRules() {
        GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.GOODGUYS, 1);
        GameRules.SetCustomGameTeamMaxPlayers(DotaTeam.BADGUYS, 0);

        GameRules.SetCustomGameSetupAutoLaunchDelay(0);
        GameRules.SetHeroSelectionTime(0);
        GameRules.SetStrategyTime(0);
        GameRules.SetShowcaseTime(0);
        GameRules.SetPreGameTime(0);
        GameRules.SetPostGameTime(10);

        GameRules.SetSameHeroSelectionEnabled(true);
        GameRules.SetUseUniversalShopMode(true);

        const mode = GameRules.GetGameModeEntity();
        
        // ADD THIS LINE: This is the silver bullet that skips the hero pick screen.
        mode.SetCustomGameForceHero("npc_dota_hero_wisp");

        mode.SetAnnouncerDisabled(true);
        mode.SetCameraSmoothCountOverride(1);
        mode.SetCameraZRange(0, 5000);
        mode.SetBuybackEnabled(false);
        mode.SetStashPurchasingDisabled(true);
        mode.SetUseCustomHeroLevels(false);
        GameRules.SetTimeOfDay(0.5);
         mode.SetDaynightCycleDisabled(true);
        mode.SetFogOfWarDisabled(true);
        mode.SetUnseenFogOfWarEnabled(false);
        mode.SetLoseGoldOnDeath(false);
        mode.SetRecommendedItemsDisabled(true);

        print("GameRules configured for instant spawn");
    }

    private onGameRulesStateChange() {
        const state = GameRules.State_Get();

        if (state !== this.lastState) {
            this.lastState = state;
            print(`GameRules state changed: ${this.stateName(state)} ${state}`);
        }

        if (state === GameState.GAME_IN_PROGRESS) {
            this.engineReady = true;
            print("[RUN] Engine ready. Waiting for hero selection.");
            this.tryStartRun();
        }
    }

    private onNPCSpawned(event: NpcSpawnedEvent) {
        const unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC | undefined;
        if (!unit) return;
        if (!unit.IsRealHero()) return;

        const hero = unit as CDOTA_BaseNPC_Hero;
        const playerId = hero.GetPlayerOwnerID();

        const selected = this.heroSelection?.getSelectedHero(playerId);

        /**
         * If no custom hero has been selected yet, this is the forced dummy hero.
         * Hide/freeze it so the player never feels like Io is part of the real run.
         */
        if (!selected) {
            if (!(hero as any).__survivors_dummy_hidden) {
                (hero as any).__survivors_dummy_hidden = true;

                // CHANGE THIS: Put the dummy hero at the arena spawn so the camera looks at the map!
                const spawn = Entities.FindByName(undefined, "player_spawn");
                const holdingPos = spawn ? spawn.GetAbsOrigin() : Vector(8496, -11328, 594);
                
                hero.SetAbsOrigin(holdingPos);
                FindClearSpaceForUnit(hero, holdingPos, true);

                hero.AddNoDraw();
                hero.AddNewModifier(hero, undefined, "modifier_invulnerable", {});
                hero.AddNewModifier(hero, undefined, "modifier_stunned", {});
                hero.SetGold(0, false);
                hero.SetAbilityPoints(0);

                print(`[HERO SELECT] Dummy hero placed at arena center: ${hero.GetUnitName()}`);
            }
            return;
        }

        /**
         * If a selected hero exists but the currently spawned hero is not the selected one,
         * replace it. This handles edge cases where the forced hero spawns after selection.
         */
        if (hero.GetHeroID() !== selected.dotaHeroId) {
            print(`[HERO SELECT] Spawned hero ${hero.GetUnitName()} does not match selected ${selected.dotaHeroId}`);
            print("[HERO SELECT] Replacing spawned hero on next tick");

            Timers.CreateTimer(0.1, () => {
                this.heroSelection.replacePlayerHero(playerId, selected);
            });

            return;
        }

        /**
         * If the correct hero spawned naturally or through replacement,
         * initialize it exactly once.
         */
        this.heroSelection.initializeHero(hero, selected);
    }

    // Inside src/vscripts/survivors/EnemyManager.ts

private onEntityKilled(event: EntityKilledEvent) {
    const killed = EntIndexToHScript(event.entindex_killed) as CDOTA_BaseNPC | undefined;
    if (!killed || killed.IsNull()) return;

    if ((killed as any).__survivorsEnemyKey) {
        // ADD THIS: Check health just before they die to see if it's 0
        if (killed.GetHealth() <= 0) {
            print(`[DEBUG] Enemy ${killed.GetUnitName()} died at position ${tostring(killed.GetAbsOrigin())}`);
            // Check for death damage
            print(`[DEBUG] Damage Flags: ${event.damagebits}`);
        }
        
        this.killCount++;
        this.enemyManager.handleEnemyKilled(killed);
    }
}

    public globalThink(): number {
        if (!Entities.FindByClassname(undefined, "ent_dota_game_events")) {
            print("WARNING: ent_dota_game_events missing, recreating");

            SpawnEntityFromTableSynchronous("ent_dota_game_events", {
                targetname: "custom_ent_dota_game_events",
                origin: "0 0 600",
            });
        }

        return 1.0;
    }

    private startSurvivorsMode() {
        print("=== GAME IN PROGRESS: START SURVIVORS MODE ===");
        this.pickupManager.start();
        this.enemyManager.start(this.runStartTime);
    }

    private attachMouseMovementModifier(playerId: PlayerID, hero: CDOTA_BaseNPC_Hero) {
        let modifier = hero.FindModifierByName("modifier_survivors_mouse_movement") as SurvivorsMouseMovementModifier | undefined;
        if (!modifier) {
            modifier = hero.AddNewModifier(hero, undefined, "modifier_survivors_mouse_movement", {
                speed: this.survivorMoveSpeed,
                stopDistance: this.survivorStopDistance,
            }) as SurvivorsMouseMovementModifier | undefined;
        }

        if (!modifier) {
            print(`[MOVEMENT] Failed to attach mouse movement modifier for player ${playerId}`);
            return;
        }

        modifier.SetMouseTarget?.(hero.GetAbsOrigin());
        modifier.SetMovementSpeed?.(this.survivorMoveSpeed);
        this.mouseMovementModifierByPlayer.set(playerId, modifier);

        print(`[MOVEMENT] Attached mouse movement modifier for player ${playerId}`);
    }

    private onMouseWorldPosition(event: {
        PlayerID?: PlayerID;
        playerID?: PlayerID;
        x?: number;
        y?: number;
        z?: number;
    }) {
        const playerId = event.PlayerID ?? event.playerID;
        if (playerId === undefined) return;
        if (event.x === undefined || event.y === undefined || event.z === undefined) return;

        const hero = this.activeHeroByPlayer.get(playerId);
        if (!hero || hero.IsNull() || !hero.IsAlive()) return;

        let modifier = this.mouseMovementModifierByPlayer.get(playerId);
        if (!modifier || modifier.IsNull?.()) {
            this.attachMouseMovementModifier(playerId, hero);
            modifier = this.mouseMovementModifierByPlayer.get(playerId);
        }

        modifier?.SetMouseTarget?.(Vector(event.x, event.y, event.z));
    }

    public isRunPausedForChoice() {
        return this.isChoosingPowerup;
    }

    private syncHeroXpHud(hero: CDOTA_BaseNPC_Hero) {
        const player = PlayerResource.GetPlayer(hero.GetPlayerOwnerID());
        if (!player) return;

        const level = ((hero as any).__survivorsLevel ?? 1) as number;
        const xp = ((hero as any).__survivorsXp ?? 0) as number;

        CustomGameEventManager.Send_ServerToPlayer(player, "survivors_xp_changed", {
            xp,
            level,
            requiredXp: this.levelManager.getXpRequiredForLevel(level),
        });
    }

    private syncOverheadHeroLevel(hero: CDOTA_BaseNPC_Hero, survivorsLevel: number) {
        while (hero.GetLevel() < survivorsLevel) {
            hero.HeroLevelUp(false);
        }

        hero.SetAbilityPoints(0);
    }

    private addExperience(hero: CDOTA_BaseNPC_Hero, amount: number) {
        const playerId = hero.GetPlayerOwnerID();
        const player = PlayerResource.GetPlayer(playerId);
        if (!player) return;

        let xp = ((hero as any).__survivorsXp ?? 0) as number;
        let level = ((hero as any).__survivorsLevel ?? 1) as number;

        xp += amount;

        print(`[XP] Gained ${amount}. XP=${xp}, Level=${level}`);

        let leveledUp = false;

        while (xp >= this.levelManager.getXpRequiredForLevel(level)) {
            xp -= this.levelManager.getXpRequiredForLevel(level);
            level++;
            leveledUp = true;
            print(`[LEVEL] Player reached level ${level}`);
        }

        (hero as any).__survivorsXp = xp;
        (hero as any).__survivorsLevel = level;
        this.syncOverheadHeroLevel(hero, level);

        CustomGameEventManager.Send_ServerToPlayer(player, "survivors_xp_changed", {
            xp,
            level,
            requiredXp: this.levelManager.getXpRequiredForLevel(level),
        });

        if (leveledUp) {
            this.showLevelUpChoices(hero, level);
        }
    }

    private getPowerupChoice(key: keyof typeof SURVIVORS_POWERUPS, currentLevel = 0) {
        const def = SURVIVORS_POWERUPS[key];
        return {
            powerUpId: def.powerUpId,
            key: def.key,
            image: def.image,
            locAbilityName: def.locAbilityName,
            locAbilityDesc: def.locAbilityDesc,
            isNew: currentLevel === 0,
            currentLevel,
        };
    }

    private showLevelUpChoices(hero: CDOTA_BaseNPC_Hero, level: number) {
        const player = PlayerResource.GetPlayer(hero.GetPlayerOwnerID());
        if (!player) return;

        this.isChoosingPowerup = true;

        // Automatically fetch 3 valid choices that aren't max-level!
        const choices = this.powerupManager.generateLevelUpChoices(hero, 3);

        print(`[LEVEL] Showing upgrade choices for level ${level}`);

        CustomGameEventManager.Send_ServerToPlayer(player, "survivors_level_up_choices", {
            level,
            choices,
        });
    }

    private onPowerupSelected(event: { PlayerID?: PlayerID; powerUpId?: number }) {
        const playerId = event.PlayerID;
        const powerUpId = event.powerUpId;

        if (playerId === undefined || powerUpId === undefined) return;

        print(`[LEVEL] Player ${playerId} selected powerup ${powerUpId}`);
        
        // Add or upgrade it in the manager!
        const hero = this.activeHeroByPlayer.get(playerId);
        if (hero) {
            this.powerupManager.addOrUpgradePowerup(hero, powerUpId);
        }

        this.isChoosingPowerup = false;
    }

    private startHudThink() {
        Timers.CreateTimer(() => {
            this.sendHudUpdate();
            return 0.2;
        });
    }

    private sendHudUpdate() {
        const hero = this.activePlayerHero;
        if (!hero || hero.IsNull()) return;

        const player = PlayerResource.GetPlayer(hero.GetPlayerOwnerID());
        if (!player) return;

        const level = ((hero as any).__survivorsLevel ?? 1) as number;
        const maxHealth = hero.GetMaxHealth();
        const health = hero.GetHealth();
        const payload = {
            timeElapsed: math.floor(GameRules.GetGameTime() - this.runStartTime),
            gold: this.goldCollected,
            kills: this.killCount,
            health,
            maxHealth,
            xp: ((hero as any).__survivorsXp ?? 0) as number,
            level,
            requiredXp: this.levelManager.getXpRequiredForLevel(level),
        };

        CustomGameEventManager.Send_ServerToPlayer<typeof payload>(player, "survivors_hud_update", payload);
    }

    private tryStartRun() {
        if (this.runStarted) return;
        if (!this.engineReady) return;
        if (!this.heroChosen) return;

        this.runStarted = true;

        print("[RUN] Starting Survivors mode after hero selection");

        this.runStartTime = GameRules.GetGameTime();
        this.startHudThink();
        this.startSurvivorsMode();
    }

    private spawnTestEnemy() {
        print("Attempting test enemy spawn");

        let spawnPos = Vector(8496, -11328, 594);

        const point = this.findFirstExistingName([
            "item_drop_1",
            "[PR#]item_drop_1",
            "survivors_item_drop_1",
        ]);

        if (point) {
            spawnPos = point.GetAbsOrigin();
            print(`Using item_drop_1 point: ${tostring(spawnPos)}`);
        } else {
            print(`No item_drop_1 entity found; using manual coordinate: ${tostring(spawnPos)}`);
        }

        const enemy = CreateUnitByName(
            "npc_dota_creep_badguys_melee",
            spawnPos,
            true,
            undefined,
            undefined,
            DotaTeam.BADGUYS,
        );

        if (enemy) {
            print(`Spawned test enemy: ${enemy.GetUnitName()} ${tostring(enemy.GetAbsOrigin())}`);
        } else {
            print("FAILED to spawn test enemy");
        }
    }

    private inspectSurvivorsEntities() {
        print("=== SURVIVORS ENTITY CHECK ===");

        const names = [
            "item_drop_1",
            "item_drop_2",
            "item_drop_3",
            "[PR#]item_drop_1",
            "[PR#]item_drop_2",
            "[PR#]item_drop_3",

            "player_spawn",
            "hero_spawn",
            "survivors_camera",
            "hero_camera",
            "arena_center",

            "destructible_spawn_vase",
            "destructible_spawn_vase_boss",
        ];

        for (const name of names) {
            this.printEntitiesByName(name);
        }

        this.printClassCount("info_target");
        this.printClassCount("point_camera");
        this.printClassCount("prop_dynamic");
        this.printClassCount("info_particle_system");
    }

    private printEntitiesByName(name: string) {
        const ents = Entities.FindAllByName(name);
        print(`${name} count: ${ents.length}`);

        for (const ent of ents) {
            print(`  ${ent.GetClassname()} ${ent.GetName()} ${tostring(ent.GetAbsOrigin())}`);
        }
    }

    private printClassCount(classname: string) {
        let count = 0;
        let ent = Entities.FindByClassname(undefined, classname);

        while (ent) {
            count++;

            if (count <= 20) {
                print(`CLASS ${classname} ${count} name=${ent.GetName()} pos=${tostring(ent.GetAbsOrigin())}`);
            }

            ent = Entities.FindByClassname(ent, classname);
        }

        print(`Total class ${classname} = ${count}`);
    }

    private findFirstExistingName(names: string[]): CBaseEntity | undefined {
        for (const name of names) {
            const ent = Entities.FindByName(undefined, name);
            if (ent) return ent;
        }

        return undefined;
    }

    private stateName(state: GameState): string {
        const names: Record<number, string> = {
            [GameState.INIT]: "INIT",
            [GameState.WAIT_FOR_PLAYERS_TO_LOAD]: "WAIT_FOR_PLAYERS_TO_LOAD",
            [GameState.CUSTOM_GAME_SETUP]: "CUSTOM_GAME_SETUP",
            [GameState.HERO_SELECTION]: "HERO_SELECTION",
            [GameState.STRATEGY_TIME]: "STRATEGY_TIME",
            [GameState.TEAM_SHOWCASE]: "TEAM_SHOWCASE",
            [GameState.WAIT_FOR_MAP_TO_LOAD]: "WAIT_FOR_MAP_TO_LOAD",
            [GameState.PRE_GAME]: "PRE_GAME",
            [GameState.GAME_IN_PROGRESS]: "GAME_IN_PROGRESS",
            [GameState.POST_GAME]: "POST_GAME",
            [GameState.DISCONNECT]: "DISCONNECT",
        };

        return names[state] ?? `UNKNOWN_${state}`;
    }
}