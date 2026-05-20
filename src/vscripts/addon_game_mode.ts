import { GameMode } from "./GameMode";

print("addon_game_mode.ts loaded");

require("lib/timers");

declare function getfenv(level?: number): any;

const env = getfenv(1);

env.Precache = function (this: void, context: CScriptPrecacheContext) {
    print("GLOBAL Precache called");
    GameMode.Precache(context);
};

env.Activate = function (this: void) {
    print("GLOBAL Activate called");
    GameMode.Activate();
};