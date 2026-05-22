$.Msg("Nest of Thorns 2 - HUD Loaded");

/**
 * Hide standard Dota HUD pieces.
 * Do not hide everything until your custom UI is confirmed working.
 */
GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_TIMEOFDAY, false);
GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_HEROES, false);
GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD, false);
GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_PANEL, false);
GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_MINIMAP, false);
GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_PANEL, false);
GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_SHOP, false);
GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_ITEMS, false);

// Valve's Exact Camera Math derived from [3300, -3300, 6600]
const SURVIVORS_CAMERA_DISTANCE = 1800;
const SURVIVORS_CAMERA_PITCH = 55;
const SURVIVORS_CAMERA_YAW = -135;

type HeroChoice = {
    key: string;
    displayName: string;
    dotaHeroName: string;
    abilityName: string;
    abilityDisplayName: string;
    description: string;
};

let selectedHeroKey: string | null = null;
let mouseFollowEnabled = false;
let cameraLockEnabled = false;

const HERO_ROSTER: HeroChoice[] = [
    {
        key: "shen",
        displayName: "Shen",
        dotaHeroName: "npc_dota_hero_vengefulspirit",
        abilityName: "vengefulspirit_magic_missile",
        abilityDisplayName: "Magic Missile",
        description: "A balanced survivor with reliable single-target control and steady early damage.",
    },
    {
        key: "dragonus",
        displayName: "Dragonus",
        dotaHeroName: "npc_dota_hero_skywrath_mage",
        abilityName: "skywrath_mage_arcane_bolt",
        abilityDisplayName: "Arcane Bolt",
        description: "A ranged spellcaster who scales through frequent magical projectiles.",
    },
    {
        key: "kez",
        displayName: "Kez",
        dotaHeroName: "npc_dota_hero_kez",
        abilityName: "kez_echo_slash",
        abilityDisplayName: "Echo Slash",
        description: "A mobile melee fighter built around aggressive close-range clearing.",
    },
];

function findPanel(id: string): Panel | null {
    return $.GetContextPanel().FindChildTraverse(id);
}

function getLocalHeroEntIndex(): EntityIndex | -1 {
    const playerId = Players.GetLocalPlayer();
    const heroEntIndex = Players.GetPlayerHeroEntityIndex(playerId);

    if (heroEntIndex === undefined || heroEntIndex === -1) {
        return -1;
    }

    return heroEntIndex as EntityIndex;
}

function maintainCameraLock() {
    if (!cameraLockEnabled) return;

    // Correct Panorama API call to get the hero entity
    const playerId = Players.GetLocalPlayer();
    const heroEntIndex = Players.GetPlayerHeroEntityIndex(playerId);

    if (heroEntIndex !== -1) {
        // Grab [x, y, z] coordinates
        const pos = Entities.GetAbsOrigin(heroEntIndex);
        
        if (pos) {
            // Lock to coordinates, not the entity, with 0 lerp time
            GameUI.SetCameraTargetPosition(pos, 0.0);
            
            // Apply the custom angles
            GameUI.SetCameraDistance(SURVIVORS_CAMERA_DISTANCE);
            GameUI.SetCameraPitchMin(SURVIVORS_CAMERA_PITCH);
            GameUI.SetCameraPitchMax(SURVIVORS_CAMERA_PITCH);
            GameUI.SetCameraYaw(SURVIVORS_CAMERA_YAW);
        }
    }

    $.Schedule(0.03, maintainCameraLock);
}


function lockCameraToLocalHero() {
    const heroEntIndex = getLocalHeroEntIndex();

    if (heroEntIndex === -1) {
        $.Schedule(0.1, lockCameraToLocalHero);
        return;
    }

    GameUI.SetCameraTarget(heroEntIndex);
    GameUI.SetCameraDistance(SURVIVORS_CAMERA_DISTANCE);
    GameUI.SetCameraPitchMin(SURVIVORS_CAMERA_PITCH);
    GameUI.SetCameraPitchMax(SURVIVORS_CAMERA_PITCH);
    GameUI.SetCameraYaw(SURVIVORS_CAMERA_YAW);

    cameraLockEnabled = true;
    maintainCameraLock();

    $.Msg(`[CAMERA] Locked camera to hero entindex ${heroEntIndex}`);
}

function blockDefaultDotaMouseInput() {
    const CONSUME_EVENT = true;
    const CONTINUE_PROCESSING_EVENT = false;

    GameUI.SetMouseCallback((eventName, arg) => {
        const LEFT_MOUSE = 0;
        const RIGHT_MOUSE = 1;
        const MIDDLE_MOUSE = 2;

        // Block all right-click phases so Dota never creates the green move indicator.
        if (arg === RIGHT_MOUSE) {
            return CONSUME_EVENT;
        }

        // Optional: block middle mouse too.
        if (arg === MIDDLE_MOUSE) {
            return CONSUME_EVENT;
        }

        // Let left click continue for UI, future level-up choices, etc.
        if (arg === LEFT_MOUSE) {
            return CONTINUE_PROCESSING_EVENT;
        }

        return CONTINUE_PROCESSING_EVENT;
    });

    $.Msg("[INPUT] Right-click Dota input blocked");
}

function startMouseWorldPositionSender() {
    if (mouseFollowEnabled) return;

    mouseFollowEnabled = true;

    const sendMouseWorldPosition = () => {
        if (!mouseFollowEnabled) return;

        const screenPos = GameUI.GetCursorPosition() as [number, number];
        const worldPos = GameUI.GetScreenWorldPosition(screenPos) as [number, number, number] | null;

        if (worldPos) {
            GameEvents.SendCustomGameEventToServer("survivors_mouse_world_position", {
                x: worldPos[0],
                y: worldPos[1],
                z: worldPos[2],
                PlayerID: Players.GetLocalPlayer(),
            });
        }

        $.Schedule(0.03, sendMouseWorldPosition);
    };

    sendMouseWorldPosition();

    $.Msg("[MOVEMENT] Started mouse world position sender");
}

function startSurvivorsCameraAndControls() {
    lockCameraToLocalHero();
    startMouseWorldPositionSender();
}

function createLabel(parent: Panel, className: string, text: string): LabelPanel {
    const label = $.CreatePanel("Label", parent, "");
    label.AddClass(className);
    label.text = text;
    return label as LabelPanel;
}

function createHeroImage(parent: Panel, heroName: string): Panel {
    const heroImage = $.CreatePanel("DOTAHeroImage", parent, "HeroImage");
    heroImage.SetAttributeString("heroname", heroName);
    heroImage.SetAttributeString("heroimagestyle", "portrait");
    return heroImage;
}

function createAbilityImage(parent: Panel, abilityName: string): Panel {
    const abilityImage = $.CreatePanel("DOTAAbilityImage", parent, "AbilityImage");
    abilityImage.SetAttributeString("abilityname", abilityName);
    return abilityImage;
}

function createHeroCard(hero: HeroChoice, container: Panel): Button {
    const card = $.CreatePanel("Button", container, `HeroCard_${hero.key}`) as Button;
    card.AddClass("HeroSelectCard");
    card.AddClass(`Hero_${hero.key}`);

    const heroImageContainer = $.CreatePanel("Panel", card, "");
    heroImageContainer.AddClass("HeroImageContainer");

    const actorBackground = $.CreatePanel("Panel", heroImageContainer, "");
    actorBackground.AddClass("ActorBackground");

    createHeroImage(heroImageContainer, hero.dotaHeroName);

    const powerUpContainer = $.CreatePanel("Panel", card, "");
    powerUpContainer.AddClass("PowerUpContainer");

    const powerUpBackground = $.CreatePanel("Panel", powerUpContainer, "");
    powerUpBackground.AddClass("PowerUpBackground");

    const texture = $.CreatePanel("Image", powerUpContainer, "");
    texture.AddClass("PowerupTexture");
    texture.SetImage("s2r://panorama/images/events/crownfall/survivors/powerup_texture_png.vtex");
    texture.SetScaling("stretch");

    createLabel(powerUpContainer, "PowerupLabel", "STARTING HERO");

    const abilityImageContainer = $.CreatePanel("Panel", powerUpContainer, "");
    abilityImageContainer.AddClass("AbilityImageContainer");

    createAbilityImage(abilityImageContainer, hero.abilityName);

    const shine = $.CreatePanel("Panel", abilityImageContainer, "");
    shine.AddClass("AbilityImageShine");

    createLabel(powerUpContainer, "AbilityName", hero.displayName);
    createLabel(powerUpContainer, "PowerUpDescription", hero.description);
    createLabel(powerUpContainer, "HeroStartingAbility", hero.abilityDisplayName);

    const border = $.CreatePanel("Panel", card, "");
    border.AddClass("PowerUpContainerBorder");
    border.hittest = false;

    card.SetPanelEvent("onactivate", () => {
        selectHeroCard(hero.key, card);
    });

    return card;
}

function initializeHeroSelection() {
    $.Msg("[HeroSelect] Initializing hero selection UI");

    const container = findPanel("HeroSelectChoices");
    if (!container) return;

    container.RemoveAndDeleteChildren();

    for (const hero of HERO_ROSTER) {
        createHeroCard(hero, container);
    }

    const overlay = findPanel("HeroSelectOverlay");
    if (overlay) overlay.RemoveClass("Hidden");
}

function selectHeroCard(heroKey: string, cardPanel: Panel) {
    $.Msg(`[HeroSelect] Selected hero: ${heroKey}`);

    selectedHeroKey = heroKey;

    const container = findPanel("HeroSelectChoices");
    if (container) {
        for (let i = 0; i < container.GetChildCount(); i++) {
            const child = container.GetChild(i);
            if (child) {
                child.RemoveClass("SelectedHero");
                child.RemoveClass("PowerUpSelected");
            }
        }
    }

    cardPanel.AddClass("SelectedHero");

    const confirmButton = findPanel("ConfirmHeroBtn");
    if (confirmButton) {
        confirmButton.RemoveClass("Hidden");
    }
}

(globalThis as any).ConfirmHeroSelection = function () {
    if (!selectedHeroKey) {
        $.Msg("[HeroSelect] Confirm clicked but no hero selected");
        return;
    }

    $.Msg(`[HeroSelect] Confirming hero selection: ${selectedHeroKey}`);

    GameEvents.SendCustomGameEventToServer("survivors_select_hero", {
        heroKey: selectedHeroKey,
        PlayerID: Players.GetLocalPlayer(),
    });

    const overlay = findPanel("HeroSelectOverlay");
    if (overlay) {
        overlay.AddClass("Hidden");
        overlay.RemoveClass("ShowPowerUpChoices");
    }

    const gameUi = findPanel("GameUIScreen");
    if (gameUi) {
        gameUi.RemoveClass("Hidden");
    }

    $.Schedule(0.2, () => {
        startSurvivorsCameraAndControls();
        blockDefaultDotaMouseInput();
    });
};

const POWERUP_IMAGES: Record<number, string> = {
    1: "file://{images}/items/yasha.png",
    3: "file://{images}/items/kaya.png",
    10: "file://{images}/spellicons/vengefulspirit_magic_missile_alt2.png",
    11: "file://{images}/spellicons/skywrath_mage_arcane_bolt_alt2.png",
    12: "file://{images}/spellicons/kez_echo_slash.png",
    500: "file://{images}/spellicons/vengefulspirit_command_aura.png",
    501: "file://{images}/spellicons/skywrath_mage_ancient_seal.png",
    502: "file://{images}/spellicons/kez_grappling_claw.png",
};

const POWERUP_NAMES: Record<number, string> = {
    1: "#DOTA_VData_survivors_powerups_yasha_LocAbilityName",
    3: "#DOTA_VData_survivors_powerups_kaya_LocAbilityName",
    10: "#DOTA_VData_survivors_powerups_magic_missile_LocAbilityName",
    11: "#DOTA_VData_survivors_powerups_arcane_bolt_LocAbilityName",
    12: "#DOTA_VData_survivors_powerups_echo_strike_LocAbilityName",
    500: "#DOTA_VData_survivors_powerups_vengeful_spirit_innate_LocAbilityName",
    501: "#DOTA_VData_survivors_powerups_skywrath_mage_innate_LocAbilityName",
    502: "#DOTA_VData_survivors_powerups_kez_innate_LocAbilityName",
};

const POWERUP_DISPLAY_NAMES: Record<number, string> = {
    1: "Yasha",
    3: "Kaya",
    10: "Magic Missile",
    11: "Arcane Bolt",
    12: "Echo Strike",
};

const POWERUP_DESCRIPTIONS: Record<number, string> = {
    1: "Increase movement speed.",
    3: "Increase magical damage.",
    10: "Fire a stunning missile at nearby enemies.",
    11: "Fire magical bolts at the closest enemies.",
    12: "Slash enemies in front of you.",
};

function createPowerupSlot(
    containerId: string,
    data: { powerUpId: number; image: string; level: number },
) {
    const container = findPanel(containerId);
    if (!container) return;

    const slot = $.CreatePanel("Panel", container, `PowerupSlot_${data.powerUpId}`);
    slot.AddClass("PlayerInventorySlot");
    slot.SetPanelEvent("onmouseover", () => {
        const name = POWERUP_NAMES[data.powerUpId] ?? `Powerup ${data.powerUpId}`;
        $.DispatchEvent("DOTAShowTextTooltip", slot, name);
    });
    slot.SetPanelEvent("onmouseout", () => {
        $.DispatchEvent("DOTAHideTextTooltip", slot);
    });

    const imageContainer = $.CreatePanel("Panel", slot, "");
    imageContainer.AddClass("PowerUpImageContainer");

    const image = $.CreatePanel("Image", imageContainer, "PowerUpImage");
    image.SetImage(data.image);

    const cooldownContainer = $.CreatePanel("Panel", imageContainer, "");
    cooldownContainer.AddClass("PowerUpCooldownContainer");

    const cooldownProgress = $.CreatePanel("Panel", cooldownContainer, "PowerUpCooldownProgress");
    void cooldownProgress;

    const cooldownLabel = $.CreatePanel("Label", cooldownContainer, "");
    cooldownLabel.AddClass("PowerupCooldownLabel");
    cooldownLabel.text = "";

    const border = $.CreatePanel("Panel", imageContainer, "");
    border.AddClass("PowerUpImageBorder");
    border.hittest = false;

    const levelLabel = $.CreatePanel("Label", slot, "");
    levelLabel.AddClass("PowerUpLevel");
    levelLabel.text = `${data.level}`;
}

function createEmptySlots(containerId: string, count: number) {
    const container = findPanel(containerId);
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const slot = $.CreatePanel("Panel", container, `EmptySlot_${containerId}_${i}`);
        slot.AddClass("PlayerInventorySlot");
        slot.AddClass("EmptySlot");

        const imageContainer = $.CreatePanel("Panel", slot, "");
        imageContainer.AddClass("PowerUpImageContainer");

        const border = $.CreatePanel("Panel", imageContainer, "");
        border.AddClass("PowerUpImageBorder");
        border.hittest = false;

        const levelLabel = $.CreatePanel("Label", slot, "");
        levelLabel.AddClass("PowerUpLevel");
        levelLabel.text = "";
    }
}

function clearPanel(id: string) {
    const panel = findPanel(id);
    if (panel) panel.RemoveAndDeleteChildren();
}

function renderPowerupHud(active: number[], innate: number[], passive: number[]) {
    clearPanel("PlayerActiveContainer");
    clearPanel("PlayerInnateContainer");
    clearPanel("PlayerPassiveContainer");

    for (const id of innate) {
        createPowerupSlot("PlayerInnateContainer", {
            powerUpId: id,
            image: POWERUP_IMAGES[id] ?? "file://{images}/spellicons/invoker_empty1.png",
            level: 1,
        });
    }

    for (const id of active) {
        createPowerupSlot("PlayerActiveContainer", {
            powerUpId: id,
            image: POWERUP_IMAGES[id] ?? "file://{images}/spellicons/invoker_empty1.png",
            level: 1,
        });
    }

    for (const id of passive) {
        createPowerupSlot("PlayerPassiveContainer", {
            powerUpId: id,
            image: POWERUP_IMAGES[id] ?? "file://{images}/spellicons/invoker_empty1.png",
            level: 1,
        });
    }

    createEmptySlots("PlayerActiveContainer", Math.max(0, 6 - active.length));
    createEmptySlots("PlayerPassiveContainer", Math.max(0, 6 - passive.length));
}

type LevelUpChoiceData = {
    powerUpId: number;
    key: string;
    image?: string;
    locAbilityName?: string;
    locAbilityDesc?: string;
    isNew?: boolean;
    currentLevel?: number;
};

type SurvivorsXpChangedEvent = {
    xp: number;
    level: number;
    requiredXp: number;
};

type SurvivorsLevelUpChoicesEvent = {
    level: number;
    choices: LevelUpChoiceData[] | Record<string, LevelUpChoiceData>;
};

type SurvivorsHudUpdateEvent = {
    timeElapsed: number;
    gold: number;
    kills: number;
    health: number;
    maxHealth: number;
    xp: number;
    level: number;
    requiredXp: number;
};

type SurvivorsPowerupsChangedEvent = {
    activePowerups: number[] | Record<string, number>;
    innatePowerups: number[] | Record<string, number>;
    passivePowerups: number[] | Record<string, number>;
};

function toArray<T>(value: T[] | Record<string, T> | undefined): T[] {
    if (!value) return [];
    if (Array.isArray(value)) return value;

    const result: T[] = [];
    for (const key in value) {
        result.push(value[key]);
    }
    return result;
}

function updateXpHud(xp: number, level: number, requiredXp: number) {
    const levelText = findPanel("PlayerLevelText") as LabelPanel | null;
    const xpText = findPanel("PlayerExpText") as LabelPanel | null;
    const circle = findPanel("PlayerExpProgressCircleFilled");

    if (levelText) levelText.text = `${level}`;
    if (xpText) xpText.text = `${xp} / ${requiredXp}`;

    if (circle) {
        const pct = requiredXp > 0 ? xp / requiredXp : 0;
        const degrees = Math.min(360, pct * 360);
        circle.style.clip = `radial(50% 50%, 0deg, ${degrees}deg)`;
    }
}

function pad2(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
}

function updateTopHud(timeElapsed: number, gold: number, kills: number) {
    const timer = findPanel("TimerHUD") as LabelPanel | null;
    const goldHud = findPanel("GoldHUD") as LabelPanel | null;
    const killsHud = findPanel("KillsHUD") as LabelPanel | null;
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;

    if (timer) timer.text = `${pad2(minutes)}:${pad2(seconds)}`;
    if (goldHud) goldHud.text = `${gold}`;
    if (killsHud) killsHud.text = `${kills}`;
}

function updateHealthHud(health: number, maxHealth: number) {
    const bar = findPanel("PlayerHealthProgressBar") as ProgressBar | null;
    const text = findPanel("PlayerHealthText") as LabelPanel | null;
    const pct = maxHealth > 0 ? health / maxHealth : 0;

    if (bar) bar.value = pct;
    if (text) text.text = `${Math.ceil(health)} / ${Math.ceil(maxHealth)}`;
}

function hideLevelUpChoices() {
    const overlay = findPanel("LevelUpOverlay");
    if (overlay) {
        overlay.AddClass("Hidden");
        overlay.RemoveClass("ShowPowerUpChoices");
    }
    $.GetContextPanel().RemoveClass("ShowPowerUpChoices");
}

function selectPowerup(powerUpId: number) {
    GameEvents.SendCustomGameEventToServer("survivors_select_powerup", {
        PlayerID: Players.GetLocalPlayer(),
        powerUpId,
    });
    hideLevelUpChoices();
}

function createPowerupChoiceCard(parent: Panel, choice: LevelUpChoiceData) {
    const card = $.CreatePanel("Button", parent, `PowerUpChoice_${choice.powerUpId}`) as Button;
    card.AddClass("PowerUpChoice");
    card.AddClass(`SurvivorsPowerUp_${choice.powerUpId}`);

    if (choice.isNew) card.AddClass("NewPowerupAvailable");

    const powerUpContainer = $.CreatePanel("Panel", card, "");
    powerUpContainer.AddClass("PowerUpContainer");

    const bg = $.CreatePanel("Panel", powerUpContainer, "");
    bg.AddClass("PowerUpBackground");

    const powerupLabel = $.CreatePanel("Label", powerUpContainer, "");
    powerupLabel.AddClass("PowerupLabel");
    powerupLabel.AddClass("LabelSmall");
    powerupLabel.text = choice.isNew ? "NEW POWERUP" : "UPGRADE";

    const texture = $.CreatePanel("Image", powerUpContainer, "");
    texture.AddClass("PowerupTexture");
    texture.SetImage("s2r://panorama/images/events/crownfall/survivors/powerup_texture_png.vtex");
    texture.SetScaling("stretch-to-cover-preserve-aspect");

    const abilityImageContainer = $.CreatePanel("Panel", powerUpContainer, "");
    abilityImageContainer.AddClass("AbilityImageContainer");

    const image = $.CreatePanel("Image", abilityImageContainer, "AbilityImage");
    image.SetImage(choice.image ?? "file://{images}/spellicons/invoker_empty1.png");

    const shine = $.CreatePanel("Panel", abilityImageContainer, "");
    shine.AddClass("AbilityImageShine");

    const abilityName = $.CreatePanel("Label", powerUpContainer, "");
    abilityName.AddClass("AbilityName");
    abilityName.text = POWERUP_DISPLAY_NAMES[choice.powerUpId] ?? choice.key;

    const variableLines = $.CreatePanel("Panel", powerUpContainer, "TooltipVariableLines");
    void variableLines;

    const desc = $.CreatePanel("Label", powerUpContainer, "");
    desc.AddClass("PowerUpDescription");
    desc.text = POWERUP_DESCRIPTIONS[choice.powerUpId] ?? "";

    const border = $.CreatePanel("Panel", card, "");
    border.AddClass("PowerUpContainerBorder");
    border.hittest = false;

    const chooseButton = $.CreatePanel("Button", card, "ChooseButton") as Button;
    chooseButton.AddClass("SurvivorsPrimaryButton");
    const buttonLabel = $.CreatePanel("Label", chooseButton, "");
    buttonLabel.text = "CHOOSE";

    card.SetPanelEvent("onactivate", () => selectPowerup(choice.powerUpId));
    chooseButton.SetPanelEvent("onactivate", () => selectPowerup(choice.powerUpId));
}

function showLevelUpChoices(data: SurvivorsLevelUpChoicesEvent) {
    const overlay = findPanel("LevelUpOverlay");
    const container = findPanel("PlayerLevelUpChoiceContainer");

    if (!overlay || !container) return;

    container.RemoveAndDeleteChildren();

    overlay.RemoveClass("Hidden");
    overlay.AddClass("ShowPowerUpChoices");
    $.GetContextPanel().AddClass("ShowPowerUpChoices");

    for (const choice of toArray(data.choices)) {
        createPowerupChoiceCard(container, choice);
    }
}

GameEvents.Subscribe("survivors_xp_changed", data => {
    const payload = data as SurvivorsXpChangedEvent;
    updateXpHud(payload.xp, payload.level, payload.requiredXp);
});

GameEvents.Subscribe("survivors_hud_update", data => {
    const payload = data as SurvivorsHudUpdateEvent;
    updateTopHud(payload.timeElapsed, payload.gold, payload.kills);
    updateHealthHud(payload.health, payload.maxHealth);
    updateXpHud(payload.xp, payload.level, payload.requiredXp);
});

GameEvents.Subscribe("survivors_powerups_changed", data => {
    const payload = data as SurvivorsPowerupsChangedEvent;
    renderPowerupHud(
        toArray(payload.activePowerups),
        toArray(payload.innatePowerups),
        toArray(payload.passivePowerups),
    );
});

GameEvents.Subscribe("survivors_level_up_choices", data => {
    showLevelUpChoices(data as SurvivorsLevelUpChoicesEvent);
});

blockDefaultDotaMouseInput();
initializeHeroSelection();