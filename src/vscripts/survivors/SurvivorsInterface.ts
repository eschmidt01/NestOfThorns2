export type Vector2 = [number, number];
export type Vector3 = [number, number, number];
export type NumberVector = number[];

export interface SurvivorsCost {
    minigameCurrency?: number;
}

export interface SurvivorsAttributeValue {
    type: string; // m_eType
    value: number; // m_flValue
}

export interface SurvivorsLootEntry {
    pickupId: number; // m_unPickupID
    minAmount?: number;
    maxAmount?: number;
}

export interface SurvivorsLootEntryCollection {
    chance?: number;
    pickupName?: string; // Missing but appears in KV3
    lootEntries?: SurvivorsLootEntry[];
}

export interface SurvivorsLootTable {
    lootEntryCollections: SurvivorsLootEntryCollection[];
}

/**
 * source/survivors_attributes.txt
 */
export interface SurvivorsAttributeMetaProgressionTier {
    cost?: SurvivorsCost;
    value: number;
}

export interface SurvivorsAttributeDefinition {
    key: string;
    locName: string;
    locTooltip?: string;
    locDescription?: string;
    image?: string;
    primary?: boolean;
    percentage?: boolean;
    metaProgressionTiers?: SurvivorsAttributeMetaProgressionTier[];
}

export type SurvivorsAttributes = Record<string, SurvivorsAttributeDefinition>;

/**
 * source/survivors_difficulty.txt
 */
export interface SurvivorsDifficultyEnemyEvent {
    spawnerName: string;
    startTime: number;
    minimumEnemyCountOverride?: number;
}

export interface SurvivorsDifficultyDefinition {
    key: string;
    locDifficultyName: string;
    locDifficultyDescription: string;
    enemyHealthMultiplier?: number;
    enemyDamageMultiplier?: number;
    enemyTouchMovementSlowDuration?: number;
    enemyMovementSpeedMultiplier?: number;
    enemyTurnRateMultiplier?: number;
    enemySpawnCountMuliplier?: number; // original spelling in KV3
    xpDropChanceMultiplier?: number;
    additionalFirstFloorTime?: number;
    enableMeteorModifier?: boolean;
    overrideImperiaEnrageHealthThresholds?: number[];
    additionalEnemyEvents?: SurvivorsDifficultyEnemyEvent[];
}

export type SurvivorsDifficulties = Record<string, SurvivorsDifficultyDefinition>;

/**
 * source/survivors_enemies.txt
 */
export interface SurvivorsEnemyAttack {
    activity?: string;
    particleName?: string;
    damage?: number;
    radius?: number;
    range?: number;
    speed?: number;
    lifeTime?: number;
    maxDistance?: number;
    spawnOffset?: number;
    attackCooldown?: number;
    attackPoint?: number;
    attackOffsetForward?: number;
    attackOffsetUp?: number;
}

export interface SurvivorsPickupChance {
    pickupName: string;
    chance: number;
    experienceReward?: number;
}

export interface SurvivorsEnemyDefinition {
    key: string;
    enemyId: number;
    className?: string;
    displayName?: string;
    statsName?: string;
    modelName?: string;
    modelNames?: string[];
    skinName?: string;
    imageThumbnail?: string;
    dotaHeroId?: number;
    styleIndex?: number;
    econItems?: number[];

    maxHealth?: number;
    maxHealthPerPlayerLevel?: number;
    touchDamage?: number;
    moveSpeed?: number;
    turnRate?: number;
    mass?: number;
    collisionRadius?: number;
    deathDuration?: number;
    knockbackResistance?: number;
    statusResistance?: number;
    overrideDespawnRadiusBuffer?: number;
    minSeparationDistanceFromEnemies?: number;
    modelScale?: number;
    maxModelScale?: number;
    maxModelScaleVariance?: number;
    moveAnimPlaybackRate?: number;

    movementBehavior?: string;
    movementCapability?: string;
    separationLayer?: string;
    sinMovementAngle?: number;
    sinMovementPeriodMultiplier?: number;
    fixedFacing?: NumberVector;

    activityIdle?: string;
    activityMove?: string;
    activityDie?: string;
    deathEffectParticle?: string;

    hasDeathAnimation?: boolean;
    playDeathSound?: boolean;
    dissolveOnDeath?: boolean;
    showHealthBar?: boolean;
    hasSolidBody?: boolean;
    hasGlowOutline?: boolean;
    overrideGlowColor?: boolean;
    overriddenGlowColor?: NumberVector;
    useHeroModel?: boolean;
    randomFacing?: boolean;
    playerFacing?: boolean;
    centerRooted?: boolean;
    rotates?: boolean;
    invulnerable?: boolean;
    undespawnable?: boolean;
    dieOnTouch?: boolean;
    isElite?: boolean;
    isDestructible?: boolean;
    playerFriendly?: boolean;
    randomizeSinTurnTimerOnSpawn?: boolean;

    attacks?: SurvivorsEnemyAttack[];
    pickupChances?: SurvivorsPickupChance[];
    lootTable?: SurvivorsLootEntryCollection[];
    fullLootTable?: SurvivorsLootTable;

    splitOnDeathEnemyId?: number;
    splitOnDeathNumUnits?: number;
    splitOnDeathKnockbackDistance?: number;

    numResurrectionTimes?: number;
    resurrectParticleName?: string;
    movementSpeedMultiplierPerDeath?: number;

    absorbRadius?: number;
    absorbParticleName?: string;
    percentHealthAbsorbed?: number;
    modelScaleIncreasePerAbsorb?: number;

    initialEnrageTime?: number;
    incrementalEnrageTime?: number;
    mandatoryEnrageHealthThresholds?: number[];

    magicMissileParticle?: string;
    magicMissileDamage?: number;
    magicMissileProjectileRadius?: number;
    magicMissileProjectileSpeed?: number;
    magicMissileProjectileSpeedIncreasePerEnrage?: number;
    numMagicMissiles?: number;

    burningGroundImpactParticleName?: string;
    burningGroundBurnParticleName?: string;
    burningGroundDoTParticleName?: string;
    burningGroundImpactDamage?: number;
    burningGroundImpactRadius?: number;
    burningGroundImpactSpawnDelay?: number;
    burningGroundImpactStunDuration?: number;
    burningGroundDoTDamage?: number;
    burningGroundDoTDuration?: number;
    burningGroundFlamesDuration?: number;
    burningGroundInstancesPerEnrageLevel?: number;

    radiateRaysBuffParticle?: string;
    radiateRaysRayParticle?: string;
    radiateRaysAngle?: number;
    radiateRaysCastStartDuration?: number;
    radiateRaysDamage?: number;
    radiateRaysDuration?: number;
    radiateRaysInterval?: number;
    radiateRaysProjectileRadius?: number;
    radiateRaysSpeed?: number;

    demonPortalsPortalParticle?: string;
    demonPortalsTelegraphParticle?: string;
    demonPortalDeactivateRadius?: number;
    demonPortalDeactivateTime?: number;
    demonPortalsNumToCreate?: number;
    maxDemonPortalCount?: number;
    demonPortalSpawners?: string[];

    imperiaAmbientBody?: string;
    imperiaAmbientWings?: string;
}

export type SurvivorsEnemies = Record<string, SurvivorsEnemyDefinition>;

/**
 * source/survivors_game_modes.txt
 */
export interface SurvivorsSeparationLayerData {
    separationLayer: string;
    seperationDistance: number; // original spelling in KV3
}

export interface SurvivorsTimeBasedLightingEnvironment {
    startTime?: number;
    endTime?: number;
    lightingEnvironment?: string;
    lightDirection?: number[];
    globalLightScale?: number;
    pointLightScale?: number;
    lightColor?: number[];
    fogColor?: number[];
    fogStart?: number;
    fogEnd?: number;
    skyboxScale?: number;
    shadowColor?: number[];
    [key: string]: any;
}

export interface SurvivorsEliteRoomChoice {
    // Shape is sparse in the source; keep extensible for future fields.
    [key: string]: string | number | boolean | number[] | string[] | undefined;
}

export interface SurvivorsGameModeDefinition {
    key: string;
    gameModeId: number;
    difficultyName?: string;
    levelName?: string;

    maxActiveSlots?: number;
    maxPassiveSlots?: number;
    levelUpChoices?: number;
    maxXPPickupsInWorld?: number;
    initialItemSpawns?: number;
    initialMagnetSpawns?: number;

    requiredExperienceBase?: number;
    requiredExperienceExponent?: number;
    levelUpDelay?: number;
    levelUpKnockbackDistance?: number;
    levelUpKnockbackRadius?: number;
    playerReviveTimer?: number;
    playerPositionHistoryBufferDuration?: number;

    enemyRadius?: number;
    enemyRadiusVariance?: number;
    enemyDespawnBuffer?: number;
    enemyDespawnTime?: number;
    seperationVelocityInfluence?: number; // original spelling in KV3
    seperationVelocityInterpolationSpeed?: number; // original spelling in KV3
    seperationLayerData?: SurvivorsSeparationLayerData[];

    newItemGenerationWeight?: number;
    existingItemGenerationWeight?: number;
    passiveItemGenerationWeight?: number;

    firstFloorTimeLimit?: number;
    cameraOffset?: Vector3;
    eliteGlowColor?: Vector3;
    eliteRoomUnlockTimes?: number[];
    eliteRoomChoices?: (SurvivorsEliteRoomChoice | string)[];
    eliteRoomTriggerRadius?: number;
    eliteRoomTriggerChannelTime?: number;

    attackIndicatorParticleEffect?: string;
    collisionIndicatorEffect?: string;
    collisionIndicatorColorEnemy?: Vector3;
    collisionIndicatorColorPlayer?: Vector3;
    damageNumbersEffectCriticalStrike?: string;
    damageNumbersEffectEnemy?: string;
    damageNumbersEffectPlayer?: string;
    eliteRoomChannelEffect?: string;
    eliteRoomDirectionalArrowEffect?: string;
    genericStunEffect?: string;
    healthBarEffect?: string;
    levelUpEffect?: string;
    levelUpKnockbackEffect?: string;
    physicalWeaknessEffect?: string;
    playerHitEffect?: string;
    reviveEffect?: string;

    luckyLootTable?: SurvivorsLootTable;
    timeBasedLightingEnvironments?: SurvivorsTimeBasedLightingEnvironment[];
}

export type SurvivorsGameModes = Record<string, SurvivorsGameModeDefinition>;

/**
 * source/survivors_heroes.txt
 */
export interface SurvivorsHeroDefinition {
    key: string;
    heroId: number;
    dotaHeroId: number;
    locDisplayName: string;
    styleIndex?: number;
    playerHitSoundEvent?: string;
    econItems?: number[];
    startingPowerUps?: number[];
    innatePowerUps?: number[];
    baseAttributes?: SurvivorsAttributeValue[];
}

export type SurvivorsHeroes = Record<string, SurvivorsHeroDefinition>;

/**
 * source/survivors_levels.txt
 */
export interface SurvivorsLevelEvent {
    spawnerName: string;
    startTime: number;
    endTime?: number;
    spawnIntervalOverride?: number;
    minimumEnemyCountOverride?: number;
    maxSpawnCountPerIntervalOverride?: number;
}

export interface SurvivorsLevelDefinition {
    key: string;
    levelId: number;
    mapBounds?: Vector2;
    entityBounds?: Vector2;
    events?: SurvivorsLevelEvent[];
    bossEvents?: SurvivorsLevelEvent[];
}

export type SurvivorsLevels = Record<string, SurvivorsLevelDefinition>;

/**
 * source/survivors_pickups.txt
 */
export interface SurvivorsPickupDefinition {
    key: string;
    pickupId: number;
    particleEffect?: string;
    onPickupOverheadEffect?: string;
    directionalHelperParticle?: string;
    dropSoundEvent?: string;
    minimapIconSnippet?: string;
    modelIndex?: number;
    goldAmount?: number;
    healAmount?: number;
    treasureVariant?: number;
    maxSpawnVelocity?: number;
    canSpawnWithVelocity?: boolean;
    rewardsTreasure?: boolean;
    showInMinimap?: boolean;
}

export type SurvivorsPickups = Record<string, SurvivorsPickupDefinition>;

/**
 * source/survivors_powerups.txt
 */
export interface PowerUpAttribute {
    type: string; // e.g., "k_eSurvivorsAttribute_Damage_Magical"
    value: number;
}

export interface UpgradeChoice {
    rarity?: string; // e.g., "RARITY_COMMON"
    attributes?: PowerUpAttribute[];
    upgradeAttributes?: PowerUpAttribute[];
    globalUpgradeAttributes?: PowerUpAttribute[];
}

export interface SurvivorsPowerUpDefinition {
    key: string;
    powerUpId: number;
    className?: string; // Matches _class in KV3
    image: string;
    locAbilityName: string;
    locAbilityDesc?: string;
    locScepterAbilityDesc?: string;
    sourceHero?: string; // e.g., "vengefulspirit"
    maxLevel: number;
    isPassive?: boolean;
    rollable?: boolean;
    isGold?: boolean;
    isInnate?: boolean;
    isScepterUpgradeable?: boolean;
    recipeItems?: number[]; // Array of PowerUpIDs needed to craft
    tooltipAttributes?: string[];
    baseAttributes?: PowerUpAttribute[];
    authoredUpgradeChoices?: UpgradeChoice[];
    minorUpgradeChoices?: UpgradeChoice[];
    particle?: string;
    source?: string;
    heroId?: number;
    modifierParticle?: string;
    stunParticle?: string;
    hitStatusEffectParticle?: string;
    heroImage?: string;
    modifierParticleUsesOverheadOffset?: boolean;
    impactParticle?: string;
    locHeroName?: string;
    targeting?: string;
    [key: string]: any;
}

/**
 * source/survivors_spawners.txt
 */
export interface SurvivorsSpawnerDefinition {
    key: string;
    className?: string;
    enemyName: string;
    enemyDisplayName?: string;
    spawnBehavior?: string;
    spawnPositionsLayer?: string;
    spawnInfoTargetName?: string;
    spawnParticle?: string;
    invulnerableParticle?: string;
    invulnerableSkinName?: string;
    minimapIconClass?: string;

    minimumEnemyCount?: number;
    maxSpawnCountPerInterval?: number;
    overflowEnemySpawnCount?: number;
    spawnInterval?: number;
    spawnChance?: number;
    spawnOvalRadius?: Vector2;
    fixedDirectionSpawnDistanceVariance?: number;
    perpendicularWallSpacing?: number;
    minimumDistanceBetween?: number;
    destroyDistance?: number;

    isPersistant?: boolean; // original spelling in KV3
    resetSpawnIntervalOnKill?: boolean;
    ignoreDifficultySpawnMultiplier?: boolean;
}

export type SurvivorsSpawners = Record<string, SurvivorsSpawnerDefinition>;
