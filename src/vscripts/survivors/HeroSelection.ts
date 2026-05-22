import { SURVIVORS_HEROES } from "./SurvivorsHeroes";
import { SurvivorsHeroDefinition } from "./SurvivorsInterface";

export type SurvivorsHeroKey = keyof typeof SURVIVORS_HEROES;

const HERO_ID_TO_NAME: Record<number, string> = {
    20: "npc_dota_hero_vengefulspirit",
    101: "npc_dota_hero_skywrath_mage",
    145: "npc_dota_hero_kez"
};

export function isSurvivorsHeroKey(key: string): key is SurvivorsHeroKey {
    return key in SURVIVORS_HEROES;
}

export class HeroSelection {
    private selectedHeroes = new Map<PlayerID, SurvivorsHeroDefinition>();

    constructor(
        private onHeroInitialized?: (playerId: PlayerID, hero: CDOTA_BaseNPC_Hero, definition: SurvivorsHeroDefinition) => void,
    ) {}

    public start() {
        ListenToGameEvent("player_chat", event => {
            const text = event.text ?? "";
            const playerId = event.playerid as PlayerID | undefined;

            if (playerId === undefined) return;

            if (text.indexOf("-hero ") === 0) {
                const heroKey = text.replace("-hero ", "").trim();

                if (isSurvivorsHeroKey(heroKey)) {
                    this.selectHero(playerId, heroKey);
                } else {
                    print(`[HERO SELECT] Unknown hero key: ${heroKey}`);
                    print(`[HERO SELECT] Use: -hero shen, -hero dragonus, or -hero kez`);
                }
            }
        }, undefined);

        CustomGameEventManager.RegisterListener("survivors_select_hero", (_, data) => {
            const payload = data as { PlayerID?: PlayerID; player_id?: PlayerID; heroKey?: string };
            const playerId = payload.PlayerID ?? payload.player_id;
            const heroKey = tostring(payload.heroKey ?? "");

            if (playerId !== undefined && isSurvivorsHeroKey(heroKey)) {
                this.selectHero(playerId, heroKey);
            } else {
                print(`[HERO SELECT] Invalid UI hero key or missing PlayerID: ${heroKey} / ${playerId}`);
            }
        });

        print("[HERO SELECT] Started");
    }

    public selectHero(playerId: PlayerID, heroKey: SurvivorsHeroKey) {
        const definition = SURVIVORS_HEROES[heroKey];
        this.selectedHeroes.set(playerId, definition);

        print(`[HERO SELECT] Player ${playerId} selected ${heroKey} -> ${definition.dotaHeroId}`);

        this.replacePlayerHero(playerId, definition);
    }

    public getSelectedHero(playerId: PlayerID): SurvivorsHeroDefinition | undefined {
        return this.selectedHeroes.get(playerId);
    }

    public replacePlayerHero(playerId: PlayerID, definition: SurvivorsHeroDefinition) {
        const oldHero = PlayerResource.GetSelectedHeroEntity(playerId);

        if (!oldHero) {
            print(`[HERO SELECT] No current hero yet for player ${playerId}; selection stored for later`);
            return;
        }

        if (oldHero.GetHeroID() === definition.dotaHeroId) {
            print(`[HERO SELECT] Player already has hero ID ${definition.dotaHeroId}`);
            this.initializeHero(oldHero as CDOTA_BaseNPC_Hero, definition);
            return;
        }

        print(`[HERO SELECT] Replacing ${oldHero.GetUnitName()} with ID ${definition.dotaHeroId}`);
        const heroName = HERO_ID_TO_NAME[definition.dotaHeroId] || "npc_dota_hero_wisp";
        const newHero = PlayerResource.ReplaceHeroWith(
            playerId,
            heroName,
            0,
            0,
        ) as CDOTA_BaseNPC_Hero | undefined;

        if (!newHero) {
            print(`[HERO SELECT] FAILED to replace hero for player ${playerId} with ${heroName}`);
            return;
        }

        /**
         * Do not initialize here.
         * Let npc_spawned / GameMode.onNPCSpawned initialize the replacement hero.
         * This prevents duplicate powerups, duplicate modifiers, and duplicate logs.
         */
        print(`[HERO SELECT] Replacement requested: ${heroName}`);
    }

    public initializeHero(hero: CDOTA_BaseNPC_Hero, definition: SurvivorsHeroDefinition) {
        if ((hero as any).__survivorsHeroInitialized === true) {
            print(`[HERO SELECT] ${definition.key} already initialized, skipping`);
            return;
        }

        (hero as any).__survivorsHeroInitialized = true;
        hero.RemoveNoDraw();

        const spawn = Entities.FindByName(undefined, "player_spawn");
        const spawnPos = spawn ? spawn.GetAbsOrigin() : Vector(-144, 3093, 513);

        hero.SetAbsOrigin(spawnPos);
        FindClearSpaceForUnit(hero, spawnPos, true);

        hero.SetGold(0, false);
        hero.SetAbilityPoints(0);

        this.applyBaseAttributes(hero, definition);
        this.recordPowerups(hero, definition);

        print(`[HERO SELECT] Initialized ${definition.key}`);
        print(`[HERO SELECT] Starting powerups: ${(definition.startingPowerUps ?? []).join(", ")}`);
        print(`[HERO SELECT] Innate powerups: ${(definition.innatePowerUps ?? []).join(", ")}`);

        // REMOVED CustomGameEventManager HERE

        const playerId = hero.GetPlayerOwnerID();
        this.onHeroInitialized?.(playerId, hero, definition);
    }

    private applyBaseAttributes(hero: CDOTA_BaseNPC_Hero, definition: SurvivorsHeroDefinition) {
        if (!definition.baseAttributes) return;
        for (const attr of definition.baseAttributes) {
            if (attr.type === "MovementSpeed") {
                hero.SetBaseMoveSpeed(attr.value);
            }

            if (attr.type === "MaxHP") {
                hero.SetBaseMaxHealth(attr.value);
                hero.SetMaxHealth(attr.value);
                hero.SetHealth(attr.value);
            }
        }
    }

    private recordPowerups(hero: CDOTA_BaseNPC_Hero, definition: SurvivorsHeroDefinition) {
        (hero as any).__survivorsHeroKey = definition.key;
        (hero as any).__survivorsStartingPowerups = definition.startingPowerUps || [];
        (hero as any).__survivorsInnatePowerups = definition.innatePowerUps || [];
    }
}