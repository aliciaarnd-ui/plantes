// Génère les icônes PNG (fond vert, deux feuilles) sans dépendance.
const fs = require('fs'), zlib = require('zlib'), path = require('path');
function png(size) {
  const px = Buffer.alloc(size * size * 4);
  const bg = [47, 74, 58], fg = [207, 229, 201];
  const inLeaf = (x, y, cx, cy, a, b, ang) => { const c = Math.cos(ang), s = Math.sin(ang); const dx = x - cx, dy = y - cy; const u = dx * c + dy * s, v = -dx * s + dy * c; return (u * u) / (a * a) + (v * v) / (b * b) <= 1; };
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const nx = x / size, ny = y / size; let col = bg;
    if (inLeaf(nx, ny, .36, .36, .2, .085, Math.PI / 4) || inLeaf(nx, ny, .64, .3, .2, .085, -Math.PI / 4) || (Math.abs(nx - .5) < .025 && ny > .42 && ny < .84)) col = fg;
    const i = (y * size + x) * 4; px[i] = col[0]; px[i + 1] = col[1]; px[i + 2] = col[2]; px[i + 3] = 255;
  }
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) { raw[y * (size * 4 + 1)] = 0; px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4); }
  const crcT = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crcT[n] = c >>> 0; }
  const crc = b => { let c = 0xffffffff; for (const v of b) c = crcT[(c ^ v) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const chunk = (t, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(t), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}
for (const s of [192, 512]) fs.writeFileSync(path.join(__dirname, '..', 'icons', `icon-${s}.png`), png(s));
console.log('ok');
