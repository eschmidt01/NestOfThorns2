import { SURVIVORS_POWERUPS } from "./SurvivorsPowerUps";
import { SurvivorsPowerUpDefinition, SurvivorsHeroDefinition } from "./SurvivorsInterface";
import { EnemyManager } from "./EnemyManager";

type PowerupCategory = "active" | "passive" | "innate";
type UpgradeKind = "authored" | "minor" | "scepter" | "shard";
type LevelUpChoiceKind = "new_powerup" | "upgrade" | "minor_upgrade" | "evolution" | "scepter" | "shard";
type DamageKind = "physical" | "magical" | "pure";

type AttributeName = string;

type AttributeValue = {
    type: AttributeName;
    value: number;
};

type UpgradeChoiceDefinition = {
    rarity?: string;
    upgradeAttributes?: AttributeValue[];
    globalUpgradeAttributes?: AttributeValue[];
};

type ChosenUpgrade = {
    kind: UpgradeKind;
    index: number;
    localAttributes: AttributeValue[];
    globalAttributes: AttributeValue[];
};

type ActivePowerupRuntime = {
    hero: CDOTA_BaseNPC_Hero;
    powerUpId: number;
    definition: SurvivorsPowerUpDefinition;
    running: boolean;
    nextFireTime: number;
};

type HeroInventory = {
    active: number[];
    passive: number[];
    innate: number[];
    levels: Map<number, number>;
    upgrades: Map<number, ChosenUpgrade[]>;
    runtimes: Map<number, ActivePowerupRuntime>;
    hasScepter: Set<number>;
    hasShard: Set<number>;
    activeSlotCap: number;
    passiveSlotCap: number;
    globalAttributes: Map<AttributeName, number>;
};

type SurvivorsLevelUpChoice = {
    choiceId: string;
    kind: LevelUpChoiceKind;
    powerUpId: number;
    key: string;
    image?: string;
    locAbilityName?: string;
    locAbilityDesc?: string;
    locScepterAbilityDesc?: string;
    isNew: boolean;
    currentLevel: number;
    nextLevel: number;
    maxLevel: number;
    upgradeKind?: UpgradeKind;
    upgradeIndex?: number;
    rarity?: string;
    recipeItems?: number[];
};

type ManualProjectile = {
    id: number;
    source: CDOTA_BaseNPC_Hero;
    powerUpId: number;
    definition: SurvivorsPowerUpDefinition;
    position: Vector;
    velocity: Vector;
    target?: CDOTA_BaseNPC;
    homing: boolean;
    speed: number;
    radius: number;
    range: number;
    damage: number;
    damageKind: DamageKind;
    pierceRemaining: number;
    bouncesRemaining: number;
    maxLifetime: number;
    createdAt: number;
    lastHitAt: Map<EntityIndex, number>;
    hitTargets: Set<EntityIndex>;
    particle?: ParticleID;
    hitParticle?: string;
    impactParticle?: string;
    impactSound?: string;
};

type TimedMine = {
    id: number;
    source: CDOTA_BaseNPC_Hero;
    powerUpId: number;
    definition: SurvivorsPowerUpDefinition;
    position: Vector;
    armedAt: number;
    expiresAt: number;
    radius: number;
    damage: number;
    damageKind: DamageKind;
    particle?: ParticleID;
};

type UnitStatus = {
    incomingDamageAmplification?: number;
    incomingDamageAmplificationExpires?: number;
    vulnerabilityDamagePercent?: number;
    vulnerabilityExpires?: number;
    vulnerabilityStunOnHitDuration?: number;
    magicWeakensPhysicalPercent?: number;
    magicWeakensPhysicalExpires?: number;
};

const ATTR = {
    DamagePhysical: "k_eSurvivorsAttribute_Damage_Physical",
    DamageMagical: "k_eSurvivorsAttribute_Damage_Magical",
    Cooldown: "k_eSurvivorsAttribute_Cooldown",
    CooldownReduction: "k_eSurvivorsAttribute_CooldownReductionMultiplier",
    TargetCount: "k_eSurvivorsAttribute_TargetCount",
    Range: "k_eSurvivorsAttribute_Range",
    Radius: "k_eSurvivorsAttribute_Radius",
    Width: "k_eSurvivorsAttribute_Width",
    Length: "k_eSurvivorsAttribute_Length",
    Directions: "k_eSurvivorsAttribute_Directions",
    ProjectileSpeed: "k_eSurvivorsAttribute_ProjectileSpeed",
    ProjectileRadius: "k_eSurvivorsAttribute_ProjectileRadius",
    ProjectileBounces: "k_eSurvivorsAttribute_ProjectileBounces",
    ProjectileHitCount: "k_eSurvivorsAttribute_ProjectileHitCount",
    ProjectileAttack: "k_eSurvivorsAttribute_ProjectileAttack",
    ProjectileAttackInterval: "k_eSurvivorsAttribute_ProjectileAttackInterval",
    ProjectileBonusMagicDamage: "k_eSurvivorsAttribute_Projectile_BonusMagicDamage",
    ProjectileDamagePercent: "k_eSurvivorsAttribute_ProjectileDamagePercent",
    KnockbackDistance: "k_eSurvivorsAttribute_KnockbackDistance",
    KnockbackDistanceMultiplier: "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
    AoEIncrease: "k_eSurvivorsAttribute_AoEIncrease",
    DamageTicks: "k_eSurvivorsAttribute_DamageTicks",
    TimeBetweenTicks: "k_eSurvivorsAttribute_TimeBetweenTicks",
    InitialTickDelay: "k_eSurvivorsAttribute_InitialTickDelay",
    Duration: "k_eSurvivorsAttribute_Duration",
    DurationEffect: "k_eSurvivorsAttribute_DurationEffect",
    DurationExtension: "k_eSurvivorsAttribute_DurationExtension",
    LifeTime: "k_eSurvivorsAttribute_LifeTime",
    ArmingTime: "k_eSurvivorsAttribute_ArmingTime",
    TriggerTime: "k_eSurvivorsAttribute_TriggerTime",
    StunDuration: "k_eSurvivorsAttribute_StunDuration",
    FreezeDuration: "k_eSurvivorsAttribute_FreezeDuration",
    FreezeStrength: "k_eSurvivorsAttribute_FreezeStrength",
    FreezeSplashRadius: "k_eSurvivorsAttribute_FreezeSplashRadius",
    SlowDuration: "k_eSurvivorsAttribute_SlowDuration",
    SlowStrength: "k_eSurvivorsAttribute_SlowStrength",
    ModifierDamagePerTick: "k_eSurvivorsAttribute_ModifierDamagePerTick",
    IncomingDamageAmplification: "k_eSurvivorsAttribute_IncomingDamageAmplification",
    IncomingDamageAmplificationDuration: "k_eSurvivorsAttribute_IncomingDamageAmplificationDuration",
    MovementSpeed: "k_eSurvivorsAttribute_MovementSpeed",
    MaxHP: "k_eSurvivorsAttribute_MaxHP",
    HPRegen: "k_eSurvivorsAttribute_HPRegen",
    Armor: "k_eSurvivorsAttribute_Armor",
    DamageReflection: "k_eSurvivorsAttribute_DamageReflection",
    ExpMultiplier: "k_eSurvivorsAttribute_ExpMultiplier",
    PickupRadius: "k_eSurvivorsAttribute_PickupRadius",
    ActiveAbilitySlots: "k_eSurvivorsAttribute_ActiveAbilitySlots",
    BonusPhysicalDamage: "k_eSurvivorsAttribute_BonusPhysicalDamage",
    MagicalDamageMultiplier: "k_eSurvivorsAttribute_DamageMultiplier_Magical",
    CritPhysicalChance: "k_eSurvivorsAttribute_CriticalStrike_Physical_Chance",
    CritPhysicalMultiplier: "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier",
    CritProjectileChance: "k_eSurvivorsAttribute_CriticalStrike_Projectile_Chance",
    CritProjectileMultiplier: "k_eSurvivorsAttribute_CriticalStrike_Projectile_DamageMultiplier",
    StampedeMovementSpeed: "k_eSurvivorsAttribute_StampedeMovementSpeed",
    VulnerabilityDamagePercent: "k_eSurvivorsAttribute_VulnerabilityDamagePercent",
    VulnerabilityDuration: "k_eSurvivorsAttribute_VulnerabilityDuration",
    VulnerabilityStunOnHitDuration: "k_eSurvivorsAttribute_VulnerabilityStunOnHitDuration",
    MagicWeakensPhysicalPercent: "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Percentage",
    MagicWeakensPhysicalDuration: "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Duration",
};

export class PowerupManager {
    private powerupsById = new Map<number, SurvivorsPowerUpDefinition>();
    private recipeIds: number[] = [];
    private inventories = new Map<EntityIndex, HeroInventory>();

    private nextProjectileId = 1;
    private manualProjectiles = new Map<number, ManualProjectile>();
    private projectileThinkStarted = false;

    private nextMineId = 1;
    private mines = new Map<number, TimedMine>();
    private mineThinkStarted = false;

    private unitStatuses = new Map<EntityIndex, UnitStatus>();

    constructor(
        private enemyManager: EnemyManager,
        private isPaused?: () => boolean,
    ) {
        for (const key in SURVIVORS_POWERUPS) {
            const def = SURVIVORS_POWERUPS[key];
            this.powerupsById.set(def.powerUpId, def);
            if (((def as any).recipeItems ?? []).length > 0) {
                this.recipeIds.push(def.powerUpId);
            }
        }
    }

    public initializeHero(hero: CDOTA_BaseNPC_Hero, definition: SurvivorsHeroDefinition) {
        const base = hero as any;
        base.__survivorsBaseMoveSpeed = hero.GetBaseMoveSpeed();
        base.__survivorsBaseMaxHealth = hero.GetMaxHealth();
        base.__survivorsBaseHealthRegen = (hero as any).GetBaseHealthRegen ? (hero as any).GetBaseHealthRegen() : 0;
        base.__survivorsBaseArmor = hero.GetPhysicalArmorBaseValue();

        const inv: HeroInventory = {
            active: [],
            passive: [],
            innate: [],
            levels: new Map<number, number>(),
            upgrades: new Map<number, ChosenUpgrade[]>(),
            runtimes: new Map<number, ActivePowerupRuntime>(),
            hasScepter: new Set<number>(),
            hasShard: new Set<number>(),
            activeSlotCap: 6,
            passiveSlotCap: 6,
            globalAttributes: new Map<AttributeName, number>(),
        };

        this.inventories.set(hero.GetEntityIndex(), inv);

        for (const id of definition.innatePowerUps ?? []) {
            this.addOrUpgradePowerup(hero, id, true);
        }

        for (const id of definition.startingPowerUps ?? []) {
            this.addOrUpgradePowerup(hero, id, false);
        }

        this.applyPassiveStats(hero);
        this.syncInventoryToUI(hero);
    }

    public generateLevelUpChoices(hero: CDOTA_BaseNPC_Hero, count: number): SurvivorsLevelUpChoice[] {
        const inv = this.getInventory(hero);
        if (!inv) return [];

        const choices: SurvivorsLevelUpChoice[] = [];

        // Evolutions are intentionally considered first. They are only offered when the components exist.
        for (const recipeId of this.recipeIds) {
            const recipe = this.powerupsById.get(recipeId);
            if (!recipe) continue;
            if (inv.levels.get(recipeId) ?? 0) continue;
            if (!this.canCraftRecipe(hero, recipeId, true)) continue;

            choices.push({
                choiceId: `evolution:${recipeId}`,
                kind: "evolution",
                powerUpId: recipeId,
                key: recipe.key,
                image: recipe.image,
                locAbilityName: recipe.locAbilityName,
                locAbilityDesc: recipe.locAbilityDesc,
                isNew: true,
                currentLevel: 0,
                nextLevel: 1,
                maxLevel: this.getMaxLevel(recipe),
                recipeItems: ((recipe as any).recipeItems ?? []) as number[],
            });
        }

        for (const [id, def] of this.powerupsById) {
            if ((def as any).rollable === false) continue;
            if ((def as any).isGold) continue;

            const category = this.getPowerupCategory(def);
            const currentLevel = inv.levels.get(id) ?? 0;
            const maxLevel = this.getMaxLevel(def);
            const recipeItems = ((def as any).recipeItems ?? []) as number[];

            // Recipe items should enter through the evolution path, not normal random rolls.
            if (recipeItems.length > 0 && currentLevel === 0) continue;
            if (currentLevel >= maxLevel) continue;
            if (category === "innate" && currentLevel === 0) continue;

            if (currentLevel === 0) {
                if (category === "active" && inv.active.length >= inv.activeSlotCap) continue;
                if (category === "passive" && inv.passive.length >= inv.passiveSlotCap) continue;

                choices.push({
                    choiceId: `new:${id}`,
                    kind: "new_powerup",
                    powerUpId: id,
                    key: def.key,
                    image: def.image,
                    locAbilityName: def.locAbilityName,
                    locAbilityDesc: def.locAbilityDesc,
                    isNew: true,
                    currentLevel,
                    nextLevel: 1,
                    maxLevel,
                });
                continue;
            }

            const authoredIndex = this.defaultAuthoredIndexForNextLevel(def, currentLevel + 1);
            const authored = this.getAuthoredUpgrade(def, authoredIndex);
            if (authored) {
                choices.push({
                    choiceId: `upgrade:${id}:authored:${authoredIndex}`,
                    kind: "upgrade",
                    powerUpId: id,
                    key: def.key,
                    image: def.image,
                    locAbilityName: def.locAbilityName,
                    locAbilityDesc: def.locAbilityDesc,
                    isNew: false,
                    currentLevel,
                    nextLevel: currentLevel + 1,
                    maxLevel,
                    upgradeKind: "authored",
                    upgradeIndex: authoredIndex,
                    rarity: authored.rarity,
                });
            }

            const minors = ((def as any).minorUpgradeChoices ?? []) as UpgradeChoiceDefinition[];
            for (let i = 0; i < minors.length; i++) {
                const minor = minors[i];
                choices.push({
                    choiceId: `upgrade:${id}:minor:${i}`,
                    kind: authored ? "minor_upgrade" : "upgrade",
                    powerUpId: id,
                    key: def.key,
                    image: def.image,
                    locAbilityName: def.locAbilityName,
                    locAbilityDesc: def.locAbilityDesc,
                    isNew: false,
                    currentLevel,
                    nextLevel: currentLevel + 1,
                    maxLevel,
                    upgradeKind: "minor",
                    upgradeIndex: i,
                    rarity: minor.rarity,
                });
            }
        }

        this.shuffle(choices);
        return choices.slice(0, count);
    }

    public selectLevelUpChoice(hero: CDOTA_BaseNPC_Hero, choice: SurvivorsLevelUpChoice | string | number) {
        if (typeof choice === "number") {
            this.addOrUpgradePowerup(hero, choice, false);
            return;
        }

        if (typeof choice === "string") {
            const parsed = this.parseChoiceId(hero, choice);
            if (parsed) this.selectLevelUpChoice(hero, parsed);
            return;
        }

        if (choice.kind === "evolution") {
            this.evolvePowerup(hero, choice.powerUpId);
            return;
        }

        if (choice.kind === "scepter") {
            this.grantScepter(hero, choice.powerUpId);
            return;
        }

        if (choice.kind === "shard") {
            this.grantShard(hero, choice.powerUpId);
            return;
        }

        this.addOrUpgradePowerup(hero, choice.powerUpId, false, choice.upgradeKind, choice.upgradeIndex);
    }

    public addOrUpgradePowerup(
        hero: CDOTA_BaseNPC_Hero,
        powerUpId: number,
        forceInnate = false,
        upgradeKind?: UpgradeKind,
        upgradeIndex?: number,
    ): boolean {
        const inv = this.getInventory(hero);
        const def = this.powerupsById.get(powerUpId);
        if (!inv || !def) return false;

        const currentLevel = inv.levels.get(powerUpId) ?? 0;
        const maxLevel = this.getMaxLevel(def);
        if (currentLevel >= maxLevel) return false;

        const category = forceInnate ? "innate" : this.getPowerupCategory(def);
        if (currentLevel === 0) {
            if (category === "active" && inv.active.length >= inv.activeSlotCap) return false;
            if (category === "passive" && inv.passive.length >= inv.passiveSlotCap) return false;

            if (category === "innate") inv.innate.push(powerUpId);
            else if (category === "passive") inv.passive.push(powerUpId);
            else inv.active.push(powerUpId);
        }

        const nextLevel = currentLevel + 1;
        inv.levels.set(powerUpId, nextLevel);

        const chosen = this.chooseUpgradeForLevel(def, nextLevel, upgradeKind, upgradeIndex);
        if (chosen) this.addChosenUpgrade(inv, powerUpId, chosen);

        if (category === "active" || category === "innate") {
            if (!inv.runtimes.get(powerUpId) && !((def as any).isPassive)) {
                const runtime: ActivePowerupRuntime = {
                    hero,
                    powerUpId,
                    definition: def,
                    running: true,
                    nextFireTime: GameRules.GetGameTime(),
                };
                inv.runtimes.set(powerUpId, runtime);
                this.startPowerupLoop(runtime);
            }
        }

        this.applyPassiveStats(hero);
        this.syncInventoryToUI(hero);
        print(`[SURVIVORS/POWERUP] ${hero.GetUnitName()} gained ${def.key} ${currentLevel} -> ${nextLevel}`);
        return true;
    }

    public canCraftRecipe(hero: CDOTA_BaseNPC_Hero, recipePowerUpId: number, requireMaxedComponents = true): boolean {
        const inv = this.getInventory(hero);
        const recipe = this.powerupsById.get(recipePowerUpId);
        if (!inv || !recipe) return false;
        const components = ((recipe as any).recipeItems ?? []) as number[];
        if (components.length === 0) return false;

        for (const componentId of components) {
            const componentLevel = inv.levels.get(componentId) ?? 0;
            if (componentLevel <= 0) return false;
            if (requireMaxedComponents) {
                const componentDef = this.powerupsById.get(componentId);
                if (!componentDef) return false;
                if (componentLevel < this.getMaxLevel(componentDef)) return false;
            }
        }

        return true;
    }

    public evolvePowerup(hero: CDOTA_BaseNPC_Hero, recipePowerUpId: number): boolean {
        const inv = this.getInventory(hero);
        const recipe = this.powerupsById.get(recipePowerUpId);
        if (!inv || !recipe) return false;
        if (!this.canCraftRecipe(hero, recipePowerUpId, true)) return false;

        const components = ((recipe as any).recipeItems ?? []) as number[];
        for (const componentId of components) {
            this.removePowerup(hero, componentId);
        }

        const didAdd = this.addOrUpgradePowerup(hero, recipePowerUpId, false);
        if (didAdd) {
            this.applyPassiveStats(hero);
            this.syncInventoryToUI(hero);
            print(`[SURVIVORS/POWERUP] Crafted evolution ${recipe.key}`);
        }
        return didAdd;
    }

    public removePowerup(hero: CDOTA_BaseNPC_Hero, powerUpId: number): boolean {
        const inv = this.getInventory(hero);
        if (!inv) return false;
        if (!inv.levels.get(powerUpId)) return false;

        inv.levels.delete(powerUpId);
        inv.upgrades.delete(powerUpId);
        inv.hasScepter.delete(powerUpId);
        inv.hasShard.delete(powerUpId);

        this.removeFromArray(inv.active, powerUpId);
        this.removeFromArray(inv.passive, powerUpId);
        this.removeFromArray(inv.innate, powerUpId);

        const runtime = inv.runtimes.get(powerUpId);
        if (runtime) runtime.running = false;
        inv.runtimes.delete(powerUpId);

        this.applyPassiveStats(hero);
        this.syncInventoryToUI(hero);
        return true;
    }

    public grantScepter(hero: CDOTA_BaseNPC_Hero, powerUpId: number): boolean {
        const inv = this.getInventory(hero);
        const def = this.powerupsById.get(powerUpId);
        if (!inv || !def || !((def as any).isScepterUpgradeable)) return false;
        inv.hasScepter.add(powerUpId);
        this.applyPassiveStats(hero);
        this.syncInventoryToUI(hero);
        return true;
    }

    public grantShard(hero: CDOTA_BaseNPC_Hero, powerUpId: number): boolean {
        const inv = this.getInventory(hero);
        const def = this.powerupsById.get(powerUpId);
        if (!inv || !def || !((def as any).isShardUpgradeable)) return false;
        inv.hasShard.add(powerUpId);
        this.applyPassiveStats(hero);
        this.syncInventoryToUI(hero);
        return true;
    }

    public getPowerupLevel(hero: CDOTA_BaseNPC_Hero, powerUpId: number): number {
        const inv = this.getInventory(hero);
        if (!inv) return 0;
        return inv.levels.get(powerUpId) ?? 0;
    }

    public getGlobalAttribute(hero: CDOTA_BaseNPC_Hero, attribute: AttributeName): number {
        const inv = this.getInventory(hero);
        if (!inv) return 0;
        return inv.globalAttributes.get(attribute) ?? 0;
    }

    // Call this from your enemy death pipeline if you want kill-scaling scepter fields to work.
    public recordPowerupKill(hero: CDOTA_BaseNPC_Hero, powerUpId: number, count = 1) {
        const state = hero as any;
        if (!state.__survivorsPowerupKills) state.__survivorsPowerupKills = new Map<number, number>();
        const map = state.__survivorsPowerupKills as Map<number, number>;
        map.set(powerUpId, (map.get(powerUpId) ?? 0) + count);
    }

    // =========================================================================
    // Passive/global stat engine
    // =========================================================================

    private applyPassiveStats(hero: CDOTA_BaseNPC_Hero) {
        const inv = this.getInventory(hero);
        if (!inv) return;

        inv.globalAttributes = new Map<AttributeName, number>();
        for (const [powerUpId, upgrades] of inv.upgrades) {
            if (!inv.levels.get(powerUpId)) continue;
            for (const upgrade of upgrades) {
                this.addAttributesToMap(inv.globalAttributes, upgrade.globalAttributes);
            }
        }

        for (const powerUpId of inv.hasScepter) {
            const def = this.powerupsById.get(powerUpId);
            const attrs = (((def as any)?.scepterUpgradeDefinition as UpgradeChoiceDefinition | undefined)?.globalUpgradeAttributes ?? []) as AttributeValue[];
            this.addAttributesToMap(inv.globalAttributes, attrs);
        }

        for (const powerUpId of inv.hasShard) {
            const def = this.powerupsById.get(powerUpId);
            const attrs = (((def as any)?.shardUpgradeDefinition as UpgradeChoiceDefinition | undefined)?.globalUpgradeAttributes ?? []) as AttributeValue[];
            this.addAttributesToMap(inv.globalAttributes, attrs);
        }

        const base = hero as any;
        const baseMS = base.__survivorsBaseMoveSpeed ?? hero.GetBaseMoveSpeed();
        const baseMaxHP = base.__survivorsBaseMaxHealth ?? hero.GetMaxHealth();
        const baseRegen = base.__survivorsBaseHealthRegen ?? 0;
        const baseArmor = base.__survivorsBaseArmor ?? hero.GetPhysicalArmorBaseValue();

        const bonusMoveSpeed = this.mapGet(inv.globalAttributes, ATTR.MovementSpeed);
        const bonusMaxHP = this.mapGet(inv.globalAttributes, ATTR.MaxHP);
        const bonusHPRegen = this.mapGet(inv.globalAttributes, ATTR.HPRegen);
        const bonusArmor = this.mapGet(inv.globalAttributes, ATTR.Armor);
        const activeSlots = Math.floor(this.mapGet(inv.globalAttributes, ATTR.ActiveAbilitySlots));

        inv.activeSlotCap = 6 + activeSlots;
        inv.passiveSlotCap = 6;

        hero.SetBaseMoveSpeed(baseMS + bonusMoveSpeed);

        const oldMax = Math.max(1, hero.GetMaxHealth());
        const oldPct = hero.GetHealth() / oldMax;
        const newMax = Math.max(1, baseMaxHP + bonusMaxHP);
        hero.SetBaseMaxHealth(newMax);
        hero.SetMaxHealth(newMax);
        hero.SetHealth(Math.max(1, Math.floor(newMax * oldPct)));

        hero.SetBaseHealthRegen(baseRegen + bonusHPRegen);
        hero.SetPhysicalArmorBaseValue(baseArmor + bonusArmor);

        base.__survivorsExpMultiplier = this.mapGet(inv.globalAttributes, ATTR.ExpMultiplier);
        base.__survivorsPickupRadius = this.mapGet(inv.globalAttributes, ATTR.PickupRadius);
        base.__survivorsDamageReflection = this.mapGet(inv.globalAttributes, ATTR.DamageReflection);
        base.__survivorsGlobalAttributes = inv.globalAttributes;
    }

    private getEffectiveAttributes(hero: CDOTA_BaseNPC_Hero, powerUpId: number): Map<AttributeName, number> {
        const inv = this.getInventory(hero);
        const def = this.powerupsById.get(powerUpId);
        const result = new Map<AttributeName, number>();
        if (!inv || !def) return result;

        if ((inv.levels.get(powerUpId) ?? 0) <= 0) return result;

        this.addAttributesToMap(result, ((def as any).baseAttributes ?? []) as AttributeValue[]);

        const upgrades = inv.upgrades.get(powerUpId) ?? [];
        for (const upgrade of upgrades) {
            this.addAttributesToMap(result, upgrade.localAttributes);
        }

        if (inv.hasScepter.has(powerUpId)) {
            const scepter = (def as any).scepterUpgradeDefinition as UpgradeChoiceDefinition | undefined;
            if (scepter) this.addAttributesToMap(result, scepter.upgradeAttributes ?? []);
        }

        if (inv.hasShard.has(powerUpId)) {
            const shard = (def as any).shardUpgradeDefinition as UpgradeChoiceDefinition | undefined;
            if (shard) this.addAttributesToMap(result, shard.upgradeAttributes ?? []);
        }

        const killsMap = (hero as any).__survivorsPowerupKills as Map<number, number> | undefined;
        const kills = killsMap ? (killsMap.get(powerUpId) ?? 0) : 0;
        const perKill = (def as any).scepterDamageIncreasePerEnemyKilled ?? 0;
        if (inv.hasScepter.has(powerUpId) && perKill > 0 && kills > 0) {
            this.mapAdd(result, ATTR.DamageMagical, kills * perKill);
            this.mapAdd(result, ATTR.DamagePhysical, kills * perKill);
        }

        return result;
    }

    private chooseUpgradeForLevel(
        def: SurvivorsPowerUpDefinition,
        nextLevel: number,
        explicitKind?: UpgradeKind,
        explicitIndex?: number,
    ): ChosenUpgrade | undefined {
        if (explicitKind === "scepter" || explicitKind === "shard") return undefined;

        let kind: UpgradeKind | undefined = explicitKind;
        let index = explicitIndex ?? -1;
        let choice: UpgradeChoiceDefinition | undefined;

        if (kind === "authored") {
            choice = this.getAuthoredUpgrade(def, index);
        } else if (kind === "minor") {
            choice = this.getMinorUpgrade(def, index);
        }

        if (!choice) {
            const authoredIndex = this.defaultAuthoredIndexForNextLevel(def, nextLevel);
            choice = this.getAuthoredUpgrade(def, authoredIndex);
            if (choice) {
                kind = "authored";
                index = authoredIndex;
            }
        }

        if (!choice) {
            choice = this.getMinorUpgrade(def, 0);
            if (choice) {
                kind = "minor";
                index = 0;
            }
        }

        if (!choice || !kind) return undefined;

        return {
            kind,
            index,
            localAttributes: choice.upgradeAttributes ?? [],
            globalAttributes: choice.globalUpgradeAttributes ?? [],
        };
    }

    private defaultAuthoredIndexForNextLevel(def: SurvivorsPowerUpDefinition, nextLevel: number): number {
        // Actives normally have baseAttributes for level 1, so authored[0] is the level 2 upgrade.
        // Pure passives like Crystalys often have no baseAttributes, so authored[0] is the acquisition payload.
        const hasBase = (((def as any).baseAttributes ?? []) as AttributeValue[]).length > 0;
        return hasBase ? nextLevel - 2 : nextLevel - 1;
    }

    private addChosenUpgrade(inv: HeroInventory, powerUpId: number, upgrade: ChosenUpgrade) {
        let list = inv.upgrades.get(powerUpId);
        if (!list) {
            list = [];
            inv.upgrades.set(powerUpId, list);
        }
        list.push(upgrade);
    }

    // =========================================================================
    // Runtime ability loop
    // =========================================================================

    private startPowerupLoop(runtime: ActivePowerupRuntime) {
        Timers.CreateTimer(0.03, () => {
            if (!runtime.running || !runtime.hero || runtime.hero.IsNull() || !runtime.hero.IsAlive()) return undefined;
            if (this.isGamePaused()) return 0.1;

            const now = GameRules.GetGameTime();
            if (now < runtime.nextFireTime) return Math.max(0.03, runtime.nextFireTime - now);

            this.firePowerup(runtime.hero, runtime.powerUpId, runtime.definition);
            runtime.nextFireTime = now + this.getCooldownSeconds(runtime.hero, runtime.powerUpId);
            return Math.max(0.03, runtime.nextFireTime - GameRules.GetGameTime());
        });
    }

    private firePowerup(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const className = (def as any).className as string;
        const key = def.key;

        if (className === "CSurvivorsPowerUpDefinition_MagicMissile" ||
            className === "CSurvivorsPowerUpDefinition_ArcaneBolt" ||
            className === "CSurvivorsPowerUpDefinition_ProjectileAttack" ||
            className === "CSurvivorsPowerUpDefinition_KnifeThrow") {
            this.fireProjectileAbility(hero, powerUpId, def);
            return;
        }

        if (className === "CSurvivorsPowerUpDefinition_InstantAttack" ||
            className === "CSurvivorsPowerUpDefinition_LagunaBlade" ||
            className === "CSurvivorsPowerUpDefinition_Frostbite" ||
            className === "CSurvivorsPowerUpDefinition_Track") {
            this.fireInstantAttack(hero, powerUpId, def);
            return;
        }

        if (className === "CSurvivorsPowerUpDefinition_LandMine") {
            this.fireLandMine(hero, powerUpId, def);
            return;
        }

        if (className === "CSurvivorsPowerUpDefinition_MortimerKisses") {
            this.fireMortimerKisses(hero, powerUpId, def);
            return;
        }

        if (className === "CSurvivorsPowerUpDefinition_Spirits") {
            this.fireSpirits(hero, powerUpId, def);
            return;
        }

        if (className === "CSurvivorsPowerUpDefinition_Stampede") {
            this.fireStampede(hero, powerUpId, def);
            return;
        }

        if (className === "CSurvivorsPowerUpDefinition_EchoStrike" ||
            className === "CSurvivorsPowerUpDefinition_Swashbuckle") {
            this.fireDirectionalArea(hero, powerUpId, def);
            return;
        }

        if (className === "CSurvivorsPowerUpDefinition_CounterHelix" ||
            className === "CSurvivorsPowerUpDefinition_AreaAttack_CircleConstant" ||
            className === "CSurvivorsPowerUpDefinition_Snotty") {
            this.fireAreaAroundHero(hero, powerUpId, def);
            return;
        }

        if (key) {
            this.fireAreaAroundHero(hero, powerUpId, def);
        }
    }

    private fireProjectileAbility(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const range = this.finalRange(hero, attrs, 1000);
        const targetCount = this.finalTargetCount(hero, attrs, 1);
        const targets = this.selectTargets(hero, def, range, targetCount);
        if (targets.length === 0 && (def as any).targeting !== "PLAYER_FACING") return;

        const speed = this.attr(attrs, ATTR.ProjectileSpeed, 900);
        const radius = this.finalRadius(hero, attrs, ATTR.ProjectileRadius, 60);
        const damageKind = this.damageKindFromAttributes(attrs);
        const damage = this.finalDamage(hero, powerUpId, attrs, damageKind, true);
        const bounces = Math.max(0, Math.floor(this.attr(attrs, ATTR.ProjectileBounces, 0)));
        const pierce = Math.max(1, 1 + Math.floor(this.attr(attrs, ATTR.ProjectileHitCount, 0)));

        if ((def as any).targeting === "PLAYER_FACING") {
            const directions = Math.max(1, Math.floor(this.attr(attrs, ATTR.Directions, 1)));
            const baseDirection = this.forwardVector(hero);
            for (let i = 0; i < directions; i++) {
                const angleOffset = directions === 1 ? 0 : (i - (directions - 1) / 2) * 15;
                const direction = this.rotateVector2D(baseDirection, angleOffset);
                this.spawnProjectile(hero, powerUpId, def, hero.GetAbsOrigin(), direction, undefined, speed, radius, range, damage, damageKind, pierce, bounces);
            }
            return;
        }

        for (const target of targets) {
            const start = hero.GetAbsOrigin();
            const direction = this.directionFromTo(start, target.GetAbsOrigin());
            this.spawnProjectile(hero, powerUpId, def, start, direction, target, speed, radius, range, damage, damageKind, pierce, bounces);
        }
    }

    private fireInstantAttack(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const range = this.finalRange(hero, attrs, 1200);
        const targetCount = this.finalTargetCount(hero, attrs, 1);
        const targets = this.selectTargets(hero, def, range, targetCount);
        const damageKind = this.damageKindFromAttributes(attrs);
        const damage = this.finalDamage(hero, powerUpId, attrs, damageKind, false);
        const radius = this.finalRadius(hero, attrs, ATTR.Radius, 0);

        for (const target of targets) {
            if (radius > 0) {
                this.damageUnitsInRadius(hero, powerUpId, def, target.GetAbsOrigin(), radius, damage, damageKind, attrs);
            } else {
                this.damageOne(hero, powerUpId, def, target, damage, damageKind, attrs, false);
            }

            this.playParticleAtUnit((def as any).particle, target);
            this.applyOnHitStatus(hero, powerUpId, def, target, attrs, damageKind);
        }
    }

    private fireAreaAroundHero(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const radius = this.finalRadius(hero, attrs, ATTR.Radius, 300);
        const damageKind = this.damageKindFromAttributes(attrs);
        const damage = this.finalDamage(hero, powerUpId, attrs, damageKind, false);
        const ticks = Math.max(1, Math.floor(this.attr(attrs, ATTR.DamageTicks, 1)));
        const tickGap = Math.max(0.03, this.attr(attrs, ATTR.TimeBetweenTicks, 0.2));
        const initialDelay = Math.max(0, this.attr(attrs, ATTR.InitialTickDelay, 0));

        this.playParticleAtPosition((def as any).particle, hero.GetAbsOrigin(), radius);

        for (let i = 0; i < ticks; i++) {
            Timers.CreateTimer(initialDelay + i * tickGap, () => {
                if (this.isGamePaused()) return 0.05;
                if (!hero.IsAlive()) return undefined;
                this.damageUnitsInRadius(hero, powerUpId, def, hero.GetAbsOrigin(), radius, damage, damageKind, attrs);
                return undefined;
            });
        }
    }

    private fireDirectionalArea(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const damageKind = this.damageKindFromAttributes(attrs);
        const damage = this.finalDamage(hero, powerUpId, attrs, damageKind, false);
        const length = this.finalRadius(hero, attrs, ATTR.Length, 700);
        const width = this.finalRadius(hero, attrs, ATTR.Width, 300);
        const directions = Math.max(1, Math.floor(this.attr(attrs, ATTR.Directions, 1)));
        const ticks = Math.max(1, Math.floor(this.attr(attrs, ATTR.DamageTicks, 1)));
        const tickGap = Math.max(0.03, this.attr(attrs, ATTR.TimeBetweenTicks, 0.2));
        const initialDelay = Math.max(0, this.attr(attrs, ATTR.InitialTickDelay, 0));
        const baseDir = this.forwardVector(hero);

        for (let d = 0; d < directions; d++) {
            const angleOffset = directions === 1 ? 0 : (d - (directions - 1) / 2) * 45;
            const direction = this.rotateVector2D(baseDir, angleOffset);
            const end = this.vecAdd(hero.GetAbsOrigin(), this.vecMul(direction, length));
            this.playLinearParticle((def as any).particle, hero.GetAbsOrigin(), end);

            for (let i = 0; i < ticks; i++) {
                Timers.CreateTimer(initialDelay + i * tickGap, () => {
                    if (this.isGamePaused()) return 0.05;
                    if (!hero.IsAlive()) return undefined;
                    this.damageUnitsInLine(hero, powerUpId, def, hero.GetAbsOrigin(), end, width, damage, damageKind, attrs);
                    return undefined;
                });
            }
        }
    }

    private fireStampede(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const duration = this.finalDuration(hero, attrs, ATTR.Duration, 3.5);
        const radius = this.finalRadius(hero, attrs, ATTR.Radius, 200);
        const damageKind = this.damageKindFromAttributes(attrs);
        const damage = this.finalDamage(hero, powerUpId, attrs, damageKind, false);
        const interval = 0.2;
        const originalMS = hero.GetBaseMoveSpeed();
        const stampedeMS = this.attr(attrs, ATTR.StampedeMovementSpeed, 0);

        if (stampedeMS > 0) hero.SetBaseMoveSpeed(Math.max(originalMS, stampedeMS));
        this.playParticleAtUnit((def as any).particle, hero);

        const started = GameRules.GetGameTime();
        Timers.CreateTimer(0, () => {
            if (this.isGamePaused()) return 0.05;
            if (!hero.IsAlive()) return undefined;
            if (GameRules.GetGameTime() - started >= duration) {
                hero.SetBaseMoveSpeed(originalMS);
                return undefined;
            }
            this.damageUnitsInRadius(hero, powerUpId, def, hero.GetAbsOrigin(), radius, damage, damageKind, attrs);
            return interval;
        });
    }

    private fireSpirits(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const duration = this.finalDuration(hero, attrs, ATTR.Duration, Math.max(1, this.getCooldownSeconds(hero, powerUpId) * 0.75));
        const radius = this.finalRadius(hero, attrs, ATTR.Radius, 350);
        const spiritCount = this.finalTargetCount(hero, attrs, 3);
        const damageKind = this.damageKindFromAttributes(attrs);
        const damage = this.finalDamage(hero, powerUpId, attrs, damageKind, true);
        const started = GameRules.GetGameTime();
        const hitCd = Math.max(0.15, this.attr(attrs, ATTR.ProjectileAttackInterval, 0.25));
        const lastHit = new Map<EntityIndex, number>();

        Timers.CreateTimer(0, () => {
            if (this.isGamePaused()) return 0.05;
            if (!hero.IsAlive()) return undefined;
            const elapsed = GameRules.GetGameTime() - started;
            if (elapsed >= duration) return undefined;

            for (let i = 0; i < spiritCount; i++) {
                const angle = elapsed * 180 + (360 / spiritCount) * i;
                const dir = this.rotateVector2D(Vector(1, 0, 0), angle);
                const pos = this.vecAdd(hero.GetAbsOrigin(), this.vecMul(dir, radius));
                this.playParticleAtPosition((def as any).particle, pos, 80);
                const enemies = this.getEnemiesInRadius(hero, pos, 90);
                for (const enemy of enemies) {
                    const last = lastHit.get(enemy.GetEntityIndex()) ?? -999;
                    if (GameRules.GetGameTime() - last >= hitCd) {
                        lastHit.set(enemy.GetEntityIndex(), GameRules.GetGameTime());
                        this.damageOne(hero, powerUpId, def, enemy, damage, damageKind, attrs, true);
                    }
                }
            }
            return 0.1;
        });
    }

    private fireLandMine(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const range = this.finalRange(hero, attrs, 450);
        const radius = this.finalRadius(hero, attrs, ATTR.Radius, 250);
        const damageKind = this.damageKindFromAttributes(attrs);
        const damage = this.finalDamage(hero, powerUpId, attrs, damageKind, false);
        const arming = Math.max(0, this.attr(attrs, ATTR.ArmingTime, 0.5));
        const lifetime = this.finalDuration(hero, attrs, ATTR.LifeTime, 12);
        const forward = this.forwardVector(hero);
        const pos = this.vecAdd(hero.GetAbsOrigin(), this.vecMul(forward, range * 0.5));
        const id = this.nextMineId++;
        const particle = this.createParticleAtPosition((def as any).particle, pos, radius);

        this.mines.set(id, {
            id,
            source: hero,
            powerUpId,
            definition: def,
            position: pos,
            armedAt: GameRules.GetGameTime() + arming,
            expiresAt: GameRules.GetGameTime() + lifetime,
            radius,
            damage,
            damageKind,
            particle,
        });

        this.ensureMineThinker();
    }

    private fireMortimerKisses(hero: CDOTA_BaseNPC_Hero, powerUpId: number, def: SurvivorsPowerUpDefinition) {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const range = this.finalRange(hero, attrs, 1400);
        const targetCount = this.finalTargetCount(hero, attrs, 1);
        const radius = this.finalRadius(hero, attrs, ATTR.Radius, 250);
        const damageKind = this.damageKindFromAttributes(attrs);
        const damage = this.finalDamage(hero, powerUpId, attrs, damageKind, false);
        const triggerTime = Math.max(0.05, this.attr(attrs, ATTR.TriggerTime, 0.9));
        const targets = this.selectTargets(hero, def, range, targetCount);

        for (const target of targets) {
            const pos = target.GetAbsOrigin();
            this.playParticleAtPosition((def as any).warmupEffectParticle, pos, radius);
            Timers.CreateTimer(triggerTime, () => {
                if (this.isGamePaused()) return 0.05;
                this.playParticleAtPosition((def as any).particle, pos, radius);
                this.damageUnitsInRadius(hero, powerUpId, def, pos, radius, damage, damageKind, attrs);
                return undefined;
            });
        }
    }

    // =========================================================================
    // Projectile and mine thinkers
    // =========================================================================

    private spawnProjectile(
        source: CDOTA_BaseNPC_Hero,
        powerUpId: number,
        def: SurvivorsPowerUpDefinition,
        start: Vector,
        direction: Vector,
        target: CDOTA_BaseNPC | undefined,
        speed: number,
        radius: number,
        range: number,
        damage: number,
        damageKind: DamageKind,
        pierce: number,
        bounces: number,
    ) {
        const id = this.nextProjectileId++;
        const particle = this.createLinearProjectileParticle((def as any).particle, start, target ? target.GetAbsOrigin() : this.vecAdd(start, this.vecMul(direction, range)));
        this.manualProjectiles.set(id, {
            id,
            source,
            powerUpId,
            definition: def,
            position: start,
            velocity: this.vecMul(this.vecNormalize2D(direction), speed),
            target,
            homing: target !== undefined,
            speed,
            radius,
            range,
            damage,
            damageKind,
            pierceRemaining: pierce,
            bouncesRemaining: bounces,
            maxLifetime: Math.max(0.2, range / Math.max(1, speed) + 1.0),
            createdAt: GameRules.GetGameTime(),
            lastHitAt: new Map<EntityIndex, number>(),
            hitTargets: new Set<EntityIndex>(),
            particle,
            hitParticle: (def as any).hitStatusEffectParticle,
            impactParticle: (def as any).impactParticle,
            impactSound: (def as any).impactSound,
        });
        this.ensureProjectileThinker();
    }

    private ensureProjectileThinker() {
        if (this.projectileThinkStarted) return;
        this.projectileThinkStarted = true;

        Timers.CreateTimer(0.03, () => {
            if (this.isGamePaused()) return 0.03;
            const now = GameRules.GetGameTime();
            const dt = 0.03;
            const toDestroy: number[] = [];

            for (const [id, proj] of this.manualProjectiles) {
                if (!proj.source || proj.source.IsNull() || !proj.source.IsAlive()) {
                    toDestroy.push(id);
                    continue;
                }

                if (now - proj.createdAt > proj.maxLifetime) {
                    toDestroy.push(id);
                    continue;
                }

                if (proj.homing && proj.target && !proj.target.IsNull() && proj.target.IsAlive()) {
                    const dir = this.directionFromTo(proj.position, proj.target.GetAbsOrigin());
                    proj.velocity = this.vecMul(dir, proj.speed);
                }

                proj.position = this.vecAdd(proj.position, this.vecMul(proj.velocity, dt));
                this.updateProjectileParticle(proj);

                const enemies = this.getEnemiesInRadius(proj.source, proj.position, proj.radius);
                for (const enemy of enemies) {
                    if (proj.pierceRemaining <= 0) break;
                    const entityIndex = enemy.GetEntityIndex();
                    const lastHit = proj.lastHitAt.get(entityIndex) ?? -999;
                    const interval = this.attr(this.getEffectiveAttributes(proj.source, proj.powerUpId), ATTR.ProjectileAttackInterval, 0.15);
                    if (now - lastHit < interval) continue;

                    proj.lastHitAt.set(entityIndex, now);
                    proj.hitTargets.add(entityIndex);
                    this.damageOne(proj.source, proj.powerUpId, proj.definition, enemy, proj.damage, proj.damageKind, this.getEffectiveAttributes(proj.source, proj.powerUpId), true);
                    this.playParticleAtUnit(proj.hitParticle, enemy);
                    proj.pierceRemaining--;

                    if (proj.bouncesRemaining > 0) {
                        const next = this.pickBounceTarget(proj, enemy);
                        if (next) {
                            proj.target = next;
                            proj.homing = true;
                            proj.bouncesRemaining--;
                            proj.pierceRemaining = Math.max(1, 1 + Math.floor(this.attr(this.getEffectiveAttributes(proj.source, proj.powerUpId), ATTR.ProjectileHitCount, 0)));
                            break;
                        }
                    }
                }

                if (proj.pierceRemaining <= 0 && proj.bouncesRemaining <= 0) {
                    toDestroy.push(id);
                }
            }

            for (const id of toDestroy) {
                this.destroyProjectile(id);
            }

            if (this.manualProjectiles.size > 0) return 0.03;
            this.projectileThinkStarted = false;
            return undefined;
        });
    }

    private ensureMineThinker() {
        if (this.mineThinkStarted) return;
        this.mineThinkStarted = true;

        Timers.CreateTimer(0.1, () => {
            if (this.isGamePaused()) return 0.1;
            const now = GameRules.GetGameTime();
            const toDestroy: number[] = [];

            for (const [id, mine] of this.mines) {
                if (!mine.source || mine.source.IsNull() || !mine.source.IsAlive()) {
                    toDestroy.push(id);
                    continue;
                }
                if (now >= mine.expiresAt) {
                    toDestroy.push(id);
                    continue;
                }
                if (now < mine.armedAt) continue;

                const enemies = this.getEnemiesInRadius(mine.source, mine.position, mine.radius);
                if (enemies.length > 0) {
                    const attrs = this.getEffectiveAttributes(mine.source, mine.powerUpId);
                    this.playParticleAtPosition((mine.definition as any).impactParticle ?? (mine.definition as any).particle, mine.position, mine.radius);
                    this.damageUnitsInRadius(mine.source, mine.powerUpId, mine.definition, mine.position, mine.radius, mine.damage, mine.damageKind, attrs);
                    toDestroy.push(id);
                }
            }

            for (const id of toDestroy) this.destroyMine(id);
            if (this.mines.size > 0) return 0.1;
            this.mineThinkStarted = false;
            return undefined;
        });
    }

    private destroyProjectile(id: number) {
        const proj = this.manualProjectiles.get(id);
        if (!proj) return;
        if (proj.particle !== undefined) {
            ParticleManager.DestroyParticle(proj.particle, false);
            ParticleManager.ReleaseParticleIndex(proj.particle);
        }
        this.playParticleAtPosition(proj.impactParticle, proj.position, proj.radius);
        this.manualProjectiles.delete(id);
    }

    private destroyMine(id: number) {
        const mine = this.mines.get(id);
        if (!mine) return;
        if (mine.particle !== undefined) {
            ParticleManager.DestroyParticle(mine.particle, false);
            ParticleManager.ReleaseParticleIndex(mine.particle);
        }
        this.mines.delete(id);
    }

    // =========================================================================
    // Damage, status, and targeting
    // =========================================================================

    private damageUnitsInRadius(
        source: CDOTA_BaseNPC_Hero,
        powerUpId: number,
        def: SurvivorsPowerUpDefinition,
        position: Vector,
        radius: number,
        damage: number,
        damageKind: DamageKind,
        attrs: Map<AttributeName, number>,
    ) {
        const enemies = this.getEnemiesInRadius(source, position, radius);
        for (const enemy of enemies) {
            this.damageOne(source, powerUpId, def, enemy, damage, damageKind, attrs, false);
        }
    }

    private damageUnitsInLine(
        source: CDOTA_BaseNPC_Hero,
        powerUpId: number,
        def: SurvivorsPowerUpDefinition,
        start: Vector,
        end: Vector,
        width: number,
        damage: number,
        damageKind: DamageKind,
        attrs: Map<AttributeName, number>,
    ) {
        const center = this.vecMul(this.vecAdd(start, end), 0.5);
        const range = this.vecDistance2D(start, end) + width;
        const enemies = this.getEnemiesInRadius(source, center, range);
        for (const enemy of enemies) {
            if (this.distancePointToSegment2D(enemy.GetAbsOrigin(), start, end) <= width) {
                this.damageOne(source, powerUpId, def, enemy, damage, damageKind, attrs, false);
            }
        }
    }

    private damageOne(
        source: CDOTA_BaseNPC_Hero,
        powerUpId: number,
        def: SurvivorsPowerUpDefinition,
        target: CDOTA_BaseNPC,
        baseDamage: number,
        damageKind: DamageKind,
        attrs: Map<AttributeName, number>,
        projectile: boolean,
    ) {
        if (!target || target.IsNull() || !target.IsAlive()) return;

        let damage = baseDamage;
        damage = this.applyCrits(source, damage, damageKind, projectile);
        damage *= this.incomingDamageMultiplier(target, damageKind);

        ApplyDamage({
            victim: target,
            attacker: source,
            damage,
            damage_type: this.dotaDamageType(damageKind),
            ability: undefined,
        });

        this.applyKnockback(source, target, attrs);
        this.applyOnHitStatus(source, powerUpId, def, target, attrs, damageKind);

        if (!target.IsAlive()) {
            this.recordPowerupKill(source, powerUpId, 1);
        }
    }

    private applyOnHitStatus(
        source: CDOTA_BaseNPC_Hero,
        powerUpId: number,
        def: SurvivorsPowerUpDefinition,
        target: CDOTA_BaseNPC,
        attrs: Map<AttributeName, number>,
        damageKind: DamageKind,
    ) {
        const stun = this.finalDuration(source, attrs, ATTR.StunDuration, 0);
        if (stun > 0) this.safeAddModifier(target, source, "modifier_stunned", stun);

        const freeze = this.finalDuration(source, attrs, ATTR.FreezeDuration, 0);
        if (freeze > 0) {
            const strength = Math.max(0, this.attr(attrs, ATTR.FreezeStrength, 1));
            this.safeAddModifier(target, source, "modifier_stunned", freeze * Math.min(1, strength));
        }

        const slowDuration = this.finalDuration(source, attrs, ATTR.SlowDuration, 0);
        if (slowDuration > 0) {
            this.rememberStatus(target, { incomingDamageAmplification: 0, incomingDamageAmplificationExpires: GameRules.GetGameTime() + slowDuration });
            // If you have a generic slow modifier, wire it here. Numeric slow strength is preserved on the target for your modifier to read.
            (target as any).__survivorsSlowStrength = this.attr(attrs, ATTR.SlowStrength, 0);
        }

        const amp = this.attr(attrs, ATTR.IncomingDamageAmplification, 0);
        if (amp > 0) {
            const duration = this.finalDuration(source, attrs, ATTR.IncomingDamageAmplificationDuration, this.attr(attrs, ATTR.DurationEffect, 3));
            this.rememberStatus(target, {
                incomingDamageAmplification: amp,
                incomingDamageAmplificationExpires: GameRules.GetGameTime() + duration,
            });
        }

        const vuln = this.attr(attrs, ATTR.VulnerabilityDamagePercent, 0);
        if (vuln > 0) {
            const duration = this.finalDuration(source, attrs, ATTR.VulnerabilityDuration, this.attr(attrs, ATTR.DurationEffect, 3));
            this.rememberStatus(target, {
                vulnerabilityDamagePercent: vuln,
                vulnerabilityExpires: GameRules.GetGameTime() + duration,
                vulnerabilityStunOnHitDuration: this.attr(attrs, ATTR.VulnerabilityStunOnHitDuration, 0),
            });
        }

        if (damageKind === "magical") {
            const weaken = this.attr(attrs, ATTR.MagicWeakensPhysicalPercent, 0);
            if (weaken > 0) {
                const duration = this.finalDuration(source, attrs, ATTR.MagicWeakensPhysicalDuration, this.attr(attrs, ATTR.DurationEffect, 3));
                this.rememberStatus(target, {
                    magicWeakensPhysicalPercent: weaken,
                    magicWeakensPhysicalExpires: GameRules.GetGameTime() + duration,
                });
            }
        }
    }

    private incomingDamageMultiplier(target: CDOTA_BaseNPC, damageKind: DamageKind): number {
        const status = this.unitStatuses.get(target.GetEntityIndex());
        if (!status) return 1;
        const now = GameRules.GetGameTime();
        let mult = 1;

        if ((status.incomingDamageAmplificationExpires ?? 0) > now) {
            mult *= 1 + (status.incomingDamageAmplification ?? 0);
        }

        if ((status.vulnerabilityExpires ?? 0) > now) {
            mult *= 1 + (status.vulnerabilityDamagePercent ?? 0);
            const stun = status.vulnerabilityStunOnHitDuration ?? 0;
            if (stun > 0) this.safeAddModifier(target, undefined, "modifier_stunned", stun);
        }

        if (damageKind === "physical" && (status.magicWeakensPhysicalExpires ?? 0) > now) {
            mult *= 1 + (status.magicWeakensPhysicalPercent ?? 0);
        }

        return mult;
    }

    private rememberStatus(target: CDOTA_BaseNPC, patch: UnitStatus) {
        const id = target.GetEntityIndex();
        const current = this.unitStatuses.get(id) ?? {};
        const next: UnitStatus = {
            incomingDamageAmplification: patch.incomingDamageAmplification ?? current.incomingDamageAmplification,
            incomingDamageAmplificationExpires: patch.incomingDamageAmplificationExpires ?? current.incomingDamageAmplificationExpires,
            vulnerabilityDamagePercent: patch.vulnerabilityDamagePercent ?? current.vulnerabilityDamagePercent,
            vulnerabilityExpires: patch.vulnerabilityExpires ?? current.vulnerabilityExpires,
            vulnerabilityStunOnHitDuration: patch.vulnerabilityStunOnHitDuration ?? current.vulnerabilityStunOnHitDuration,
            magicWeakensPhysicalPercent: patch.magicWeakensPhysicalPercent ?? current.magicWeakensPhysicalPercent,
            magicWeakensPhysicalExpires: patch.magicWeakensPhysicalExpires ?? current.magicWeakensPhysicalExpires,
        };
        this.unitStatuses.set(id, next);
    }

    private selectTargets(hero: CDOTA_BaseNPC_Hero, def: SurvivorsPowerUpDefinition, range: number, count: number): CDOTA_BaseNPC[] {
        const targeting = ((def as any).targeting ?? "CLOSEST_TARGET") as string;
        const enemies = this.getEnemiesInRadius(hero, hero.GetAbsOrigin(), range);
        if (enemies.length === 0) return [];

        if (targeting === "RANDOM_TARGET_IN_RANGE") {
            this.shuffle(enemies);
            return enemies.slice(0, count);
        }

        if (targeting === "STRONGEST_TARGET_IN_RANGE") {
            enemies.sort((a, b) => b.GetHealth() - a.GetHealth());
            return enemies.slice(0, count);
        }

        if (targeting === "PLAYER_ORIGIN") {
            enemies.sort((a, b) => this.vecDistance2D(a.GetAbsOrigin(), hero.GetAbsOrigin()) - this.vecDistance2D(b.GetAbsOrigin(), hero.GetAbsOrigin()));
            return enemies.slice(0, count);
        }

        // CLOSEST_TARGET and default
        enemies.sort((a, b) => this.vecDistance2D(a.GetAbsOrigin(), hero.GetAbsOrigin()) - this.vecDistance2D(b.GetAbsOrigin(), hero.GetAbsOrigin()));
        return enemies.slice(0, count);
    }

    private pickBounceTarget(projectile: ManualProjectile, previous: CDOTA_BaseNPC): CDOTA_BaseNPC | undefined {
        const def = projectile.definition;
        const range = this.finalRange(projectile.source, this.getEffectiveAttributes(projectile.source, projectile.powerUpId), 700);
        const origin = previous.GetAbsOrigin();
        const candidates = this.getEnemiesInRadius(projectile.source, origin, range);
        const filtered: CDOTA_BaseNPC[] = [];
        for (const candidate of candidates) {
            if (candidate.GetEntityIndex() === previous.GetEntityIndex()) continue;
            if (projectile.hitTargets.has(candidate.GetEntityIndex())) continue;
            filtered.push(candidate);
        }
        if (filtered.length === 0) return undefined;

        const bounceTargeting = ((def as any).bounceTargeting ?? "RANDOM_TARGET_AT_RANGE") as string;
        if (bounceTargeting === "RANDOM_TARGET_AT_RANGE") {
            return filtered[RandomInt(0, filtered.length - 1)];
        }
        filtered.sort((a, b) => this.vecDistance2D(a.GetAbsOrigin(), origin) - this.vecDistance2D(b.GetAbsOrigin(), origin));
        return filtered[0];
    }

    private getEnemiesInRadius(hero: CDOTA_BaseNPC_Hero, position: Vector, radius: number): CDOTA_BaseNPC[] {
        const manager = this.enemyManager as any;
        if (manager.getEnemiesInRange) {
            return manager.getEnemiesInRange(position, radius) as CDOTA_BaseNPC[];
        }
        if (manager.getEnemiesInRadius) {
            return manager.getEnemiesInRadius(position, radius) as CDOTA_BaseNPC[];
        }
        if (manager.getEnemies) {
            const result: CDOTA_BaseNPC[] = [];
            const enemies = manager.getEnemies() as CDOTA_BaseNPC[];
            for (const enemy of enemies) {
                if (!enemy || enemy.IsNull() || !enemy.IsAlive()) continue;
                if (this.vecDistance2D(enemy.GetAbsOrigin(), position) <= radius) result.push(enemy);
            }
            return result;
        }

        return FindUnitsInRadius(
            hero.GetTeamNumber(),
            position,
            undefined,
            radius,
            DOTA_UNIT_TARGET_TEAM_ENEMY,
            DOTA_UNIT_TARGET_BASIC + DOTA_UNIT_TARGET_HERO,
            DOTA_UNIT_TARGET_FLAG_NONE,
            FindOrder.FIND_CLOSEST,
            false,
        );
    }

    // =========================================================================
    // Stat finalization helpers
    // =========================================================================

    private getCooldownSeconds(hero: CDOTA_BaseNPC_Hero, powerUpId: number): number {
        const attrs = this.getEffectiveAttributes(hero, powerUpId);
        const baseCooldown = Math.max(0.1, this.attr(attrs, ATTR.Cooldown, 1));
        const localCdr = this.attr(attrs, ATTR.CooldownReduction, 0);
        const globalCdr = this.getGlobalAttribute(hero, ATTR.CooldownReduction);
        const cdr = this.clamp(localCdr + globalCdr, 0, 0.9);
        return Math.max(0.05, baseCooldown * (1 - cdr));
    }

    private finalTargetCount(hero: CDOTA_BaseNPC_Hero, attrs: Map<AttributeName, number>, fallback: number): number {
        return Math.max(1, Math.floor(this.attr(attrs, ATTR.TargetCount, fallback) + this.getGlobalAttribute(hero, ATTR.TargetCount)));
    }

    private finalRange(hero: CDOTA_BaseNPC_Hero, attrs: Map<AttributeName, number>, fallback: number): number {
        return Math.max(0, this.attr(attrs, ATTR.Range, fallback));
    }

    private finalRadius(hero: CDOTA_BaseNPC_Hero, attrs: Map<AttributeName, number>, attrName: AttributeName, fallback: number): number {
        const aoe = this.getGlobalAttribute(hero, ATTR.AoEIncrease) + this.attr(attrs, ATTR.AoEIncrease, 0);
        return Math.max(0, this.attr(attrs, attrName, fallback) * (1 + aoe));
    }

    private finalDuration(hero: CDOTA_BaseNPC_Hero, attrs: Map<AttributeName, number>, attrName: AttributeName, fallback: number): number {
        return Math.max(0, this.attr(attrs, attrName, fallback) + this.getGlobalAttribute(hero, ATTR.DurationExtension));
    }

    private finalDamage(hero: CDOTA_BaseNPC_Hero, powerUpId: number, attrs: Map<AttributeName, number>, damageKind: DamageKind, projectile: boolean): number {
        let damage = damageKind === "physical" ? this.attr(attrs, ATTR.DamagePhysical, 0) : this.attr(attrs, ATTR.DamageMagical, 0);
        if (damageKind === "physical") {
            damage += this.getGlobalAttribute(hero, ATTR.BonusPhysicalDamage);
        } else if (damageKind === "magical") {
            damage *= 1 + this.getGlobalAttribute(hero, ATTR.MagicalDamageMultiplier);
            if (projectile) damage += this.getGlobalAttribute(hero, ATTR.ProjectileBonusMagicDamage);
        }

        const projectilePercent = projectile ? this.attr(attrs, ATTR.ProjectileDamagePercent, 0) : 0;
        if (projectilePercent > 0) damage *= projectilePercent;

        return Math.max(0, damage);
    }

    private damageKindFromAttributes(attrs: Map<AttributeName, number>): DamageKind {
        const physical = this.attr(attrs, ATTR.DamagePhysical, 0);
        const magical = this.attr(attrs, ATTR.DamageMagical, 0);
        if (physical > 0 && physical >= magical) return "physical";
        return "magical";
    }

    private applyCrits(hero: CDOTA_BaseNPC_Hero, damage: number, damageKind: DamageKind, projectile: boolean): number {
        if (projectile) {
            const chance = this.getGlobalAttribute(hero, ATTR.CritProjectileChance);
            const mult = this.getGlobalAttribute(hero, ATTR.CritProjectileMultiplier);
            if (chance > 0 && mult > 0 && RandomFloat(0, 1) <= chance) return damage * mult;
        }

        if (damageKind === "physical") {
            const chance = this.getGlobalAttribute(hero, ATTR.CritPhysicalChance);
            const mult = this.getGlobalAttribute(hero, ATTR.CritPhysicalMultiplier);
            if (chance > 0 && mult > 0 && RandomFloat(0, 1) <= chance) return damage * mult;
        }

        return damage;
    }

    private applyKnockback(source: CDOTA_BaseNPC_Hero, target: CDOTA_BaseNPC, attrs: Map<AttributeName, number>) {
        const baseKnockback = this.attr(attrs, ATTR.KnockbackDistance, 0);
        if (baseKnockback <= 0) return;
        const multiplier = 1 + this.getGlobalAttribute(source, ATTR.KnockbackDistanceMultiplier) + this.attr(attrs, ATTR.KnockbackDistanceMultiplier, 0);
        const distance = baseKnockback * multiplier;
        const dir = this.directionFromTo(source.GetAbsOrigin(), target.GetAbsOrigin());
        FindClearSpaceForUnit(target, this.vecAdd(target.GetAbsOrigin(), this.vecMul(dir, distance)), true);
    }

    private dotaDamageType(kind: DamageKind): DamageTypes {
        if (kind === "physical") return DAMAGE_TYPE_PHYSICAL;
        if (kind === "pure") return DAMAGE_TYPE_PURE;
        return DAMAGE_TYPE_MAGICAL;
    }

    // =========================================================================
    // Inventory/UI helpers
    // =========================================================================

    private syncInventoryToUI(hero: CDOTA_BaseNPC_Hero) {
        const playerId = hero.GetPlayerOwnerID();
        const player = PlayerResource.GetPlayer(playerId);
        const inv = this.getInventory(hero);
        if (!player || !inv) return;

        const levels: Record<string, number> = {};
        for (const [id, level] of inv.levels) {
            levels[String(id)] = level;
        }

        const payload = {
            activePowerups: inv.active,
            innatePowerups: inv.innate,
            passivePowerups: inv.passive,
            levels,
            activeSlotCap: inv.activeSlotCap,
            passiveSlotCap: inv.passiveSlotCap,
            scepterPowerups: this.setToArray(inv.hasScepter),
            shardPowerups: this.setToArray(inv.hasShard),
        } as any;

        CustomGameEventManager.Send_ServerToPlayer(player, "survivors_powerups_changed", payload);
    }

    private parseChoiceId(hero: CDOTA_BaseNPC_Hero, choiceId: string): SurvivorsLevelUpChoice | undefined {
        const parts = choiceId.split(":");
        if (parts.length < 2) return undefined;
        const kind = parts[0];
        const powerUpId = Number(parts[1]);
        const def = this.powerupsById.get(powerUpId);
        const inv = this.getInventory(hero);
        if (!def || !inv) return undefined;
        const currentLevel = inv.levels.get(powerUpId) ?? 0;

        if (kind === "evolution") {
            return {
                choiceId,
                kind: "evolution",
                powerUpId,
                key: def.key,
                image: def.image,
                locAbilityName: def.locAbilityName,
                isNew: true,
                currentLevel,
                nextLevel: 1,
                maxLevel: this.getMaxLevel(def),
                recipeItems: ((def as any).recipeItems ?? []) as number[],
            };
        }

        if (kind === "new") {
            return {
                choiceId,
                kind: "new_powerup",
                powerUpId,
                key: def.key,
                image: def.image,
                locAbilityName: def.locAbilityName,
                locAbilityDesc: def.locAbilityDesc,
                isNew: true,
                currentLevel,
                nextLevel: 1,
                maxLevel: this.getMaxLevel(def),
            };
        }

        if (kind === "upgrade" && parts.length >= 4) {
            return {
                choiceId,
                kind: parts[2] === "minor" ? "minor_upgrade" : "upgrade",
                powerUpId,
                key: def.key,
                image: def.image,
                locAbilityName: def.locAbilityName,
                locAbilityDesc: def.locAbilityDesc,
                isNew: false,
                currentLevel,
                nextLevel: currentLevel + 1,
                maxLevel: this.getMaxLevel(def),
                upgradeKind: parts[2] as UpgradeKind,
                upgradeIndex: Number(parts[3]),
            };
        }

        return undefined;
    }

    private getPowerupCategory(def: SurvivorsPowerUpDefinition): PowerupCategory {
        if ((def as any).isInnate) return "innate";
        if ((def as any).isPassive || (def as any).isGold) return "passive";
        return "active";
    }

    private getInventory(hero: CDOTA_BaseNPC_Hero): HeroInventory | undefined {
        return this.inventories.get(hero.GetEntityIndex());
    }

    private getMaxLevel(def: SurvivorsPowerUpDefinition): number {
        return (def as any).maxLevel ?? 1;
    }

    private getAuthoredUpgrade(def: SurvivorsPowerUpDefinition, index: number): UpgradeChoiceDefinition | undefined {
        if (index < 0) return undefined;
        const upgrades = ((def as any).authoredUpgradeChoices ?? []) as UpgradeChoiceDefinition[];
        return upgrades[index];
    }

    private getMinorUpgrade(def: SurvivorsPowerUpDefinition, index: number): UpgradeChoiceDefinition | undefined {
        if (index < 0) return undefined;
        const upgrades = ((def as any).minorUpgradeChoices ?? []) as UpgradeChoiceDefinition[];
        return upgrades[index];
    }

    // =========================================================================
    // Particles and safe engine calls
    // =========================================================================

    private playParticleAtUnit(particleName?: string, unit?: CDOTA_BaseNPC) {
        if (!particleName || !unit || unit.IsNull()) return;
        const p = ParticleManager.CreateParticle(particleName, PATTACH_ABSORIGIN_FOLLOW, unit);
        ParticleManager.ReleaseParticleIndex(p);
    }

    private playParticleAtPosition(particleName: string | undefined, position: Vector, radius = 0) {
        const p = this.createParticleAtPosition(particleName, position, radius);
        if (p !== undefined) ParticleManager.ReleaseParticleIndex(p);
    }

    private createParticleAtPosition(particleName: string | undefined, position: Vector, radius = 0): ParticleID | undefined {
        if (!particleName) return undefined;
        const p = ParticleManager.CreateParticle(particleName, PATTACH_WORLDORIGIN, undefined);
        ParticleManager.SetParticleControl(p, 0, position);
        if (radius > 0) ParticleManager.SetParticleControl(p, 1, Vector(radius, radius, radius));
        return p;
    }

    private playLinearParticle(particleName: string | undefined, start: Vector, end: Vector) {
        const p = this.createLinearProjectileParticle(particleName, start, end);
        if (p !== undefined) ParticleManager.ReleaseParticleIndex(p);
    }

    private createLinearProjectileParticle(particleName: string | undefined, start: Vector, end: Vector): ParticleID | undefined {
        if (!particleName) return undefined;
        const p = ParticleManager.CreateParticle(particleName, PATTACH_WORLDORIGIN, undefined);
        ParticleManager.SetParticleControl(p, 0, start);
        ParticleManager.SetParticleControl(p, 1, end);
        return p;
    }

    private updateProjectileParticle(projectile: ManualProjectile) {
        if (projectile.particle === undefined) return;
        ParticleManager.SetParticleControl(projectile.particle, 0, projectile.position);
        ParticleManager.SetParticleControl(projectile.particle, 1, this.vecAdd(projectile.position, projectile.velocity));
    }

    private safeAddModifier(target: CDOTA_BaseNPC, source: CDOTA_BaseNPC | undefined, modifierName: string, duration: number) {
        if (!target || target.IsNull() || duration <= 0) return;
        target.AddNewModifier(source, undefined, modifierName, { duration });
    }

    // =========================================================================
    // Small utilities
    // =========================================================================

    private isGamePaused(): boolean {
        if (this.isPaused && this.isPaused()) return true;
        return (GameRules as any).IsGamePaused ? (GameRules as any).IsGamePaused() : false;
    }

    private attr(attrs: Map<AttributeName, number>, key: AttributeName, fallback: number): number {
        const value = attrs.get(key);
        return value === undefined ? fallback : value;
    }

    private mapGet(map: Map<AttributeName, number>, key: AttributeName): number {
        return map.get(key) ?? 0;
    }

    private mapAdd(map: Map<AttributeName, number>, key: AttributeName, value: number) {
        if (value === 0) return;
        map.set(key, (map.get(key) ?? 0) + value);
    }

    private addAttributesToMap(map: Map<AttributeName, number>, attributes: AttributeValue[]) {
        for (const attr of attributes) {
            this.mapAdd(map, attr.type, attr.value);
        }
    }

    private shuffle<T>(array: T[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = RandomInt(0, i);
            const tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }

    private removeFromArray(array: number[], value: number) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === value) array.splice(i, 1);
        }
    }

    private setToArray(set: Set<number>): number[] {
        const out: number[] = [];
        for (const value of set) out.push(value);
        return out;
    }

    private clamp(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, value));
    }

    private forwardVector(unit: CDOTA_BaseNPC): Vector {
        const fv = unit.GetForwardVector();
        return this.vecNormalize2D(Vector(fv.x, fv.y, 0));
    }

    private directionFromTo(from: Vector, to: Vector): Vector {
        return this.vecNormalize2D(this.vecSub(to, from));
    }

    private vecAdd(a: Vector, b: Vector): Vector {
        return Vector(a.x + b.x, a.y + b.y, (a.z ?? 0) + (b.z ?? 0));
    }

    private vecSub(a: Vector, b: Vector): Vector {
        return Vector(a.x - b.x, a.y - b.y, (a.z ?? 0) - (b.z ?? 0));
    }

    private vecMul(a: Vector, scalar: number): Vector {
        return Vector(a.x * scalar, a.y * scalar, (a.z ?? 0) * scalar);
    }

    private vecLength2D(a: Vector): number {
        return Math.sqrt(a.x * a.x + a.y * a.y);
    }

    private vecDistance2D(a: Vector, b: Vector): number {
        return this.vecLength2D(this.vecSub(a, b));
    }

    private vecNormalize2D(a: Vector): Vector {
        const len = this.vecLength2D(a);
        if (len <= 0.001) return Vector(1, 0, 0);
        return Vector(a.x / len, a.y / len, 0);
    }

    private rotateVector2D(v: Vector, degrees: number): Vector {
        const radians = degrees * Math.PI / 180;
        const c = Math.cos(radians);
        const s = Math.sin(radians);
        return Vector(v.x * c - v.y * s, v.x * s + v.y * c, 0);
    }

    private distancePointToSegment2D(point: Vector, start: Vector, end: Vector): number {
        const ab = this.vecSub(end, start);
        const ap = this.vecSub(point, start);
        const abLen2 = ab.x * ab.x + ab.y * ab.y;
        if (abLen2 <= 0.001) return this.vecDistance2D(point, start);
        const t = this.clamp((ap.x * ab.x + ap.y * ab.y) / abLen2, 0, 1);
        const closest = Vector(start.x + ab.x * t, start.y + ab.y * t, start.z ?? 0);
        return this.vecDistance2D(point, closest);
    }
}
