// Usage instructions: This will create a file named "portfolio.ts" in this folder.
// This file contains valid TypeScript code which can be used to manually build
// the file "src/context/portfolio_files.ts". The code is not formatted and
// should be formatted manually.

const fs = require('fs');
const path = require('path');

const INPUT_FOLDER = "../src/assets/portfolio2";

const FILE_TYPES = {
    image: [
        "jpg", "jpeg", "png", "webp", "gif", "bmp", "tiff", "svg", "avif",
    ],
    video: [ "mp4" ],
    pdf: [ "pdf" ],
}

const imports = [];
let importCounter = 0;

const branding = buildFolder(INPUT_FOLDER + "/Branding");
const drawing = buildFolder(INPUT_FOLDER + "/Drawing");
const reel = buildFolder(INPUT_FOLDER + "/Reel");

generateTsFile(branding, drawing, reel);

function getType (ext) {
    ext = ext.toLowerCase();

    for (const [type, exts] of Object.entries(FILE_TYPES)) {
        if (exts.includes(ext)) return type;
    }

    return null;
}

function getVarName (filename) {
    const num = importCounter++;
    return "file_" + num + "_" + filename.replace(/[^a-zA-Z0-9_]/g, '_').toLowerCase();
}

function cleanPath (filePath) {
    const normalized = path.normalize(filePath);
    const segments = normalized.split(path.sep);
    return path.join(...segments.slice(2));
}

function buildFolder (folderPath) {
    const folderName = path.basename(folderPath);

    const folder = {
        type: 'folder',
        name: folderName,
        display: 'list',
        parentFolder: null,
        content: [],
    };

    const realFiles = fs.readdirSync(folderPath);
    const entries = [];

    for (const file of realFiles) {
        // thumbnails are not added.
        if (file.includes("thumbnail")) continue;

        const fullPath = path.join(folderPath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            folder.content.push(buildFolder(fullPath));
            continue;
        }
        else {
            folder.display = 'gallery';
        }

        const ext = path.extname(file).slice(1);
        const type = getType(ext);

        if (type === 'image') {
            const fileInfo = generateFileInfo(fullPath);

            folder.content.push({
                type: 'image',
                name: fileInfo.name,
                content: fileInfo.varName,
            });
        }
        else if (type === 'video') {
            const fileInfo = generateFileInfo(fullPath);
            const thumbnailInfo = generateFileInfo(
                fullPath.replace(".mp4", ".thumbnail.jpg")
            );

            folder.content.push({
                type: 'video',
                name: fileInfo.name,
                content: fileInfo.varName,
                thumbnail: thumbnailInfo.varName,
            });
        }
        else if (type === 'pdf') {
            const fileInfo = generateFileInfo(fullPath);

            folder.content.push({
                type: 'pdf',
                name: fileInfo.name,
                content: fileInfo.varName,
            })
        }
    }

    return folder;
}

function generateFileInfo (fullPath) {
    const name = path.basename(fullPath, path.extname(fullPath));
    const varName = getVarName(name);
    const importPath = `import ${varName} from "${cleanPath(fullPath)}";`;

    imports.push(importPath);

    return {
        name,
        varName,
        importPath,
    }
}

function generateTsFile (branding, drawing, reel) {
    let file = "";

    file += `import { Folder } from "./usePortfolioContext";\n`;

    for (const imp of imports) {
        file += imp.replaceAll("\\", "/") + "\n";
    }

    file += "\n";

    file += "export function getBrandingFolder () : Folder { ";
    file += "const folder: Folder = " + folderCode(branding) + ";";
    file += "return folder;";
    file += "};";

    file += "export function getDrawingFolder () : Folder { ";
    file += "const folder: Folder = " + folderCode(drawing) + ";";
    file += "return folder;";
    file += "};";

    file += "export function getReelsFolder () : Folder { ";
    file += "const folder: Folder = " + folderCode(reel) + ";";
    file += "return folder;";
    file += "};";

    fs.writeFileSync("./portfolio.ts", file);
}

function folderCode (folder) {
    let code = "{";
    code += "type: 'folder',";
    code += `name: "${folder.name}",`;
    code += `display: '${folder.display}',`;
    code += `content: [`;

    for (const file of folder.content) {
        if (file.type === 'folder') code += folderCode(file);
        else if (file.type === 'image') code += imageCode(file);
        else if (file.type === 'video') code += videoCode(file);
        else if (file.type === 'pdf') code += pdfCode(file);

        code += ", ";
    }

    code += "]";
    code += "}";

    return code;
}

function imageCode (file) {
    let code = "{";
    code += "type: 'image',";
    code += `name: "${file.name}",`;
    code += `content: ${file.content},`;
    code += "}";

    return code;
}

function videoCode (file) {
    let code = "{";
    code += "type: 'video',";
    code += `name: "${file.name}",`;
    code += `content: ${file.content},`;
    code += `thumbnail: ${file.thumbnail},`;
    code += "}";

    return code;
}

function pdfCode (file) {
    let code = "{";
    code += "type: 'pdf',";
    code += `name: "${file.name}",`;
    code += `content: ${file.content},`;
    code += "}";

    return code;
}