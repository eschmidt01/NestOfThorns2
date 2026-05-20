import { SurvivorsEnemies } from "./SurvivorsInterface";

export const SURVIVORS_ENEMIES: SurvivorsEnemies = {
    "skeleton_intro": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 16,
        "modelNames": [
            "models/events/crownfall/survivors/skeleton_melee/skeleton_melee.vmdl"
        ],
        "statsName": "skeleton",
        "displayName": "Skeleton",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/skeleton.png",
        "maxHealth": 5,
        "moveSpeed": 200,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 0.7,
        "touchDamage": 5,
        "modelScale": 1.2,
        "separationLayer": "SMALL",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 1
            }
        ],
        "key": "skeleton_intro"
    },
    "skeleton": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 1,
        "modelNames": [
            "models/events/crownfall/survivors/skeleton_melee/skeleton_melee.vmdl"
        ],
        "statsName": "skeleton",
        "displayName": "Skeleton",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/skeleton.png",
        "maxHealth": 5,
        "moveSpeed": 200,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 0.7,
        "touchDamage": 5,
        "modelScale": 1.2,
        "separationLayer": "SMALL",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 0.7,
                "experienceReward": 1
            }
        ],
        "key": "skeleton"
    },
    "skeleton_gold": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 30,
        "modelNames": [
            "models/creeps/neutral_creeps/n_creep_troll_skeleton/n_creep_skeleton_melee.vmdl"
        ],
        "statsName": "skeleton",
        "displayName": "Skeleton",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/skeleton.png",
        "skinName": "survivors",
        "maxHealth": 9,
        "moveSpeed": 200,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 0.7,
        "touchDamage": 5,
        "modelScale": 1.2,
        "separationLayer": "SMALL",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 0.7,
                "experienceReward": 1
            }
        ],
        "key": "skeleton_gold"
    },
    "ogre": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 17,
        "modelNames": [
            "models/events/crownfall/survivors/ogre_med/ogre.vmdl"
        ],
        "statsName": "ogre",
        "displayName": "Ogre",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/ogre.png",
        "skinName": "survivors",
        "maxHealth": 60,
        "moveSpeed": 210,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 0.65,
        "touchDamage": 10,
        "modelScale": 1.2,
        "separationLayer": "LARGE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 0.7,
                "experienceReward": 3
            }
        ],
        "key": "ogre"
    },
    "skeleton_boss": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 15,
        "modelNames": [
            "models/events/crownfall/survivors/skeleton_boss/skeleton_boss.vmdl"
        ],
        "statsName": "big_skeleton",
        "displayName": "Big Skeleton",
        "maxHealth": 0,
        "maxHealthPerPlayerLevel": 40,
        "moveSpeed": 220,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 1,
        "touchDamage": 10,
        "modelScale": 2.5,
        "knockbackResistance": 0.5,
        "separationLayer": "ELITE",
        "showHealthBar": true,
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 15
            }
        ],
        "key": "skeleton_boss"
    },
    "skeleton_boss_2": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 151,
        "modelNames": [
            "models/events/crownfall/survivors/skeleton_boss/skeleton_boss.vmdl"
        ],
        "statsName": "big_skeleton",
        "displayName": "Big Skeleton",
        "maxHealth": 250,
        "moveSpeed": 220,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 1,
        "touchDamage": 10,
        "modelScale": 2.5,
        "knockbackResistance": 0.5,
        "separationLayer": "ELITE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 3
            }
        ],
        "key": "skeleton_boss_2"
    },
    "zombie": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 101,
        "modelNames": [
            "models/events/crownfall/survivors/undying_minion/undying_minion_enemy.vmdl"
        ],
        "statsName": "undying_zombie",
        "displayName": "Undying Zombie",
        "skinName": "survivors",
        "maxHealth": 50,
        "moveSpeed": 100,
        "turnRate": 30,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 1,
        "touchDamage": 5,
        "modelScale": 1.4,
        "separationLayer": "SMALL",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 0.7,
                "experienceReward": 1
            }
        ],
        "key": "zombie"
    },
    "zombie_torso": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 102,
        "modelNames": [
            "models/events/crownfall/survivors/undying_minion_torso/undying_minion_torso_enemy.vmdl"
        ],
        "statsName": "undying_zombie_torso",
        "displayName": "Undying Zombie Torso",
        "skinName": "survivors",
        "maxHealth": 40,
        "moveSpeed": 110,
        "turnRate": 30,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 1,
        "touchDamage": 5,
        "modelScale": 1.15,
        "separationLayer": "LARGE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 0.7,
                "experienceReward": 1
            }
        ],
        "key": "zombie_torso"
    },
    "zombie_2": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 103,
        "modelNames": [
            "models/events/crownfall/survivors/wight_minion/ruin_wight_minion_enemy.vmdl"
        ],
        "statsName": "wight",
        "displayName": "Wight",
        "skinName": "survivors",
        "maxHealth": 200,
        "moveSpeed": 100,
        "turnRate": 30,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 1,
        "touchDamage": 5,
        "modelScale": 1.4,
        "separationLayer": "LARGE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 0.7,
                "experienceReward": 1
            }
        ],
        "key": "zombie_2"
    },
    "zombie_torso_2": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 104,
        "modelNames": [
            "models/events/crownfall/survivors/wight_minion_torso/ruin_wight_minion_torso_enemy.vmdl"
        ],
        "statsName": "wight_torso",
        "displayName": "Wight Torso",
        "skinName": "survivors",
        "maxHealth": 160,
        "moveSpeed": 110,
        "turnRate": 30,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 1,
        "touchDamage": 5,
        "modelScale": 1.4,
        "separationLayer": "LARGE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 0.7,
                "experienceReward": 1
            }
        ],
        "key": "zombie_torso_2"
    },
    "satyr": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 2,
        "modelNames": [
            "models/creeps/neutral_creeps/n_creep_satyr_a/n_creep_satyr_a.vmdl"
        ],
        "statsName": "satyr",
        "displayName": "Satyr",
        "maxHealth": 20,
        "moveSpeed": 200,
        "collisionRadius": 75,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 10,
        "modelScale": 0.9,
        "separationLayer": "LARGE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 1
            }
        ],
        "key": "satyr"
    },
    "mud_golem": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 22,
        "modelNames": [
            "models/events/crownfall/survivors/golem_b/golem_b_enemy.vmdl"
        ],
        "statsName": "mud_golem",
        "displayName": "Mud Golem",
        "skinName": "survivors2",
        "maxHealth": 180,
        "moveSpeed": 180,
        "moveAnimPlaybackRate": 0.85,
        "collisionRadius": 75,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 20,
        "modelScale": 1.5,
        "separationLayer": "LARGE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 5
            }
        ],
        "splitOnDeathNumUnits": 3,
        "splitOnDeathEnemyId": 23,
        "splitOnDeathKnockbackDistance": 150,
        "key": "mud_golem"
    },
    "mud_golem_shard": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 23,
        "modelNames": [
            "models/creeps/neutral_creeps/n_creep_golem_b/n_creep_golem_b.vmdl"
        ],
        "statsName": "mud_golem_shard",
        "displayName": "Mud Golem Shard",
        "skinName": "survivors2",
        "maxHealth": 60,
        "moveSpeed": 500,
        "turnRate": 90,
        "moveAnimPlaybackRate": 2,
        "collisionRadius": 40,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 10,
        "modelScale": 0.5,
        "separationLayer": "SMALL",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 1
            }
        ],
        "key": "mud_golem_shard"
    },
    "satyr_boss": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 14,
        "modelNames": [
            "models/events/crownfall/survivors/satyr_boss/satyr_boss.vmdl"
        ],
        "statsName": "satyr",
        "displayName": "Satyr",
        "maxHealth": 450,
        "moveSpeed": 180,
        "moveAnimPlaybackRate": 1,
        "collisionRadius": 75,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 15,
        "modelScale": 1.7,
        "minSeparationDistanceFromEnemies": 300,
        "separationLayer": "ELITE",
        "showHealthBar": true,
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 25
            }
        ],
        "key": "satyr_boss"
    },
    "satyr_boss_2": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 32,
        "modelNames": [
            "models/events/crownfall/survivors/satyr_boss/satyr_boss.vmdl"
        ],
        "statsName": "satyr",
        "displayName": "Satyr",
        "maxHealth": 450,
        "moveSpeed": 180,
        "moveAnimPlaybackRate": 1,
        "collisionRadius": 75,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 15,
        "modelScale": 1.7,
        "minSeparationDistanceFromEnemies": 300,
        "separationLayer": "ELITE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 10
            }
        ],
        "key": "satyr_boss_2"
    },
    "spider": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 3,
        "modelNames": [
            "models/events/crownfall/survivors/spiderling_elder_brood/spiderling_elder_blood_enemy.vmdl"
        ],
        "statsName": "spider",
        "displayName": "Spider",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/spider.png",
        "maxHealth": 4,
        "moveSpeed": 500,
        "turnRate": 90,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 1,
        "touchDamage": 3,
        "dieOnTouch": true,
        "modelScale": 0.4,
        "hasDeathAnimation": false,
        "deathEffectParticle": "particles/events/crownfall/survivors/enemies/spider_death.vpcf",
        "separationLayer": "SMALL",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 0.2,
                "experienceReward": 1
            }
        ],
        "key": "spider"
    },
    "hellbear": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 12,
        "modelNames": [
            "models/creeps/neutral_creeps/n_creep_furbolg/n_creep_furbolg_disrupter.vmdl"
        ],
        "statsName": "hellbear",
        "displayName": "Hellbear",
        "maxHealth": 500,
        "moveSpeed": 400,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 0,
        "collisionRadius": 100,
        "modelScale": 1.6,
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 10
            }
        ],
        "attacks": [
            {
                "particleName": "particles/neutral_fx/ursa_thunderclap.vpcf",
                "damage": 15,
                "attackCooldown": 0.25,
                "speed": 0,
                "range": 300,
                "maxDistance": 0,
                "lifeTime": 0.1,
                "radius": 400,
                "spawnOffset": 0,
                "activity": "ACT_DOTA_CAST_ABILITY_1",
                "attackPoint": 0.3
            }
        ],
        "key": "hellbear"
    },
    "hulk": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 4,
        "modelNames": [
            "models/events/crownfall/survivors/creep_dire_ancient_hulk/creep_dire_ancient_hulk_enemy.vmdl"
        ],
        "statsName": "hulk",
        "displayName": "Hulk",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/hulk.png",
        "maxHealth": 650,
        "moveSpeed": 200,
        "collisionRadius": 100,
        "knockbackResistance": 0.5,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 30,
        "modelScale": 1.7,
        "showHealthBar": true,
        "separationLayer": "LARGE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 20
            }
        ],
        "key": "hulk"
    },
    "eidolon": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 5,
        "modelNames": [
            "models/events/crownfall/survivors/eidolon/eidolon.vmdl"
        ],
        "statsName": "eidolon",
        "displayName": "Eidolon",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/eidolon.png",
        "skinName": "survivors",
        "maxHealth": 35,
        "moveSpeed": 300,
        "collisionRadius": 40,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_LINEAR_SIN_WAVE",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_FLYING",
        "sinMovementAngle": 60,
        "sinMovementPeriodMultiplier": 0.85,
        "touchDamage": 4,
        "separationLayer": "OFF",
        "knockbackResistance": 0.5,
        "modelScale": 1.5,
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 1
            }
        ],
        "key": "eidolon"
    },
    "eidolon_2": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 50,
        "modelNames": [
            "models/events/crownfall/survivors/eidolon/eidolon.vmdl"
        ],
        "statsName": "eidolon",
        "displayName": "Eidolon",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/eidolon.png",
        "skinName": "survivors",
        "maxHealth": 200,
        "moveSpeed": 300,
        "collisionRadius": 60,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_LINEAR_SIN_WAVE",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_FLYING",
        "sinMovementAngle": 60,
        "sinMovementPeriodMultiplier": 0.85,
        "touchDamage": 6,
        "knockbackResistance": 0.5,
        "modelScale": 2,
        "separationLayer": "OFF",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 1
            }
        ],
        "key": "eidolon_2"
    },
    "ghost": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 24,
        "modelNames": [
            "models/events/crownfall/survivors/ghost_a/n_creep_ghost_a_enemy.vmdl"
        ],
        "statsName": "ghost",
        "displayName": "Ghost",
        "modelScale": 1.5,
        "maxHealth": 360,
        "moveSpeed": 400,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_LINEAR_SIN_WAVE",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_FLYING",
        "randomizeSinTurnTimerOnSpawn": false,
        "sinMovementAngle": 30,
        "sinMovementPeriodMultiplier": 0.75,
        "collisionRadius": 50,
        "touchDamage": 12,
        "statusResistance": 1,
        "knockbackResistance": 0.5,
        "separationLayer": "OFF",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 1
            }
        ],
        "key": "ghost"
    },
    "catapult": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 6,
        "modelNames": [
            "models/creeps/lane_creeps/creep_2021_dire/creep_2021_dire_siege.vmdl"
        ],
        "statsName": "catapult",
        "displayName": "Catapult",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/catapult.png",
        "maxHealth": 50,
        "moveSpeed": 150,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 10,
        "modelScale": 0.85,
        "separationLayer": "LARGE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 10
            }
        ],
        "attacks": [
            {
                "particleName": "particles/events/crownfall/survivors/enemies/catapult_attack.vpcf",
                "damage": 15,
                "attackCooldown": 2,
                "speed": 600,
                "range": 1000,
                "maxDistance": 1500,
                "activity": "ACT_DOTA_CAST_ABILITY_1",
                "attackPoint": 0.8,
                "radius": 50,
                "attackOffsetForward": 30,
                "attackOffsetUp": 100
            }
        ],
        "key": "catapult"
    },
    "resurrector": {
        "className": "CSurvivorsEnemyDefinition_Resurrector",
        "enemyId": 7,
        "modelNames": [
            "models/events/crownfall/survivors/golem/golem.vmdl"
        ],
        "statsName": "resurrector",
        "displayName": "Resurrector",
        "maxHealth": 450,
        "maxHealthPerPlayerLevel": 105,
        "moveSpeed": 245,
        "turnRate": 55,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 30,
        "collisionRadius": 100,
        "modelScale": 1.8,
        "numResurrectionTimes": 2,
        "movementSpeedMultiplierPerDeath": 0.45,
        "resurrectParticleName": "particles/events/crownfall/survivors/enemies/golem_respawn.vpcf",
        "mass": 90000,
        "hasGlowOutline": true,
        "knockbackResistance": 0.9,
        "statusResistance": 0.8,
        "separationLayer": "ELITE",
        "showHealthBar": true,
        "isElite": true,
        "playDeathSound": true,
        "pickupChances": [
            {
                "pickupName": "scepter",
                "chance": 1
            }
        ],
        "fullLootTable": {
            "lootEntryCollections": [
                {
                    "chance": 1,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 2,
                            "maxAmount": 8
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 2,
                            "maxAmount": 4
                        }
                    ]
                }
            ]
        },
        "key": "resurrector"
    },
    "flyer": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 8,
        "modelNames": [
            "models/events/crownfall/survivors/pernicious_firebrand_mount/pernicious_firebrand_mount_enemy.vmdl"
        ],
        "statsName": "flyer",
        "displayName": "Flyer",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/flyer.png",
        "maxHealth": 1,
        "moveSpeed": 650,
        "collisionRadius": 40,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_LINEAR",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_FLYING",
        "modelScale": 0.6,
        "moveAnimPlaybackRate": 1.5,
        "touchDamage": 3,
        "separationLayer": "OFF",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 1
            }
        ],
        "key": "flyer"
    },
    "flyer_2": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 31,
        "modelName": "models/events/crownfall/survivors/pernicious_firebrand_mount/pernicious_firebrand_mount_enemy.vmdl",
        "statsName": "flyer",
        "displayName": "Flyer",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/flyer.png",
        "maxHealth": 12,
        "moveSpeed": 650,
        "collisionRadius": 60,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_LINEAR",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_FLYING",
        "modelScale": 0.8,
        "moveAnimPlaybackRate": 1.5,
        "touchDamage": 6,
        "separationLayer": "OFF",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 3
            }
        ],
        "key": "flyer_2"
    },
    "skeleton_archer": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 9,
        "modelNames": [
            "models/items/clinkz/clinkz_ti9_immortal_weapon/clinkz_ti9_immortal_army.vmdl"
        ],
        "statsName": "skeleton_archer",
        "displayName": "Skeleton Archer",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/skeleton_archer.png",
        "maxHealth": 150,
        "maxHealthPerPlayerLevel": 15,
        "moveSpeed": 0,
        "turnRate": 150,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_STATIONARY",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 10,
        "mass": 500000,
        "modelScale": 2.5,
        "hasGlowOutline": true,
        "showHealthBar": true,
        "activityMove": "ACT_DOTA_IDLE",
        "knockbackResistance": 1,
        "statusResistance": 1,
        "separationLayer": "OFF",
        "isElite": true,
        "playDeathSound": true,
        "pickupChances": [
            {
                "pickupName": "scepter",
                "chance": 1
            }
        ],
        "attacks": [
            {
                "particleName": "particles/events/crownfall/survivors/enemies/skeleton_archer_frost_arrow.vpcf",
                "damage": 15,
                "attackCooldown": 1.7,
                "speed": 750,
                "range": 2500,
                "maxDistance": 2500,
                "activity": "ACT_DOTA_ATTACK",
                "attackPoint": 0.3,
                "radius": 50,
                "attackOffsetForward": 50,
                "attackOffsetUp": 150
            }
        ],
        "fullLootTable": {
            "lootEntryCollections": [
                {
                    "chance": 1,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 6
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 0,
                            "maxAmount": 2
                        }
                    ]
                }
            ]
        },
        "key": "skeleton_archer"
    },
    "skeleton_archer_normal": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 60,
        "modelNames": [
            "models/items/clinkz/clinkz_ti9_immortal_weapon/clinkz_ti9_immortal_army.vmdl"
        ],
        "statsName": "skeleton_archer",
        "displayName": "Skeleton Archer",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/skeleton_archer.png",
        "maxHealth": 750,
        "moveSpeed": 200,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 10,
        "modelScale": 2,
        "separationLayer": "ELITE",
        "pickupChances": [
            {
                "pickupName": "experience",
                "chance": 1,
                "experienceReward": 3
            }
        ],
        "attacks": [
            {
                "particleName": "particles/events/crownfall/survivors/enemies/skeleton_archer_frost_arrow.vpcf",
                "damage": 15,
                "attackCooldown": 2,
                "speed": 600,
                "range": 850,
                "maxDistance": 1500,
                "activity": "ACT_DOTA_CAST_ABILITY_1",
                "attackPoint": 0.8,
                "radius": 50,
                "attackOffsetForward": 30,
                "attackOffsetUp": 100
            }
        ],
        "key": "skeleton_archer_normal"
    },
    "baby_roshan_item_holder": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 1505,
        "modelNames": [
            "models/courier/baby_rosh/babyroshan_alt.vmdl"
        ],
        "statsName": "baby_roshan",
        "displayName": "Baby Roshan",
        "skinName": "1",
        "maxHealth": 0,
        "maxHealthPerPlayerLevel": 50,
        "collisionRadius": 70,
        "moveSpeed": 200,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 0.5,
        "touchDamage": 10,
        "modelScale": 1.9,
        "knockbackResistance": 0.5,
        "separationLayer": "ELITE",
        "isElite": true,
        "showHealthBar": true,
        "hasGlowOutline": true,
        "playDeathSound": true,
        "pickupChances": [
            {
                "pickupName": "treasure",
                "chance": 1
            }
        ],
        "fullLootTable": {
            "lootEntryCollections": [
                {
                    "chance": 1,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 5
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 0,
                            "maxAmount": 2
                        }
                    ]
                }
            ]
        },
        "key": "baby_roshan_item_holder"
    },
    "vase": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 1000,
        "statsName": "vase",
        "displayName": "Vase",
        "modelNames": [
            "models/events/crownfall/survivors/breakable/clay_pot001_breakable.vmdl",
            "models/events/crownfall/survivors/breakable/clay_pot002_breakable.vmdl",
            "models/events/crownfall/survivors/breakable/clay_pot002b_breakable.vmdl",
            "models/events/crownfall/survivors/breakable/clay_pot004_breakable.vmdl",
            "models/events/crownfall/survivors/breakable/clay_pot005_breakable.vmdl"
        ],
        "modelScale": 1,
        "maxHealth": 5,
        "moveSpeed": 0,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_STATIONARY",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 0,
        "mass": 500000,
        "hasDeathAnimation": true,
        "dissolveOnDeath": false,
        "activityDie": "ACT_DOTA_DIE",
        "separationLayer": "OFF",
        "turnRate": 0,
        "isDestructible": true,
        "playDeathSound": true,
        "lootTable": [
            {
                "pickupName": "nothing",
                "chance": 0.8
            },
            {
                "pickupName": "cheese",
                "chance": 0.18
            },
            {
                "pickupName": "magnet",
                "chance": 0.02
            }
        ],
        "fullLootTable": {
            "lootEntryCollections": [
                {
                    "chance": 0.85,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 5
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 0,
                            "maxAmount": 1
                        }
                    ]
                },
                {
                    "chance": 0.15,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 4
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 2,
                            "maxAmount": 5
                        }
                    ]
                }
            ]
        },
        "key": "vase"
    },
    "vase_always_cheese": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 2001,
        "statsName": "vase",
        "displayName": "Vase",
        "modelNames": [
            "models/events/crownfall/survivors/breakable/clay_pot001_breakable.vmdl",
            "models/events/crownfall/survivors/breakable/clay_pot002_breakable.vmdl",
            "models/events/crownfall/survivors/breakable/clay_pot002b_breakable.vmdl",
            "models/events/crownfall/survivors/breakable/clay_pot004_breakable.vmdl",
            "models/events/crownfall/survivors/breakable/clay_pot005_breakable.vmdl"
        ],
        "modelScale": 1,
        "maxHealth": 5,
        "moveSpeed": 0,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_STATIONARY",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 0,
        "mass": 500000,
        "hasDeathAnimation": true,
        "dissolveOnDeath": false,
        "activityDie": "ACT_DOTA_DIE",
        "separationLayer": "OFF",
        "turnRate": 0,
        "isDestructible": true,
        "playDeathSound": true,
        "lootTable": [
            {
                "pickupName": "cheese",
                "chance": 1
            }
        ],
        "fullLootTable": {
            "lootEntryCollections": [
                {
                    "chance": 0.85,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 5
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 0,
                            "maxAmount": 1
                        }
                    ]
                },
                {
                    "chance": 0.15,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 4
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 2,
                            "maxAmount": 5
                        }
                    ]
                }
            ]
        },
        "key": "vase_always_cheese"
    },
    "box": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 1001,
        "statsName": "box",
        "displayName": "Box",
        "modelNames": [
            "models/gameplay/breakingcrate_dest.vmdl"
        ],
        "modelScale": 0.7,
        "maxHealth": 5,
        "moveSpeed": 0,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_STATIONARY",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 0,
        "mass": 500000,
        "hasDeathAnimation": true,
        "dissolveOnDeath": false,
        "activityDie": "ACT_DOTA_DIE",
        "separationLayer": "OFF",
        "turnRate": 0,
        "isDestructible": true,
        "lootTable": [
            {
                "pickupName": "cheese",
                "chance": 0.7
            },
            {
                "pickupName": "gold_coin",
                "chance": 0.25
            },
            {
                "pickupName": "gold_bag",
                "chance": 0.05
            }
        ],
        "key": "box"
    },
    "tower": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 1002,
        "statsName": "tower",
        "displayName": "Tower",
        "modelNames": [
            "models/props_structures/dire_tower002.vmdl"
        ],
        "modelScale": 1.7,
        "maxHealth": 1000,
        "moveSpeed": 0,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_STATIONARY",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 0,
        "mass": 500000,
        "hasDeathAnimation": true,
        "dissolveOnDeath": false,
        "activityDie": "ACT_DOTA_DIE",
        "separationLayer": "LARGE",
        "knockbackResistance": 1,
        "statusResistance": 1,
        "randomFacing": false,
        "fixedFacing": [
            0.2,
            1
        ],
        "showHealthBar": true,
        "turnRate": 0,
        "isElite": true,
        "attacks": [
            {
                "particleName": "particles/events/crownfall/survivors/enemies/skeleton_archer_attack.vpcf",
                "damage": 10,
                "attackCooldown": 3,
                "speed": 1000,
                "range": 1500,
                "maxDistance": 1500,
                "activity": "ACT_DOTA_ATTACK",
                "attackPoint": 0.1,
                "radius": 50,
                "attackOffsetForward": 50,
                "attackOffsetUp": 150
            }
        ],
        "key": "tower"
    },
    "absorber": {
        "className": "CSurvivorsEnemyDefinition_Absorber",
        "enemyId": 20,
        "skinName": "survivors",
        "modelNames": [
            "models/creeps/ice_biome/undeadtusk/fx_skeleball.vmdl"
        ],
        "statsName": "skeleton_ball",
        "displayName": "Skeleton Ball",
        "maxHealth": 900,
        "maxHealthPerPlayerLevel": 100,
        "moveSpeed": 275,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 20,
        "collisionRadius": 200,
        "modelScale": 1,
        "maxModelScaleVariance": 0,
        "mass": 90000,
        "hasGlowOutline": true,
        "knockbackResistance": 0.95,
        "statusResistance": 1,
        "separationLayer": "ELITE",
        "turnRate": 60,
        "centerRooted": true,
        "rotates": true,
        "modelScaleIncreasePerAbsorb": 0.012,
        "maxModelScale": 9,
        "absorbRadius": 150,
        "percentHealthAbsorbed": 0.2,
        "absorbParticleName": "particles/events/crownfall/survivors/enemies/absorber_absorb.vpcf",
        "showHealthBar": true,
        "isElite": true,
        "playDeathSound": true,
        "pickupChances": [
            {
                "pickupName": "scepter",
                "chance": 1
            }
        ],
        "fullLootTable": {
            "lootEntryCollections": [
                {
                    "chance": 1,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 2,
                            "maxAmount": 8
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 2,
                            "maxAmount": 4
                        }
                    ]
                }
            ]
        },
        "key": "absorber"
    },
    "granite_golem_large": {
        "className": "CSurvivorsEnemyDefinition_Golem",
        "enemyId": 27,
        "modelNames": [
            "models/events/crownfall/survivors/golem_a/golem_a_enemy.vmdl"
        ],
        "statsName": "large_granite_golem",
        "displayName": "Large Granite Golem",
        "maxHealth": 420,
        "maxHealthPerPlayerLevel": 180,
        "moveSpeed": 240,
        "turnRate": 55,
        "moveAnimPlaybackRate": 1,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 25,
        "collisionRadius": 100,
        "modelScale": 2.5,
        "mass": 90000,
        "hasGlowOutline": true,
        "knockbackResistance": 0.95,
        "statusResistance": 1,
        "separationLayer": "ELITE",
        "showHealthBar": true,
        "isElite": true,
        "playDeathSound": true,
        "splitOnDeathNumUnits": 3,
        "splitOnDeathEnemyId": 28,
        "splitOnDeathKnockbackDistance": 3000,
        "key": "granite_golem_large"
    },
    "granite_golem_medium": {
        "className": "CSurvivorsEnemyDefinition_Golem",
        "enemyId": 28,
        "modelNames": [
            "models/events/crownfall/survivors/golem_a/golem_a_medium_enemy.vmdl"
        ],
        "statsName": "medium_granite_golem",
        "displayName": "Medium Granite Golem",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/golem.png",
        "maxHealth": 140,
        "maxHealthPerPlayerLevel": 60,
        "moveSpeed": 325,
        "turnRate": 75,
        "moveAnimPlaybackRate": 1,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 15,
        "collisionRadius": 50,
        "modelScale": 1.5,
        "mass": 90000,
        "hasGlowOutline": true,
        "knockbackResistance": 0.8,
        "statusResistance": 1,
        "separationLayer": "LARGE",
        "showHealthBar": true,
        "isElite": true,
        "playDeathSound": true,
        "splitOnDeathNumUnits": 6,
        "splitOnDeathEnemyId": 29,
        "splitOnDeathKnockbackDistance": 3500,
        "key": "granite_golem_medium"
    },
    "granite_golem_small": {
        "className": "CSurvivorsEnemyDefinition_Golem",
        "enemyId": 29,
        "modelNames": [
            "models/creeps/neutral_creeps/n_creep_golem_a/neutral_creep_golem_a.vmdl"
        ],
        "statsName": "small_granite_golem",
        "displayName": "Small Granite Golem",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/golem.png",
        "maxHealth": 24,
        "maxHealthPerPlayerLevel": 18,
        "moveSpeed": 425,
        "turnRate": 90,
        "moveAnimPlaybackRate": 2,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 10,
        "collisionRadius": 30,
        "modelScale": 0.5,
        "mass": 90000,
        "hasGlowOutline": true,
        "knockbackResistance": 0,
        "statusResistance": 0,
        "separationLayer": "SMALL",
        "showHealthBar": true,
        "isElite": true,
        "playDeathSound": true,
        "pickupChances": [
            {
                "pickupName": "scepter",
                "chance": 1
            }
        ],
        "fullLootTable": {
            "lootEntryCollections": [
                {
                    "chance": 1,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 4
                        }
                    ]
                }
            ]
        },
        "key": "granite_golem_small"
    },
    "imperia": {
        "className": "CSurvivorsEnemyDefinition_ImperiaBoss",
        "enemyId": 9999,
        "econItems": [
            22718,
            22719,
            22720,
            22721
        ],
        "styleIndex": 2,
        "dotaHeroId": 20,
        "useHeroModel": true,
        "maxHealth": 30000,
        "maxHealthPerPlayerLevel": 0,
        "moveSpeed": 190,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 1,
        "touchDamage": 20,
        "mass": 100000,
        "collisionRadius": 150,
        "modelScale": 2.8,
        "knockbackResistance": 1,
        "statusResistance": 1,
        "separationLayer": "ELITE",
        "dissolveOnDeath": false,
        "deathDuration": 1000,
        "statsName": "imperia",
        "displayName": "Imperia",
        "activityDie": "ACT_DOTA_DIE",
        "playDeathSound": true,
        "burningGroundImpactDamage": 20,
        "burningGroundImpactRadius": 280,
        "burningGroundImpactSpawnDelay": 2,
        "burningGroundFlamesDuration": 5,
        "burningGroundDoTDuration": 3,
        "burningGroundDoTDamage": 4,
        "burningGroundImpactStunDuration": 0,
        "burningGroundInstancesPerEnrageLevel": 3,
        "burningGroundImpactParticleName": "particles/events/crownfall/survivors/meteor.vpcf",
        "burningGroundDoTParticleName": "particles/events/crownfall/survivors/meteor_dot.vpcf",
        "burningGroundBurnParticleName": "particles/events/crownfall/survivors/status/status_effect_burn.vpcf",
        "radiateRaysCastStartDuration": 0.5,
        "radiateRaysDuration": 8,
        "radiateRaysInterval": 0.02,
        "radiateRaysAngle": 20,
        "radiateRaysSpeed": 1300,
        "radiateRaysDamage": 15,
        "radiateRaysProjectileRadius": 50,
        "radiateRaysRayParticle": "particles/events/crownfall/survivors/abilities/imperia/magic_missile.vpcf",
        "radiateRaysBuffParticle": "particles/events/crownfall/survivors/abilities/imperia/demon_portal_buff_overhead_v3.vpcf",
        "demonPortalsNumToCreate": 1,
        "demonPortalDeactivateTime": 15,
        "demonPortalDeactivateRadius": 350,
        "maxDemonPortalCount": 3,
        "demonPortalSpawners": [
            "imperia_portal",
            "imperia_portal_2",
            "imperia_portal_3"
        ],
        "demonPortalsPortalParticle": "particles/events/crownfall/survivors/abilities/imperia/demon_portal.vpcf",
        "demonPortalsTelegraphParticle": "particles/events/crownfall/survivors/imperia_portal_projectile.vpcf",
        "numMagicMissiles": 3,
        "magicMissileProjectileSpeed": 700,
        "magicMissileDamage": 15,
        "magicMissileProjectileRadius": 50,
        "magicMissileProjectileSpeedIncreasePerEnrage": 40,
        "magicMissileParticle": "particles/events/crownfall/survivors/abilities/imperia/magic_missile.vpcf",
        "initialEnrageTime": 30,
        "incrementalEnrageTime": 30,
        "mandatoryEnrageHealthThresholds": [
            0.66,
            0.33
        ],
        "imperiaAmbientBody": "particles/econ/items/vengeful/vengeful_arcana/vengeful_arcana_imperia_powerup_ambient_body.vpcf",
        "imperiaAmbientWings": "particles/econ/items/vengeful/vengeful_arcana/vengeful_arcana_imperia_powerup_ambient.vpcf",
        "key": "imperia"
    },
    "hulk_summon": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 13,
        "modelNames": [
            "models/events/crownfall/survivors/creep_dire_ancient_hulk/creep_dire_ancient_hulk_enemy.vmdl"
        ],
        "statsName": "hulk",
        "displayName": "Hulk",
        "skinName": "survivors2",
        "maxHealth": 0,
        "maxHealthPerPlayerLevel": 120,
        "moveSpeed": 160,
        "turnRate": 40,
        "collisionRadius": 100,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 25,
        "modelScale": 1.3,
        "statusResistance": 0.5,
        "knockbackResistance": 0.8,
        "separationLayer": "ELITE",
        "randomFacing": false,
        "playerFacing": true,
        "key": "hulk_summon"
    },
    "skeleton_summon": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 19,
        "modelNames": [
            "models/events/crownfall/survivors/skeleton_melee/skeleton_melee.vmdl"
        ],
        "statsName": "skeleton",
        "displayName": "Skeleton",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/skeleton.png",
        "skinName": "survivors2",
        "maxHealth": 0,
        "maxHealthPerPlayerLevel": 30,
        "moveSpeed": 220,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 0.65,
        "touchDamage": 10,
        "modelScale": 1.6,
        "separationLayer": "LARGE",
        "randomFacing": false,
        "playerFacing": true,
        "key": "skeleton_summon"
    },
    "ogre_summon": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 21,
        "modelNames": [
            "models/events/crownfall/survivors/ogre_med/n_creep_ogre_med_enemy.vmdl"
        ],
        "statsName": "ogre",
        "displayName": "Ogre",
        "imageThumbnail": "file://{images}/events/crownfall/survivors/enemy_thumbnails/ogre.png",
        "skinName": "survivors2",
        "maxHealth": 0,
        "maxHealthPerPlayerLevel": 75,
        "moveSpeed": 190,
        "turnRate": 60,
        "moveAnimPlaybackRate": 0.85,
        "collisionRadius": 75,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 15,
        "modelScale": 1.5,
        "separationLayer": "LARGE",
        "randomFacing": false,
        "playerFacing": true,
        "statusResistance": 0.5,
        "knockbackResistance": 0.7,
        "key": "ogre_summon"
    },
    "boss_tower": {
        "className": "CSurvivorsEnemyDefinition_Pillar",
        "enemyId": 25,
        "modelNames": [
            "models/events/crownfall/survivors/breakable/cf_palace_new_column_large_a_breakable.vmdl"
        ],
        "statsName": "pillar",
        "displayName": "Pillar",
        "maxHealth": 50000,
        "maxHealthPerPlayerLevel": 0,
        "moveSpeed": 0,
        "moveAnimPlaybackRate": 1,
        "hasSolidBody": true,
        "collisionRadius": 125,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_STATIONARY",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "touchDamage": 0,
        "modelScale": 0.001,
        "maxModelScaleVariance": 0,
        "separationLayer": "OFF",
        "randomFacing": false,
        "fixedFacing": [
            -1,
            1
        ],
        "statusResistance": 1,
        "knockbackResistance": 1,
        "mass": 2000000,
        "hasDeathAnimation": true,
        "dissolveOnDeath": false,
        "activityIdle": "ACT_DOTA_IDLE",
        "activityDie": "ACT_DOTA_DIE",
        "turnRate": 0,
        "isDestructible": true,
        "invulnerable": true,
        "playerFriendly": true,
        "undespawnable": true,
        "key": "boss_tower"
    },
    "death": {
        "className": "CSurvivorsEnemyDefinition",
        "enemyId": 999,
        "modelNames": [
            "models/events/crownfall/survivors/reaper_scythe/reaper_scythe.vmdl"
        ],
        "statsName": "scythe",
        "displayName": "Scythe",
        "skinName": "survivors",
        "maxHealth": 100,
        "moveSpeed": 110,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_TRACKING",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_GROUND",
        "moveAnimPlaybackRate": 0.5,
        "touchDamage": 10000000000000000,
        "modelScale": 1.7,
        "separationLayer": "OFF",
        "collisionRadius": 50,
        "invulnerable": true,
        "undespawnable": true,
        "overrideDespawnRadiusBuffer": 600,
        "hasGlowOutline": true,
        "overrideGlowColor": true,
        "overriddenGlowColor": [
            255,
            0,
            0
        ],
        "key": "death"
    },
    "snotty": {
        "className": "CSurvivorsEnemyDefinition_Snotty",
        "enemyId": 400,
        "modelNames": [
            "models/events/crownfall/survivors/snotty/snotty_survivors.vmdl"
        ],
        "statsName": "snotty",
        "displayName": "Snotty",
        "imageThumbnail": "file://{images}/events/crownfall/visual_novel/portraits/bat_portrait_eyes.png",
        "maxHealth": 100,
        "moveSpeed": 650,
        "moveAnimPlaybackRate": 0.7,
        "touchDamage": 0,
        "modelScale": 0.75,
        "separationLayer": "OFF",
        "invulnerable": true,
        "undespawnable": true,
        "playerFriendly": true,
        "movementBehavior": "ENEMY_MOVEMENT_BEHAVIOR_STATIONARY",
        "movementCapability": "ENEMY_MOVEMENT_CAPABILITY_FLYING",
        "hasGlowOutline": true,
        "overrideGlowColor": true,
        "overriddenGlowColor": [
            0,
            255,
            0
        ],
        "key": "snotty"
    }
};
