type PickupRuntime = {
    unit: CDOTA_BaseNPC;
    experienceReward: number;
    posX: number;
    posY: number;
    posZ: number;
};

export class PickupManager {
    private pickups = new Map<EntityIndex, PickupRuntime>();
    private running = false;

    constructor(
        private getPlayerHero: () => CDOTA_BaseNPC_Hero | undefined,
        private onExperienceCollected?: (hero: CDOTA_BaseNPC_Hero, amount: number) => void,
        private isPaused?: () => boolean,
    ) {}

    public start() {
        if (this.running) return;

        this.running = true;

        Timers.CreateTimer(() => {
            this.updatePickups();
            return 0.05;
        });

        print("[PICKUP] PickupManager started");
    }

    public spawnExperience(position: Vector, experienceReward: number) {
        const spawnPos = Vector(position.x, position.y, position.z + 48);
        const pickup = CreateUnitByName(
            "npc_survivors_xp_gem",
            spawnPos,
            true,
            undefined,
            undefined,
            DotaTeam.NEUTRALS,
        );

        if (!pickup) {
            print("[PICKUP] Failed to spawn XP gem");
            return;
        }

        pickup.SetModel("models/events/crownfall/survivors/survivor_gem.vmdl");
        pickup.SetOriginalModel("models/events/crownfall/survivors/survivor_gem.vmdl");
        pickup.SetAbsOrigin(spawnPos);
        pickup.SetModelScale(1.2);
        pickup.SetHullRadius(24);
        pickup.AddNewModifier(pickup, undefined, "modifier_phased", {});
        pickup.AddNewModifier(pickup, undefined, "modifier_invulnerable", {});

        const particle = ParticleManager.CreateParticle(
            "particles/generic_gameplay/rune_bounty_owner.vpcf",
            ParticleAttachment.WORLDORIGIN,
            undefined,
        );
        ParticleManager.SetParticleControl(particle, 0, spawnPos);
        (pickup as any).__survivorsPickupParticle = particle;

        this.pickups.set(pickup.GetEntityIndex(), {
            unit: pickup,
            experienceReward,
            posX: spawnPos.x,
            posY: spawnPos.y,
            posZ: spawnPos.z,
        });
    }

    private updatePickups() {
        if (this.isPaused?.()) return;

        const hero = this.getPlayerHero();
        if (!hero || hero.IsNull() || !hero.IsAlive()) return;

        const heroPos = hero.GetAbsOrigin();
        const pickupRadiusSq = 260 * 260; // 67600
        const collectionRadiusSq = 80 * 80; // 6400
        const hx = heroPos.x;
        const hy = heroPos.y;
        const hz = heroPos.z;

        for (const [entityIndex, runtime] of this.pickups) {
            const pickup = runtime.unit;

            if (!pickup || pickup.IsNull() || !pickup.IsAlive()) {
                this.pickups.delete(entityIndex);
                continue;
            }

            const dx = hx - runtime.posX;
            const dy = hy - runtime.posY;
            const dz = hz - runtime.posZ;
            const distSq = dx * dx + dy * dy;

            if (distSq <= collectionRadiusSq) {
                this.collectPickup(entityIndex, runtime);
                continue;
            }

            if (distSq <= pickupRadiusSq) {
                const distance = Math.sqrt(distSq + dz * dz);
                const dirX = dx / distance;
                const dirY = dy / distance;
                const dirZ = dz / distance;
                const speed = 900;
                const dt = 0.05;
                runtime.posX += dirX * speed * dt;
                runtime.posY += dirY * speed * dt;
                runtime.posZ += dirZ * speed * dt;

                const nextPos = Vector(runtime.posX, runtime.posY, runtime.posZ);
                pickup.SetAbsOrigin(nextPos);

                const particle = (pickup as any).__survivorsPickupParticle as ParticleID | undefined;
                if (particle !== undefined) {
                    ParticleManager.SetParticleControl(particle, 0, nextPos);
                }
            }
        }
    }

    private collectPickup(entityIndex: EntityIndex, runtime: PickupRuntime) {
        const hero = this.getPlayerHero();
        if (!hero) return;

        this.onExperienceCollected?.(hero, runtime.experienceReward);

        print(`[PICKUP] Collected XP ${runtime.experienceReward}`);

        const particle = (runtime.unit as any).__survivorsPickupParticle as ParticleID | undefined;
        if (particle !== undefined) {
            ParticleManager.DestroyParticle(particle, false);
            ParticleManager.ReleaseParticleIndex(particle);
        }

        UTIL_Remove(runtime.unit);
        this.pickups.delete(entityIndex);
    }
}
