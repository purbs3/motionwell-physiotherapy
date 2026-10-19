import sharp from "sharp";
import { existsSync } from "node:fs";

const input = "public/logo-light.png";
const output = "public/favicon.png";

if (!existsSync(input)) {
    throw new Error("Logo nahi mila: public/logo-light.png");
}

const size = 512;
const padding = 12; // Kam padding = logo zyada zoom in

const circleBackground = Buffer.from(`
  <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="256" fill="#f7f8f1"/>
  </svg>
`);

const circleMask = Buffer.from(`
  <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="256" fill="white"/>
  </svg>
`);

const logo = await sharp(input)
    .resize(size - padding * 2, size - padding * 2, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

const composed = await sharp(circleBackground)
    .composite([
        {
            input: logo,
            gravity: "centre",
        },
    ])
    .png()
    .toBuffer();

await sharp(composed)
    .composite([
        {
            input: circleMask,
            blend: "dest-in",
        },
    ])
    .png()
    .toFile(output);

console.log("Circular zoomed favicon created: public/favicon.png");