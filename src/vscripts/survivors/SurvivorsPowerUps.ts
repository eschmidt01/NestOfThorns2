import { SurvivorsPowerUpDefinition } from "./SurvivorsInterface";

export const SURVIVORS_POWERUPS: Record<string, SurvivorsPowerUpDefinition> = {
    "pile_of_coal": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 1000,
        "image": "file://{images}/items/winter_coal.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_pile_of_coal_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "rollable": false,
        "key": "pile_of_coal"
    },
    "gold": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 999,
        "image": "file://{images}/hud/reborn/gold_large.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_gold_LocAbilityName",
        "maxLevel": 1,
        "isGold": true,
        "rollable": false,
        "key": "gold"
    },
    "yasha": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 1,
        "image": "file://{images}/items/yasha.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_yasha_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_MovementSpeed"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_MovementSpeed",
                        "value": 25
                    }
                ]
            }
        ],
        "key": "yasha"
    },
    "blade_mail": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 2,
        "image": "file://{images}/items/blade_mail.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_blade_mail_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Armor",
            "k_eSurvivorsAttribute_DamageReflection"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Armor",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageReflection",
                        "value": 1
                    }
                ]
            }
        ],
        "key": "blade_mail"
    },
    "kaya": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 3,
        "image": "file://{images}/items/kaya.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_kaya_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_DamageMultiplier_Magical"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageMultiplier_Magical",
                        "value": 0.15
                    }
                ]
            }
        ],
        "key": "kaya"
    },
    "crystalys": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 20,
        "image": "file://{images}/items/lesser_crit.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_crystalys_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_CriticalStrike_Physical_Chance",
            "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier"
        ],
        "authoredUpgradeChoices": [
            {
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Physical_Chance",
                        "value": 0.3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier",
                        "value": 1.6
                    }
                ]
            },
            {
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier",
                        "value": 0.35
                    }
                ]
            },
            {
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier",
                        "value": 0.35
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier",
                        "value": 0.35
                    }
                ]
            }
        ],
        "key": "crystalys"
    },
    "reaver": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 4,
        "image": "file://{images}/items/reaver.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_reaver_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_MaxHP"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_MaxHP",
                        "value": 50
                    }
                ]
            }
        ],
        "key": "reaver"
    },
    "ring_of_tarrasque": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 5,
        "image": "file://{images}/items/ring_of_tarrasque.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_ring_of_tarrasque_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_HPRegen"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_HPRegen",
                        "value": 0.5
                    }
                ]
            }
        ],
        "key": "ring_of_tarrasque"
    },
    "tome_of_knowledge": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 6,
        "image": "file://{images}/items/tome_of_knowledge.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_tome_of_knowledge_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_ExpMultiplier"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ExpMultiplier",
                        "value": 0.1
                    }
                ]
            }
        ],
        "key": "tome_of_knowledge"
    },
    "octarine_core": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 7,
        "image": "file://{images}/items/octarine_core.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_octarine_core_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_CooldownReductionMultiplier"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            }
        ],
        "key": "octarine_core"
    },
    "bloodstone": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 8,
        "image": "file://{images}/items/bloodstone.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_bloodstone_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_AoEIncrease"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_AoEIncrease",
                        "value": 0.1
                    }
                ]
            }
        ],
        "key": "bloodstone"
    },
    "world_chasm_artifact": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 9,
        "image": "file://{images}/items/world_chasm_artifact.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_world_chasm_artifact_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_PickupRadius"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_PickupRadius",
                        "value": 150
                    }
                ]
            }
        ],
        "key": "world_chasm_artifact"
    },
    "apex": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 101,
        "image": "file://{images}/items/apex.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_apex_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_ActiveAbilitySlots"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ActiveAbilitySlots",
                        "value": 1
                    }
                ]
            }
        ],
        "key": "apex"
    },
    "echo_stone": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 90,
        "image": "file://{images}/items/echo_stone.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_echo_stone_LocAbilityName",
        "maxLevel": 2,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_TargetCount"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            }
        ],
        "key": "echo_stone"
    },
    "sange": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 91,
        "image": "file://{images}/items/sange.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_sange_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_KnockbackDistanceMultiplier"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
                        "value": 0.2
                    }
                ]
            }
        ],
        "key": "sange"
    },
    "sange_and_yasha": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 92,
        "image": "file://{images}/items/sange_and_yasha.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_sange_and_yasha_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
            "k_eSurvivorsAttribute_MovementSpeed"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
                        "value": 0.8
                    },
                    {
                        "type": "k_eSurvivorsAttribute_MovementSpeed",
                        "value": 100
                    }
                ]
            }
        ],
        "recipeItems": [
            1,
            91
        ],
        "key": "sange_and_yasha"
    },
    "kaya_and_sange": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 93,
        "image": "file://{images}/items/kaya_and_sange.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_kaya_and_sange_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
            "k_eSurvivorsAttribute_DamageMultiplier_Magical"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
                        "value": 0.8
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageMultiplier_Magical",
                        "value": 0.6
                    }
                ]
            }
        ],
        "recipeItems": [
            3,
            91
        ],
        "key": "kaya_and_sange"
    },
    "yasha_and_kaya": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 94,
        "image": "file://{images}/items/yasha_and_kaya.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_yasha_and_kaya_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_MovementSpeed",
            "k_eSurvivorsAttribute_DamageMultiplier_Magical"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_MovementSpeed",
                        "value": 100
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageMultiplier_Magical",
                        "value": 0.6
                    }
                ]
            }
        ],
        "recipeItems": [
            1,
            3
        ],
        "key": "yasha_and_kaya"
    },
    "heart_of_tarrasque": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 95,
        "image": "file://{images}/items/heart.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_heart_of_tarrasque_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_MaxHP",
            "k_eSurvivorsAttribute_HPRegen"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_MaxHP",
                        "value": 200
                    },
                    {
                        "type": "k_eSurvivorsAttribute_HPRegen",
                        "value": 3
                    }
                ]
            }
        ],
        "recipeItems": [
            4,
            5
        ],
        "key": "heart_of_tarrasque"
    },
    "phylactery": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 97,
        "image": "file://{images}/items/phylactery.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_phylactery_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Projectile_BonusMagicDamage"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Projectile_BonusMagicDamage",
                        "value": 5
                    }
                ]
            }
        ],
        "key": "phylactery"
    },
    "demon_edge": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 98,
        "image": "file://{images}/items/demon_edge.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_demon_edge_LocAbilityName",
        "maxLevel": 3,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_BonusPhysicalDamage"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_BonusPhysicalDamage",
                        "value": 5
                    }
                ]
            }
        ],
        "key": "demon_edge"
    },
    "daedalus": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 99,
        "image": "file://{images}/items/greater_crit.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_daedalus_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_CriticalStrike_Physical_Chance",
            "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier",
            "k_eSurvivorsAttribute_BonusPhysicalDamage"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Physical_Chance",
                        "value": 0.3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Physical_DamageMultiplier",
                        "value": 2.5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_BonusPhysicalDamage",
                        "value": 20
                    }
                ]
            }
        ],
        "recipeItems": [
            20,
            98
        ],
        "key": "daedalus"
    },
    "khanda": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 100,
        "image": "file://{images}/items/angels_demise.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_khanda_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_CriticalStrike_Projectile_Chance",
            "k_eSurvivorsAttribute_CriticalStrike_Projectile_DamageMultiplier",
            "k_eSurvivorsAttribute_Projectile_BonusMagicDamage"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Projectile_Chance",
                        "value": 0.3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CriticalStrike_Projectile_DamageMultiplier",
                        "value": 2.5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Projectile_BonusMagicDamage",
                        "value": 20
                    }
                ]
            }
        ],
        "recipeItems": [
            20,
            97
        ],
        "key": "khanda"
    },
    "sny_trident": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 140,
        "image": "file://{images}/items/trident.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_sny_trident_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
            "k_eSurvivorsAttribute_MovementSpeed",
            "k_eSurvivorsAttribute_DamageMultiplier_Magical"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_MovementSpeed",
                        "value": 125
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageMultiplier_Magical",
                        "value": 0.75
                    }
                ]
            }
        ],
        "recipeItems": [
            92,
            3
        ],
        "key": "sny_trident"
    },
    "kns_trident": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 141,
        "image": "file://{images}/items/trident.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_kns_trident_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
            "k_eSurvivorsAttribute_MovementSpeed",
            "k_eSurvivorsAttribute_DamageMultiplier_Magical"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_MovementSpeed",
                        "value": 125
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageMultiplier_Magical",
                        "value": 0.75
                    }
                ]
            }
        ],
        "recipeItems": [
            93,
            1
        ],
        "key": "kns_trident"
    },
    "ynk_trident": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 143,
        "image": "file://{images}/items/trident.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_ynk_trident_LocAbilityName",
        "maxLevel": 1,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
            "k_eSurvivorsAttribute_MovementSpeed",
            "k_eSurvivorsAttribute_DamageMultiplier_Magical"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistanceMultiplier",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_MovementSpeed",
                        "value": 125
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageMultiplier_Magical",
                        "value": 0.75
                    }
                ]
            }
        ],
        "recipeItems": [
            94,
            91
        ],
        "key": "ynk_trident"
    },
    "timeless_relic": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 23,
        "image": "file://{images}/items/timeless_relic.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_timeless_relic_LocAbilityName",
        "maxLevel": 2,
        "isPassive": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_DurationExtension"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DurationExtension",
                        "value": 1
                    }
                ]
            }
        ],
        "key": "timeless_relic"
    },
    "magic_missile": {
        "className": "CSurvivorsPowerUpDefinition_MagicMissile",
        "powerUpId": 10,
        "locAbilityName": "#DOTA_VData_survivors_powerups_magic_missile_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_magic_missile_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_magic_missile_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/vengefulspirit_magic_missile_alt2.png",
        "particle": "particles/events/crownfall/survivors/abilities/vengeful/vengeful_magic_missile.vpcf",
        "stunParticle": "particles/events/crownfall/survivors/abilities/generic_stunned.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "impactParticle": "particles/events/crownfall/survivors/abilities/vengeful/magic_missile_aoe_stun_explosion.vpcf",
        "source": "vengefulspirit",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/vengeful_spirit_demon_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_magic_missile_LocHeroName",
        "maxLevel": 9,
        "targeting": "CLOSEST_TARGET",
        "bounceTargeting": "RANDOM_TARGET_AT_RANGE",
        "bounceMinimumLifetime": 0.2,
        "isShardUpgradeable": true,
        "isScepterUpgradeable": true,
        "shardDamageMultiplier": 0.25,
        "scepterDamageIncreasePerEnemyKilled": 0.01,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Magical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Range",
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_ProjectileBounces",
            "k_eSurvivorsAttribute_StunDuration"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 20
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 2.4
            },
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_StunDuration",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 1000
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileSpeed",
                "value": 1200
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileRadius",
                "value": 50
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttack",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileBounces",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 160
            },
            {
                "type": "k_eSurvivorsAttribute_DurationEffect",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 10
                    }
                ]
            },
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_StunDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 1
                    }
                ]
            }
        ],
        "key": "magic_missile"
    },
    "arcane_bolt": {
        "className": "CSurvivorsPowerUpDefinition_ArcaneBolt",
        "powerUpId": 11,
        "locAbilityName": "#DOTA_VData_survivors_powerups_arcane_bolt_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_arcane_bolt_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_arcane_bolt_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/skywrath_mage_arcane_bolt_alt2.png",
        "particle": "particles/events/crownfall/survivors/abilities/skywrath/skywrath_arcane_bolt.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "source": "skywrath_mage",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/skywrath_mage_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_arcane_bolt_LocHeroName",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "targeting": "CLOSEST_TARGET",
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Magical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Range",
            "k_eSurvivorsAttribute_TargetCount"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 7
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 1.2
            },
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 1200
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileSpeed",
                "value": 800
            },
            {
                "type": "k_eSurvivorsAttribute_KnockbackDistance",
                "value": 15
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileRadius",
                "value": 50
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttackInterval",
                "value": 0.2
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttack",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileHitCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 7
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 20
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 7
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 25
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 7
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 7
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 10
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 5
                    }
                ]
            },
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            },
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileHitCount",
                        "value": 1
                    }
                ]
            }
        ],
        "key": "arcane_bolt"
    },
    "echo_strike": {
        "className": "CSurvivorsPowerUpDefinition_EchoStrike",
        "powerUpId": 12,
        "locAbilityName": "#DOTA_VData_survivors_powerups_echo_strike_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_echo_strike_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_echo_strike_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/kez_echo_slash.png",
        "source": "kez",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/kestrel_parka_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_echo_strike_LocHeroName",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "particle": "particles/units/heroes/hero_kez/kez_katana_echo_strike_survivors.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "warmupEffectParticle": "particles/events/crownfall/survivors/abilities/ability_anticipation.vpcf",
        "warmupEffectTime": 0.85,
        "warmupEffectColor": [
            0,
            0.88,
            40
        ],
        "origin": "PLAYER_ORIGIN",
        "useFacingDirection": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Length",
            "k_eSurvivorsAttribute_DamageTicks"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 10
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 2.1
            },
            {
                "type": "k_eSurvivorsAttribute_KnockbackDistance",
                "value": 12
            },
            {
                "type": "k_eSurvivorsAttribute_InitialTickDelay",
                "value": 0.1
            },
            {
                "type": "k_eSurvivorsAttribute_DamageTicks",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Length",
                "value": 720
            },
            {
                "type": "k_eSurvivorsAttribute_Width",
                "value": 420
            },
            {
                "type": "k_eSurvivorsAttribute_TimeBetweenTicks",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TimeBetweenTicks",
                        "value": -0.2
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_AoEIncrease",
                        "value": 0.15
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TimeBetweenTicks",
                        "value": -0.2
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_AoEIncrease",
                        "value": 0.15
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Width",
                        "value": 100
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TimeBetweenTicks",
                        "value": -0.2
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_AoEIncrease",
                        "value": 0.15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_AoEIncrease",
                        "value": 0.2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 10
                    }
                ]
            },
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    }
                ]
            }
        ],
        "key": "echo_strike"
    },
    "swashbuckle": {
        "className": "CSurvivorsPowerUpDefinition_Swashbuckle",
        "powerUpId": 120,
        "locAbilityName": "#DOTA_VData_survivors_powerups_swashbuckle_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_swashbuckle_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_swashbuckle_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/pangolier_swashbuckle.png",
        "source": "pangolier",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/pangolier_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_swashbuckle_LocHeroName",
        "particle": "particles/events/crownfall/survivors/abilities/pangolier/pangolier_swashbuckler.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "origin": "PLAYER_ORIGIN",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Length",
            "k_eSurvivorsAttribute_Directions",
            "k_eSurvivorsAttribute_DamageTicks"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 8
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 1.6
            },
            {
                "type": "k_eSurvivorsAttribute_KnockbackDistance",
                "value": 7
            },
            {
                "type": "k_eSurvivorsAttribute_DamageTicks",
                "value": 2
            },
            {
                "type": "k_eSurvivorsAttribute_Length",
                "value": 520
            },
            {
                "type": "k_eSurvivorsAttribute_Width",
                "value": 300
            },
            {
                "type": "k_eSurvivorsAttribute_TimeBetweenTicks",
                "value": 0.18
            },
            {
                "type": "k_eSurvivorsAttribute_Directions",
                "value": 2
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_AoEIncrease",
                        "value": 0.15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 8
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 8
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 7
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_AoEIncrease",
                        "value": 0.15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 8
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 8
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 7
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 8
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 4
                    }
                ]
            }
        ],
        "key": "swashbuckle"
    },
    "stampede": {
        "className": "CSurvivorsPowerUpDefinition_Stampede",
        "powerUpId": 130,
        "locAbilityName": "#DOTA_VData_survivors_powerups_stampede_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_stampede_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_stampede_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/centaur_stampede.png",
        "source": "centaur",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/centaur_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_stampede_LocHeroName",
        "particle": "particles/events/crownfall/survivors/abilities/centaur/stampede_buff_overhead.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "movementSpeedPercentDamageMultiplier": 0.1,
        "isScepterUpgradeable": true,
        "warmupEffectParticle": "particles/events/crownfall/survivors/abilities/ability_anticipation.vpcf",
        "warmupEffectTime": 1.3,
        "warmupEffectColor": [
            4,
            0,
            0
        ],
        "maxLevel": 9,
        "origin": "PLAYER_ORIGIN",
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Radius",
            "k_eSurvivorsAttribute_Duration",
            "k_eSurvivorsAttribute_StampedeMovementSpeed"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 10
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 30
            },
            {
                "type": "k_eSurvivorsAttribute_KnockbackDistance",
                "value": 30
            },
            {
                "type": "k_eSurvivorsAttribute_Duration",
                "value": 3.5
            },
            {
                "type": "k_eSurvivorsAttribute_StampedeMovementSpeed",
                "value": 700
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 200
            },
            {
                "type": "k_eSurvivorsAttribute_DurationEffect",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 3
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_StampedeMovementSpeed",
                        "value": 50
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 3
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_StampedeMovementSpeed",
                        "value": 50
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 3
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_StampedeMovementSpeed",
                        "value": 50
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 3
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_StampedeMovementSpeed",
                        "value": 50
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_StampedeMovementSpeed",
                        "value": 50
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 3
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 3
                    }
                ]
            }
        ],
        "key": "stampede"
    },
    "counter_helix": {
        "className": "CSurvivorsPowerUpDefinition_CounterHelix",
        "powerUpId": 13,
        "locAbilityName": "#DOTA_VData_survivors_powerups_counter_helix_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_counter_helix_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_counter_helix_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/axe_counter_helix.png",
        "source": "axe",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/axe_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_counter_helix_LocHeroName",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "particle": "particles/events/crownfall/survivors/abilities/axe/axe_counter_helix.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "origin": "PLAYER_ORIGIN",
        "chanceToCounter": 1,
        "delayBetweenCounters": 0.15,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Radius",
            "k_eSurvivorsAttribute_KnockbackDistance"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 25
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 3.5
            },
            {
                "type": "k_eSurvivorsAttribute_InitialTickDelay",
                "value": 0.05
            },
            {
                "type": "k_eSurvivorsAttribute_KnockbackDistance",
                "value": 30
            },
            {
                "type": "k_eSurvivorsAttribute_DamageTicks",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 360
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 30
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 10
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 30
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 10
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 30
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 10
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 30
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 10
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_KnockbackDistance",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 10
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 30
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 10
                    }
                ]
            }
        ],
        "key": "counter_helix"
    },
    "rot": {
        "className": "CSurvivorsPowerUpDefinition_AreaAttack_CircleConstant",
        "powerUpId": 14,
        "locAbilityName": "#DOTA_VData_survivors_powerups_rot_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_rot_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_rot_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/pudge_rot.png",
        "isScepterUpgradeable": true,
        "source": "pudge",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/pudge_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_rot_LocHeroName",
        "maxLevel": 9,
        "particle": "particles/events/crownfall/survivors/abilities/pudge/pudge_rot.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "origin": "PLAYER_ORIGIN",
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Magical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Radius"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 5
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 250
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 25
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 25
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 25
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 25
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 25
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    }
                ]
            }
        ],
        "scepterUpgradeDefinition": {
            "upgradeAttributes": [
                {
                    "type": "k_eSurvivorsAttribute_FreezeDuration",
                    "value": 0.5
                },
                {
                    "type": "k_eSurvivorsAttribute_FreezeStrength",
                    "value": 0.3
                },
                {
                    "type": "k_eSurvivorsAttribute_Duration",
                    "value": 5
                },
                {
                    "type": "k_eSurvivorsAttribute_DurationEffect",
                    "value": 1
                }
            ]
        },
        "key": "rot"
    },
    "annihilation": {
        "className": "CSurvivorsPowerUpDefinition_InstantAttack",
        "powerUpId": 102,
        "locAbilityName": "#DOTA_VData_survivors_powerups_annihilation_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_annihilation_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_annihilation_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/razor/arcana/razor_eye_of_the_storm_alt1.png",
        "source": "skreeauk",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/skreeauk_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_annihilation_LocHeroName",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "particle": "particles/events/crownfall/survivors/abilities/zeus/zuus_thundergods_wrath.vpcf",
        "hitStatusEffectParticle": "particles/units/heroes/hero_zeus/zues_kill_empty.vpcf",
        "targeting": "RANDOM_TARGET_IN_RANGE",
        "warmupEffectParticle": "particles/events/crownfall/survivors/abilities/ability_anticipation.vpcf",
        "warmupEffectTime": 2,
        "warmupEffectColor": [
            1,
            0,
            0.5
        ],
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Range"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 220
            },
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 50
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 60
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 1600
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttack",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 80
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 50
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 80
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 50
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 80
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 50
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 80
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 50
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 90
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 20
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 100
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 20
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            }
        ],
        "key": "annihilation"
    },
    "chain_frost": {
        "className": "CSurvivorsPowerUpDefinition_ProjectileAttack",
        "powerUpId": 103,
        "locAbilityName": "#DOTA_VData_survivors_powerups_chain_frost_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_chain_frost_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_chain_frost_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/lich_chain_frost.png",
        "particle": "particles/events/crownfall/survivors/abilities/chain_frost.vpcf",
        "modifierParticle": "particles/events/crownfall/survivors/abilities/chain_frost_cold.vpcf",
        "source": "lich",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/lich_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_chain_frost_LocHeroName",
        "maxLevel": 9,
        "targeting": "STRONGEST_TARGET_IN_RANGE",
        "bounceTargeting": "RANDOM_TARGET_AT_RANGE",
        "bounceMinimumLifetime": 0.2,
        "spawnMinimumLifetime": 0.2,
        "isShardUpgradeable": false,
        "isScepterUpgradeable": true,
        "expireOnWorldCollision": false,
        "abilityActiveWhileProjectileIsAlive": false,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Magical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Range",
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_ProjectileBounces"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 60
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 14
            },
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_StunDuration",
                "value": 0.2
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 800
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileBounces",
                "value": 5
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileSpeed",
                "value": 1000
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileRadius",
                "value": 90
            },
            {
                "type": "k_eSurvivorsAttribute_FreezeSplashRadius",
                "value": 130
            },
            {
                "type": "k_eSurvivorsAttribute_FreezeDuration",
                "value": 2
            },
            {
                "type": "k_eSurvivorsAttribute_FreezeStrength",
                "value": 0.25
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttack",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_DurationEffect",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 25
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Range",
                        "value": 100
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 25
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Range",
                        "value": 100
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 25
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Range",
                        "value": 100
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 25
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Range",
                        "value": 100
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 25
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Range",
                        "value": 100
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 25
                    }
                ]
            },
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileBounces",
                        "value": 2
                    }
                ]
            }
        ],
        "key": "chain_frost"
    },
    "frostbite": {
        "className": "CSurvivorsPowerUpDefinition_Frostbite",
        "powerUpId": 16,
        "locAbilityName": "#DOTA_VData_survivors_powerups_frostbite_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_frostbite_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_frostbite_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/crystal_maiden_frostbite.png",
        "source": "crystal_maiden",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/crystal_maiden_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_frostbite_LocHeroName",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "particle": "particles/events/crownfall/survivors/abilities/crystal_maiden/crystal_maiden_frost_bite_projectile.vpcf",
        "modifierParticle": "particles/events/crownfall/survivors/abilities/crystal_maiden/crystal_maiden_frostbite.vpcf",
        "modifierParticleUsesOverheadOffset": false,
        "freezeParticle": "particles/events/crownfall/survivors/status/status_effect_frost.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "targeting": "STRONGEST_TARGET_IN_RANGE",
        "scepterExplodeRadius": 200,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_ModifierDamagePerTick",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_FreezeDuration",
            "k_eSurvivorsAttribute_Range",
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_ProjectileDamagePercent"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 2
            },
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 0
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 3.5
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 800
            },
            {
                "type": "k_eSurvivorsAttribute_ModifierDamagePerTick",
                "value": 4
            },
            {
                "type": "k_eSurvivorsAttribute_FreezeDuration",
                "value": 1.5
            },
            {
                "type": "k_eSurvivorsAttribute_TimeBetweenTicks",
                "value": 0.5
            },
            {
                "type": "k_eSurvivorsAttribute_FreezeStrength",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileDamagePercent",
                "value": 0.25
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttack",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_DurationEffect",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_FreezeDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ModifierDamagePerTick",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_FreezeDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ModifierDamagePerTick",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 2
                    },
                    {
                        "type": "k_eSurvivorsAttribute_FreezeDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ModifierDamagePerTick",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_FreezeDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ModifierDamagePerTick",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ModifierDamagePerTick",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_FreezeDuration",
                        "value": 0.5
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_ModifierDamagePerTick",
                        "value": 5
                    }
                ]
            },
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            }
        ],
        "key": "frostbite"
    },
    "laguna_blade": {
        "className": "CSurvivorsPowerUpDefinition_LagunaBlade",
        "powerUpId": 17,
        "locAbilityName": "#DOTA_VData_survivors_powerups_laguna_blade_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_laguna_blade_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_laguna_blade_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/lina_laguna_blade.png",
        "source": "lina",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/lina_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_laguna_blade_LocHeroName",
        "maxLevel": 9,
        "particle": "particles/events/crownfall/survivors/abilities/lina/lina_laguna_blade.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "targeting": "STRONGEST_TARGET_IN_RANGE",
        "isScepterUpgradeable": true,
        "eliteExtraHit": 2,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Magical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Range",
            "k_eSurvivorsAttribute_TargetCount"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 40
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 3
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 1000
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttack",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 30
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 30
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 30
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 30
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 30
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 30
                    }
                ]
            }
        ],
        "key": "laguna_blade"
    },
    "land_mine": {
        "className": "CSurvivorsPowerUpDefinition_LandMine",
        "powerUpId": 18,
        "locAbilityName": "#DOTA_VData_survivors_powerups_land_mine_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_land_mine_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_land_mine_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/techies_land_mines.png",
        "source": "techies",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/squee_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_land_mine_LocHeroName",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "scepterVacuumRadius": 150,
        "scepterVacuumDistance": 25,
        "particle": "particles/events/crownfall/survivors/abilities/techies/techies_land_mine.vpcf",
        "explosionParticle": "particles/events/crownfall/survivors/abilities/techies/techies_explosion_land_mine_explode.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "stasisTrapParticle": "particles/events/crownfall/survivors/abilities/techies/stasis_trap/techies_stasis_trap.vpcf",
        "stasisTrapExplosion": "particles/events/crownfall/survivors/abilities/techies/stasis_trap/techies_stasis_trap_explode.vpcf",
        "remoteMineParticle": "particles/events/crownfall/survivors/abilities/techies/remote_mine/techies_remote_mine.vpcf",
        "remoteMineExplosion": "particles/events/crownfall/survivors/abilities/techies/remote_mines/techies_remote_mines_detonate_arcana.vpcf",
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Radius"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 30
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 4
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 350
            },
            {
                "type": "k_eSurvivorsAttribute_LifeTime",
                "value": 20
            },
            {
                "type": "k_eSurvivorsAttribute_ArmingTime",
                "value": 0.7
            },
            {
                "type": "k_eSurvivorsAttribute_TriggerTime",
                "value": 0.85
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 65
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 20
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 65
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 20
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 65
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 20
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 65
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 20
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 50
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 20
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 20
                    }
                ]
            }
        ],
        "key": "land_mine"
    },
    "knife_throw": {
        "className": "CSurvivorsPowerUpDefinition_KnifeThrow",
        "powerUpId": 19,
        "locAbilityName": "#DOTA_VData_survivors_powerups_knife_throw_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_knife_throw_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_knife_throw_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/ringmaster_impalement.png",
        "particle": "particles/events/crownfall/survivors/ringmaster_wheel_dagger_crownfall.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "source": "bakeet",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/bakeet_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_knife_throw_LocHeroName",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "targeting": "PLAYER_FACING",
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_ProjectileHitCount"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 12
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 1.2
            },
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttackInterval",
                "value": 0.15
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileSpeed",
                "value": 1500
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 1500
            },
            {
                "type": "k_eSurvivorsAttribute_KnockbackDistance",
                "value": 5
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileRadius",
                "value": 70
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileHorizontalOffset",
                "value": 60
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttack",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttackInterval",
                "value": 0.15
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Cooldown",
                        "value": -0.3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileHitCount",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Cooldown",
                        "value": -0.3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileHitCount",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Cooldown",
                        "value": -0.3
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Cooldown",
                        "value": -0.3
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    },
                    {
                        "type": "k_eSurvivorsAttribute_ProjectileHitCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.05
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    }
                ]
            },
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            }
        ],
        "scepterUpgradeDefinition": {
            "upgradeAttributes": [
                {
                    "type": "k_eSurvivorsAttribute_ProjectileHitCount",
                    "value": 99
                }
            ]
        },
        "key": "knife_throw"
    },
    "track": {
        "className": "CSurvivorsPowerUpDefinition_Track",
        "powerUpId": 21,
        "locAbilityName": "#DOTA_VData_survivors_powerups_track_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_track_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_track_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/bounty_hunter_track.png",
        "source": "bounty_hunter",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/bounty_hunter_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_track_LocHeroName",
        "maxLevel": 9,
        "particle": "particles/events/crownfall/survivors/abilities/bounty_hunter/bounty_hunter_track_cast.vpcf",
        "modifierParticle": "particles/events/crownfall/survivors/abilities/bounty_hunter/track_new_shield.vpcf",
        "modifierParticleUsesOverheadOffset": true,
        "targeting": "STRONGEST_TARGET_IN_RANGE",
        "isScepterUpgradeable": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_IncomingDamageAmplification",
            "k_eSurvivorsAttribute_IncomingDamageAmplificationDuration"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 6
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 10
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 1500
            },
            {
                "type": "k_eSurvivorsAttribute_IncomingDamageAmplification",
                "value": 0.2
            },
            {
                "type": "k_eSurvivorsAttribute_IncomingDamageAmplificationDuration",
                "value": 10
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttack",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_DurationEffect",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_IncomingDamageAmplification",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_IncomingDamageAmplification",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_IncomingDamageAmplification",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_IncomingDamageAmplification",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_IncomingDamageAmplification",
                        "value": 0.1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 6
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_IncomingDamageAmplification",
                        "value": 0.1
                    }
                ]
            }
        ],
        "key": "track"
    },
    "spirits": {
        "className": "CSurvivorsPowerUpDefinition_Spirits",
        "powerUpId": 210,
        "locAbilityName": "#DOTA_VData_survivors_powerups_spirits_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_spirits_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_spirits_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/wisp_spirits.png",
        "source": "wisp",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/io_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_spirits_LocHeroName",
        "maxLevel": 9,
        "particle": "particles/events/crownfall/survivors/abilities/wisp/wisp_guardian.vpcf",
        "explosionParticle": "particles/events/crownfall/survivors/abilities/wisp/wisp_guardian_explosion.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "targeting": "PLAYER_ORIGIN",
        "isScepterUpgradeable": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Magical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_Duration"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 7
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 5
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 350
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 300
            },
            {
                "type": "k_eSurvivorsAttribute_Duration",
                "value": 4
            },
            {
                "type": "k_eSurvivorsAttribute_DurationEffect",
                "value": 1
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 7
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 7
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 7
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 7
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 6
                    },
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Duration",
                        "value": 0.5
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 10
                    }
                ]
            }
        ],
        "key": "spirits"
    },
    "mortimer_kisses": {
        "className": "CSurvivorsPowerUpDefinition_MortimerKisses",
        "powerUpId": 15,
        "locAbilityName": "#DOTA_VData_survivors_powerups_mortimer_kisses_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_mortimer_kisses_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_mortimer_kisses_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/snapfire_mortimer_kisses.png",
        "heroId": 14,
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/snapfire_portrait_idle.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_mortimer_kisses_LocHeroName",
        "maxLevel": 9,
        "particle": "particles/events/crownfall/survivors/abilities/snapfire/snapfire_ground_aoe.vpcf",
        "artilleryParticle": "particles/events/crownfall/survivors/abilities/snapfire/snapfire_lizard_blobs_arced.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "spawnPickupOnKillPercent": 0.05,
        "spawnPickupOnKillId": 11,
        "origin": "RANDOM_ENEMY_ORIGIN",
        "minRange": 300,
        "launchDistance": 700,
        "scepterLaunchDistance": 1000,
        "anglePerShot": 35,
        "isScepterUpgradeable": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Magical",
            "k_eSurvivorsAttribute_DamageTicks",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Radius",
            "k_eSurvivorsAttribute_Range",
            "k_eSurvivorsAttribute_TargetCount"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 6
            },
            {
                "type": "k_eSurvivorsAttribute_DamageTicks",
                "value": 5
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 5
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 1000
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 300
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileSpeed",
                "value": 1200
            },
            {
                "type": "k_eSurvivorsAttribute_TimeBetweenTicks",
                "value": 0.5
            },
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_ProjectileAttackInterval",
                "value": 0.2
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 15
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 15
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 15
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 15
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 4
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Radius",
                        "value": 15
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_DamageTicks",
                        "value": 1
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 3
                    }
                ]
            }
        ],
        "key": "mortimer_kisses"
    },
    "snotty_bat": {
        "className": "CSurvivorsPowerUpDefinition_Snotty",
        "powerUpId": 22,
        "locAbilityName": "#DOTA_VData_survivors_powerups_snotty_bat_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_snotty_bat_LocAbilityDesc",
        "locScepterAbilityDesc": "#DOTA_VData_survivors_powerups_snotty_bat_LocScepterAbilityDesc",
        "image": "file://{images}/spellicons/bristleback_viscous_nasal_goo.png",
        "source": "snotty",
        "heroImage": "file://{images}/events/crownfall/visual_novel/portraits/bat_portrait_eyes.png",
        "locHeroName": "#DOTA_VData_survivors_powerups_snotty_bat_LocHeroName",
        "maxLevel": 9,
        "isScepterUpgradeable": true,
        "particle": "particles/events/crownfall/survivors/abilities/snotty/snotty_goo.vpcf",
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "modifierParticle": "particles/events/crownfall/survivors/status_effect_snotty.vpcf",
        "modifierParticleUsesOverheadOffset": false,
        "freezeParticle": "particles/events/crownfall/survivors/status_effect_snotty.vpcf",
        "origin": "PLAYER_ORIGIN",
        "rotationSpeedDeg": 45,
        "rotationDist": 700,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_Damage_Physical",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_Radius",
            "k_eSurvivorsAttribute_SlowDuration",
            "k_eSurvivorsAttribute_SlowStrength",
            "k_eSurvivorsAttribute_PickupRadius"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_Damage_Physical",
                "value": 10
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 6
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 300
            },
            {
                "type": "k_eSurvivorsAttribute_SlowDuration",
                "value": 1.5
            },
            {
                "type": "k_eSurvivorsAttribute_SlowStrength",
                "value": 0.5
            },
            {
                "type": "k_eSurvivorsAttribute_DurationEffect",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_PickupRadius",
                "value": 50
            }
        ],
        "authoredUpgradeChoices": [
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_SlowDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_SlowDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_SlowDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_SlowDuration",
                        "value": 0.5
                    }
                ]
            },
            {
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_SlowDuration",
                        "value": 0.5
                    },
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Physical",
                        "value": 3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_CooldownReductionMultiplier",
                        "value": 0.1
                    }
                ]
            }
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "upgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_Damage_Magical",
                        "value": 2
                    }
                ]
            }
        ],
        "key": "snotty_bat"
    },
    "vengeful_spirit_innate": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 500,
        "image": "file://{images}/hud/facets/innate_icon_large.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_vengeful_spirit_innate_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_vengeful_spirit_innate_LocAbilityDesc",
        "maxLevel": 1,
        "isInnate": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Percentage",
            "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Duration"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Percentage",
                        "value": 0.3
                    },
                    {
                        "type": "k_eSurvivorsAttribute_MagicDamageWeakensPhysicalDamageResistance_Duration",
                        "value": 5
                    }
                ]
            }
        ],
        "key": "vengeful_spirit_innate"
    },
    "skywrath_mage_innate": {
        "className": "CSurvivorsPowerUpDefinition",
        "powerUpId": 501,
        "image": "file://{images}/hud/facets/innate_icon_large.png",
        "locAbilityName": "#DOTA_VData_survivors_powerups_skywrath_mage_innate_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_skywrath_mage_innate_LocAbilityDesc",
        "maxLevel": 1,
        "isInnate": true,
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_MaxHP"
        ],
        "minorUpgradeChoices": [
            {
                "rarity": "RARITY_COMMON",
                "globalUpgradeAttributes": [
                    {
                        "type": "k_eSurvivorsAttribute_TargetCount",
                        "value": 1
                    },
                    {
                        "type": "k_eSurvivorsAttribute_MaxHP",
                        "value": -20
                    }
                ]
            }
        ],
        "key": "skywrath_mage_innate"
    },
    "kez_innate": {
        "className": "CSurvivorsPowerUpDefinition_InstantAttack",
        "powerUpId": 502,
        "locAbilityName": "#DOTA_VData_survivors_powerups_kez_innate_LocAbilityName",
        "locAbilityDesc": "#DOTA_VData_survivors_powerups_kez_innate_LocAbilityDesc",
        "image": "file://{images}/hud/facets/innate_icon_large.png",
        "maxLevel": 1,
        "isInnate": true,
        "modifierParticle": "particles/events/crownfall/survivors/abilities/kez/kez_vulnerable_marker.vpcf",
        "modifierParticleUsesOverheadOffset": true,
        "hitStatusEffectParticle": "particles/events/crownfall/survivors/status/status_effect_generic_hit.vpcf",
        "targeting": "STRONGEST_TARGET_IN_RANGE",
        "tooltipAttributes": [
            "k_eSurvivorsAttribute_MovementSpeed",
            "k_eSurvivorsAttribute_VulnerabilityDamagePercent",
            "k_eSurvivorsAttribute_VulnerabilityDuration",
            "k_eSurvivorsAttribute_VulnerabilityStunOnHitDuration",
            "k_eSurvivorsAttribute_Range",
            "k_eSurvivorsAttribute_Cooldown",
            "k_eSurvivorsAttribute_TargetCount",
            "k_eSurvivorsAttribute_Radius"
        ],
        "baseAttributes": [
            {
                "type": "k_eSurvivorsAttribute_MovementSpeed",
                "value": 20
            },
            {
                "type": "k_eSurvivorsAttribute_TargetCount",
                "value": 1
            },
            {
                "type": "k_eSurvivorsAttribute_Damage_Magical",
                "value": 0
            },
            {
                "type": "k_eSurvivorsAttribute_Cooldown",
                "value": 6
            },
            {
                "type": "k_eSurvivorsAttribute_Range",
                "value": 1500
            },
            {
                "type": "k_eSurvivorsAttribute_Radius",
                "value": 180
            },
            {
                "type": "k_eSurvivorsAttribute_VulnerabilityDamagePercent",
                "value": 2
            },
            {
                "type": "k_eSurvivorsAttribute_VulnerabilityDuration",
                "value": 5.5
            },
            {
                "type": "k_eSurvivorsAttribute_VulnerabilityStunOnHitDuration",
                "value": 1
            }
        ],
        "key": "kez_innate"
    }
};
