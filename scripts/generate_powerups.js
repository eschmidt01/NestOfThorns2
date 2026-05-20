const fs = require('fs');
const path = require('path');

function kv3ToJson(kv3Text) {
    let s = kv3Text;
    // Replace comments but skip `//` in protocols like `file://`
    s = s.replace(/(^|\s)\/\/.*$/gm, '$1');
    s = s.replace(/<!--[\s\S]*?-->/g, '');
    s = s.replace(/([a-zA-Z0-9_]+)\s*=/g, '"$1":');
    s = s.replace(/[a-zA-Z0-9_]+:"([^"]+)"/g, '"$1"');
    s = s.replace(/:\s*([a-zA-Z_][a-zA-Z0-9_]*)/g, (m, word) => {
        if (word === 'true' || word === 'false' || word === 'null') return m;
        return `: "${word}"`;
    });

    let lines = s.split('\n');
    let out = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trimEnd();
        if (line.trim() === '') continue;
        
        let nextLine = '';
        for (let j = i + 1; j < lines.length; j++) {
            if (lines[j].trim() !== '') {
                nextLine = lines[j].trim();
                break;
            }
        }
        
        let endsWithValue = line.match(/["0-9a-zA-Z_\]\}]$/);
        let nextStartsWithKeyOrBrace = nextLine.match(/^["\{\[]/);
        
        if (endsWithValue && nextStartsWithKeyOrBrace && !line.endsWith('{') && !line.endsWith('[')) {
            line += ',';
        }
        out.push(line);
    }

    s = out.join('\n');
    
    let firstBrace = s.indexOf('{');
    if (firstBrace !== -1) s = s.substring(firstBrace);

    try {
        return (new Function("return " + s))();
    } catch (e) {
        console.error("Parse failed. Evaluated text:\\n" + s + "\\n\\n");
        throw e;
    }
}

function mapAttribute(obj) {
    const type = obj.m_eType || obj.m_sType || obj.type || '';
    const value = typeof obj.m_flValue !== 'undefined' ? obj.m_flValue : (typeof obj.m_un !== 'undefined' ? obj.m_un : obj.value || 0);
    return { type, value };
}

function buildDefinitions(parsed) {
    const out = {};
    for (const key of Object.keys(parsed)) {
        if (key === 'generic_data_type' || key === '_localization_path') continue;
        const entry = parsed[key];
        if (!entry || typeof entry !== 'object') continue;
        
        const def = {
            key,
            powerUpId: entry.m_unPowerUpID || entry.m_unHeroID || 0,
            className: entry._class,
            image: entry.m_sImage || entry.m_sHeroImage || '',
            locAbilityName: entry.m_sLocAbilityName || '',
            locAbilityDesc: entry.m_sLocAbilityDesc,
            locScepterAbilityDesc: entry.m_sLocScepterAbilityDesc,
            sourceHero: entry.m_sSource,
            maxLevel: entry.m_nMaxLevel || 1,
            isPassive: entry.m_bIsPassive || undefined,
            isRollable: entry.m_bRollable || undefined,
            isGold: entry.m_bIsGold || undefined,
            isInnate: entry.m_bIsInnate || undefined,
            isScepterUpgradeable: entry.m_bIsScepterUpgradeable || entry.m_bIsScepterUpgradeable || undefined,
            recipeItems: entry.m_vecRecipeItems || undefined,
            tooltipAttributes: entry.m_vecTooltipAttributes || undefined,
        };

        const base = entry.m_vecBaseAttributes;
        if (Array.isArray(base)) {
            def.baseAttributes = base.map(mapAttribute);
        }

        const authored = entry.m_vecAuthoredUpgradeChoices;
        if (Array.isArray(authored)) {
            def.authoredUpgradeChoices = authored.map(c => {
                const attrs = c.m_vecUpgradeAttributes || c.m_vecGlobalUpgradeAttributes || [];
                return { attributes: (attrs || []).map(mapAttribute) };
            });
        }

        const minor = entry.m_vecMinorUpgradeChoices;
        if (Array.isArray(minor)) {
            def.minorUpgradeChoices = minor.map(c => {
                const attrs = c.m_vecUpgradeAttributes || c.m_vecGlobalUpgradeAttributes || [];
                return { rarity: c.m_unRarity, attributes: (attrs || []).map(mapAttribute) };
            });
        }

        out[key] = def;
    }
    return out;
}

function generateTsCode(definitions) {
    const jsonStr = JSON.stringify(definitions, null, 4);
    
    return `export interface PowerUpAttribute {
    type: string; // e.g., "k_eSurvivorsAttribute_Damage_Magical"
    value: number;
}

export interface UpgradeChoice {
    rarity?: string; // e.g., "RARITY_COMMON"
    attributes: PowerUpAttribute[];
}

export interface SurvivorsPowerUpDefinition {
    key: string;
    powerUpId: number;
    className?: string; // Matches _class in KV3
    image: string;
    locAbilityName: string;
    locAbilityDesc?: string;
    locScepterAbilityDesc?: string;
    sourceHero?: string; // e.g., "vengefulspirit"
    maxLevel: number;
    isPassive?: boolean;
    isRollable?: boolean;
    isGold?: boolean;
    isInnate?: boolean;
    isScepterUpgradeable?: boolean;
    recipeItems?: number[]; // Array of PowerUpIDs needed to craft
    tooltipAttributes?: string[];
    baseAttributes?: PowerUpAttribute[];
    authoredUpgradeChoices?: UpgradeChoice[];
    minorUpgradeChoices?: UpgradeChoice[];
}

export const SURVIVORS_POWERUPS: Record<string, SurvivorsPowerUpDefinition> = ${jsonStr};
`;
}

function main() {
    const inputPath = process.argv[2];
    const outputPath = process.argv[3];

    if (!inputPath || !outputPath) {
        console.error("Usage: node generate_powerups.js <input_kv3_file> <output_ts_file>");
        process.exit(1);
    }

    console.log(`Reading KV3 from: ${inputPath}`);
    if (!fs.existsSync(inputPath)) {
        console.error(`File not found: ${inputPath}`);
        process.exit(1);
    }

    const kv3Text = fs.readFileSync(inputPath, 'utf8');
    
    console.log("Parsing KV3...");
    const parsed = kv3ToJson(kv3Text);
    
    console.log("Building definitions...");
    const definitions = buildDefinitions(parsed);
    
    console.log("Generating TypeScript...");
    const tsCode = generateTsCode(definitions);

    fs.writeFileSync(outputPath, tsCode);
    console.log(`Successfully wrote ${Object.keys(definitions).length} powerups to ${outputPath}`);
}

main();