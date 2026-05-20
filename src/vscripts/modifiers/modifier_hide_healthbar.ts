import { BaseModifier, registerModifier } from "../lib/dota_ts_adapter";

@registerModifier()
export class modifier_hide_healthbar extends BaseModifier {
    IsHidden() {
        return true;
    }

    IsPurgable() {
        return false;
    }

    RemoveOnDeath() {
        return false;
    }

    OnCreated() {
        if (!IsServer()) return;
        print(`[HEALTHBAR] hide modifier created on ${this.GetParent().GetUnitName()}`);
    }

    CheckState(): Partial<Record<ModifierState, boolean>> {
        return {
            [ModifierState.NO_HEALTH_BAR]: true,
        };
    }
}