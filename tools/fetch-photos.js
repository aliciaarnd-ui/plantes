// Récupère des photos sous licence libre (iNaturalist, repli Wikidata/Commons) pour chaque nom latin
// des fiches et des sosies toxiques. Écrit data/photos.js. Incrémental : les noms déjà trouvés sont gardés.
// Usage : node tools/fetch-photos.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = {};
for (const f of fs.readdirSync(path.join(root, 'data')).filter(f => f.endsWith('.js') && f !== 'photos.js').sort()) {
  if (/^(sauvages|interieur)-/.test(f)) continue; // chargés après leur fichier principal
  require(path.join(root, 'data', f));
}
for (const f of fs.readdirSync(path.join(root, 'data')).filter(f => /^(sauvages|interieur)-.+\.js$/.test(f))) require(path.join(root, 'data', f));

const OUT = path.join(root, 'data', 'photos.js');
let photos = {};
try { global.window.PHOTOS = undefined; require(OUT); photos = global.window.PHOTOS || {}; } catch (e) {}

const key = s => String(s || '').toLowerCase().replace(/[×]/g, 'x').trim();
function names(latin) {
  // "Tilia cordata, Tilia platyphyllos" / "Goeppertia spp. (ex Calathea)" / "Dracaena trifasciata (syn. ...)"
  return String(latin || '').replace(/\(.*?\)/g, '').split(/,| et | ou |\//).map(s => s.trim())
    .map(s => s.replace(/\b(spp?|subsp|var|cf)\.?.*$/i, '').replace(/['"‘’].*$/, '').trim())
    .filter(Boolean).map(s => s.split(/\s+/).slice(0, 2).join(' ')).filter(s => /^[A-Z][a-z-]+( [a-z-]+)?$/.test(s));
}
const wanted = new Map(); // nom -> catégorie
const add = (latin, cat) => { const n = names(latin)[0]; if (n && !wanted.has(key(n))) wanted.set(key(n), { n, cat }); };
(window.SAUVAGES || []).forEach(p => { add(p.latin, 'sauvage'); (p.confusions || []).forEach(c => add(c.latin, 'confusion')); });
(window.AROMATIQUES || []).forEach(p => add(p.latin, 'aromatique'));
(window.INTERIEUR || []).forEach(p => add(p.latin, 'interieur'));

const sleep = ms => new Promise(r => setTimeout(r, ms));
const UA = { 'User-Agent': 'herbier-app/1.0 (personal plant guide)' };
async function getJSON(url) {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.status === 429) { await sleep(5000); continue; }
    if (!r.ok) return null;
    return r.json();
  }
  return null;
}
const OK_LIC = /^(cc0|cc-by|cc-by-sa|cc-by-nc|cc-by-nc-sa|cc-by-nd|cc-by-nc-nd)$/;
async function inat(name) {
  const s = await getJSON(`https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(name)}&per_page=10&is_active=true`);
  await sleep(1100);
  const t = s && s.results && s.results.find(x => key(x.name) === key(name));
  if (!t) return null;
  const d = await getJSON(`https://api.inaturalist.org/v1/taxa/${t.id}`);
  await sleep(1100);
  const tp = (d && d.results && d.results[0] && d.results[0].taxon_photos) || [];
  const list = tp.map(x => x.photo).filter(p => p && OK_LIC.test(p.license_code || '')).slice(0, 5)
    .map(p => ({ u: p.url.replace(/\/square\.(\w+)/, '/medium.$1'), a: p.attribution, s: `https://www.inaturalist.org/photos/${p.id}` }));
  return list.length ? { inat: t.id, fr: (t.preferred_common_name || ''), photos: list } : null;
}
async function wikidata(name) {
  const q = `SELECT ?img WHERE { ?i wdt:P225 "${name}"; wdt:P18 ?img } LIMIT 1`;
  const r = await getJSON('https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(q));
  await sleep(1000);
  const img = r && r.results.bindings[0] && r.results.bindings[0].img.value;
  if (!img) return null;
  const file = decodeURIComponent(img.split('/').pop());
  const ii = await getJSON(`https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=640&titles=File:${encodeURIComponent(file)}`);
  await sleep(1000);
  const pg = ii && Object.values(ii.query.pages)[0]; const inf = pg && pg.imageinfo && pg.imageinfo[0];
  if (!inf) return null;
  const m = inf.extmetadata || {}; const strip = s => String(s || '').replace(/<[^>]+>/g, '').trim();
  return { photos: [{ u: inf.thumburl, a: `${strip(m.Artist && m.Artist.value) || 'Wikimedia Commons'}, ${strip(m.LicenseShortName && m.LicenseShortName.value)}`, s: inf.descriptionurl }] };
}
(async () => {
  let done = 0, miss = [];
  for (const [k, { n }] of wanted) {
    if (photos[k] && photos[k].photos && photos[k].photos.length) continue;
    let r = null;
    try { r = await inat(n); if (!r) r = await wikidata(n); } catch (e) { console.error(n, e.message); }
    if (r) { photos[k] = r; done++; } else miss.push(n);
    if (done && done % 20 === 0) save();
  }
  save();
  console.log(`noms: ${wanted.size}, nouveaux: ${done}, sans photo: ${miss.length}${miss.length ? ' -> ' + miss.join(', ') : ''}`);
  function save() { fs.writeFileSync(OUT, '/* Photos sous licence libre (iNaturalist / Wikimedia Commons), auteur et licence dans "a", page source dans "s". Généré par tools/fetch-photos.js */\nwindow.PHOTOS = ' + JSON.stringify(photos, null, 0).replace(/\},"/g, '},\n"') + ';\n'); }
})();
