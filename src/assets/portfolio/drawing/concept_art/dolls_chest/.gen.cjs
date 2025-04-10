const fs = require('fs');
const path = require('path');

// 🔧 CONFIG
const inputFolder = './';
const outputFile = './assets.js';

// File extension to type mapping
const extensionToType = {
    image: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'svg', 'avif'],
    video: ['mp4', 'webm', 'mov'],
    pdf: ['pdf'],
};

function getType(extension) {
    const ext = extension.toLowerCase();
    for (const [type, extensions] of Object.entries(extensionToType)) {
        if (extensions.includes(ext)) return type;
    }
    return 'unknown';
}

function toVariableName(filename) {
    // Remove bad characters and make a valid identifier
    return filename.replace(/[^a-zA-Z0-9_]/g, '_');
}

function main() {
    const files = fs.readdirSync(inputFolder);
    const imports = [];
    const entries = [];

    for (const file of files) {
        if (file.startsWith(".")) continue;
        const ext = path.extname(file).slice(1);
        const nameWithoutExt = path.basename(file, path.extname(file));
        const varName = `PH1_${toVariableName(nameWithoutExt)}`;
        const importPath = `PH2/${file}`;

        imports.push(`import ${varName} from "${importPath}";`);

        const type = getType(ext);

        entries.push(`    {
        type: '${type}',
        name: "${nameWithoutExt}",
        content: ${varName},
    }`);
    }

    const output = `// Auto-generated by generateAssets.js

${imports.join('\n')}

export const assets = [
${entries.join(',\n')}
];
`;

    fs.writeFileSync(outputFile, output);
    console.log(`✅ Generated ${outputFile} with ${files.length} assets.`);
}

main();