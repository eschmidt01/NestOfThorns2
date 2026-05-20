import { SurvivorsPickups } from "./SurvivorsInterface";

export const SURVIVORS_PICKUPS: SurvivorsPickups = {
    "experience": {
        "pickupId": 1,
        "particleEffect": "particles/events/crownfall/survivors/experience_pickup.vpcf",
        "canSpawnWithVelocity": true,
        "maxSpawnVelocity": 200,
        "key": "experience"
    },
    "cheese": {
        "pickupId": 3,
        "particleEffect": "particles/events/crownfall/survivors/cheese_pickup.vpcf",
        "healAmount": 50,
        "onPickupOverheadEffect": "particles/events/crownfall/survivors/cheese_pickup_overhead_effect.vpcf",
        "key": "cheese"
    },
    "shard": {
        "pickupId": 4,
        "particleEffect": "particles/events/crownfall/survivors/treasure_pickup.vpcf",
        "rewardsTreasure": true,
        "treasureVariant": 1,
        "directionalHelperParticle": "particles/events/crownfall/survivors/arrow_pickup_direction.vpcf",
        "showInMinimap": true,
        "minimapIconSnippet": "MinimapTreasureIcon",
        "key": "shard"
    },
    "scepter": {
        "pickupId": 5,
        "particleEffect": "particles/events/crownfall/survivors/treasure_pickup.vpcf",
        "rewardsTreasure": true,
        "treasureVariant": 2,
        "directionalHelperParticle": "particles/events/crownfall/survivors/arrow_pickup_direction.vpcf",
        "showInMinimap": true,
        "minimapIconSnippet": "MinimapTreasureIcon",
        "onPickupOverheadEffect": "particles/events/crownfall/survivors/scepter_pickup_overhead_effect.vpcf",
        "dropSoundEvent": "survivors.item.drop",
        "key": "scepter"
    },
    "gold_coin": {
        "pickupId": 6,
        "particleEffect": "particles/events/crownfall/survivors/gold_pickup.vpcf",
        "modelIndex": 0,
        "goldAmount": 1,
        "canSpawnWithVelocity": true,
        "maxSpawnVelocity": 500,
        "key": "gold_coin"
    },
    "gold_bag": {
        "pickupId": 7,
        "particleEffect": "particles/events/crownfall/survivors/gold_pickup.vpcf",
        "modelIndex": 1,
        "goldAmount": 10,
        "canSpawnWithVelocity": true,
        "maxSpawnVelocity": 500,
        "key": "gold_bag"
    },
    "treasure": {
        "pickupId": 8,
        "particleEffect": "particles/events/crownfall/survivors/treasure_pickup.vpcf",
        "rewardsTreasure": true,
        "treasureVariant": 0,
        "directionalHelperParticle": "particles/events/crownfall/survivors/arrow_pickup_direction.vpcf",
        "showInMinimap": true,
        "minimapIconSnippet": "MinimapTreasureIcon",
        "onPickupOverheadEffect": "particles/events/crownfall/survivors/treasure_pickup_overhead_effect.vpcf",
        "dropSoundEvent": "survivors.item.drop",
        "key": "treasure"
    },
    "magnet": {
        "pickupId": 9,
        "particleEffect": "particles/events/crownfall/survivors/treasure_pickup.vpcf",
        "treasureVariant": 3,
        "showInMinimap": true,
        "minimapIconSnippet": "MinimapMagnetIcon",
        "onPickupOverheadEffect": "particles/events/crownfall/survivors/magnet_pickup_overhead_effect.vpcf",
        "key": "magnet"
    },
    "treasure_no_directional_arrow": {
        "pickupId": 10,
        "particleEffect": "particles/events/crownfall/survivors/treasure_pickup.vpcf",
        "rewardsTreasure": true,
        "treasureVariant": 0,
        "showInMinimap": true,
        "minimapIconSnippet": "MinimapTreasureIcon",
        "onPickupOverheadEffect": "particles/events/crownfall/survivors/treasure_pickup_overhead_effect.vpcf",
        "key": "treasure_no_directional_arrow"
    },
    "cookie": {
        "pickupId": 11,
        "particleEffect": "particles/events/crownfall/survivors/cookie_pickup.vpcf",
        "onPickupOverheadEffect": "particles/events/crownfall/survivors/cookie_pickup_overhead_effect.vpcf",
        "healAmount": 10,
        "key": "cookie"
    },
    "nothing": {
        "pickupId": 99,
        "key": "nothing"
    }
};
