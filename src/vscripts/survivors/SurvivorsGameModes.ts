import { SurvivorsGameModes } from "./SurvivorsInterface";

export const SURVIVORS_GAME_MODES: SurvivorsGameModes = {
    "crownfall_act4": {
        "gameModeId": 1,
        "cameraOffset": [
            3300,
            -3300,
            6600
        ],
        "levelName": "skywrath",
        "difficultyName": "Default",
        "enemyDespawnTime": 2,
        "enemyRadius": 1850,
        "enemyRadiusVariance": 450,
        "enemyDespawnBuffer": 150,
        "maxActiveSlots": 5,
        "maxPassiveSlots": 6,
        "levelUpChoices": 3,
        "maxXPPickupsInWorld": 400,
        "existingItemGenerationWeight": 0.35,
        "newItemGenerationWeight": 0.7,
        "passiveItemGenerationWeight": 0.6,
        "seperationVelocityInfluence": 0.55,
        "seperationVelocityInterpolationSpeed": 25,
        "playerPositionHistoryBufferDuration": 0.3,
        "playerReviveTimer": 2.7,
        "reviveEffect": "particles/events/crownfall/revive.vpcf",
        "firstFloorTimeLimit": 720,
        "eliteRoomChoices": [
            "elite_resurrecting_enemy",
            "elite_turrets",
            "elite_absorber",
            "elite_granite_golem_large"
        ],
        "eliteRoomTriggerChannelTime": 3,
        "eliteRoomTriggerRadius": 600,
        "eliteRoomChannelEffect": "particles/events/crownfall/survivors/elite_timer.vpcf",
        "eliteRoomDirectionalArrowEffect": "particles/events/crownfall/survivors/arrow_enemy_direction.vpcf",
        "eliteRoomUnlockTimes": [
            180,
            360,
            540
        ],
        "attackIndicatorParticleEffect": "particles/events/crownfall/survivors/attack_indicator_circle.vpcf",
        "collisionIndicatorEffect": "particles/events/crownfall/survivors/collision_indicator.vpcf",
        "collisionIndicatorColorPlayer": [
            0,
            255,
            0
        ],
        "collisionIndicatorColorEnemy": [
            251,
            210,
            69
        ],
        "physicalWeaknessEffect": "particles/events/crownfall/survivors/abilities/physical_weakness.vpcf",
        "genericStunEffect": "particles/events/crownfall/survivors/abilities/generic_stunned.vpcf",
        "eliteGlowColor": [
            0,
            128,
            255
        ],
        "damageNumbersEffectEnemy": "particles/events/crownfall/survivors/damage_numbers_glow.vpcf",
        "damageNumbersEffectPlayer": "particles/events/crownfall/survivors/damage_numbers.vpcf",
        "damageNumbersEffectCriticalStrike": "particles/events/crownfall/survivors/damage_numbers_crit.vpcf",
        "healthBarEffect": "particles/events/crownfall/survivors/health_bar.vpcf",
        "requiredExperienceBase": 5,
        "requiredExperienceExponent": 2.1,
        "levelUpDelay": 0.5,
        "levelUpKnockbackRadius": 500,
        "levelUpKnockbackDistance": 60,
        "initialItemSpawns": 2,
        "initialMagnetSpawns": 1,
        "levelUpEffect": "particles/generic_hero_status/hero_levelup.vpcf",
        "levelUpKnockbackEffect": "particles/events/crownfall/survivors/level_up_knockback.vpcf",
        "playerHitEffect": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "seperationLayerData": [
            {
                "separationLayer": "SMALL",
                "seperationDistance": 230
            },
            {
                "separationLayer": "LARGE",
                "seperationDistance": 320
            },
            {
                "separationLayer": "ELITE",
                "seperationDistance": 360
            }
        ],
        "timeBasedLightingEnvironments": [
            {
                "lightDirection": [
                    0.321394,
                    0.55667,
                    -0.766045
                ],
                "flGlobalLightScale": 2.5,
                "flPointLightScale": 2,
                "cLightColor": [
                    233,
                    194,
                    182
                ],
                "cAmbientColor": [
                    172,
                    163,
                    152
                ],
                "cShadowColor": [
                    135,
                    64,
                    72
                ],
                "cShadowSecondaryColor": [
                    93,
                    59,
                    73
                ],
                "cSpecularColor": [
                    154,
                    144,
                    126
                ]
            },
            {
                "lightDirection": [
                    0.321394,
                    0.55667,
                    -0.766045
                ],
                "flGlobalLightScale": 2,
                "flPointLightScale": 1.6,
                "cLightColor": [
                    233,
                    171,
                    117
                ],
                "cAmbientColor": [
                    224,
                    181,
                    181
                ],
                "cShadowColor": [
                    68,
                    68,
                    75
                ],
                "cShadowSecondaryColor": [
                    46,
                    38,
                    39
                ],
                "cSpecularColor": [
                    250,
                    243,
                    181
                ]
            },
            {
                "lightDirection": [
                    0.321394,
                    0.55667,
                    -0.766045
                ],
                "flGlobalLightScale": 2,
                "flPointLightScale": 1.8,
                "cLightColor": [
                    146,
                    119,
                    255
                ],
                "cAmbientColor": [
                    176,
                    186,
                    230
                ],
                "cShadowColor": [
                    72,
                    72,
                    152
                ],
                "cShadowSecondaryColor": [
                    33,
                    47,
                    71
                ],
                "cSpecularColor": [
                    80,
                    196,
                    233
                ]
            }
        ],
        "luckyLootTable": {
            "lootEntryCollections": [
                {
                    "chance": 1,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 3
                        }
                    ]
                },
                {
                    "chance": 0.2,
                    "lootEntries": [
                        {
                            "pickupId": 6,
                            "minAmount": 1,
                            "maxAmount": 3
                        },
                        {
                            "pickupId": 7,
                            "minAmount": 1,
                            "maxAmount": 2
                        }
                    ]
                }
            ]
        },
        "key": "crownfall_act4"
    }
};
