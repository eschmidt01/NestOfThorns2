/**
 * This file contains types for the events you want to send between the UI (Panorama)
 * and the server (VScripts).
 * 
 * IMPORTANT: 
 * 
 * The dota engine will change the type of event data slightly when it is sent, so on the
 * Panorama side your event handlers will have to handle NetworkedData<EventType>, changes are:
 *   - Booleans are turned to 0 | 1
 *   - Arrays are automatically translated to objects when sending them as event. You have
 *     to change them back into arrays yourself! See 'toArray()' in src/panorama/hud.ts
 */

// To declare an event for use, add it to this table with the type of its data
interface CustomGameEventDeclarations {
    example_event: ExampleEventData,
    ui_panel_closed: UIPanelClosedEventData,
    
    // Add your new event here!
    survivors_select_hero: {
        heroKey: string;
        PlayerID: PlayerID;
    },

    survivors_mouse_world_position: {
        x: number;
        y: number;
        z: number;
        PlayerID: PlayerID;
    };

    survivors_xp_changed: {
        xp: number;
        level: number;
        requiredXp: number;
    };

    survivors_hud_update: {
        timeElapsed: number;
        gold: number;
        kills: number;
        health: number;
        maxHealth: number;
        xp: number;
        level: number;
        requiredXp: number;
    };

    survivors_powerups_changed: {
        activePowerups: number[];
        innatePowerups: number[];
        passivePowerups: number[];
    };

    survivors_level_up_choices: {
        level: number;
        choices: {
            powerUpId: number;
            key: string;
            image?: string;
            locAbilityName?: string;
            locAbilityDesc?: string;
            isNew?: boolean;
            currentLevel?: number;
        }[];
    };

    survivors_select_powerup: {
        PlayerID: PlayerID;
        powerUpId: number;
    };
}

// Define the type of data sent by the example_event event
interface ExampleEventData {
    myNumber: number;
    myBoolean: boolean;
    myString: string;
    myArrayOfNumbers: number[]
}

// This event has no data
interface UIPanelClosedEventData {}