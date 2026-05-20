import { SurvivorsAttributes } from "./SurvivorsInterface";

export const SURVIVORS_ATTRIBUTES: SurvivorsAttributes = {
    "k_eSurvivorsAttribute_MaxHP": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MaxHP_LocName",
        "locTooltip": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MaxHP_LocTooltip",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MaxHP_LocDescription",
        "image": "file://{images}/control_icons/icon_zoo.psd",
        "primary": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 250
                },
                "value": 25
            },
            {
                "cost": {
                    "minigameCurrency": 1000
                },
                "value": 50
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 75
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 100
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 150
            }
        ],
        "key": "k_eSurvivorsAttribute_MaxHP"
    },
    "k_eSurvivorsAttribute_HPRegen": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_HPRegen_LocName",
        "image": "file://{images}/hud/facets/icons/twin_hearts.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_HPRegen_LocDescription",
        "primary": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 250
                },
                "value": 0.25
            },
            {
                "cost": {
                    "minigameCurrency": 1000
                },
                "value": 0.5
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 0.75
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 1
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 1.25
            }
        ],
        "key": "k_eSurvivorsAttribute_HPRegen"
    },
    "k_eSurvivorsAttribute_LifeSteal": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_LifeSteal_LocName",
        "image": "file://{images}/control_icons/icon_zoo.psd",
        "primary": false,
        "key": "k_eSurvivorsAttribute_LifeSteal"
    },
    "k_eSurvivorsAttribute_Damage": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Damage_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Damage_LocDescription",
        "image": "file://{images}/control_icons/24px/kill_streak_effects.vsvg",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Damage"
    },
    "k_eSurvivorsAttribute_DamageMultiplier": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageMultiplier_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageMultiplier_LocDescription",
        "image": "file://{images}/control_icons/24px/kill_streak_effects.vsvg",
        "primary": false,
        "percentage": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 250
                },
                "value": 0.05
            },
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 0.1
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 0.15
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 0.2
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 0.25
            }
        ],
        "key": "k_eSurvivorsAttribute_DamageMultiplier"
    },
    "k_eSurvivorsAttribute_Damage_Physical": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Damage_Physical_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Damage_Physical_LocDescription",
        "image": "file://{images}/control_icons/24px/kill_streak_effects.vsvg",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Damage_Physical"
    },
    "k_eSurvivorsAttribute_DamageMultiplier_Physical": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageMultiplier_Physical_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageMultiplier_Physical_LocDescription",
        "image": "file://{images}/control_icons/24px/kill_streak_effects.vsvg",
        "primary": true,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_DamageMultiplier_Physical"
    },
    "k_eSurvivorsAttribute_Damage_Magical": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Damage_Magical_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Damage_Magical_LocDescription",
        "image": "file://{images}/control_icons/24px/kill_streak_effects.vsvg",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Damage_Magical"
    },
    "k_eSurvivorsAttribute_DamageMultiplier_Magical": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageMultiplier_Magical_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageMultiplier_Magical_LocDescription",
        "image": "file://{images}/control_icons/24px/kill_streak_effects.vsvg",
        "primary": true,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_DamageMultiplier_Magical"
    },
    "k_eSurvivorsAttribute_CriticalStrike_Physical_Chance": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CriticalStrike_Physical_Chance_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CriticalStrike_Physical_Chance_LocDescription",
        "image": "file://{images}/control_icons/24px/kill_streak_effects.vsvg",
        "primary": true,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_CriticalStrike_Physical_Chance"
    },
    "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier_LocDescription",
        "image": "file://{images}/control_icons/24px/kill_streak_effects.vsvg",
        "primary": true,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier"
    },
    "k_eSurvivorsAttribute_MovementSpeed": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MovementSpeed_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MovementSpeed_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 250
                },
                "value": 20
            },
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 40
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 60
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 80
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 100
            }
        ],
        "key": "k_eSurvivorsAttribute_MovementSpeed"
    },
    "k_eSurvivorsAttribute_Cooldown": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Cooldown_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Cooldown_LocDescription",
        "image": "file://{images}/control_icons/24px/unusual.vsvg",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Cooldown"
    },
    "k_eSurvivorsAttribute_CooldownReductionMultiplier": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CooldownReductionMultiplier_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CooldownReductionMultiplier_LocDescription",
        "image": "file://{images}/control_icons/24px/unusual.vsvg",
        "primary": true,
        "percentage": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 0.03
            },
            {
                "cost": {
                    "minigameCurrency": 1000
                },
                "value": 0.06
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 0.09
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 0.12
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 0.15
            }
        ],
        "key": "k_eSurvivorsAttribute_CooldownReductionMultiplier"
    },
    "k_eSurvivorsAttribute_Range": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Range_LocName",
        "image": "file://{images}/control_icons/filter_ranges.png",
        "primary": false,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 125
            },
            {
                "cost": {
                    "minigameCurrency": 1000
                },
                "value": 250
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 375
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 500
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 675
            }
        ],
        "key": "k_eSurvivorsAttribute_Range"
    },
    "k_eSurvivorsAttribute_Armor": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Armor_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Armor_LocDescription",
        "image": "file://{images}/control_icons/24px/hero.vsvg",
        "primary": true,
        "percentage": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 0.05
            },
            {
                "cost": {
                    "minigameCurrency": 1000
                },
                "value": 0.1
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 0.15
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 0.2
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 0.25
            }
        ],
        "key": "k_eSurvivorsAttribute_Armor"
    },
    "k_eSurvivorsAttribute_DamageReflection": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageReflection_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageReflection_LocDescription",
        "image": "file://{images}/control_icons/24px/hero.vsvg",
        "primary": true,
        "percentage": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 0.5
            },
            {
                "cost": {
                    "minigameCurrency": 1000
                },
                "value": 1
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 1.5
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 2
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 2.5
            }
        ],
        "key": "k_eSurvivorsAttribute_DamageReflection"
    },
    "k_eSurvivorsAttribute_Dodge": {
        "locName": "Dodge",
        "image": "file://{images}/control_icons/crit_damage.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Dodge"
    },
    "k_eSurvivorsAttribute_ExpMultiplier": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ExpMultiplier_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ExpMultiplier_LocDescription",
        "image": "file://{images}/hud/facets/icons/xp.png",
        "primary": true,
        "percentage": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 0.025
            },
            {
                "cost": {
                    "minigameCurrency": 1000
                },
                "value": 0.05
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 0.075
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 0.1
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 0.15
            }
        ],
        "key": "k_eSurvivorsAttribute_ExpMultiplier"
    },
    "k_eSurvivorsAttribute_PickupRadius": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_PickupRadius_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_PickupRadius_LocDescription",
        "primary": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 250
                },
                "value": 75
            },
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 150
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 225
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 300
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 375
            }
        ],
        "key": "k_eSurvivorsAttribute_PickupRadius"
    },
    "k_eSurvivorsAttribute_StunDuration": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_StunDuration_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_StunDuration_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_StunDuration"
    },
    "k_eSurvivorsAttribute_ProjectileBounces": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileBounces_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileBounces_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ProjectileBounces"
    },
    "k_eSurvivorsAttribute_AoEIncrease": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_AoEIncrease_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_AoEIncrease_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": true,
        "percentage": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 0.05
            },
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 0.1
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 0.15
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 0.2
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 0.25
            }
        ],
        "key": "k_eSurvivorsAttribute_AoEIncrease"
    },
    "k_eSurvivorsAttribute_KnockbackDistance": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_KnockbackDistance_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_KnockbackDistance_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_KnockbackDistance"
    },
    "k_eSurvivorsAttribute_FreezeDuration": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_FreezeDuration_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_FreezeDuration_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_FreezeDuration"
    },
    "k_eSurvivorsAttribute_FreezeStrength": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_FreezeStrength_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_FreezeStrength_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_FreezeStrength"
    },
    "k_eSurvivorsAttribute_VulnerabilityDuration": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_VulnerabilityDuration_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_VulnerabilityDuration_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_VulnerabilityDuration"
    },
    "k_eSurvivorsAttribute_VulnerabilityDamagePercent": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_VulnerabilityDamagePercent_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_VulnerabilityDamagePercent_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_VulnerabilityDamagePercent"
    },
    "k_eSurvivorsAttribute_VulnerabilityStunOnHitDuration": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_VulnerabilityStunOnHitDuration_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_VulnerabilityStunOnHitDuration_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_VulnerabilityStunOnHitDuration"
    },
    "k_eSurvivorsAttribute_MaxRerolls": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MaxRerolls_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MaxRerolls_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 1
            },
            {
                "cost": {
                    "minigameCurrency": 500
                },
                "value": 2
            },
            {
                "cost": {
                    "minigameCurrency": 2500
                },
                "value": 3
            },
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 4
            },
            {
                "cost": {
                    "minigameCurrency": 20000
                },
                "value": 5
            }
        ],
        "key": "k_eSurvivorsAttribute_MaxRerolls"
    },
    "k_eSurvivorsAttribute_DamageTicks": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageTicks_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DamageTicks_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_DamageTicks"
    },
    "k_eSurvivorsAttribute_TimeBetweenTicks": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_TimeBetweenTicks_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_TimeBetweenTicks_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_TimeBetweenTicks"
    },
    "k_eSurvivorsAttribute_ModifierDamagePerTick": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ModifierDamagePerTick_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ModifierDamagePerTick_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ModifierDamagePerTick"
    },
    "k_eSurvivorsAttribute_Radius": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Radius_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Radius_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Radius"
    },
    "k_eSurvivorsAttribute_Length": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Length_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Length_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Length"
    },
    "k_eSurvivorsAttribute_ArmingTime": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ArmingTime_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ArmingTime_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ArmingTime"
    },
    "k_eSurvivorsAttribute_ProjectileHitCount": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileHitCount_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileHitCount_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ProjectileHitCount"
    },
    "k_eSurvivorsAttribute_ProjectileHorizontalOffset": {
        "locName": "Projectile Horizontal Offset",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileHorizontalOffset_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ProjectileHorizontalOffset"
    },
    "k_eSurvivorsAttribute_SplashDamagePercentage": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_SplashDamagePercentage_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_SplashDamagePercentage_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_SplashDamagePercentage"
    },
    "k_eSurvivorsAttribute_Directions": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Directions_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Directions_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Directions"
    },
    "k_eSurvivorsAttribute_Duration": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Duration_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Duration_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Duration"
    },
    "k_eSurvivorsAttribute_DurationExtension": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DurationExtension_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_DurationExtension_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_DurationExtension"
    },
    "k_eSurvivorsAttribute_StampedeMovementSpeed": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_StampedeMovementSpeed_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_StampedeMovementSpeed_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_StampedeMovementSpeed"
    },
    "k_eSurvivorsAttribute_ActiveAbilitySlots": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ActiveAbilitySlots_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ActiveAbilitySlots_LocDescription",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ActiveAbilitySlots"
    },
    "k_eSurvivorsAttribute_KnockbackDistanceMultiplier": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_KnockbackDistanceMultiplier_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_KnockbackDistanceMultiplier_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": true,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_KnockbackDistanceMultiplier"
    },
    "k_eSurvivorsAttribute_ProjectileSpeed": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileSpeed_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileSpeed_LocDescription",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ProjectileSpeed"
    },
    "k_eSurvivorsAttribute_Width": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Width_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Width_LocDescription",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Width"
    },
    "k_eSurvivorsAttribute_FreezeSplashRadius": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_FreezeSplashRadius_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_FreezeSplashRadius_LocDescription",
        "primary": false,
        "key": "k_eSurvivorsAttribute_FreezeSplashRadius"
    },
    "k_eSurvivorsAttribute_CriticalStrike_Projectile_Chance": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CriticalStrike_Projectile_Chance_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CriticalStrike_Projectile_Chance_LocDescription",
        "primary": false,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_CriticalStrike_Projectile_Chance"
    },
    "k_eSurvivorsAttribute_CriticalStrike_Projectile_DamageMultiplier": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CriticalStrike_Projectile_DamageMultiplier_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_CriticalStrike_Projectile_DamageMultiplier_LocDescription",
        "primary": false,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_CriticalStrike_Projectile_DamageMultiplier"
    },
    "k_eSurvivorsAttribute_Projectile_BonusMagicDamage": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Projectile_BonusMagicDamage_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Projectile_BonusMagicDamage_LocDescription",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Projectile_BonusMagicDamage"
    },
    "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Percentage": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Percentage_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Percentage_LocDescription",
        "primary": false,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Percentage"
    },
    "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Duration": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Duration_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Duration_LocDescription",
        "primary": false,
        "key": "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Duration"
    },
    "k_eSurvivorsAttribute_LimitBreak": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_LimitBreak_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_LimitBreak_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_LimitBreak"
    },
    "k_eSurvivorsAttribute_BonusPhysicalDamage": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_BonusPhysicalDamage_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_BonusPhysicalDamage_LocDescription",
        "primary": false,
        "key": "k_eSurvivorsAttribute_BonusPhysicalDamage"
    },
    "k_eSurvivorsAttribute_IncomingDamageAmplification": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_IncomingDamageAmplification_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_IncomingDamageAmplification_LocDescription",
        "primary": false,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_IncomingDamageAmplification"
    },
    "k_eSurvivorsAttribute_IncomingDamageAmplificationDuration": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_IncomingDamageAmplificationDuration_LocName",
        "image": "file://{images}/control_icons/socket_empty.png",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_IncomingDamageAmplificationDuration_LocDescription",
        "primary": false,
        "key": "k_eSurvivorsAttribute_IncomingDamageAmplificationDuration"
    },
    "k_eSurvivorsAttribute_ProjectileDamagePercent": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileDamagePercent_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileDamagePercent_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_ProjectileDamagePercent"
    },
    "k_eSurvivorsAttribute_ProjectileAttack": {
        "locName": "Projectile Attack",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileAttack_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ProjectileAttack"
    },
    "k_eSurvivorsAttribute_ProjectileAttackInterval": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileAttackInterval_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_ProjectileAttackInterval_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_ProjectileAttackInterval"
    },
    "k_eSurvivorsAttribute_Luck": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Luck_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Luck_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_Luck"
    },
    "k_eSurvivorsAttribute_TargetCount": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_TargetCount_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_TargetCount_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": true,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 1
            },
            {
                "cost": {
                    "minigameCurrency": 30000
                },
                "value": 2
            }
        ],
        "key": "k_eSurvivorsAttribute_TargetCount"
    },
    "k_eSurvivorsAttribute_Lives": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Lives_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_Lives_LocDescription",
        "image": "file://{images}/hud/facets/icons/movement.png",
        "primary": false,
        "metaProgressionTiers": [
            {
                "cost": {
                    "minigameCurrency": 10000
                },
                "value": 1
            },
            {
                "cost": {
                    "minigameCurrency": 30000
                },
                "value": 2
            }
        ],
        "key": "k_eSurvivorsAttribute_Lives"
    },
    "k_eSurvivorsAttribute_SlowStrength": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_SlowStrength_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_SlowStrength_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "percentage": true,
        "key": "k_eSurvivorsAttribute_SlowStrength"
    },
    "k_eSurvivorsAttribute_SlowDuration": {
        "locName": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_SlowDuration_LocName",
        "locDescription": "#DOTA_VData_survivors_attributes_k_eSurvivorsAttribute_SlowDuration_LocDescription",
        "image": "file://{images}/control_icons/socket_empty.png",
        "primary": false,
        "key": "k_eSurvivorsAttribute_SlowDuration"
    }
};
