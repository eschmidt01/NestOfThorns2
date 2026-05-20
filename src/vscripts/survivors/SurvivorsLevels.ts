import { SurvivorsLevels } from "./SurvivorsInterface";

export const SURVIVORS_LEVELS: SurvivorsLevels = {
    "skywrath": {
        "levelId": 1,
        "mapBounds": [
            11520,
            7680
        ],
        "entityBounds": [
            11520,
            7680
        ],
        "events": [
            {
                "spawnerName": "vase_random",
                "startTime": 1,
                "endTime": 720
            },
            {
                "spawnerName": "skeleton_intro",
                "minimumEnemyCountOverride": 5,
                "spawnIntervalOverride": 3,
                "startTime": 1,
                "endTime": 15
            },
            {
                "spawnerName": "skeleton_intro",
                "minimumEnemyCountOverride": 10,
                "spawnIntervalOverride": 3,
                "startTime": 15,
                "endTime": 30
            },
            {
                "spawnerName": "satyr_fixed_direction",
                "minimumEnemyCountOverride": 2,
                "startTime": 20,
                "endTime": 60
            },
            {
                "spawnerName": "skeleton",
                "minimumEnemyCountOverride": 15,
                "spawnIntervalOverride": 3,
                "startTime": 30,
                "endTime": 60
            },
            {
                "spawnerName": "baby_roshan_item_holder",
                "minimumEnemyCountOverride": 1,
                "startTime": 30,
                "endTime": 720
            },
            {
                "spawnerName": "skeleton",
                "minimumEnemyCountOverride": 30,
                "spawnIntervalOverride": 1,
                "startTime": 60,
                "endTime": 105
            },
            {
                "spawnerName": "skeleton_boss",
                "minimumEnemyCountOverride": 1,
                "startTime": 70
            },
            {
                "spawnerName": "satyr_fixed_direction",
                "minimumEnemyCountOverride": 20,
                "spawnIntervalOverride": 5,
                "maxSpawnCountPerIntervalOverride": 5,
                "startTime": 105,
                "endTime": 150
            },
            {
                "spawnerName": "skeleton",
                "minimumEnemyCountOverride": 10,
                "spawnIntervalOverride": 0.5,
                "startTime": 120,
                "endTime": 150
            },
            {
                "spawnerName": "satyr_boss",
                "minimumEnemyCountOverride": 1,
                "startTime": 120
            },
            {
                "spawnerName": "skeleton_gold",
                "minimumEnemyCountOverride": 100,
                "spawnIntervalOverride": 0.25,
                "startTime": 150,
                "endTime": 195
            },
            {
                "spawnerName": "flyer_swarm",
                "startTime": 160
            },
            {
                "spawnerName": "flyer_swarm",
                "startTime": 170
            },
            {
                "spawnerName": "flyer_swarm",
                "startTime": 173
            },
            {
                "spawnerName": "flyer_swarm",
                "startTime": 176
            },
            {
                "spawnerName": "zombie",
                "minimumEnemyCountOverride": 40,
                "spawnIntervalOverride": 0.25,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 195,
                "endTime": 240
            },
            {
                "spawnerName": "zombie_torso",
                "minimumEnemyCountOverride": 20,
                "spawnIntervalOverride": 0.25,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 195,
                "endTime": 240
            },
            {
                "spawnerName": "satyr_fixed_direction",
                "minimumEnemyCountOverride": 40,
                "spawnIntervalOverride": 5,
                "maxSpawnCountPerIntervalOverride": 5,
                "startTime": 240,
                "endTime": 285
            },
            {
                "spawnerName": "skeleton_gold",
                "minimumEnemyCountOverride": 100,
                "spawnIntervalOverride": 0.25,
                "startTime": 240,
                "endTime": 285
            },
            {
                "spawnerName": "spider_swarm",
                "startTime": 250
            },
            {
                "spawnerName": "spider_swarm",
                "startTime": 255
            },
            {
                "spawnerName": "spider_swarm",
                "startTime": 260
            },
            {
                "spawnerName": "spider_swarm",
                "spawnIntervalOverride": 60,
                "startTime": 275
            },
            {
                "spawnerName": "zombie",
                "minimumEnemyCountOverride": 60,
                "spawnIntervalOverride": 0.25,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 285,
                "endTime": 330
            },
            {
                "spawnerName": "zombie_torso",
                "minimumEnemyCountOverride": 30,
                "spawnIntervalOverride": 0.25,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 285,
                "endTime": 330
            },
            {
                "spawnerName": "catapult_swarm",
                "minimumEnemyCountOverride": 6,
                "startTime": 295
            },
            {
                "spawnerName": "catapult_swarm",
                "minimumEnemyCountOverride": 6,
                "startTime": 305
            },
            {
                "spawnerName": "eidolon",
                "minimumEnemyCountOverride": 100,
                "spawnIntervalOverride": 0.25,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 330,
                "endTime": 375
            },
            {
                "spawnerName": "skeleton_gold",
                "minimumEnemyCountOverride": 50,
                "spawnIntervalOverride": 0.25,
                "startTime": 340,
                "endTime": 375
            },
            {
                "spawnerName": "ogre",
                "minimumEnemyCountOverride": 60,
                "startTime": 375,
                "endTime": 420
            },
            {
                "spawnerName": "satyr_boss",
                "minimumEnemyCountOverride": 5,
                "startTime": 385,
                "endTime": 430
            },
            {
                "spawnerName": "ghost_swarm",
                "startTime": 420
            },
            {
                "spawnerName": "ghost_swarm",
                "startTime": 425
            },
            {
                "spawnerName": "ghost_swarm",
                "startTime": 430
            },
            {
                "spawnerName": "ghost_swarm",
                "startTime": 435
            },
            {
                "spawnerName": "ogre",
                "minimumEnemyCountOverride": 50,
                "spawnIntervalOverride": 0.25,
                "maxSpawnCountPerIntervalOverride": 5,
                "startTime": 435,
                "endTime": 465
            },
            {
                "spawnerName": "satyr",
                "minimumEnemyCountOverride": 100,
                "spawnIntervalOverride": 0.25,
                "maxSpawnCountPerIntervalOverride": 10,
                "startTime": 435,
                "endTime": 465
            },
            {
                "spawnerName": "hulk",
                "minimumEnemyCountOverride": 1,
                "startTime": 445
            },
            {
                "spawnerName": "ghost_swarm",
                "startTime": 450
            },
            {
                "spawnerName": "ghost_swarm",
                "startTime": 455
            },
            {
                "spawnerName": "ghost_swarm",
                "startTime": 460
            },
            {
                "spawnerName": "ogre",
                "minimumEnemyCountOverride": 250,
                "spawnIntervalOverride": 3,
                "maxSpawnCountPerIntervalOverride": 25,
                "startTime": 465,
                "endTime": 510
            },
            {
                "spawnerName": "catapult",
                "minimumEnemyCountOverride": 20,
                "spawnIntervalOverride": 5,
                "maxSpawnCountPerIntervalOverride": 5,
                "startTime": 465,
                "endTime": 510
            },
            {
                "spawnerName": "hulk",
                "minimumEnemyCountOverride": 5,
                "spawnIntervalOverride": 2,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 510,
                "endTime": 555
            },
            {
                "spawnerName": "spider",
                "minimumEnemyCountOverride": 150,
                "spawnIntervalOverride": 2,
                "maxSpawnCountPerIntervalOverride": 20,
                "startTime": 510,
                "endTime": 555
            },
            {
                "spawnerName": "skeleton_boss_2",
                "minimumEnemyCountOverride": 50,
                "spawnIntervalOverride": 0.5,
                "maxSpawnCountPerIntervalOverride": 3,
                "startTime": 510,
                "endTime": 555
            },
            {
                "spawnerName": "ogre",
                "minimumEnemyCountOverride": 150,
                "spawnIntervalOverride": 3,
                "maxSpawnCountPerIntervalOverride": 25,
                "startTime": 555,
                "endTime": 600
            },
            {
                "spawnerName": "mud_golem",
                "minimumEnemyCountOverride": 50,
                "spawnIntervalOverride": 2,
                "maxSpawnCountPerIntervalOverride": 5,
                "startTime": 555,
                "endTime": 600
            },
            {
                "spawnerName": "ghost_swarm",
                "minimumEnemyCountOverride": 34,
                "startTime": 560
            },
            {
                "spawnerName": "ghost_swarm",
                "minimumEnemyCountOverride": 34,
                "startTime": 565
            },
            {
                "spawnerName": "ghost_swarm",
                "minimumEnemyCountOverride": 34,
                "startTime": 570
            },
            {
                "spawnerName": "ghost_swarm",
                "minimumEnemyCountOverride": 34,
                "startTime": 575
            },
            {
                "spawnerName": "hulk",
                "minimumEnemyCountOverride": 5,
                "spawnIntervalOverride": 1,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 580,
                "endTime": 600
            },
            {
                "spawnerName": "zombie_2",
                "minimumEnemyCountOverride": 200,
                "startTime": 600,
                "endTime": 645
            },
            {
                "spawnerName": "zombie_torso_2",
                "minimumEnemyCountOverride": 50,
                "startTime": 600,
                "endTime": 645
            },
            {
                "spawnerName": "hulk",
                "minimumEnemyCountOverride": 10,
                "spawnIntervalOverride": 1,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 645,
                "endTime": 690
            },
            {
                "spawnerName": "ogre",
                "minimumEnemyCountOverride": 150,
                "spawnIntervalOverride": 3,
                "maxSpawnCountPerIntervalOverride": 25,
                "startTime": 645,
                "endTime": 690
            },
            {
                "spawnerName": "catapult",
                "minimumEnemyCountOverride": 25,
                "spawnIntervalOverride": 5,
                "maxSpawnCountPerIntervalOverride": 5,
                "startTime": 665,
                "endTime": 690
            },
            {
                "spawnerName": "eidolon_2",
                "minimumEnemyCountOverride": 100,
                "spawnIntervalOverride": 0.25,
                "maxSpawnCountPerIntervalOverride": 2,
                "startTime": 690,
                "endTime": 735
            },
            {
                "spawnerName": "mud_golem",
                "minimumEnemyCountOverride": 100,
                "spawnIntervalOverride": 1,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 690,
                "endTime": 735
            },
            {
                "spawnerName": "satyr_boss_2",
                "minimumEnemyCountOverride": 40,
                "startTime": 690,
                "endTime": 735
            },
            {
                "spawnerName": "hulk",
                "minimumEnemyCountOverride": 15,
                "spawnIntervalOverride": 1,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 690,
                "endTime": 735
            },
            {
                "spawnerName": "hulk",
                "minimumEnemyCountOverride": 25,
                "spawnIntervalOverride": 1,
                "maxSpawnCountPerIntervalOverride": 1,
                "startTime": 735,
                "endTime": 780
            },
            {
                "spawnerName": "skeleton_archer_normal",
                "minimumEnemyCountOverride": 30,
                "spawnIntervalOverride": 2,
                "maxSpawnCountPerIntervalOverride": 5,
                "startTime": 735,
                "endTime": 780
            },
            {
                "spawnerName": "ogre",
                "minimumEnemyCountOverride": 100,
                "startTime": 735,
                "endTime": 780
            },
            {
                "spawnerName": "imperia_portal",
                "minimumEnemyCountOverride": 3,
                "startTime": 735,
                "endTime": 780
            }
        ],
        "bossEvents": [
            {
                "spawnerName": "vase_boss",
                "startTime": 1,
                "endTime": 720
            }
        ],
        "key": "skywrath"
    }
};
