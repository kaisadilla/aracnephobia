const FONT_PATH = "Meiryo.ttf";
//const FONT_PATH = "TIMESBD.TTF";

//const FIRST_CODEPOINT = 0x30a0; // Katakana
const FIRST_CODEPOINT = 0x4e00; // Kanji
//const FIRST_CODEPOINT = 36;

const AMOUNT = 1500;
//const AMOUNT = 98;

const fs = require('fs');
const TextToSVG = require('text-to-svg');
const font = TextToSVG.loadSync(FONT_PATH); // e.g., 'NotoSansCJKjp-Regular.otf'

const characters = [...new Array(AMOUNT)].map((_, i) => String.fromCharCode(FIRST_CODEPOINT + i)); // Example: Katakana

for (const c of [..."新世紀エヴァンゲリオン"]) {
  if (characters.includes(c) === false) {
    characters.push(c);
  }
}

const charPaths = {};

fs.mkdirSync("out", { recursive: true });

const notdefD = font.getD('\uFFFF', { fontSize: 100 });
const notdefWidth = font.getMetrics('\uFFFF', { fontSize: 100 }).width;

characters.forEach(char => {
  const d = font.getD(char, { fontSize: 100 });
  const metrics = font.getMetrics(char, { fontSize: 100 });

  if (!metrics) {
    console.log(`Skipping unsupported char: ${char}`);
    return;
  }
  if (d === notdefD || metrics.width === notdefWidth) {
    console.log(`Skipping likely missing character: ${char}`);
    return;
  }

  const svg = font.getSVG(char, { x: 0, y: 90, fontSize: 100 });

  const code = char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
  fs.writeFileSync(`out/char_${code}.svg`, svg);

  //const match = svg.match(/<path[^>]*\/>/);
  const match = svg.match(/d="([^"]+)"/);
  if (match) {
    const d = match[0].replaceAll("d=\"", "").replaceAll("\"", "");

    charPaths[char] = d;
  }
  else {
    console.warn("No d?");
  }
  //fs.writeFileSync(`out/char_${code}.svg`, svgPath);
});

fs.writeFileSync(`chars.json`, JSON.stringify(charPaths, null, 4));
