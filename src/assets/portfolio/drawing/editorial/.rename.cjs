const fs = require('fs');
const path = require('path');

const targetDir = './'; // Change this to your folder path

fs.readdirSync(targetDir).forEach((file) => {
    const oldPath = path.join(targetDir, file);
    if (!fs.lstatSync(oldPath).isFile()) return;

    const newFileName = file
        .toLowerCase()
        .replace(/ /g, '_');

    const newPath = path.join(targetDir, newFileName);

    if (oldPath !== newPath) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${file} → ${newFileName}`);
    }
});