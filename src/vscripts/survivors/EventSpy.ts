export class EventSpy {
    public static Start() {
        const events = [
            "game_rules_state_change",
            "npc_spawned",
            "entity_killed",
            "dota_player_used_ability",
            "dota_item_picked_up",
            "dota_player_gained_level",
            "player_connect_full",
            "player_chat",
        ];

        for (const eventName of events) {
            ListenToGameEvent(eventName as any, event => {
                print(`[EVENT SPY] ${eventName}: ${EventSpy.stringify(event)}`);
            }, undefined);
        }

        const customEvents = [
            "survivors_select_hero",
            "survivors_hero_selected",
            "survivors_pick_hero",
            "survivors_choose_hero",
            "survivors_start_game",
            "survivors_powerup_selected",
            "survivors_select_powerup",
        ];

        for (const eventName of customEvents) {
            CustomGameEventManager.RegisterListener(eventName, (_, data) => {
                print(`[CUSTOM EVENT SPY] ${eventName}: ${EventSpy.stringify(data)}`);
            });
        }

        ListenToGameEvent("player_chat", event => {
            if (event.text === "-dump") {
                EventSpy.dumpKeyEntities();
            }
        }, undefined);

        print("[EVENT SPY] Started");
    }

    public static dumpKeyEntities() {
        const names = [
            "player_spawn",
            "survivors_camera",
            "item_drop_1",
            "item_drop_2",
            "item_drop_3",
            "destructible_spawn_vase",
            "destructible_spawn_vase_boss",
        ];

        for (const name of names) {
            const ents = Entities.FindAllByName(name);
            print(`[DUMP] ${name}: ${ents.length}`);

            for (const ent of ents) {
                print(`  ${ent.GetClassname()} ${ent.GetName()} ${tostring(ent.GetAbsOrigin())}`);
            }
        }
    }

    public static stringify(obj: any): string {
        const parts: string[] = [];

        for (const key in obj) {
            parts.push(`${key}=${tostring(obj[key])}`);
        }

        return parts.join(", ");
    }
}