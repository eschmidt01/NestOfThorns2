import { SurvivorsDifficulties } from "./SurvivorsInterface";

export const SURVIVORS_DIFFICULTIES: SurvivorsDifficulties = {
    "story": {
        "locDifficultyName": "#DOTA_VData_survivors_difficulty_story_LocDifficultyName",
        "locDifficultyDescription": "#DOTA_VData_survivors_difficulty_story_LocDifficultyDescription",
        "enemyHealthMultiplier": -0.1,
        "key": "story"
    },
    "harder_punches": {
        "locDifficultyName": "#DOTA_VData_survivors_difficulty_harder_punches_LocDifficultyName",
        "locDifficultyDescription": "#DOTA_VData_survivors_difficulty_harder_punches_LocDifficultyDescription",
        "enemyHealthMultiplier": 0.2,
        "enemyDamageMultiplier": 0.2,
        "key": "harder_punches"
    },
    "sticky_situation": {
        "locDifficultyName": "#DOTA_VData_survivors_difficulty_sticky_situation_LocDifficultyName",
        "locDifficultyDescription": "#DOTA_VData_survivors_difficulty_sticky_situation_LocDifficultyDescription",
        "enemyTouchMovementSlowDuration": 0.7,
        "key": "sticky_situation"
    },
    "footmen_frenzy": {
        "locDifficultyName": "#DOTA_VData_survivors_difficulty_footmen_frenzy_LocDifficultyName",
        "locDifficultyDescription": "#DOTA_VData_survivors_difficulty_footmen_frenzy_LocDifficultyDescription",
        "enemyMovementSpeedMultiplier": 0.3,
        "enemyTurnRateMultiplier": 0.3,
        "enemyHealthMultiplier": 0.3,
        "key": "footmen_frenzy"
    },
    "spooky_follower": {
        "locDifficultyName": "#DOTA_VData_survivors_difficulty_spooky_follower_LocDifficultyName",
        "locDifficultyDescription": "#DOTA_VData_survivors_difficulty_spooky_follower_LocDifficultyDescription",
        "additionalEnemyEvents": [
            {
                "spawnerName": "death",
                "minimumEnemyCountOverride": 1,
                "startTime": 1
            }
        ],
        "key": "spooky_follower"
    },
    "endurance_run": {
        "locDifficultyName": "#DOTA_VData_survivors_difficulty_endurance_run_LocDifficultyName",
        "locDifficultyDescription": "#DOTA_VData_survivors_difficulty_endurance_run_LocDifficultyDescription",
        "enemyHealthMultiplier": 0.3,
        "enemyDamageMultiplier": 0.3,
        "additionalFirstFloorTime": 60,
        "overrideImperiaEnrageHealthThresholds": [
            0.75,
            0.5,
            0.25
        ],
        "key": "endurance_run"
    },
    "meteor_mayhem": {
        "locDifficultyName": "#DOTA_VData_survivors_difficulty_meteor_mayhem_LocDifficultyName",
        "locDifficultyDescription": "#DOTA_VData_survivors_difficulty_meteor_mayhem_LocDifficultyDescription",
        "enemyHealthMultiplier": 0.5,
        "enemyDamageMultiplier": 0.3,
        "enableMeteorModifier": true,
        "key": "meteor_mayhem"
    },
    "echelon_mastery": {
        "locDifficultyName": "#DOTA_VData_survivors_difficulty_echelon_mastery_LocDifficultyName",
        "locDifficultyDescription": "#DOTA_VData_survivors_difficulty_echelon_mastery_LocDifficultyDescription",
        "enemyHealthMultiplier": 0.5,
        "enemyDamageMultiplier": 0.5,
        "enemySpawnCountMuliplier": 0.5,
        "xpDropChanceMultiplier": -0.25,
        "key": "echelon_mastery"
    }
};
