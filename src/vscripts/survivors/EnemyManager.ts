import { SURVIVORS_ENEMIES } from "./SurvivorsEnemies";
import { SurvivorsEnemyDefinition, SurvivorsLevelEvent, SurvivorsSpawnerDefinition } from "./SurvivorsInterface";
import { PickupManager } from "./PickupManager";

// 1. Import your level and spawner data
import { SURVIVORS_LEVELS } from "./SurvivorsLevels";
import { SURVIVORS_SPAWNERS } from "./SurvivorsSpawners";

type SurvivorsEnemyRuntimeData = {
    definition: SurvivorsEnemyDefinition;
    lastTouchDamageTime: number;
    spawnerName?: string; // Track which spawner created this enemy
};

export class EnemyManager {
    private enemies = new Map<EntityIndex, SurvivorsEnemyRuntimeData>();
    private running = false;
    private runStartTime = 0; // Track when the run started
    private spawnerLastTick = new Map<string, number>(); // Track the last time a spawner fired

    constructor(
        private getPlayerHero: () => CDOTA_BaseNPC_Hero | undefined,
        private pickupManager: PickupManager,
        private isPaused?: () => boolean,
    ) {}

    // 2. Accept runStartTime so we can sync with the timeline
    public start(runStartTime: number) {
        if (this.running) return;

        this.running = true;
        this.runStartTime = runStartTime;

        Timers.CreateTimer(() => {
            this.updateEnemies();
            this.updateSpawners(); // Run the wave spawner logic every tick
            return 0.05;
        });

        print("[ENEMY] EnemyManager started");
    }

    // Update your spawnEnemy function to let us track the spawnerName
    public spawnEnemy(enemyKey: keyof typeof SURVIVORS_ENEMIES, position: Vector, spawnerName?: string): CDOTA_BaseNPC | undefined {
        const definition = SURVIVORS_ENEMIES[enemyKey];

        if (!definition) {
            print(`[ENEMY] Unknown enemy key: ${tostring(enemyKey)}`);
            return undefined;
        }

        const enemy = CreateUnitByName(
            "npc_survivors_enemy",
            position,
            true,
            undefined,
            undefined,
            DotaTeam.BADGUYS,
        );

        if (!enemy) {
            print(`[ENEMY] Failed to spawn enemy: ${tostring(enemyKey)}`);
            return undefined;
        }

        this.applyDefinition(enemy, definition);
        this.enemies.set(enemy.GetEntityIndex(), {
            definition,
            lastTouchDamageTime: 0,
            spawnerName: spawnerName, // Save the spawner source
        });

        return enemy;
    }

    public getNearestEnemy(origin: Vector, range: number): CDOTA_BaseNPC | undefined {
        let closest: CDOTA_BaseNPC | undefined;
        let closestDistance = range;

        for (const [entityIndex] of this.enemies) {
            const enemy = EntIndexToHScript(entityIndex) as CDOTA_BaseNPC | undefined;
            if (!enemy || enemy.IsNull() || !enemy.IsAlive()) continue;

            const distance = ((enemy.GetAbsOrigin() - origin) as Vector).Length2D();
            if (distance <= closestDistance) {
                closestDistance = distance;
                closest = enemy;
            }
        }

        return closest;
    }

    public getEnemiesInRadius(origin: Vector, radius: number): CDOTA_BaseNPC[] {
        const result: CDOTA_BaseNPC[] = [];

        for (const [entityIndex] of this.enemies) {
            const enemy = EntIndexToHScript(entityIndex) as CDOTA_BaseNPC | undefined;
            if (!enemy || enemy.IsNull() || !enemy.IsAlive()) continue;

            const distance = ((enemy.GetAbsOrigin() - origin) as Vector).Length2D();
            if (distance <= radius) {
                result.push(enemy);
            }
        }

        return result;
    }

    public handleEnemyKilled(enemy: CDOTA_BaseNPC) {
        const entityIndex = enemy.GetEntityIndex();
        const runtime = this.enemies.get(entityIndex);

        if (!runtime) return;

        const position = enemy.GetAbsOrigin();

        this.dropPickups(runtime.definition, position);
        this.enemies.delete(entityIndex);
    }

    public spawnRing(enemyKey: keyof typeof SURVIVORS_ENEMIES, count: number, radius: number) {
        const hero = this.getPlayerHero();
        if (!hero || hero.IsNull()) return;

        const center = hero.GetAbsOrigin();

        for (let i = 0; i < count; i++) {
            const angle = (math.pi * 2 * i) / count;
            const spawnPos = Vector(
                center.x + math.cos(angle) * radius,
                center.y + math.sin(angle) * radius,
                center.z,
            );

            this.spawnEnemy(enemyKey, spawnPos);
        }
    }

    private applyDefinition(enemy: CDOTA_BaseNPC, definition: SurvivorsEnemyDefinition) {
        const modelName = definition.modelNames?.[0];

        if (modelName) {
            enemy.SetOriginalModel(modelName);
            enemy.SetModel(modelName);
        }

        // 1. Calculate the dynamic health based on player level
        let finalMaxHealth = definition.maxHealth || 0;

        if (definition.maxHealthPerPlayerLevel) {
            const hero = this.getPlayerHero();
            const playerLevel = (hero && !hero.IsNull()) ? hero.GetLevel() : 1;
            
            // Add the scaling health
            finalMaxHealth += (definition.maxHealthPerPlayerLevel * playerLevel);
        }

        // 2. Failsafe: Never allow a unit to have 0 or less health
        if (finalMaxHealth <= 0) {
            finalMaxHealth = 1; 
            print(`[WARNING] Enemy ${definition.key} evaluated to 0 health. Defaulting to 1.`);
        }

        // 3. Apply the health
        enemy.SetBaseMaxHealth(finalMaxHealth);
        enemy.SetMaxHealth(finalMaxHealth);
        enemy.SetHealth(finalMaxHealth);

        enemy.SetBaseMoveSpeed(definition.moveSpeed ?? 200);

        if (definition.modelScale !== undefined) {
            enemy.SetModelScale(definition.modelScale);
        }

        if (definition.collisionRadius !== undefined) {
            enemy.SetHullRadius(definition.collisionRadius);
        }

        (enemy as any).__survivorsEnemyKey = definition.key;
        (enemy as any).__survivorsTouchDamage = definition.touchDamage ?? 0;
        (enemy as any).__survivorsXpReward = this.getXpReward(definition);

        // DELIBERATELY REMOVED modifier_phased SO C++ HANDLES COLLISION
        enemy.AddNewModifier(enemy, undefined, "modifier_hide_healthbar", {});
    }

    private updateEnemies() {
        if (this.isPaused?.()) return;

        const hero = this.getPlayerHero();
        if (!hero || hero.IsNull() || !hero.IsAlive()) return;

        const heroPos = hero.GetAbsOrigin();
        const now = GameRules.GetGameTime();

        for (const [entityIndex, runtime] of this.enemies) {
            const enemy = EntIndexToHScript(entityIndex) as CDOTA_BaseNPC | undefined;

            if (!enemy || enemy.IsNull() || !enemy.IsAlive()) {
                this.enemies.delete(entityIndex);
                continue;
            }

            const enemyPos = enemy.GetAbsOrigin();
            const toHero = Vector(
                heroPos.x - enemyPos.x,
                heroPos.y - enemyPos.y,
                0,
            );

            // Use the standard Length2D for movement normalization
            const distance = toHero.Length2D();

            this.moveEnemyTowardHero(enemy, runtime.definition, toHero, distance);
            
            // OPTIMIZATION: Manually calculate Squared Distance to bypass TS errors 
            // and avoid expensive engine/square root calls!
            const distSquared = (toHero.x * toHero.x) + (toHero.y * toHero.y);
            
            // 110 * 110 = 12100
            if (distSquared <= 12100) {
                this.applyTouchDamage(enemy, hero, runtime, now);
            }
        }
    }

    private moveEnemyTowardHero(
        enemy: CDOTA_BaseNPC,
        definition: SurvivorsEnemyDefinition,
        toHero: Vector,
        distance: number,
    ) {
        if (distance <= 24) return;

        const direction = toHero.Normalized();
        const speed = definition.moveSpeed ?? 200;
        const dt = 0.05;

        const origin = enemy.GetAbsOrigin();
        const nextPos = Vector(
            origin.x + direction.x * speed * dt,
            origin.y + direction.y * speed * dt,
            origin.z,
        );

        enemy.SetForwardVector(direction);

        // Highly optimized movement - no GridNav or ResolveNPCPositions
        enemy.SetAbsOrigin(nextPos);
        this.ensureMoveAnimation(enemy, definition);
    }

    private ensureMoveAnimation(enemy: CDOTA_BaseNPC, definition: SurvivorsEnemyDefinition) {
        if ((enemy as any).__survivorsMoveGestureActive === true) return;

        (enemy as any).__survivorsMoveGestureActive = true;

        const rate = definition.moveAnimPlaybackRate ?? 1;
        enemy.StartGestureWithPlaybackRate(GameActivity.DOTA_RUN, rate);
    }

    private applyTouchDamage(
        enemy: CDOTA_BaseNPC,
        hero: CDOTA_BaseNPC_Hero,
        runtime: SurvivorsEnemyRuntimeData,
        now: number,
    ) {
        const damage = runtime.definition.touchDamage ?? 0;
        if (damage <= 0) return;

        if (now - runtime.lastTouchDamageTime < 0.8) return;

        runtime.lastTouchDamageTime = now;

        ApplyDamage({
            victim: hero,
            attacker: enemy,
            damage,
            damage_type: DamageTypes.PHYSICAL,
        });

        // Suppressed console logging to prevent I/O lag when swarmed
        // print(`[ENEMY] ${runtime.definition.key} touched player for ${damage}`);
    }

    private dropPickups(definition: SurvivorsEnemyDefinition, position: Vector) {
        for (const pickup of definition.pickupChances ?? []) {
            if (pickup.pickupName !== "experience") continue;

            const chance = pickup.chance ?? 0;
            const roll = RandomFloat(0, 1);

            if (roll <= chance) {
                this.pickupManager.spawnExperience(position, pickup.experienceReward ?? 1);
            }
        }
    }

    private getXpReward(definition: SurvivorsEnemyDefinition): number {
        const xpPickup = definition.pickupChances?.find(pickup => pickup.pickupName === "experience");
        return xpPickup?.experienceReward ?? 0;
    }

    // 3. The Core Spawner Logic
    private updateSpawners() {
        if (this.isPaused?.()) return;

        const timeElapsed = GameRules.GetGameTime() - this.runStartTime;
        const currentLevel = SURVIVORS_LEVELS["skywrath"]; 
        
        if (!currentLevel || !currentLevel.events) return;

        // Find all events that are currently active in the timeline
        const activeEvents = currentLevel.events.filter(
            e => timeElapsed >= e.startTime && (e.endTime === undefined || timeElapsed <= e.endTime)
        );

        for (const event of activeEvents) {
            this.processSpawnerEvent(event, timeElapsed);
        }
    }

    private processSpawnerEvent(event: SurvivorsLevelEvent, timeElapsed: number) {
        const spawnerDef = SURVIVORS_SPAWNERS[event.spawnerName];
        if (!spawnerDef) return;

        const interval = event.spawnIntervalOverride ?? spawnerDef.spawnInterval ?? 1;
        const lastSpawnTime = this.spawnerLastTick.get(event.spawnerName) ?? 0;

        // Ensure we spawn immediately when the event starts, then on every interval
        if (timeElapsed - lastSpawnTime >= interval || lastSpawnTime === 0) {
            this.spawnerLastTick.set(event.spawnerName, timeElapsed);

            // Calculate how many enemies from this spawner are currently alive
            let currentActive = 0;
            for (const [_, runtime] of this.enemies) {
                if (runtime.spawnerName === event.spawnerName) currentActive++;
            }

            // Figure out our target deficit
            const targetMin = event.minimumEnemyCountOverride ?? spawnerDef.minimumEnemyCount ?? 1;
            const maxPerInterval = event.maxSpawnCountPerIntervalOverride ?? spawnerDef.maxSpawnCountPerInterval ?? 10;
            
            const deficit = targetMin - currentActive;
            
            // Only spawn up to the max allowed per interval so they don't all appear on the exact same frame
            const toSpawn = math.min(deficit, maxPerInterval);

            if (toSpawn > 0) {
                this.executeSpawn(spawnerDef, toSpawn);
            }
        }
    }

    private executeSpawn(spawner: SurvivorsSpawnerDefinition, count: number) {
        const hero = this.getPlayerHero();
        if (!hero || hero.IsNull() || !hero.IsAlive()) return;

        const center = hero.GetAbsOrigin();
        
        // Match the Crownfall defaults for enemy spawn radii
        const baseRadius = 1850; 
        const radiusVariance = 450; 
        
        // If FIXED_DIRECTION, all enemies in this batch spawn from the same angle
        let fixedAngle = RandomFloat(0, math.pi * 2);

        for(let i = 0; i < count; i++) {
            let spawnAngle = fixedAngle;

            // If RANDOM_DIRECTION, scatter them completely around the player
            if (spawner.spawnBehavior === "RANDOM_DIRECTION" || !spawner.spawnBehavior) {
                spawnAngle = RandomFloat(0, math.pi * 2);
            }

            // Determine final distance and position
            const dist = baseRadius + RandomFloat(0, radiusVariance);
            const spawnPos = Vector(
                center.x + math.cos(spawnAngle) * dist,
                center.y + math.sin(spawnAngle) * dist,
                center.z
            );

            this.spawnEnemy(spawner.enemyName as any, spawnPos, spawner.key);
        }
    }
}