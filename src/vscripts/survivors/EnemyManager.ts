import { SURVIVORS_ENEMIES } from "./SurvivorsEnemies";
import { SurvivorsEnemyDefinition, SurvivorsLevelEvent, SurvivorsSpawnerDefinition } from "./SurvivorsInterface";
import { PickupManager } from "./PickupManager";
import { SURVIVORS_LEVELS } from "./SurvivorsLevels";
import { SURVIVORS_SPAWNERS } from "./SurvivorsSpawners";

type SurvivorsEnemyRuntimeData = {
    entityIndex: EntityIndex;
    unit: CDOTA_BaseNPC;
    definition: SurvivorsEnemyDefinition;
    lastTouchDamageTime: number;
    spawnerName?: string;
    posX: number;
    posY: number;
    initialDirection: Vector; // Added for LINEAR tracking
    spawnTime: number;        // Added for SIN_WAVE tracking
};

export class EnemyManager {
    private enemies = new Map<EntityIndex, SurvivorsEnemyRuntimeData>();
    private running = false;
    private runStartTime = 0;
    private spawnerLastTick = new Map<string, number>();

    constructor(
        private getPlayerHero: () => CDOTA_BaseNPC_Hero | undefined,
        private pickupManager: PickupManager,
        private isPaused?: () => boolean,
    ) {}

    public start(runStartTime: number) {
        if (this.running) return;

        this.running = true;
        this.runStartTime = runStartTime;

        Timers.CreateTimer(() => {
            this.updateEnemies();
            this.updateSpawners();
            return 0.05;
        });

        print("[ENEMY] EnemyManager started");
    }

    public spawnEnemy(enemyKey: keyof typeof SURVIVORS_ENEMIES, position: Vector, spawnerName?: string): CDOTA_BaseNPC | undefined {
        const definition = SURVIVORS_ENEMIES[enemyKey];

        if (!definition) {
            print(`[ENEMY] Unknown enemy key: ${tostring(enemyKey)}`);
            return undefined;
        }

        // --- C++ NAVMESH SAFETY CHECK ---
        // If the coordinate is invalid, snap to the nearest traversable point.
        if (!GridNav.IsTraversable(position) || GridNav.IsBlocked(position)) {
            let closestValidPos: Vector | undefined;
            const sampleStep = 32;
            const maxRadius = 256;

            for (let radius = sampleStep; radius <= maxRadius && !closestValidPos; radius += sampleStep) {
                const samples = 8 + math.floor(radius / sampleStep) * 4;
                for (let i = 0; i < samples; i++) {
                    const angle = (i / samples) * math.pi * 2;
                    const candidate = Vector(
                        position.x + math.cos(angle) * radius,
                        position.y + math.sin(angle) * radius,
                        position.z,
                    );

                    if (GridNav.IsTraversable(candidate) && !GridNav.IsBlocked(candidate)) {
                        closestValidPos = candidate;
                        break;
                    }
                }
            }

            if (closestValidPos) {
                position = closestValidPos;
            } else {
                // Absolute failsafe fallback: if stuck near a void wall, snap near the player.
                const hero = this.getPlayerHero();
                if (hero) position = (hero.GetAbsOrigin() + RandomVector(400)) as Vector;
            }
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

        // Explicitly lock onto valid floor geometry.
        FindClearSpaceForUnit(enemy, position, true);

        this.applyDefinition(enemy, definition);
        const actualPos = enemy.GetAbsOrigin();
        const entityIndex = enemy.GetEntityIndex();

        const hero = this.getPlayerHero();
        const heroPos = hero ? hero.GetAbsOrigin() : Vector(0,0,0);
        
        // Calculate the initial facing direction (essential for LINEAR swarms sweeping the screen)
        const initialDir = (actualPos.x === heroPos.x && actualPos.y === heroPos.y) ? 
            Vector(1, 0, 0) : 
            Vector(heroPos.x - actualPos.x, heroPos.y - actualPos.y, 0).Normalized();

        this.enemies.set(entityIndex, {
            entityIndex,
            unit: enemy,
            definition,
            lastTouchDamageTime: 0,
            spawnerName: spawnerName,
            posX: actualPos.x,
            posY: actualPos.y,
            initialDirection: initialDir,
            spawnTime: GameRules.GetGameTime()
        });

        return enemy;
    }

    public getEnemiesInRadiusFast(x: number, y: number, radius: number): CDOTA_BaseNPC[] {
        const result: CDOTA_BaseNPC[] = [];
        const radSq = radius * radius;

        for (const runtime of this.enemies.values()) {
            const dx = runtime.posX - x;
            const dy = runtime.posY - y;

            if (dx * dx + dy * dy <= radSq) {
                if (runtime.unit && !runtime.unit.IsNull() && runtime.unit.IsAlive()) {
                    result.push(runtime.unit);
                }
            }
        }

        return result;
    }

    public getNearestEnemy(origin: Vector, range: number): CDOTA_BaseNPC | undefined {
        let closest: CDOTA_BaseNPC | undefined;
        let closestDistance = range;

        for (const runtime of this.enemies.values()) {
            const enemy = runtime.unit;
            if (!enemy || enemy.IsNull() || !enemy.IsAlive()) continue;

            const dx = runtime.posX - origin.x;
            const dy = runtime.posY - origin.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= closestDistance) {
                closestDistance = distance;
                closest = enemy;
            }
        }

        return closest;
    }

    public getEnemiesInRadius(origin: Vector, radius: number): CDOTA_BaseNPC[] {
        return this.getEnemiesInRadiusFast(origin.x, origin.y, radius);
    }

    public handleEnemyKilled(enemy: CDOTA_BaseNPC) {
        const entityIndex = enemy.GetEntityIndex();
        const runtime = this.enemies.get(entityIndex);

        if (!runtime) return;

        const position = enemy.GetAbsOrigin();

        this.dropPickups(runtime.definition, position);
        this.enemies.delete(entityIndex);
    }

    public getEnemies(): CDOTA_BaseNPC[] {
        const result: CDOTA_BaseNPC[] = [];
        for (const runtime of this.enemies.values()) {
            const enemy = runtime.unit;
            if (enemy && !enemy.IsNull() && enemy.IsAlive()) {
                result.push(enemy);
            }
        }
        return result;
    }

    private applyDefinition(enemy: CDOTA_BaseNPC, definition: SurvivorsEnemyDefinition) {
        const modelName = definition.modelNames?.[0];

        if (modelName) {
            enemy.SetOriginalModel(modelName);
            enemy.SetModel(modelName);
        }

        let finalMaxHealth = definition.maxHealth || 0;

        if (definition.maxHealthPerPlayerLevel) {
            const hero = this.getPlayerHero();
            const playerLevel = (hero && !hero.IsNull()) ? hero.GetLevel() : 1;
            finalMaxHealth += (definition.maxHealthPerPlayerLevel * playerLevel);
        }

        if (finalMaxHealth <= 0) {
            finalMaxHealth = 1; 
        }

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

        enemy.AddNewModifier(enemy, undefined, "modifier_phased", {});
        enemy.AddNewModifier(enemy, undefined, "modifier_hide_healthbar", {});
    }

    private updateEnemies() {
        if (this.isPaused?.()) return;

        const hero = this.getPlayerHero();
        if (!hero || hero.IsNull() || !hero.IsAlive()) return;

        const heroPos = hero.GetAbsOrigin();
        const now = GameRules.GetGameTime();

        const hx = heroPos.x;
        const hy = heroPos.y;

        const activeEnemies = Array.from(this.enemies.values());
        
        // --- SPATIAL HASHING (Eliminates O(N^2) Lag) ---
        const cellSize = 200; 
        const grid = new Map<string, SurvivorsEnemyRuntimeData[]>();
        
        for (const runtime of activeEnemies) {
            const cellX = math.floor(runtime.posX / cellSize);
            const cellY = math.floor(runtime.posY / cellSize);
            const key = `${cellX},${cellY}`;
            let cell = grid.get(key);
            if (!cell) {
                cell = [];
                grid.set(key, cell);
            }
            cell.push(runtime);
        }
        // -----------------------------------------------

        for (const runtime of activeEnemies) {
            const enemy = runtime.unit;

            if (!enemy || enemy.IsNull() || !enemy.IsAlive()) {
                this.enemies.delete(runtime.entityIndex);
                continue;
            }

            const dx = hx - runtime.posX;
            const dy = hy - runtime.posY;
            const distSquared = dx * dx + dy * dy;

            if (distSquared > 576) {
                const distance = Math.sqrt(distSquared);
                
                let sepX = 0;
                let sepY = 0;
                let overlapCount = 0;

                // Adjust push radius depending on enemy type size to prevent large elites bouncing 
                const sepRadius = runtime.definition.separationLayer === "ELITE" ? 180 : 
                                  runtime.definition.separationLayer === "LARGE" ? 120 : 80;
                const sepRadiusSq = sepRadius * sepRadius;

                // Only check neighbors inside nearby cells, vastly accelerating loops
                const cellX = math.floor(runtime.posX / cellSize);
                const cellY = math.floor(runtime.posY / cellSize);

                for (let cx = cellX - 1; cx <= cellX + 1; cx++) {
                    for (let cy = cellY - 1; cy <= cellY + 1; cy++) {
                        const cell = grid.get(`${cx},${cy}`);
                        if (cell) {
                            for (const other of cell) {
                                if (other.entityIndex === runtime.entityIndex) continue;
                                if (other.definition.separationLayer === "OFF") continue; // Flyers/Ghosts naturally stack

                                const odx = runtime.posX - other.posX;
                                const ody = runtime.posY - other.posY;
                                const odistSq = odx * odx + ody * ody;

                                if (odistSq > 0 && odistSq < sepRadiusSq) {
                                    const odist = Math.sqrt(odistSq);
                                    const pushStrength = (sepRadius - odist) / sepRadius;
                                    sepX += (odx / odist) * pushStrength;
                                    sepY += (ody / odist) * pushStrength;
                                    overlapCount++;
                                }
                            }
                        }
                    }
                }

                let sepVector = Vector(0, 0, 0);
                if (overlapCount > 0) {
                    sepVector = Vector(sepX / overlapCount, sepY / overlapCount, 0);
                }

                if (runtime.definition.separationLayer === "OFF") {
                    sepVector = Vector(0,0,0);
                }

                this.moveEnemyTowardHero(runtime, Vector(dx, dy, 0), distance, sepVector);
            }

            if (distSquared <= 12100) {
                this.applyTouchDamage(enemy, hero, runtime, now);
            }
        }
    }

    private moveEnemyTowardHero(
        runtime: SurvivorsEnemyRuntimeData,
        toHero: Vector,
        distance: number,
        sepVector: Vector = Vector(0, 0, 0),
    ) {
        const definition = runtime.definition;
        const enemy = runtime.unit;

        if (definition.movementBehavior === "ENEMY_MOVEMENT_BEHAVIOR_STATIONARY") return;
        if (distance <= 24) return;

        let direction = toHero.Normalized();

        // LINEAR forces the enemy to continue in the direction it spawned in instead of collapsing inward
        if (definition.movementBehavior === "ENEMY_MOVEMENT_BEHAVIOR_LINEAR") {
            direction = runtime.initialDirection;
        } else if (definition.movementBehavior === "ENEMY_MOVEMENT_BEHAVIOR_LINEAR_SIN_WAVE") {
            const timeAlive = GameRules.GetGameTime() - runtime.spawnTime;
            const period = definition.sinMovementPeriodMultiplier ?? 1;
            const amplitude = definition.sinMovementAngle ?? 30;
            
            const angleOffset = math.sin(timeAlive * math.pi * 2 / period) * amplitude;
            const rad = angleOffset * math.pi / 180;
            const c = math.cos(rad);
            const s = math.sin(rad);

            direction = Vector(
                runtime.initialDirection.x * c - runtime.initialDirection.y * s,
                runtime.initialDirection.x * s + runtime.initialDirection.y * c,
                0
            ).Normalized();
        }

        if (sepVector.x !== 0 || sepVector.y !== 0) {
            const weight = 1.2; 
            direction.x += sepVector.x * weight;
            direction.y += sepVector.y * weight;
            
            const len = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
            if (len > 0.001) {
                direction.x /= len;
                direction.y /= len;
            } else {
                direction = toHero.Normalized();
            }
        }

        const speed = definition.moveSpeed ?? 200;
        const dt = 0.05;

        const origin = enemy.GetAbsOrigin();
        const nextPos = Vector(
            origin.x + direction.x * speed * dt,
            origin.y + direction.y * speed * dt,
            origin.z,
        );

        enemy.SetForwardVector(direction);
        enemy.SetAbsOrigin(nextPos);

        runtime.posX = nextPos.x;
        runtime.posY = nextPos.y;

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
        ApplyDamage({ victim: hero, attacker: enemy, damage, damage_type: DamageTypes.PHYSICAL });
    }

    private dropPickups(definition: SurvivorsEnemyDefinition, position: Vector) {
        for (const pickup of definition.pickupChances ?? []) {
            if (pickup.pickupName !== "experience") continue;
            if (RandomFloat(0, 1) <= (pickup.chance ?? 0)) {
                this.pickupManager.spawnExperience(position, pickup.experienceReward ?? 1);
            }
        }

        if (definition.lootTable) {
            const roll = RandomFloat(0, 1);
            let cumulative = 0;
            for (const item of definition.lootTable) {
                cumulative += item.chance ?? 0;
                if (roll <= cumulative) {
                    if (item.pickupName !== "nothing") {
                        const rewardAmt = item.pickupName === "cheese" ? 10 : 5;
                        this.pickupManager.spawnExperience(position, rewardAmt);
                    }
                    break;
                }
            }
        }

        if (definition.fullLootTable && definition.fullLootTable.lootEntryCollections) {
            const roll = RandomFloat(0, 1);
            let cumulative = 0;
            for (const collection of definition.fullLootTable.lootEntryCollections) {
                cumulative += collection.chance ?? 0;
                if (roll <= cumulative) {
                    for (const entry of collection.lootEntries ?? []) {
                        this.pickupManager.spawnExperience(position, (entry.maxAmount ?? 1) * 2);
                    }
                    break;
                }
            }
        }
    }

    private getXpReward(definition: SurvivorsEnemyDefinition): number {
        const xpPickup = definition.pickupChances?.find(pickup => pickup.pickupName === "experience");
        return xpPickup?.experienceReward ?? 0;
    }

    private updateSpawners() {
        if (this.isPaused?.()) return;

        const timeElapsed = GameRules.GetGameTime() - this.runStartTime;
        const currentLevel = SURVIVORS_LEVELS["skywrath"];

        if (!currentLevel) return;

        const allEvents = [
            ...(currentLevel.events ?? []),
            ...(currentLevel.bossEvents ?? []),
        ];

        const activeEvents = allEvents.filter(
            e => timeElapsed >= e.startTime && (e.endTime === undefined || timeElapsed <= e.endTime)
        );

        for (const event of activeEvents) {
            this.processSpawnerEvent(event, timeElapsed);
        }

        for (const [key, spawnerDef] of Object.entries(SURVIVORS_SPAWNERS)) {
            const isStatic = spawnerDef.spawnBehavior === "STATIC_IN_MAP" || spawnerDef.spawnBehavior === "STATIC_IN_MAP_IGNORE_PLAYER_RADIUS";
            if (isStatic) {
                const drivenByEvent = activeEvents.some(e => e.spawnerName === key);
                if (!drivenByEvent) {
                    this.processImplicitSpawner(spawnerDef, timeElapsed);
                }
            }
        }
    }

    private processImplicitSpawner(spawnerDef: SurvivorsSpawnerDefinition, timeElapsed: number) {
        const interval = spawnerDef.spawnInterval ?? 1;
        const lastSpawnTime = this.spawnerLastTick.get(spawnerDef.key) ?? 0;

        if (timeElapsed - lastSpawnTime >= interval || lastSpawnTime === 0) {
            this.spawnerLastTick.set(spawnerDef.key, timeElapsed);

            let currentActive = 0;
            for (const [_, runtime] of this.enemies) {
                if (runtime.spawnerName === spawnerDef.key) currentActive++;
            }

            const targetMin = spawnerDef.minimumEnemyCount ?? 1;
            const maxPerInterval = spawnerDef.maxSpawnCountPerInterval ?? targetMin;
            const toSpawn = math.min(targetMin - currentActive, maxPerInterval);

            if (toSpawn > 0) this.executeSpawn(spawnerDef, toSpawn);
        }
    }

    private processSpawnerEvent(event: SurvivorsLevelEvent, timeElapsed: number) {
        const spawnerDef = SURVIVORS_SPAWNERS[event.spawnerName];
        if (!spawnerDef) return;

        const interval = event.spawnIntervalOverride ?? spawnerDef.spawnInterval ?? 1;
        const lastSpawnTime = this.spawnerLastTick.get(event.spawnerName) ?? 0;

        if (timeElapsed - lastSpawnTime >= interval || lastSpawnTime === 0) {
            this.spawnerLastTick.set(event.spawnerName, timeElapsed);

            let currentActive = 0;
            for (const [_, runtime] of this.enemies) {
                if (runtime.spawnerName === event.spawnerName) currentActive++;
            }

            const targetMin = event.minimumEnemyCountOverride ?? spawnerDef.minimumEnemyCount ?? 1;
            const maxPerInterval = event.maxSpawnCountPerIntervalOverride ?? spawnerDef.maxSpawnCountPerInterval ?? 10;
            
            const toSpawn = math.min(targetMin - currentActive, maxPerInterval);
            if (toSpawn > 0) this.executeSpawn(spawnerDef, toSpawn);
        }
    }

    private findSpawnTargets(targetName: string): CBaseEntity[] {
        let targets = Entities.FindAllByName(targetName);
        if (targets && targets.length > 0) return targets;

        targets = Entities.FindAllByName(`[PR#]${targetName}`);
        if (targets && targets.length > 0) return targets;

        const infoTargets = Entities.FindAllByClassname("info_target");
        const matched: CBaseEntity[] = [];
        for (const ent of infoTargets) {
            if (ent.GetName().includes(targetName)) {
                matched.push(ent);
            }
        }
        
        return matched;
    }

    private executeSpawn(spawner: SurvivorsSpawnerDefinition, count: number) {
        // --- 1. HANDLE STATIC MAP & DESTRUCTIBLE EVENTS (Vases, Boxes, Towers) ---
        const isStaticMap = spawner.spawnBehavior === "STATIC_IN_MAP" || spawner.spawnBehavior === "STATIC_IN_MAP_IGNORE_PLAYER_RADIUS";
        const isVaseRandom = spawner.spawnPositionsLayer === "DESTRUCTIBLE_MAIN" || spawner.key === "vase_random";

        if (isStaticMap || isVaseRandom) {
            const targetName = spawner.spawnInfoTargetName ?? "destructible_spawn_vase";

            // Try to find the entities baked into the map.
            let targetEnts = Entities.FindAllByName(targetName);

            // If map anchors are missing, derive candidates from generic info_target nodes.
            if (targetEnts.length === 0) {
                targetEnts = Entities.FindAllByClassname("info_target").filter(ent => {
                    const name = ent.GetName();
                    return name.includes("pillar") || name.includes("spawn") || name.includes("drop");
                });
            }

            if (targetEnts.length > 0) {
                // Filter out positions that already have nearby enemies.
                const freeSpots = targetEnts.filter(ent => {
                    const pos = ent.GetAbsOrigin();
                    for (const runtime of this.enemies.values()) {
                        const dx = runtime.posX - pos.x;
                        const dy = runtime.posY - pos.y;
                        if ((dx * dx) + (dy * dy) < 40000) return false;
                    }
                    return true;
                });

                if (freeSpots.length > 0) {
                    for (let i = freeSpots.length - 1; i > 0; i--) {
                        const j = math.floor(RandomFloat(0, i + 1));
                        const temp = freeSpots[i];
                        freeSpots[i] = freeSpots[j];
                        freeSpots[j] = temp;
                    }

                    const spawnCount = math.min(count, freeSpots.length);
                    for (let i = 0; i < spawnCount; i++) {
                        const finalPos = (freeSpots[i].GetAbsOrigin() + RandomVector(RandomFloat(10, 50))) as Vector;
                        this.spawnEnemy(spawner.enemyName as any, finalPos, spawner.key);
                    }
                    return;
                }
            }
            return;
        }

        // --- 2. HANDLE STANDARD RADIAL MONSTER SPAWNS ---
        const hero = this.getPlayerHero();
        if (!hero || hero.IsNull() || !hero.IsAlive()) return;

        const center = hero.GetAbsOrigin();
        const baseRadius = 1850;
        const radiusVariance = 450;

        const fixedAngle = RandomFloat(0, math.pi * 2);

        for (let i = 0; i < count; i++) {
            let spawnAngle = fixedAngle;

            if (spawner.spawnBehavior === "RANDOM_DIRECTION" || !spawner.spawnBehavior) {
                spawnAngle = RandomFloat(0, math.pi * 2);
            }

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