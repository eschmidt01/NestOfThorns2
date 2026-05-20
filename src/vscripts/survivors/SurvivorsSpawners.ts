import { SurvivorsSpawners } from "./SurvivorsInterface";

export const SURVIVORS_SPAWNERS: SurvivorsSpawners = {
    "vase": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "vase",
        "minimumEnemyCount": 18,
        "spawnInterval": 30,
        "spawnBehavior": "STATIC_IN_MAP",
        "spawnInfoTargetName": "destructible_spawn_vase",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "vase"
    },
    "vase_boss": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "vase_always_cheese",
        "minimumEnemyCount": 2,
        "spawnInterval": 120,
        "spawnBehavior": "STATIC_IN_MAP",
        "spawnInfoTargetName": "destructible_spawn_vase_boss",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "vase_boss"
    },
    "vase_random": {
        "className": "CSurvivorsSpawnerDestructiblesDefinition",
        "enemyName": "vase",
        "minimumEnemyCount": 10,
        "maxSpawnCountPerInterval": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "spawnChance": 0.3,
        "minimumDistanceBetween": 200,
        "spawnPositionsLayer": "DESTRUCTIBLE_MAIN",
        "destroyDistance": 6000,
        "ignoreDifficultySpawnMultiplier": true,
        "key": "vase_random"
    },
    "box": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "box",
        "minimumEnemyCount": 8,
        "spawnInterval": 30,
        "spawnBehavior": "STATIC_IN_MAP",
        "spawnInfoTargetName": "destructible_spawn_box",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "box"
    },
    "tower": {
        "className": "CSurvivorsSpawnerTowerDefinition",
        "enemyName": "tower",
        "minimumEnemyCount": 2,
        "spawnInterval": 50000,
        "spawnBehavior": "STATIC_IN_MAP",
        "spawnInfoTargetName": "destructible_lock",
        "isPersistant": true,
        "ignoreDifficultySpawnMultiplier": true,
        "key": "tower"
    },
    "tower_boss": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "boss_tower",
        "minimumEnemyCount": 4,
        "spawnInterval": 50000,
        "spawnBehavior": "STATIC_IN_MAP_IGNORE_PLAYER_RADIUS",
        "spawnInfoTargetName": "destructible_boss_tower",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "tower_boss"
    },
    "skeleton_intro": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "skeleton_intro",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "skeleton_intro"
    },
    "skeleton": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "skeleton",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "skeleton"
    },
    "skeleton_gold": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "skeleton_gold",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "skeleton_gold"
    },
    "ogre": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "ogre",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "ogre"
    },
    "skeleton_boss": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "skeleton_boss",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "skeleton_boss"
    },
    "skeleton_boss_2": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "skeleton_boss_2",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "FIXED_DIRECTION",
        "fixedDirectionSpawnDistanceVariance": 200,
        "key": "skeleton_boss_2"
    },
    "zombie": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "zombie",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "zombie"
    },
    "zombie_torso": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "zombie_torso",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "zombie_torso"
    },
    "zombie_2": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "zombie_2",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "zombie_2"
    },
    "zombie_torso_2": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "zombie_torso_2",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "zombie_torso_2"
    },
    "satyr_fixed_direction": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "satyr",
        "minimumEnemyCount": 10,
        "spawnInterval": 1,
        "spawnBehavior": "FIXED_DIRECTION",
        "fixedDirectionSpawnDistanceVariance": 200,
        "key": "satyr_fixed_direction"
    },
    "satyr": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "satyr",
        "minimumEnemyCount": 10,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "satyr"
    },
    "mud_golem": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "mud_golem",
        "minimumEnemyCount": 10,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "mud_golem"
    },
    "satyr_boss": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "satyr_boss",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "satyr_boss"
    },
    "satyr_boss_2": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "satyr_boss_2",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "satyr_boss_2"
    },
    "eidolon": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "eidolon",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "eidolon"
    },
    "eidolon_2": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "eidolon_2",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "eidolon_2"
    },
    "hulk": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "hulk",
        "minimumEnemyCount": 1,
        "spawnInterval": 0,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "hulk"
    },
    "hellbear": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "hellbear",
        "minimumEnemyCount": 1,
        "spawnInterval": 0,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "hellbear"
    },
    "skeleton_archer_normal": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "skeleton_archer_normal",
        "minimumEnemyCount": 10,
        "spawnInterval": 0,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "skeleton_archer_normal"
    },
    "flyer_swarm": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "flyer",
        "minimumEnemyCount": 12,
        "spawnInterval": 0,
        "spawnBehavior": "FIXED_DIRECTION",
        "fixedDirectionSpawnDistanceVariance": 300,
        "key": "flyer_swarm"
    },
    "flyer_2_swarm": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "flyer",
        "minimumEnemyCount": 12,
        "spawnInterval": 0,
        "spawnBehavior": "FIXED_DIRECTION",
        "fixedDirectionSpawnDistanceVariance": 350,
        "key": "flyer_2_swarm"
    },
    "ghost_swarm": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "ghost",
        "minimumEnemyCount": 13,
        "spawnInterval": 0,
        "spawnBehavior": "FIXED_DIRECTION_PERPENDICULAR_WALL",
        "perpendicularWallSpacing": 150,
        "key": "ghost_swarm"
    },
    "catapult": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "catapult",
        "minimumEnemyCount": 12,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "catapult"
    },
    "catapult_swarm": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "catapult",
        "minimumEnemyCount": 6,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "key": "catapult_swarm"
    },
    "spider": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "spider",
        "minimumEnemyCount": 30,
        "spawnInterval": 0,
        "spawnBehavior": "FIXED_DIRECTION",
        "fixedDirectionSpawnDistanceVariance": 300,
        "key": "spider"
    },
    "spider_swarm": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "spider",
        "minimumEnemyCount": 30,
        "spawnInterval": 0,
        "spawnBehavior": "FIXED_DIRECTION",
        "fixedDirectionSpawnDistanceVariance": 400,
        "key": "spider_swarm"
    },
    "eidolon_swarm": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "eidolon",
        "minimumEnemyCount": 30,
        "spawnInterval": 0,
        "spawnBehavior": "FIXED_DIRECTION",
        "fixedDirectionSpawnDistanceVariance": 400,
        "key": "eidolon_swarm"
    },
    "elite_resurrecting_enemy": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "resurrector",
        "enemyDisplayName": "#DOTA_VData_survivors_spawners_elite_resurrecting_enemy_EnemyDisplayName",
        "minimumEnemyCount": 1,
        "spawnInterval": 0,
        "spawnBehavior": "OVAL_AROUND_PLAYER",
        "spawnOvalRadius": [
            600,
            600
        ],
        "minimapIconClass": "MinimapResurrectorIcon",
        "spawnParticle": "particles/events/crownfall/survivors/miniboss_spawner_effect_landing.vpcf",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "elite_resurrecting_enemy"
    },
    "elite_turrets": {
        "className": "CSurvivorsSpawnerEliteTurretDefinition",
        "enemyName": "skeleton_archer",
        "enemyDisplayName": "#DOTA_VData_survivors_spawners_elite_turrets_EnemyDisplayName",
        "minimumEnemyCount": 5,
        "spawnInterval": 50000,
        "spawnBehavior": "OVAL_AROUND_PLAYER",
        "spawnOvalRadius": [
            850,
            850
        ],
        "isPersistant": true,
        "invulnerableParticle": "particles/events/crownfall/survivors/enemies/skeleton_archer_invulnerable.vpcf",
        "invulnerableSkinName": "survivors_invuln",
        "minimapIconClass": "MinimapArcherIcon",
        "spawnParticle": "particles/events/crownfall/survivors/miniboss_spawner_effect_landing.vpcf",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "elite_turrets"
    },
    "elite_absorber": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "absorber",
        "enemyDisplayName": "#DOTA_VData_survivors_spawners_elite_absorber_EnemyDisplayName",
        "minimumEnemyCount": 1,
        "spawnBehavior": "OVAL_AROUND_PLAYER",
        "spawnOvalRadius": [
            600,
            600
        ],
        "minimapIconClass": "MinimapAbsorberIcon",
        "spawnParticle": "particles/events/crownfall/survivors/miniboss_spawner_effect_landing.vpcf",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "elite_absorber"
    },
    "elite_granite_golem_large": {
        "className": "CSurvivorsSpawnerGolemDefinition",
        "enemyName": "granite_golem_large",
        "enemyDisplayName": "#DOTA_VData_survivors_spawners_elite_granite_golem_large_EnemyDisplayName",
        "spawnInterval": 50000,
        "minimumEnemyCount": 1,
        "spawnBehavior": "OVAL_AROUND_PLAYER",
        "spawnOvalRadius": [
            600,
            600
        ],
        "isPersistant": true,
        "minimapIconClass": "MinimapGolemIcon",
        "spawnParticle": "particles/events/crownfall/survivors/miniboss_spawner_effect_landing.vpcf",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "elite_granite_golem_large"
    },
    "imperia_portal": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "skeleton_summon",
        "minimumEnemyCount": 20,
        "maxSpawnCountPerInterval": 3,
        "overflowEnemySpawnCount": 1,
        "spawnInterval": 0.2,
        "spawnBehavior": "SPAWNER_ORIGIN_RADIUS",
        "spawnOvalRadius": [
            300,
            300
        ],
        "spawnParticle": "particles/events/crownfall/survivors/abilities/imperia/spawner_effect.vpcf",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "imperia_portal"
    },
    "imperia_portal_2": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "ogre_summon",
        "minimumEnemyCount": 10,
        "maxSpawnCountPerInterval": 2,
        "overflowEnemySpawnCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "SPAWNER_ORIGIN_RADIUS",
        "spawnOvalRadius": [
            300,
            300
        ],
        "spawnParticle": "particles/events/crownfall/survivors/abilities/imperia/spawner_effect.vpcf",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "imperia_portal_2"
    },
    "imperia_portal_3": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "hulk_summon",
        "minimumEnemyCount": 5,
        "maxSpawnCountPerInterval": 1,
        "overflowEnemySpawnCount": 1,
        "spawnInterval": 2,
        "spawnBehavior": "SPAWNER_ORIGIN_RADIUS",
        "spawnOvalRadius": [
            300,
            300
        ],
        "spawnParticle": "particles/events/crownfall/survivors/abilities/imperia/spawner_effect.vpcf",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "imperia_portal_3"
    },
    "baby_roshan_item_holder": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "baby_roshan_item_holder",
        "minimumEnemyCount": 1,
        "spawnInterval": 30,
        "spawnBehavior": "RANDOM_DIRECTION",
        "resetSpawnIntervalOnKill": true,
        "ignoreDifficultySpawnMultiplier": true,
        "key": "baby_roshan_item_holder"
    },
    "death": {
        "className": "CSurvivorsSpawnerDefinition",
        "enemyName": "death",
        "minimumEnemyCount": 1,
        "spawnInterval": 1,
        "spawnBehavior": "RANDOM_DIRECTION",
        "ignoreDifficultySpawnMultiplier": true,
        "key": "death"
    }
};
