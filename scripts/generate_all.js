const fs = require('fs');
const path = require('path');

function kv3ToJson(kv3Text) {
    let s = kv3Text;
    // Replace comments but skip `//` in protocols like `file://`
    s = s.replace(/(^|\s)\/\/.*$/gm, '$1');
    s = s.replace(/<!--[\s\S]*?-->/g, '');
    s = s.replace(/([a-zA-Z0-9_\.]+)\s*=/g, '"$1":');
    s = s.replace(/[a-zA-Z0-9_\.]+:"([^"]*)"/g, '"$1"');
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
        
        // Add commas if we end with a value and the next line starts with a new key or brace/bracket
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
        console.error("Parse failed. Context:");
        // Dump the problematic area
        console.error(s.substring(0, 500));
        throw e;
    }
}

// Convert "m_unPickupID" -> "pickupId", "m_sLocName" -> "locName", "m_vecMinorUpgradeChoices" -> "minorUpgradeChoices", etc.
function toCamelCase(key) {
    if (key === '_class') return 'className';
    // Match m_ followed by some potential type prefixes:
    // un, b, s, f, fl, vec, n, e, etc. then followed by an uppercase letter
    const match = key.match(/^m_(?:un|b|s|fl|f|n|e|vec|v|fl|sz)?([A-Z].*)$/);
    if (match && match[1]) {
        return match[1].charAt(0).toLowerCase() + match[1].slice(1);
    }
    // Also remove generic m_ as a fallback
    const genericMatch = key.match(/^m_([A-Za-z].*)$/);
    if (genericMatch && genericMatch[1]) {
        let str = genericMatch[1];
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    return key;
}

function transformKeys(obj) {
    if (Array.isArray(obj)) {
        return obj.map(transformKeys);
    } else if (obj !== null && typeof obj === 'object') {
        const newObj = {};
        for (const [k, v] of Object.entries(obj)) {
            let mappedKey = toCamelCase(k);
            if (mappedKey.endsWith('ID')) {
                mappedKey = mappedKey.slice(0, -2) + 'Id';
            }
            if (mappedKey === 'dOTAHeroId') mappedKey = 'dotaHeroId';
            if (mappedKey === 'xPDropChanceMultiplier') mappedKey = 'xpDropChanceMultiplier';
            if (mappedKey === 'pszPlayerHitSoundEvent') mappedKey = 'playerHitSoundEvent';
            if (k === 'cEliteGlowColor' || mappedKey === 'cEliteGlowColor') mappedKey = 'eliteGlowColor';
            if (k === 'cOverriddenGlowColor' || mappedKey === 'cOverriddenGlowColor') mappedKey = 'overriddenGlowColor';
            if (mappedKey === 'lightDirection' || mappedKey === 'vecLightDirection') {
                mappedKey = 'lightDirection';
            }
            if (k === 'm_sPickupName') {
                // Keep default mapping
            }

            if (mappedKey === 'baseAttributes' || mappedKey === 'attributes' || mappedKey === 'globalUpgradeAttributes' || mappedKey === 'upgradeAttributes') {
                if (Array.isArray(v)) {
                    newObj[mappedKey] = v.map((attr) => {
                        let type = attr.m_eType || attr.m_sType || attr.type || '';
                        let value = typeof attr.m_flValue !== 'undefined' ? attr.m_flValue : (typeof attr.m_un !== 'undefined' ? attr.m_un : attr.value || 0);
                        return { type, value };
                    });
                    continue;
                }
            }
            newObj[mappedKey] = transformKeys(v);
        }
        return newObj;
    }
    return obj;
}

const fileMappings = [
    { input: 'survivors_attributes.txt', output: 'SurvivorsAttributes.ts', exportName: 'SURVIVORS_ATTRIBUTES', typeName: 'SurvivorsAttributes' },
    { input: 'survivors_difficulty.txt', output: 'SurvivorsDifficulty.ts', exportName: 'SURVIVORS_DIFFICULTIES', typeName: 'SurvivorsDifficulties' },
    { input: 'survivors_enemies.txt', output: 'SurvivorsEnemies.ts', exportName: 'SURVIVORS_ENEMIES', typeName: 'SurvivorsEnemies' },
    { input: 'survivors_game_modes.txt', output: 'SurvivorsGameModes.ts', exportName: 'SURVIVORS_GAME_MODES', typeName: 'SurvivorsGameModes' },
    { input: 'survivors_heroes.txt', output: 'SurvivorsHeroes.ts', exportName: 'SURVIVORS_HEROES', typeName: 'SurvivorsHeroes' },
    { input: 'survivors_levels.txt', output: 'SurvivorsLevels.ts', exportName: 'SURVIVORS_LEVELS', typeName: 'SurvivorsLevels' },
    { input: 'survivors_pickups.txt', output: 'SurvivorsPickups.ts', exportName: 'SURVIVORS_PICKUPS', typeName: 'SurvivorsPickups' },
    { input: 'survivors_powerups.txt', output: 'SurvivorPowerUps.ts', exportName: 'SURVIVORS_POWERUPS', typeName: 'Record<string, SurvivorsPowerUpDefinition>' },
    { input: 'survivors_spawners.txt', output: 'SurvivorsSpawners.ts', exportName: 'SURVIVORS_SPAWNERS', typeName: 'SurvivorsSpawners' },
];

function main() {
    const sourceDir = path.join(__dirname, '..', 'source');
    const outDir = path.join(__dirname, '..', 'src', 'vscripts', 'survivors');

    for (const mapping of fileMappings) {
        const inPath = path.join(sourceDir, mapping.input);
        const outPath = path.join(outDir, mapping.output);

        if (!fs.existsSync(inPath)) {
            console.log(`Skipping ${inPath} (not found)`);
            continue;
        }

        console.log(`Processing ${mapping.input}...`);
        const kv3Text = fs.readFileSync(inPath, 'utf8');
        const parsedNode = kv3ToJson(kv3Text);
        
        const definitions = {};
        for (const [k, v] of Object.entries(parsedNode)) {
            if (k === 'generic_data_type' || k === '_localization_path' || k === 'version' || k === 'format') continue;
            let transformed = transformKeys(v);
            transformed.key = k;
            definitions[k] = transformed;
        }

        const jsonStr = JSON.stringify(definitions, null, 4);

        // Adjust imports to pull types from SurvivorsInterface (you may need to add some missing imports like SurvivorsPowerUpDefinition if we grab Record<string, SurvivorsPowerUpDefinition>)
        const imports = mapping.typeName.startsWith('Record') 
            ? `import { ${mapping.typeName.match(/<string, ([A-Za-z]+)>/)[1]} } from "./SurvivorsInterface";`
            : `import { ${mapping.typeName} } from "./SurvivorsInterface";`;

        const code = `${imports}\n\nexport const ${mapping.exportName}: ${mapping.typeName} = ${jsonStr};\n`;

        fs.writeFileSync(outPath, code);
        console.log(`Wrote ${Object.keys(definitions).length} entries to ${mapping.output}`);
    }
}

main();