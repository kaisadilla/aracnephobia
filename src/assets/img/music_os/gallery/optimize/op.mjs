import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Source directory (defaults to current folder) and output directory
const INPUT_DIR = path.join(process.cwd(), 'in');
const OUTPUT_DIR = path.join(process.cwd(), 'out');

// Allowed image extensions
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.tiff', '.bmp', '.gif', '.svg']);

async function optimizeImages() {
  try {
    // 1. Ensure the out/ directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // 2. Read all files in the current folder
    const files = await fs.readdir(INPUT_DIR, { withFileTypes: true });

    for (const file of files) {
      // Process only files (skip subfolders)
      if (!file.isFile()) continue;

      const ext = path.extname(file.name).toLowerCase();

      // Check if file is a supported image
      if (IMAGE_EXTENSIONS.has(ext)) {
        const inputFilePath = path.join(INPUT_DIR, file.name);
        const fileNameWithoutExt = path.parse(file.name).name;
        const outputFilePath = path.join(OUTPUT_DIR, `${fileNameWithoutExt}.jpg`);

        console.log(`Optimizing: ${file.name} -> out/${fileNameWithoutExt}.jpg`);

        await sharp(inputFilePath)
          // Flatten converts transparency (PNG/WebP alpha channel) to a solid color background
          .flatten({ background: { r: 255, g: 255, b: 255 } })
          .resize(1920, 1080, {
            fit: 'inside',              // Keeps aspect ratio without cropping
            withoutEnlargement: true    // Won't stretch images smaller than 1080p
          })
          .jpeg({
            quality: 80,         // Sweet spot for web optimization (0-100)
            progressive: true,   // Enables progressive loading on slow connections
            mozjpeg: true        // Applies additional optimization compression passes
          })
          .toFile(outputFilePath);
      }
    }

    console.log('\nAll images processed and saved to ./out/');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

optimizeImages();
