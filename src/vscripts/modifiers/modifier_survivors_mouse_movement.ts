import {
    BaseModifier,
    registerModifier,
} from "../lib/dota_ts_adapter";

@registerModifier()
export class modifier_survivors_mouse_movement extends BaseModifier {
    private target: Vector = Vector(0, 0, 0);
    private speed = 430;
    private stopDistance = 48;
    private isRunning = false;

    IsHidden() {
        return true;
    }

    IsPurgable() {
        return false;
    }

    RemoveOnDeath() {
        return false;
    }

    CheckState(): Partial<Record<ModifierState, boolean>> {
        return {
            [ModifierState.COMMAND_RESTRICTED]: true,
            [ModifierState.NO_UNIT_COLLISION]: true,
        };
    }

    OnCreated(params: { speed?: number; stopDistance?: number }) {
        if (!IsServer()) return;

        const parent = this.GetParent();

        this.speed = params.speed ?? 430;
        this.stopDistance = params.stopDistance ?? 48;
        this.target = parent.GetAbsOrigin();

        this.StartIntervalThink(0.03);

        print(`[MOVEMENT] Mouse movement modifier created on ${parent.GetUnitName()}`);
    }

    OnDestroy() {
        if (!IsServer()) return;
        this.stopRunAnimation();
    }

    public SetMouseTarget(target: Vector) {
        this.target = target;
    }

    public SetMovementSpeed(speed: number) {
        this.speed = speed;
    }

    OnIntervalThink() {
        if (!IsServer()) return;

        const parent = this.GetParent() as CDOTA_BaseNPC_Hero;

        if (!parent || parent.IsNull() || !parent.IsAlive()) {
            this.stopRunAnimation();
            return;
        }

        const origin = parent.GetAbsOrigin();

        const toTarget = Vector(
            this.target.x - origin.x,
            this.target.y - origin.y,
            0,
        );

        const distance = toTarget.Length2D();

        if (distance <= this.stopDistance) {
            this.stopRunAnimation();
            return;
        }

        const direction = toTarget.Normalized();

        const dt = 0.03;
        const step = math.min(this.speed * dt, distance);

        const nextPos = Vector(
            origin.x + direction.x * step,
            origin.y + direction.y * step,
            origin.z,
        );

        parent.SetForwardVector(direction);

        if (GridNav.IsTraversable(nextPos) && !GridNav.IsBlocked(nextPos)) {
            parent.SetAbsOrigin(nextPos);
            ResolveNPCPositions(nextPos, 96);
            this.startRunAnimation(parent);
        } else {
            this.stopRunAnimation();
        }
    }

    private startRunAnimation(parent: CDOTA_BaseNPC) {
        if (this.isRunning) return;

        this.isRunning = true;
        parent.StartGestureWithPlaybackRate(GameActivity.DOTA_RUN, 1.15);
    }

    private stopRunAnimation() {
        if (!this.isRunning) return;

        this.isRunning = false;
        const parent = this.GetParent();
        parent.FadeGesture(GameActivity.DOTA_RUN);
    }
}