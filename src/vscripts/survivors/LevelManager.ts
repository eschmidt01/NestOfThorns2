export class LevelManager {
    private readonly requiredExperienceBase = 5;
    private readonly requiredExperienceExponent = 2.1;

    public getXpRequiredForLevel(level: number): number {
        return math.floor(
            this.requiredExperienceBase * math.pow(level, this.requiredExperienceExponent),
        );
    }
}
