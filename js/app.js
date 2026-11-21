/* Herbier : application de connaissance et de soin des plantes. Tout fonctionne hors ligne, données perso en local. */
(() => {
'use strict';

const SAUV = window.SAUVAGES || [];
const ARO = window.AROMATIQUES || [];
const INT = window.INTERIEUR || [];
const AST = window.ASTUCES || [];
const SYM = window.SYMPTOMES || [];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const app = $('#app');
const arr = x => Array.isArray(x) ? x : (x == null || x === '' ? [] : [x]);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const MOIS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
const MOIS_L = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const NOW_M = () => new Date().getMonth() + 1;
const today = () => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
const daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);
const addDays = (iso, n) => { const d = new Date(iso); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const fmtDate = iso => iso ? new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
const isSummer = (m = NOW_M()) => m >= 4 && m <= 9;

/* Réglages (confort, par appareil) */
const settings = (() => {
  let s = { climat: 'continental' };
  try { Object.assign(s, JSON.parse(localStorage.getItem('herbier-settings') || '{}')); } catch (e) {}
  return {
    get: k => s[k],
    set: (k, v) => { s[k] = v; try { localStorage.setItem('herbier-settings', JSON.stringify(s)); } catch (e) {} },
  };
})();
const CLIMATS = { oceanique: 'Océanique (ouest, Bretagne, Normandie)', continental: 'Continental (centre, est, Paris)', mediterraneen: 'Méditerranéen (Provence, Languedoc, Corse)', montagnard: 'Montagnard (Alpes, Pyrénées, Massif central)' };

/* Interface commune */
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast._t); toast._t = setTimeout(() => { t.hidden = true; }, 2600);
}
function openModal(html, narrow) {
  const m = $('#modal');
  m.innerHTML = `<div class="modal-box${narrow ? ' narrow' : ''}" role="dialog" aria-modal="true"><button class="btn sm modal-close" data-close>Fermer</button>${html}</div>`;
  m.hidden = false;
  document.body.style.overflow = 'hidden';
  return m.firstElementChild;
}
function closeModal() { const m = $('#modal'); m.hidden = true; m.innerHTML = ''; document.body.style.overflow = ''; }
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal' || e.target.closest('[data-close]')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });

function cal(months, label, cls = '') {
  const set = new Set(arr(months).map(Number)); const now = NOW_M();
  return `${label ? `<div class="cal-label">${esc(label)}</div>` : ''}<div class="cal">${MOIS.map((m, i) => `<span class="${set.has(i + 1) ? 'on ' + cls : ''}${i + 1 === now ? ' now' : ''}" title="${MOIS_L[i]}">${m}</span>`).join('')}</div>`;
}
const list = (items, cls = 'ticks') => arr(items).length ? `<ul class="${cls}">${arr(items).map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : '';
function sources(src) {
  const s = arr(src).filter(x => x && (x.url || x.titre));
  if (!s.length) return '';
  return `<div class="section sources"><strong>Sources consultées :</strong> ${s.map(x => x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.titre || new URL(x.url).hostname)}</a>` : esc(x.titre)).join(', ')}</div>`;
}
const STATUT = { 'comestible': ['Comestible', 'b-green'], 'medicinale': ['Médicinale', 'b-blue'], 'comestible-medicinale': ['Comestible et médicinale', 'b-green'] };
const DANGER = { mortel: ['Mortelle', 'b-danger'], toxique: ['Toxique', 'b-danger'], irritant: ['Irritante', 'b-gold'], 'sans-danger': ['Sans danger', 'b-green'] };
const badge = (pair) => pair ? `<span class="badge ${pair[1]}">${esc(pair[0])}</span>` : '';
const SAFETY = `<div class="alert danger"><strong>Règle d'or de la cueillette</strong>Ne consommez jamais une plante sur la seule foi d'une application ou d'une photo. Au moindre doute, on ne cueille pas. Vérifiez chaque critère sur la plante entière, idéalement avec un guide ou une sortie botanique encadrée. En cas d'ingestion suspecte : centre antipoison ou 15.</div>`;

/* ---------- Routeur ---------- */
const routes = {
  '': home, nature, aromatiques, interieur, 'mes-plantes': mesPlantes, diagnostic, astuces, reglages,
};
function router() {
  const parts = location.hash.replace(/^#\/?/, '').split('?')[0].split('/').map(decodeURIComponent);
  const [r, id, ...rest] = parts;
  $$('#nav a').forEach(a => a.classList.toggle('on', a.dataset.r === (r || '')));
  closeModal();
  const fn = routes[r || ''] || home;
  Promise.resolve(fn(id, rest)).catch(err => { console.error(err); app.innerHTML = `<div class="alert danger"><strong>Erreur</strong>${esc(err.message)}</div>`; });
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', router);

/* ---------- Accueil ---------- */
async function home() {
  const m = NOW_M();
  const clim = settings.get('climat');
  const recolte = SAUV.filter(p => arr(p.recolte).includes(m));
  const semer = ARO.filter(p => arr(p.semisAbri).includes(m) || arr(p.semisPleineTerre).includes(m) || arr(p.plantation).includes(m));
  const plants = await DB.all('plants');
  const due = plants.map(p => ({ p, st: waterStatus(p) })).filter(x => x.st.days != null && x.st.days <= 0).sort((a, b) => a.st.days - b.st.days);
  app.innerHTML = `
  <div class="hero">
    <h1>Bonjour. Que fait-on aujourd'hui ?</h1>
    <p class="lead">Reconnaître les plantes qui vous entourent, savoir les utiliser sans risque, et prendre soin de celles de la maison.</p>
    <input type="search" class="search" id="gsearch" placeholder="Chercher une plante, un symptôme, une astuce (ex. ortie, feuilles jaunes, marc de café)" autocomplete="off">
    <div id="gresults"></div>
  </div>
  <div class="grid wide">
    <a class="card" href="#/mes-plantes"><h3>À arroser</h3><div class="stat">${due.length}</div>
      <p>${plants.length ? (due.length ? due.slice(0, 4).map(x => esc(x.p.nom)).join(', ') + (due.length > 4 ? '...' : '') : 'Rien à arroser aujourd\'hui.') : 'Ajoutez vos plantes pour suivre les arrosages.'}</p></a>
    <a class="card" href="#/nature?mois=${m}"><h3>À cueillir en ${MOIS_L[m - 1]}</h3><div class="stat">${recolte.length}</div>
      <p>${recolte.slice(0, 6).map(p => esc(p.nom)).join(', ') || 'Saison calme.'}</p></a>
    <a class="card" href="#/aromatiques"><h3>À semer ou planter en ${MOIS_L[m - 1]}</h3><div class="stat">${semer.length}</div>
      <p>${semer.slice(0, 6).map(p => esc(p.nom)).join(', ') || 'Rien ce mois-ci.'}</p><p class="small muted">Climat : ${esc(CLIMATS[clim])}</p></a>
  </div>
  <h2>Pense-bête du mois</h2>
  <div class="card">${list(monthTips(m))}</div>
  <h2>Les confusions à connaître absolument</h2>
  <div class="grid">${SAUV.filter(p => arr(p.confusions).some(c => c.danger === 'mortel')).slice(0, 8).map(p => `
    <a class="card" href="#/nature/${esc(p.id)}"><h3>${esc(p.nom)}</h3><p>à ne pas confondre avec ${arr(p.confusions).filter(c => c.danger === 'mortel').map(c => `<strong>${esc(c.nom)}</strong>`).join(', ')}</p></a>`).join('') || '<p class="muted">Données en cours de chargement.</p>'}
  </div>`;
  const inp = $('#gsearch');
  inp.addEventListener('input', () => globalSearch(inp.value));
}
function monthTips(m) {
  const t = {
    1: ['Intérieur : arrosages espacés, pas d\'engrais, plantes au plus près des fenêtres.', 'Dépoussiérer les grandes feuilles pour qu\'elles captent le peu de lumière.', 'Surveiller les araignées rouges, favorisées par l\'air sec du chauffage.'],
    2: ['Semer sous abri les aromatiques lentes (thym, sauge, piment).', 'Préparer pots et terreau pour les rempotages de printemps.', 'Premières feuilles d\'ail des ours dans le sud et l\'ouest : attention aux confusions.'],
    3: ['Début de la saison de rempotage des plantes d\'intérieur.', 'Reprise progressive des arrosages et de l\'engrais.', 'Cueillette des jeunes orties, pissenlits et ail des ours.'],
    4: ['Rempoter les plantes à l\'étroit, tailler et bouturer.', 'Engrais toutes les 2 à 4 semaines pour les plantes en croissance.', 'Muguet et ail des ours poussent ensemble : cueillir feuille par feuille, en vérifiant l\'odeur.'],
    5: ['Sortir les plantes d\'intérieur sur le balcon après les Saints de glace, à l\'ombre d\'abord.', 'Semer basilic et coriandre en pleine terre.', 'Fleurs de sureau, d\'aubépine : sirops et infusions.'],
    6: ['Arrosages plus fréquents : vérifier la terre deux fois par semaine.', 'Attention au soleil de midi derrière une vitre orientée sud.', 'Récolter les aromatiques avant la floraison pour plus d\'arômes.'],
    7: ['Vacances : regrouper les plantes, mèches capillaires, éloigner des fenêtres.', 'Récolter tilleul, millepertuis, reine-des-prés.', 'Bassiner les plantes tropicales le matin.'],
    8: ['Surveiller cochenilles et thrips, favorisés par la chaleur.', 'Récolter mûres, graines de fenouil.', 'Bouturer romarin, sauge et lavande.'],
    9: ['Rentrer les plantes sorties avant les premières nuits sous 12 °C, après une inspection anti-ravageurs.', 'Diminuer l\'engrais.', 'Cueillette de baies : prunelles, cynorhodons, sureau (cuits).'],
    10: ['Espacer les arrosages : la plupart des plantes ralentissent.', 'Rapprocher des fenêtres les plantes de lumière vive.', 'Châtaignes : ne pas confondre avec le marron d\'Inde.'],
    11: ['Arrêter l\'engrais jusqu\'en mars.', 'Éloigner les plantes des radiateurs, augmenter l\'humidité de l\'air.', 'Faire sécher et ranger ses récoltes d\'aromatiques.'],
    12: ['Repos hivernal : moins d\'eau, eau à température ambiante.', 'Tourner les pots d\'un quart de tour chaque semaine pour une pousse régulière.', 'Cyclamens et kalanchoés aiment la fraîcheur.'],
  };
  return t[m] || [];
}
function globalSearch(q) {
  const out = $('#gresults'); const n = norm(q).trim();
  if (n.length < 2) { out.innerHTML = ''; return; }
  const hit = (o, keys) => keys.some(k => norm(Array.isArray(o[k]) ? o[k].join(' ') : (typeof o[k] === 'object' ? JSON.stringify(o[k]) : o[k])).includes(n));
  const groups = [
    ['Nature', SAUV.filter(p => hit(p, ['nom', 'latin', 'autresNoms', 'usages', 'bienfaits'])), p => `#/nature/${p.id}`, p => p.latin],
    ['Plantes toxiques (sosies)', toxicList().filter(t => norm(t.nom + ' ' + t.latin).includes(n)), t => `#/nature/toxiques`, t => t.latin],
    ['Aromatiques', ARO.filter(p => hit(p, ['nom', 'latin', 'usages'])), p => `#/aromatiques/${p.id}`, p => p.latin],
    ['Intérieur', INT.filter(p => hit(p, ['nom', 'latin', 'autresNoms'])), p => `#/interieur/${p.id}`, p => p.latin],
    ['Diagnostic', SYM.filter(s => hit(s, ['signe', 'details', 'causes'])), s => `#/diagnostic/${s.id}`, s => s.details],
    ['Astuces', AST.filter(a => hit(a, ['titre', 'resume', 'detail'])), a => `#/astuces/${a.id}`, a => a.resume],
  ].filter(g => g[1].length);
  out.innerHTML = groups.length ? groups.map(([t, items, href, sub]) => `<h3 style="margin-top:14px">${t}</h3><div class="grid">${items.slice(0, 8).map(i => `<a class="card" href="${href(i)}"><h3>${esc(i.nom || i.signe || i.titre)}</h3><div class="latin">${esc(sub(i) || '')}</div></a>`).join('')}</div>`).join('') : '<p class="muted">Aucun résultat.</p>';
}

/* ---------- Nature (plantes sauvages) ---------- */
const HABITATS = { foret: 'Forêt', haie: 'Haie', prairie: 'Prairie', 'bord-eau': 'Bord de l\'eau', friche: 'Friche', jardin: 'Jardin', montagne: 'Montagne', littoral: 'Littoral', 'bord-chemin': 'Bord de chemin' };
const COULEURS = ['blanc', 'jaune', 'rose', 'rouge', 'violet', 'bleu', 'vert', 'orange'];
const fN = { q: '', mois: '', habitat: '', couleur: '', statut: '' };
function toxicList() {
  const map = new Map();
  SAUV.forEach(p => arr(p.confusions).forEach(c => {
    if (!c || c.danger === 'sans-danger') return;
    const k = norm(c.latin || c.nom);
    if (!map.has(k)) map.set(k, { nom: c.nom, latin: c.latin, danger: c.danger, avec: [] });
    const t = map.get(k);
    if (c.danger === 'mortel') t.danger = 'mortel';
    t.avec.push({ p, c });
  }));
  return [...map.values()].sort((a, b) => (a.danger === 'mortel' ? 0 : 1) - (b.danger === 'mortel' ? 0 : 1) || a.nom.localeCompare(b.nom));
}
function nature(id) {
  if (id && id.startsWith('toxiques')) return natureToxiques();
  if (id) return natureDetail(id);
  const qs = new URLSearchParams(location.hash.split('?')[1] || '');
  if (qs.get('mois')) fN.mois = qs.get('mois');
  app.innerHTML = `
  <h1>Plantes sauvages</h1>
  <p class="lead">Comestibles et médicinales de France : comment les reconnaître, quand les cueillir, comment les utiliser, et surtout avec quoi ne pas les confondre.</p>
  ${SAFETY}
  <div class="row"><a class="btn" href="#/nature/toxiques">Voir les plantes toxiques sosies</a></div>
  <div class="filters">
    <label class="field" style="flex:1;min-width:200px">Nom<input type="search" id="nq" value="${esc(fN.q)}" placeholder="ortie, sureau..."></label>
    <label class="field">Vue en<select id="nmois"><option value="">toute l'année</option>${MOIS_L.map((m, i) => `<option value="${i + 1}" ${String(i + 1) === String(fN.mois) ? 'selected' : ''}>${m}</option>`).join('')}</select></label>
    <label class="field">Milieu<select id="nhab"><option value="">tous</option>${Object.entries(HABITATS).map(([k, v]) => `<option value="${k}" ${fN.habitat === k ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
    <label class="field">Couleur de fleur<select id="ncoul"><option value="">toutes</option>${COULEURS.map(c => `<option ${fN.couleur === c ? 'selected' : ''}>${c}</option>`).join('')}</select></label>
    <label class="field">Usage<select id="nstat"><option value="">tous</option><option value="comestible" ${fN.statut === 'comestible' ? 'selected' : ''}>comestible</option><option value="medicinale" ${fN.statut === 'medicinale' ? 'selected' : ''}>médicinale</option></select></label>
  </div>
  <p class="small muted" id="ncount"></p>
  <div class="grid" id="nlist"></div>`;
  const upd = () => {
    fN.q = $('#nq').value; fN.mois = $('#nmois').value; fN.habitat = $('#nhab').value; fN.couleur = $('#ncoul').value; fN.statut = $('#nstat').value;
    const n = norm(fN.q);
    const res = SAUV.filter(p =>
      (!n || norm([p.nom, p.latin, ...arr(p.autresNoms)].join(' ')).includes(n)) &&
      (!fN.mois || arr(p.recolte).concat(arr(p.floraison)).map(Number).includes(Number(fN.mois))) &&
      (!fN.habitat || arr(p.habitats).includes(fN.habitat)) &&
      (!fN.couleur || arr(p.couleurFleur).includes(fN.couleur)) &&
      (!fN.statut || String(p.statut || '').includes(fN.statut)));
    $('#ncount').textContent = `${res.length} plante${res.length > 1 ? 's' : ''}`;
    $('#nlist').innerHTML = res.map(p => `
      <a class="card" href="#/nature/${esc(p.id)}"><h3>${esc(p.nom)}</h3><div class="latin">${esc(p.latin)}</div>
        <p>${esc(p.resume || '')}</p>
        <div class="badges">${badge(STATUT[p.statut])}${arr(p.confusions).some(c => c.danger === 'mortel') ? '<span class="badge b-danger">Sosie mortel</span>' : ''}</div>
      </a>`).join('') || '<p class="empty">Aucune plante ne correspond.</p>';
  };
  $$('#nq,#nmois,#nhab,#ncoul,#nstat').forEach(el => el.addEventListener('input', upd));
  upd();
}
function natureDetail(id) {
  const p = SAUV.find(x => x.id === id);
  if (!p) { app.innerHTML = '<p>Plante introuvable. <a href="#/nature">Retour</a></p>'; return; }
  const conf = arr(p.confusions);
  app.innerHTML = `
  <a class="back" href="#/nature">&larr; Plantes sauvages</a>
  <div class="fiche-head"><h1>${esc(p.nom)}</h1><span class="latin">${esc(p.latin)}${p.famille ? ', ' + esc(p.famille) : ''}</span></div>
  <div class="badges">${badge(STATUT[p.statut])}${arr(p.autresNoms).map(n => `<span class="badge">${esc(n)}</span>`).join('')}</div>
  <p class="lead" style="margin-top:12px">${esc(p.resume || '')}</p>
  <div class="two">
    <div>
      <h2>La reconnaître</h2>
      ${p.typeFeuille ? `<p><strong>Feuilles :</strong> ${esc(p.typeFeuille)}</p>` : ''}
      ${list(p.reconnaissance)}
      ${conf.length ? `<h2>Ne pas confondre avec</h2>${conf.map(c => `
        <div class="confusion">
          <div class="ch"><div><strong>${esc(p.nom)}</strong><div class="small">${esc(STATUT[p.statut] ? STATUT[p.statut][0] : '')}</div></div>
          <div class="${c.danger === 'sans-danger' ? 'safe' : ''}"><strong>${esc(c.nom)}</strong> <span class="latin">${esc(c.latin || '')}</span><div>${badge(DANGER[c.danger])}</div></div></div>
          <div class="cb"><strong class="small">Comment les distinguer</strong>${list(c.differences)}</div>
        </div>`).join('')}` : ''}
      <h2>Utilisation</h2>
      ${arr(p.partiesUtilisees).length ? `<p><strong>Parties utilisées :</strong> ${esc(arr(p.partiesUtilisees).join(', '))}</p>` : ''}
      ${arr(p.bienfaits).length ? `<h3>Bienfaits traditionnels</h3>${list(p.bienfaits)}` : ''}
      ${arr(p.usages).length ? `<h3>Usages</h3>${list(p.usages)}` : ''}
      ${arr(p.recettes).map(recette).join('')}
    </div>
    <aside>
      <div class="card">
        <h3>Où et quand</h3>
        <dl class="kv"><dt>Habitat</dt><dd>${esc(p.habitat || '')}</dd><dt>Régions</dt><dd>${esc(p.regions || '')}</dd></dl>
        ${cal(p.recolte, 'Récolte')}
        ${cal(p.floraison, 'Floraison', 'f')}
        ${arr(p.couleurFleur).length ? `<p class="small" style="margin-top:8px">Fleurs : ${esc(arr(p.couleurFleur).join(', '))}</p>` : ''}
      </div>
      ${arr(p.precautions).length ? `<div class="alert warn"><strong>Précautions</strong>${list(p.precautions)}</div>` : ''}
      ${SAFETY}
    </aside>
  </div>
  ${sources(p.sources)}`;
}
function recette(r) {
  if (!r) return '';
  return `<div class="recette"><h3>${esc(r.titre)} <span class="badge b-gold">${esc(r.type || '')}</span></h3>
    ${arr(r.ingredients).length ? `<p class="small"><strong>Ingrédients :</strong> ${esc(arr(r.ingredients).join(', '))}</p>` : ''}
    ${arr(r.etapes).length ? `<ol>${arr(r.etapes).map(e => `<li>${esc(e)}</li>`).join('')}</ol>` : ''}</div>`;
}
function natureToxiques() {
  const t = toxicList();
  app.innerHTML = `<a class="back" href="#/nature">&larr; Plantes sauvages</a>
  <h1>Les sosies toxiques</h1>
  <p class="lead">Les plantes dangereuses qui ressemblent à des plantes comestibles. Apprenez à les reconnaître en premier : c'est la base de toute cueillette.</p>
  ${SAFETY}
  <div class="grid wide">${t.map(x => `<div class="card"><h3>${esc(x.nom)}</h3><div class="latin">${esc(x.latin || '')}</div><div class="badges">${badge(DANGER[x.danger])}</div>
    <p>Ressemble à : ${x.avec.map(a => `<a href="#/nature/${esc(a.p.id)}">${esc(a.p.nom)}</a>`).join(', ')}</p>
    ${list(x.avec[0].c.differences.slice ? x.avec[0].c.differences.slice(0, 3) : [])}</div>`).join('')}</div>`;
}

/* ---------- Aromatiques ---------- */
const fA = { q: '', vue: 'fiches', mois: '', pot: false, int: false, sauv: false };
function aromatiques(id) {
  if (id) return aromatiqueDetail(id);
  const clim = settings.get('climat');
  app.innerHTML = `
  <h1>Aromatiques</h1>
  <p class="lead">À planter chez soi, sur le balcon ou au jardin, et à reconnaître dans la nature selon votre région.</p>
  <div class="filters">
    <label class="field" style="flex:1;min-width:180px">Nom<input type="search" id="aq" value="${esc(fA.q)}" placeholder="thym, basilic..."></label>
    <label class="field">Mon climat<select id="aclim">${Object.entries(CLIMATS).map(([k, v]) => `<option value="${k}" ${k === clim ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
    <label class="field">À faire en<select id="amois"><option value="">tous les mois</option>${MOIS_L.map((m, i) => `<option value="${i + 1}" ${String(i + 1) === String(fA.mois) ? 'selected' : ''}>${m}</option>`).join('')}</select></label>
    <div class="field">Filtres<div class="chips">
      <button class="chip ${fA.pot ? 'on' : ''}" data-k="pot">En pot</button>
      <button class="chip ${fA.int ? 'on' : ''}" data-k="int">En intérieur</button>
      <button class="chip ${fA.sauv ? 'on' : ''}" data-k="sauv">Pousse à l'état sauvage chez moi</button></div></div>
    <div class="field">Affichage<div class="chips"><button class="chip ${fA.vue === 'fiches' ? 'on' : ''}" data-v="fiches">Fiches</button><button class="chip ${fA.vue === 'cal' ? 'on' : ''}" data-v="cal">Calendrier</button></div></div>
  </div>
  <div id="alist"></div>`;
  const upd = () => {
    fA.q = $('#aq').value; fA.mois = $('#amois').value; const c = $('#aclim').value; settings.set('climat', c);
    const n = norm(fA.q), m = Number(fA.mois);
    const res = ARO.filter(p =>
      (!n || norm(p.nom + ' ' + p.latin).includes(n)) &&
      (!m || [p.semisAbri, p.semisPleineTerre, p.plantation, p.recolte].some(a => arr(a).map(Number).includes(m))) &&
      (!fA.pot || p.enPot) && (!fA.int || p.enInterieur) &&
      (!fA.sauv || (p.sauvage && p.sauvage.present && arr(p.sauvage.climats).includes(c))));
    if (fA.vue === 'cal') {
      const now = NOW_M();
      $('#alist').innerHTML = `<div class="legend"><span><i class="i-abri"></i>Semis sous abri</span><span><i class="i-pt"></i>Semis en pleine terre</span><span><i class="i-pl"></i>Plantation</span><span><i class="i-re"></i>Récolte</span></div>
      <p class="small muted">Calendrier de base (moitié nord de la France). Les ajustements pour votre climat sont dans chaque fiche.</p>
      <div class="ctable-wrap"><table class="ctable"><thead><tr><th>Plante</th>${MOIS.map((x, i) => `<th class="${i + 1 === now ? 'now' : ''}">${x}</th>`).join('')}</tr></thead><tbody>
      ${res.map(p => `<tr><td><a href="#/aromatiques/${esc(p.id)}">${esc(p.nom)}</a></td>${MOIS.map((x, i) => { const k = i + 1; const h = (a, cl) => arr(a).map(Number).includes(k) ? `<i class="${cl}"></i>` : '<i></i>'; return `<td class="m">${h(p.semisAbri, 'i-abri')}${h(p.semisPleineTerre, 'i-pt')}${h(p.plantation, 'i-pl')}${h(p.recolte, 'i-re')}</td>`; }).join('')}</tr>`).join('')}
      </tbody></table></div>`;
    } else {
      $('#alist').innerHTML = `<p class="small muted">${res.length} plante${res.length > 1 ? 's' : ''}</p><div class="grid">${res.map(p => {
        const tags = [];
        if (m) { if (arr(p.semisAbri).map(Number).includes(m)) tags.push(['Semis abri', 'b-blue']); if (arr(p.semisPleineTerre).map(Number).includes(m)) tags.push(['Semis pleine terre', 'b-green']); if (arr(p.plantation).map(Number).includes(m)) tags.push(['Plantation', 'b-gold']); if (arr(p.recolte).map(Number).includes(m)) tags.push(['Récolte', 'b-terra']); }
        return `<a class="card" href="#/aromatiques/${esc(p.id)}"><h3>${esc(p.nom)}</h3><div class="latin">${esc(p.latin)}</div><p>${esc(p.resume || '')}</p>
        <div class="badges">${tags.map(badge).join('')}<span class="badge">${esc(p.cycle || '')}</span><span class="badge">${esc(p.exposition || '')}</span>${p.enInterieur ? '<span class="badge b-blue">Intérieur possible</span>' : ''}</div></a>`;
      }).join('') || '<p class="empty">Aucune plante ne correspond.</p>'}</div>`;
    }
  };
  $$('#aq,#amois,#aclim').forEach(el => el.addEventListener('input', upd));
  $$('.chip[data-k]').forEach(b => b.addEventListener('click', () => { fA[b.dataset.k] = !fA[b.dataset.k]; b.classList.toggle('on'); upd(); }));
  $$('.chip[data-v]').forEach(b => b.addEventListener('click', () => { fA.vue = b.dataset.v; $$('.chip[data-v]').forEach(x => x.classList.toggle('on', x === b)); upd(); }));
  upd();
}
function aromatiqueDetail(id) {
  const p = ARO.find(x => x.id === id);
  if (!p) { app.innerHTML = '<p>Plante introuvable. <a href="#/aromatiques">Retour</a></p>'; return; }
  const clim = settings.get('climat');
  const dec = p.decalageClimat || {};
  app.innerHTML = `
  <a class="back" href="#/aromatiques">&larr; Aromatiques</a>
  <div class="fiche-head"><h1>${esc(p.nom)}</h1><span class="latin">${esc(p.latin)}${p.famille ? ', ' + esc(p.famille) : ''}</span></div>
  <div class="badges"><span class="badge">${esc(p.cycle || '')}</span><span class="badge">${esc(p.exposition || '')}</span>${p.enPot ? '<span class="badge b-green">En pot</span>' : ''}${p.enInterieur ? '<span class="badge b-blue">Intérieur possible</span>' : ''}</div>
  <p class="lead" style="margin-top:12px">${esc(p.resume || '')}</p>
  <div class="two">
    <div>
      <div class="card">
        <h3>Calendrier</h3>
        ${arr(p.semisAbri).length ? cal(p.semisAbri, 'Semis sous abri') : ''}
        ${arr(p.semisPleineTerre).length ? cal(p.semisPleineTerre, 'Semis en pleine terre') : ''}
        ${arr(p.plantation).length ? cal(p.plantation, 'Plantation') : ''}
        ${cal(p.recolte, 'Récolte', 'f')}
        ${dec[clim] ? `<div class="alert info"><strong>Pour votre climat (${esc(CLIMATS[clim])})</strong>${esc(dec[clim])}</div>` : ''}
        <details><summary class="small">Tous les climats</summary><dl class="kv small">${Object.entries(CLIMATS).map(([k, v]) => `<dt>${esc(v.split(' (')[0])}</dt><dd>${esc(dec[k] || 'Calendrier de base')}</dd>`).join('')}</dl></details>
      </div>
      <h2>Culture</h2>
      <dl class="kv"><dt>Exposition</dt><dd>${esc(p.exposition || '')}</dd><dt>Sol</dt><dd>${esc(p.sol || '')}</dd><dt>Arrosage</dt><dd>${esc(p.arrosage || '')}</dd><dt>Rusticité</dt><dd>${esc(p.rusticite || '')}</dd><dt>Multiplication</dt><dd>${esc(p.multiplication || '')}</dd></dl>
      ${arr(p.entretien).length ? `<h3 style="margin-top:14px">Entretien</h3>${list(p.entretien)}` : ''}
      ${p.associations ? `<h3>Au potager</h3><p><strong>Bons voisins :</strong> ${esc(arr(p.associations.bonnes).join(', ') || 'aucun particulier')}<br><strong>À éloigner :</strong> ${esc(arr(p.associations.mauvaises).join(', ') || 'aucun particulier')}</p>` : ''}
      <h2>Utilisation</h2>
      ${list(p.usages)}
      ${arr(p.bienfaits).length ? `<h3>Bienfaits traditionnels</h3>${list(p.bienfaits)}` : ''}
      ${p.infusion ? `<div class="recette"><h3>Infusion</h3><p>${esc(p.infusion)}</p></div>` : ''}
      ${p.conservation ? `<p><strong>Conservation :</strong> ${esc(p.conservation)}</p>` : ''}
    </div>
    <aside>
      ${p.sauvage ? `<div class="card"><h3>À l'état sauvage</h3><p>${p.sauvage.present ? esc(p.sauvage.ouTrouver || '') : 'Ne pousse pas spontanément en France (ou très rarement).'}</p>${arr(p.sauvage.climats).length ? `<div class="badges">${arr(p.sauvage.climats).map(c => `<span class="badge ${c === clim ? 'b-green' : ''}">${esc((CLIMATS[c] || c).split(' (')[0])}</span>`).join('')}</div>` : ''}</div>` : ''}
      ${p.astuce ? `<div class="alert ok"><strong>Astuce</strong>${esc(p.astuce)}</div>` : ''}
      ${arr(p.precautions).length ? `<div class="alert warn"><strong>Précautions</strong>${list(p.precautions)}</div>` : ''}
    </aside>
  </div>
  ${sources(p.sources)}`;
}

/* ---------- Plantes d'intérieur ---------- */
const LUM = ['faible', 'moyenne', 'vive-indirecte', 'soleil-direct'];
const LUM_L = { faible: 'Faible', moyenne: 'Moyenne', 'vive-indirecte': 'Vive indirecte', 'soleil-direct': 'Soleil direct' };
const EXPO = { sud: 'Sud', ouest: 'Ouest', est: 'Est', nord: 'Nord', aucune: 'Pas de fenêtre' };
const DIST = { pres: 'Moins de 50 cm', moyen: 'Entre 50 cm et 2 m', loin: 'Plus de 2 m' };
function lightAt(expo, dist) {
  const t = { sud: [3, 2, 1], ouest: [3, 2, 1], est: [2, 1, 0], nord: [1, 0, 0], aucune: [0, 0, 0] };
  return (t[expo] || [1, 1, 0])[{ pres: 0, moyen: 1, loin: 2 }[dist] ?? 1];
}
function lightAdvice(sp, expo, dist) {
  if (!sp || !sp.lumiere) return null;
  const need = LUM.indexOf(sp.lumiere.niveau); const here = lightAt(expo, dist);
  if (need < 0) return null;
  const d = here - need;
  if (d === 0) return ['ok', 'Emplacement adapté', 'La lumière correspond à ses besoins.'];
  if (d < 0) {
    if (need === 0) return ['ok', 'Emplacement adapté', 'Elle tolère bien la pénombre.'];
    return d === -1 ? ['warn', 'Un peu sombre', 'Elle survivra mais poussera lentement, avec des tiges plus longues et moins de feuilles. Rapprochez-la de la fenêtre si possible, et arrosez moins souvent.']
      : ['danger', 'Trop sombre', 'Manque de lumière : feuilles qui jaunissent ou tombent, tiges étirées, terre qui reste humide (risque de pourriture). Changez-la de place ou ajoutez une lampe horticole.'];
  }
  if (here === 3 && need <= 1) return ['danger', 'Trop de soleil', 'Le soleil direct derrière une vitre risque de brûler le feuillage (taches beiges ou brunes). Reculez-la ou mettez un voilage.'];
  if (here === 3) return ['warn', 'Soleil direct', 'Le soleil doux du matin ou de fin de journée lui convient, mais protégez-la du soleil de midi en été (voilage ou 1 m de recul).'];
  return ['ok', 'Très lumineux', 'Plus de lumière qu\'il ne lui en faut au minimum : c\'est souvent bénéfique, surveillez juste le dessèchement de la terre.'];
}
function placesFor(sp) {
  if (!sp || !sp.lumiere) return [];
  const need = LUM.indexOf(sp.lumiere.niveau); const out = [];
  Object.keys(EXPO).forEach(e => Object.keys(DIST).forEach(d => {
    if (e === 'aucune' && d !== 'moyen') return;
    const h = lightAt(e, d);
    if (h === need || (need === 0 && h === 1)) out.push(e === 'aucune' ? 'Pièce sans fenêtre (avec lampe horticole de préférence)' : `Fenêtre ${EXPO[e].toLowerCase()}, ${DIST[d].toLowerCase()}`);
  }));
  return out;
}
const fI = { q: '', lum: '', dif: '' };
function interieur(id) {
  if (id) return interieurDetail(id);
  app.innerHTML = `
  <h1>Plantes d'intérieur</h1>
  <p class="lead">Lumière, arrosage, terre, rempotage, nettoyage, et ce qui est normal ou non pour chacune.</p>
  <div class="filters">
    <label class="field" style="flex:1;min-width:200px">Nom<input type="search" id="iq" value="${esc(fI.q)}" placeholder="monstera, pothos..."></label>
    <label class="field">Lumière disponible<select id="ilum"><option value="">toutes</option>${LUM.map(l => `<option value="${l}" ${fI.lum === l ? 'selected' : ''}>${LUM_L[l]}</option>`).join('')}</select></label>
    <label class="field">Difficulté<select id="idif"><option value="">toutes</option>${['facile', 'moyenne', 'difficile'].map(d => `<option ${fI.dif === d ? 'selected' : ''}>${d}</option>`).join('')}</select></label>
  </div>
  <div class="grid" id="ilist"></div>`;
  const upd = () => {
    fI.q = $('#iq').value; fI.lum = $('#ilum').value; fI.dif = $('#idif').value;
    const n = norm(fI.q);
    const res = INT.filter(p => (!n || norm([p.nom, p.latin, ...arr(p.autresNoms)].join(' ')).includes(n)) &&
      (!fI.lum || (p.lumiere && p.lumiere.niveau === fI.lum)) && (!fI.dif || p.difficulte === fI.dif));
    $('#ilist').innerHTML = res.map(p => `<a class="card" href="#/interieur/${esc(p.id)}"><h3>${esc(p.nom)}</h3><div class="latin">${esc(p.latin)}</div><p>${esc(p.resume || '')}</p>
      <div class="badges"><span class="badge b-gold">${esc(LUM_L[p.lumiere && p.lumiere.niveau] || '')}</span><span class="badge">${esc(p.difficulte || '')}</span>${p.arrosage ? `<span class="badge b-blue">eau ~${esc(p.arrosage.joursEte)} j / ${esc(p.arrosage.joursHiver)} j</span>` : ''}</div></a>`).join('') || '<p class="empty">Aucune plante ne correspond.</p>';
  };
  $$('#iq,#ilum,#idif').forEach(el => el.addEventListener('input', upd));
  upd();
}
function speciesCare(p, compact) {
  const a = p.arrosage || {}, t = p.terre || {}, l = p.lumiere || {}, r = p.rempotage || {};
  return `
  <div class="grid wide">
    <div class="card"><h3>Lumière</h3>
      <div class="light-meter">${LUM.map(x => `<span class="${x === l.niveau ? 'need' : ''}">${LUM_L[x]}</span>`).join('')}</div>
      <p>${esc(l.emplacement || '')}</p>${l.toleree ? `<p class="small muted">Minimum toléré : ${esc(l.toleree)}</p>` : ''}
      ${compact ? '' : `<details><summary class="small">Où la placer chez moi</summary>${list(placesFor(p))}</details>`}</div>
    <div class="card"><h3>Arrosage</h3>
      <p><strong>Environ tous les ${esc(a.joursEte)} jours</strong> au printemps et en été, <strong>tous les ${esc(a.joursHiver)} jours</strong> en automne et hiver (indicatif).</p>
      <p><strong>Quand :</strong> ${esc(a.quand || '')}</p><p><strong>Comment :</strong> ${esc(a.methode || '')}</p>${a.eau ? `<p><strong>Eau :</strong> ${esc(a.eau)}</p>` : ''}</div>
    <div class="card"><h3>Terre</h3><p><strong>Normal :</strong> ${esc(t.normal || '')}</p><p><strong>Vérifier :</strong> ${esc(t.test || '')}</p>
      ${arr(t.anormal).length ? `<p><strong>Pas normal :</strong></p>${list(t.anormal)}` : ''}</div>
    <div class="card"><h3>Ambiance</h3><dl class="kv">
      <dt>Humidité de l'air</dt><dd>${esc((p.humiditeAir || {}).ideale || '')}. ${esc((p.humiditeAir || {}).conseil || '')}</dd>
      <dt>Température</dt><dd>${esc((p.temperature || {}).ideale || '')}${(p.temperature || {}).min != null ? `, minimum ${esc(p.temperature.min)} °C` : ''}</dd>
      <dt>Substrat</dt><dd>${esc(p.substrat || '')}</dd><dt>Engrais</dt><dd>${esc(p.engrais || '')}</dd></dl></div>
    <div class="card"><h3>Rempotage</h3><p>${esc(r.frequence || '')}${r.saison ? `, idéalement ${esc(r.saison)}` : ''}.</p>${arr(r.signes).length ? `<p class="small"><strong>Signes qu'il est temps :</strong></p>${list(r.signes)}` : ''}</div>
    <div class="card"><h3>Nettoyage et taille</h3><p>${esc(p.nettoyage || '')}</p>${p.taille ? `<p><strong>Taille :</strong> ${esc(p.taille)}</p>` : ''}${p.multiplication ? `<p><strong>Bouturage :</strong> ${esc(p.multiplication)}</p>` : ''}</div>
  </div>`;
}
function speciesSymptoms(p) {
  const s = arr(p.symptomes);
  if (!s.length) return '';
  return `<h2>Symptômes fréquents chez cette plante</h2>${s.map(x => `<details class="card" style="margin:8px 0"><summary><strong>${esc(x.signe)}</strong></summary>
    <p style="margin-top:8px"><strong>Causes possibles :</strong> ${esc(arr(x.causes).join(', '))}</p><p><strong>Que faire :</strong> ${esc(x.remede || '')}</p></details>`).join('')}`;
}
function interieurDetail(id) {
  const p = INT.find(x => x.id === id);
  if (!p) { app.innerHTML = '<p>Plante introuvable. <a href="#/interieur">Retour</a></p>'; return; }
  app.innerHTML = `
  <a class="back" href="#/interieur">&larr; Plantes d'intérieur</a>
  <div class="fiche-head"><h1>${esc(p.nom)}</h1><span class="latin">${esc(p.latin)}${p.famille ? ', ' + esc(p.famille) : ''}</span><span class="spacer"></span><button class="btn primary" id="addmine">Ajouter à mes plantes</button></div>
  <div class="badges"><span class="badge">${esc(p.difficulte || '')}</span>${arr(p.autresNoms).map(n => `<span class="badge">${esc(n)}</span>`).join('')}</div>
  <p class="lead" style="margin-top:12px">${esc(p.resume || '')}</p>
  ${p.toxicite ? `<div class="alert warn"><strong>Toxicité</strong>${esc(p.toxicite)}</div>` : ''}
  ${speciesCare(p)}
  ${speciesSymptoms(p)}
  ${arr(p.astuces).length ? `<h2>Astuces</h2>${list(p.astuces)}` : ''}
  ${sources(p.sources)}`;
  $('#addmine').addEventListener('click', () => plantForm(null, p.id));
}

/* ---------- Mes plantes ---------- */
function species(pl) { return INT.find(s => s.id === pl.especeId) || null; }
function freqs(pl) {
  const sp = species(pl); const a = (sp && sp.arrosage) || {};
  return { ete: Number(pl.freqEte) || Number(a.joursEte) || 7, hiver: Number(pl.freqHiver) || Number(a.joursHiver) || 14 };
}
function lastEvent(pl, type) { return arr(pl.journal).filter(e => e.type === type).sort((a, b) => b.date.localeCompare(a.date))[0]; }
function waterStatus(pl) {
  const last = lastEvent(pl, 'arrosage'); const f = freqs(pl); const freq = isSummer() ? f.ete : f.hiver;
  if (!last) return { days: null, freq, label: 'Dernier arrosage non renseigné', cls: '' };
  const next = addDays(last.date, freq); const days = daysBetween(today(), next);
  const label = days < 0 ? `En retard de ${-days} j (contrôlez la terre avant)` : days === 0 ? 'À contrôler et arroser aujourd\'hui' : `Prochain contrôle dans ${days} j (${fmtDate(next)})`;
  return { days, freq, next, last: last.date, label, cls: days < 0 ? 'late' : days === 0 ? 'today' : 'ok' };
}
async function thumbFor(plantId) {
  const ph = (await DB.byPlant(plantId)).sort((a, b) => b.date.localeCompare(a.date))[0];
  return ph ? URL.createObjectURL(ph.blob) : null;
}
async function mesPlantes(id) {
  if (id) return plantDetail(id);
  const plants = (await DB.all('plants')).map(p => ({ p, st: waterStatus(p) }))
    .sort((a, b) => (a.st.days ?? -99) - (b.st.days ?? -99));
  const rooms = [...new Set(plants.map(x => x.p.piece || 'Sans pièce'))];
  app.innerHTML = `
  <div class="row"><h1>Mes plantes</h1><span class="spacer"></span><button class="btn primary" id="addp">Ajouter une plante</button></div>
  <p class="lead">Le rythme d'arrosage est indicatif : on contrôle toujours la terre avant d'arroser. Vos données et photos restent sur cet appareil (pensez à la sauvegarde dans Réglages).</p>
  ${plants.length ? rooms.map(r => `<h2>${esc(r)}</h2><div class="grid wide">${plants.filter(x => (x.p.piece || 'Sans pièce') === r).map(({ p, st }) => `
    <div class="card plant-card">
      <a href="#/mes-plantes/${esc(p.id)}"><div class="thumb" data-thumb="${esc(p.id)}">pas de photo</div></a>
      <div><a href="#/mes-plantes/${esc(p.id)}" style="text-decoration:none;color:inherit"><h3>${esc(p.nom)}</h3></a>
        <div class="latin">${esc(species(p) ? species(p).nom : (p.especeLibre || ''))}</div>
        <div class="small due ${st.cls}" style="margin:4px 0 8px">${esc(st.label)}</div>
        <div class="row"><button class="btn sm" data-water="${esc(p.id)}">Arrosée aujourd'hui</button><button class="btn sm" data-soil="${esc(p.id)}">Contrôler la terre</button></div>
      </div>
    </div>`).join('')}</div>`).join('') : `<div class="card empty"><p>Aucune plante pour l'instant.</p><p>Ajoutez-en une depuis ce bouton ou depuis une fiche de la rubrique Intérieur.</p></div>`}`;
  $('#addp').addEventListener('click', () => plantForm());
  $$('[data-water]').forEach(b => b.addEventListener('click', async () => { await addEvent(b.dataset.water, { type: 'arrosage', date: today() }); toast('Arrosage noté'); mesPlantes(); }));
  $$('[data-soil]').forEach(b => b.addEventListener('click', () => soilCheck(b.dataset.soil, () => mesPlantes())));
  for (const el of $$('[data-thumb]')) { const u = await thumbFor(el.dataset.thumb); if (u) el.outerHTML = `<img class="thumb" src="${u}" alt="">`; }
}
async function addEvent(plantId, ev) {
  const p = await DB.get('plants', plantId); if (!p) return;
  p.journal = arr(p.journal); p.journal.push({ id: uid(), ...ev });
  await DB.put('plants', p); return p;
}
async function plantForm(plantId, especeId) {
  const p = plantId ? await DB.get('plants', plantId) : { especeId: especeId || '', expo: 'est', dist: 'moyen' };
  const opts = INT.slice().sort((a, b) => a.nom.localeCompare(b.nom)).map(s => `<option value="${esc(s.id)}" ${s.id === p.especeId ? 'selected' : ''}>${esc(s.nom)}</option>`).join('');
  const box = openModal(`<h2 style="margin-top:0">${plantId ? 'Modifier' : 'Ajouter'} une plante</h2>
  <form id="pf" class="filters" style="flex-direction:column;align-items:stretch">
    <label class="field">Espèce<select name="especeId"><option value="">Autre (pas dans la liste)</option>${opts}</select></label>
    <label class="field" id="libre">Nom de l'espèce si autre<input type="text" name="especeLibre" value="${esc(p.especeLibre || '')}"></label>
    <label class="field">Petit nom<input type="text" name="nom" required value="${esc(p.nom || '')}" placeholder="ex. Le grand monstera du salon"></label>
    <label class="field">Pièce<input type="text" name="piece" list="rooms" value="${esc(p.piece || '')}" placeholder="Salon, chambre, cuisine..."><datalist id="rooms"><option>Salon</option><option>Chambre</option><option>Cuisine</option><option>Salle de bain</option><option>Bureau</option><option>Entrée</option><option>Balcon</option></datalist></label>
    <div class="row"><label class="field" style="flex:1">Fenêtre la plus proche<select name="expo">${Object.entries(EXPO).map(([k, v]) => `<option value="${k}" ${p.expo === k ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
    <label class="field" style="flex:1">Distance à la fenêtre<select name="dist">${Object.entries(DIST).map(([k, v]) => `<option value="${k}" ${p.dist === k ? 'selected' : ''}>${v}</option>`).join('')}</select></label></div>
    <div id="lightres"></div>
    ${plantId ? '' : `<label class="field">Dernier arrosage (si connu)<input type="date" name="dernierArrosage" max="${today()}"></label>`}
    <label class="field">Dernier rempotage (si connu)<input type="date" name="rempotage" value="${esc(p.rempotage || '')}" max="${today()}"></label>
    <div class="row"><label class="field" style="flex:1">Fréquence perso été (jours)<input type="number" min="1" max="90" name="freqEte" value="${esc(p.freqEte || '')}" placeholder="auto"></label>
    <label class="field" style="flex:1">Fréquence perso hiver (jours)<input type="number" min="1" max="120" name="freqHiver" value="${esc(p.freqHiver || '')}" placeholder="auto"></label></div>
    <label class="field">Notes<textarea name="notes">${esc(p.notes || '')}</textarea></label>
    <div class="row"><button class="btn primary" type="submit">Enregistrer</button></div>
  </form>`, true);
  const f = $('#pf', box);
  const refresh = () => {
    $('#libre', box).style.display = f.especeId.value ? 'none' : '';
    const sp = INT.find(s => s.id === f.especeId.value);
    const adv = lightAdvice(sp, f.expo.value, f.dist.value);
    $('#lightres', box).innerHTML = adv ? `<div class="alert ${adv[0]}"><strong>${esc(adv[1])}</strong>${esc(adv[2])}</div>` : '';
    if (!f.nom.value && sp && !plantId) f.nom.placeholder = sp.nom;
  };
  f.addEventListener('input', refresh); refresh();
  f.addEventListener('submit', async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f).entries());
    const sp = INT.find(s => s.id === d.especeId);
    const rec = Object.assign(p, { id: p.id || uid(), nom: d.nom || (sp ? sp.nom : d.especeLibre) || 'Ma plante', especeId: d.especeId, especeLibre: d.especeLibre, piece: d.piece, expo: d.expo, dist: d.dist, rempotage: d.rempotage, freqEte: d.freqEte, freqHiver: d.freqHiver, notes: d.notes, cree: p.cree || today() });
    rec.journal = arr(rec.journal);
    if (d.dernierArrosage) rec.journal.push({ id: uid(), type: 'arrosage', date: d.dernierArrosage });
    await DB.put('plants', rec);
    closeModal(); toast('Plante enregistrée');
    location.hash = '#/mes-plantes/' + rec.id; if (plantId) router();
  });
}
const SOIL = [
  { k: 'sec', l: 'Sec', d: 'Sec sur toute la hauteur, pot léger', c: '#c9a46a' },
  { k: 'frais', l: 'Frais', d: 'Sec en surface, frais au fond', c: '#a88a5c' },
  { k: 'legerement-humide', l: 'Légèrement humide', d: 'Humide au toucher, ne colle pas', c: '#7d6a4a' },
  { k: 'humide', l: 'Humide', d: 'Colle au doigt', c: '#5a4a33' },
  { k: 'detrempe', l: 'Détrempé', d: 'Eau qui suinte, soucoupe pleine', c: '#3a2f22' },
];
const SOIL_FLAGS = { vase: 'Odeur de vase ou de pourri', moisi: 'Moisissure blanche en surface', croute: 'Croûte blanche (calcaire, sels)', mouches: 'Petites mouches noires', racines: 'Racines qui sortent du pot', tasse: 'Terre tassée, l\'eau ne pénètre pas' };
function soilVerdict(pl, etat, flags) {
  const sp = species(pl); const ideal = Math.max(0, SOIL.findIndex(s => s.k === ((sp && sp.terre && sp.terre.humiditeIdeale) || 'frais')));
  const i = SOIL.findIndex(s => s.k === etat);
  const st = waterStatus(pl); const since = st.last ? daysBetween(st.last, today()) : null;
  const out = [];
  if (i === 4) {
    if (since != null && since <= 1) out.push(['warn', 'Normal juste après un arrosage', 'Videz la soucoupe après 15 minutes. La terre doit commencer à ressuyer d\'ici 1 à 2 jours.']);
    else out.push(['danger', 'Trop d\'eau', 'Ne pas arroser. Videz la soucoupe, vérifiez que le pot a un trou de drainage. Si cela dure plus de quelques jours, sortez la motte pour sécher et inspecter les racines (blanches et fermes = saines, brunes et molles = pourriture).']);
  } else if (i <= ideal) {
    out.push(i < ideal - 1 || (i === 0 && ideal >= 2)
      ? ['warn', 'Trop sec pour elle', 'Arrosez dès maintenant, généreusement. Si la terre ne retient plus l\'eau, faites tremper le pot 20 minutes dans une bassine. Si c\'est fréquent, rapprochez les arrosages.']
      : ['ok', 'C\'est le moment d\'arroser', 'La terre est à l\'état idéal pour un arrosage. Arrosez jusqu\'à ce que l\'eau s\'écoule, puis videz la soucoupe.']);
  } else {
    if (since == null || since < st.freq) out.push(['ok', 'Normal, on attend', `La terre est encore ${SOIL[i].l.toLowerCase()} : pas d'arrosage. Recontrôlez dans quelques jours.`]);
    else if (i >= 3) out.push(['danger', 'La terre reste humide trop longtemps', `Arrosée il y a ${since} jours et toujours ${SOIL[i].l.toLowerCase()}. Causes probables : manque de lumière, hiver, pot trop grand ou sans trou, substrat trop compact. Espacez les arrosages et surveillez l'odeur.`]);
    else out.push(['warn', 'Séchage plus lent que prévu', `Pas encore besoin d'eau malgré ${since} jours. C'est fréquent en hiver ou à faible lumière : allongez la fréquence d'arrosage dans les réglages de la plante.`]);
  }
  const fl = {
    vase: ['danger', 'Odeur de vase', 'Signe de pourriture racinaire. Dépotez, coupez les racines brunes et molles avec un outil propre, rempotez dans un substrat neuf et drainant, arrosez peu ensuite.'],
    moisi: ['warn', 'Moisissure blanche', 'Souvent bénigne (saprophyte) mais signe d\'excès d\'humidité et de manque d\'aération. Grattez la couche en surface, laissez sécher davantage, saupoudrez un peu de cannelle si vous voulez.'],
    croute: ['warn', 'Croûte blanche', 'Dépôt de calcaire ou d\'engrais. Grattez la surface et remplacez-la par du terreau neuf ; arrosez à l\'eau de pluie ou filtrée, et une fois par saison rincez le pot à grande eau.'],
    mouches: ['warn', 'Moucherons (sciarides)', 'Leurs larves vivent dans la terre trop humide. Laissez sécher la surface entre deux arrosages, couvrez de 1 cm de sable ou billes, pièges jaunes collants. Voir Astuces.'],
    racines: ['info', 'Racines qui sortent', 'La plante est probablement à l\'étroit : rempotez au printemps dans un pot de 2 à 4 cm de diamètre en plus.'],
    tasse: ['info', 'Terre tassée', 'Aérez la surface avec une baguette, ou arrosez par trempage. Au prochain rempotage, ajoutez des matériaux drainants (perlite, écorce).'],
  };
  const res = flags.includes('vase') ? out.filter(x => x[0] !== 'ok') : out;
  flags.forEach(f => fl[f] && res.push(fl[f]));
  return res;
}
async function soilCheck(plantId, after) {
  const pl = await DB.get('plants', plantId); const sp = species(pl);
  let etat = null;
  const box = openModal(`<h2 style="margin-top:0">Contrôle de la terre : ${esc(pl.nom)}</h2>
  <p class="small muted">Enfoncez un doigt ou une baguette en bois sur 3 à 5 cm (ou jusqu'au fond pour les succulentes), et soupesez le pot.</p>
  ${sp && sp.terre ? `<div class="alert info"><strong>Pour cette espèce</strong>${esc(sp.terre.normal || '')} ${esc(sp.arrosage ? 'Arroser ' + (sp.arrosage.quand || '') : '')}</div>` : ''}
  <div class="soil-scale">${SOIL.map(s => `<button type="button" data-s="${s.k}"><b style="background:${s.c}"></b>${s.l}<div class="small muted">${s.d}</div></button>`).join('')}</div>
  <h3 style="margin-top:14px">Autres signes</h3>
  <div class="chips">${Object.entries(SOIL_FLAGS).map(([k, v]) => `<button type="button" class="chip" data-f="${k}">${v}</button>`).join('')}</div>
  <div class="row" style="margin-top:12px"><label class="field">Humidimètre (1 à 10, facultatif)<input type="number" min="1" max="10" id="hm"></label><label class="field">Humidité de l'air % (facultatif)<input type="number" min="5" max="100" id="ha"></label></div>
  <div id="verdict" style="margin-top:10px"></div>
  <div class="row" style="margin-top:10px"><button class="btn primary" id="savesoil" disabled>Enregistrer le contrôle</button><button class="btn" id="savewater" disabled>Enregistrer et noter un arrosage</button></div>`, true);
  const flags = new Set();
  const show = () => {
    if (!etat) return;
    const v = soilVerdict(pl, etat, [...flags]);
    const ha = Number($('#ha', box).value);
    if (ha && sp && sp.humiditeAir) {
      const want = parseInt(String(sp.humiditeAir.ideale).match(/\d+/) || 0, 10);
      if (want && ha < want - 10) v.push(['warn', 'Air trop sec pour elle', `Mesuré ${ha} %, elle apprécie ${sp.humiditeAir.ideale}. ${sp.humiditeAir.conseil || ''}`]);
    }
    const hm = Number($('#hm', box).value);
    if (hm) v.push(['info', 'Humidimètre', hm <= 3 ? 'Valeur basse : terre sèche.' : hm <= 6 ? 'Valeur moyenne : terre fraîche.' : 'Valeur haute : terre humide. Ces appareils sont peu précis dans les substrats très drainants ou riches en engrais : croisez avec le doigt.']);
    $('#verdict', box).innerHTML = v.map(x => `<div class="alert ${x[0]}"><strong>${esc(x[1])}</strong>${esc(x[2])}</div>`).join('');
    $('#savesoil', box).disabled = false; $('#savewater', box).disabled = false;
  };
  $$('[data-s]', box).forEach(b => b.addEventListener('click', () => { etat = b.dataset.s; $$('[data-s]', box).forEach(x => x.classList.toggle('on', x === b)); show(); }));
  $$('[data-f]', box).forEach(b => b.addEventListener('click', () => { flags.has(b.dataset.f) ? flags.delete(b.dataset.f) : flags.add(b.dataset.f); b.classList.toggle('on'); show(); }));
  $$('#hm,#ha', box).forEach(i => i.addEventListener('input', show));
  const save = async water => {
    const lab = SOIL.find(s => s.k === etat).l;
    const notes = [...flags].map(f => SOIL_FLAGS[f]).join(', ');
    await addEvent(plantId, { type: 'controle', date: today(), etat, texte: `Terre : ${lab}${notes ? ', ' + notes : ''}${$('#hm', box).value ? ', humidimètre ' + $('#hm', box).value : ''}${$('#ha', box).value ? ', air ' + $('#ha', box).value + ' %' : ''}` });
    if (water) await addEvent(plantId, { type: 'arrosage', date: today() });
    closeModal(); toast(water ? 'Contrôle et arrosage notés' : 'Contrôle noté'); after && after();
  };
  $('#savesoil', box).addEventListener('click', () => save(false));
  $('#savewater', box).addEventListener('click', () => save(true));
}
const EV_L = { arrosage: 'Arrosage', controle: 'Contrôle', rempotage: 'Rempotage', engrais: 'Engrais', traitement: 'Traitement', note: 'Note', photo: 'Photo' };
async function plantDetail(id) {
  const pl = await DB.get('plants', id);
  if (!pl) { app.innerHTML = '<p>Plante introuvable. <a href="#/mes-plantes">Retour</a></p>'; return; }
  const sp = species(pl); const st = waterStatus(pl);
  const photos = (await DB.byPlant(id)).sort((a, b) => b.date.localeCompare(a.date));
  const adv = lightAdvice(sp, pl.expo, pl.dist);
  const here = lightAt(pl.expo, pl.dist);
  const journal = arr(pl.journal).slice().sort((a, b) => b.date.localeCompare(a.date) || (b.id || '').localeCompare(a.id || ''));
  const rempMois = pl.rempotage ? Math.floor(daysBetween(pl.rempotage, today()) / 30) : null;
  app.innerHTML = `
  <a class="back" href="#/mes-plantes">&larr; Mes plantes</a>
  <div class="fiche-head"><h1>${esc(pl.nom)}</h1><span class="latin">${sp ? `<a href="#/interieur/${esc(sp.id)}">${esc(sp.nom)}</a>` : esc(pl.especeLibre || 'espèce non précisée')}${pl.piece ? ', ' + esc(pl.piece) : ''}</span><span class="spacer"></span><button class="btn sm" id="edit">Modifier</button></div>
  <div class="two" style="margin-top:12px">
    <div>
      <div class="card">
        <h3>Arrosage</h3>
        <p class="due ${st.cls}">${esc(st.label)}</p>
        <p class="small muted">Rythme actuel : tous les ${st.freq} jours (${isSummer() ? 'saison chaude' : 'saison froide'})${pl.freqEte || pl.freqHiver ? ', personnalisé' : sp ? ', selon la fiche de l\'espèce' : ', valeur par défaut'}.</p>
        <div class="row"><button class="btn primary" id="w">Arrosée aujourd'hui</button><button class="btn" id="wd">Arrosée un autre jour</button><button class="btn" id="soil">Contrôler la terre</button></div>
      </div>
      <h2>Photos et défauts</h2>
      <p class="small muted">Prenez une photo régulièrement (même angle) puis cliquez sur la photo pour marquer les trous, taches ou jaunissements.</p>
      <div class="row"><label class="btn primary" style="cursor:pointer">Ajouter une photo<input type="file" accept="image/*" id="ph" hidden></label></div>
      <div class="photos" style="margin-top:12px">${photos.map(ph => `<button data-ph="${esc(ph.id)}"><img data-blob="${esc(ph.id)}" alt=""><div class="cap">${fmtDate(ph.date)}${arr(ph.markers).length ? ` : ${arr(ph.markers).length} repère${arr(ph.markers).length > 1 ? 's' : ''}` : ''}</div></button>`).join('') || '<p class="muted small">Aucune photo.</p>'}</div>
      <h2>Journal</h2>
      <div class="row"><select id="evtype">${Object.entries(EV_L).filter(([k]) => k !== 'photo').map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select><input type="date" id="evdate" value="${today()}" max="${today()}"><input type="text" id="evtext" placeholder="détail (facultatif)" style="flex:1;min-width:140px"><button class="btn" id="evadd">Ajouter</button></div>
      <ul class="clean log" style="margin-top:10px">${journal.map(e => `<li><time>${fmtDate(e.date)}</time><span><strong>${esc(EV_L[e.type] || e.type)}</strong>${e.texte ? ' : ' + esc(e.texte) : ''}</span><span class="spacer"></span><button class="btn sm" data-del="${esc(e.id)}" title="Supprimer">x</button></li>`).join('') || '<li class="muted">Rien pour l\'instant.</li>'}</ul>
    </div>
    <aside>
      <div class="card"><h3>Emplacement</h3>
        <p>${esc(EXPO[pl.expo] ? (pl.expo === 'aucune' ? 'Pas de fenêtre' : 'Fenêtre ' + EXPO[pl.expo].toLowerCase()) : '')}, ${esc((DIST[pl.dist] || '').toLowerCase())}</p>
        <div class="light-meter">${LUM.map((x, i) => `<span class="${sp && sp.lumiere && x === sp.lumiere.niveau ? 'need' : ''} ${i === here ? 'here' : ''}">${LUM_L[x]}</span>`).join('')}</div>
        <p class="small muted">Vert : ce qu'il lui faut. Cadre : ce qu'elle reçoit (estimation).</p>
        ${adv ? `<div class="alert ${adv[0]}"><strong>${esc(adv[1])}</strong>${esc(adv[2])}</div>` : ''}
      </div>
      <div class="card" style="margin-top:14px"><h3>Rempotage</h3>
        <p>${pl.rempotage ? `Dernier rempotage le ${fmtDate(pl.rempotage)} (il y a ${rempMois} mois).` : 'Date du dernier rempotage inconnue.'}</p>
        ${sp && sp.rempotage ? `<p class="small">${esc(sp.rempotage.frequence || '')}, ${esc(sp.rempotage.saison || '')}.</p>` : ''}
        ${[3, 4, 5].includes(NOW_M()) ? '<p class="small"><strong>C\'est la bonne saison pour rempoter</strong> si la plante en montre les signes.</p>' : ''}
      </div>
      ${pl.notes ? `<div class="card" style="margin-top:14px"><h3>Notes</h3><p>${esc(pl.notes)}</p></div>` : ''}
      <div class="row" style="margin-top:14px"><a class="btn" href="#/diagnostic?plante=${esc(pl.id)}">Diagnostiquer un problème</a><button class="btn danger" id="delp">Supprimer la plante</button></div>
    </aside>
  </div>
  ${sp ? `<h2>Fiche soins : ${esc(sp.nom)}</h2>${speciesCare(sp, true)}${speciesSymptoms(sp)}` : ''}`;
  for (const img of $$('[data-blob]')) { const ph = photos.find(x => x.id === img.dataset.blob); if (ph) img.src = URL.createObjectURL(ph.blob); }
  const re = () => plantDetail(id);
  $('#edit').addEventListener('click', () => plantForm(id));
  $('#w').addEventListener('click', async () => { await addEvent(id, { type: 'arrosage', date: today() }); toast('Arrosage noté'); re(); });
  $('#wd').addEventListener('click', () => {
    const b = openModal(`<h2 style="margin-top:0">Date de l'arrosage</h2><div class="row"><input type="date" id="dd" max="${today()}" value="${today()}"><button class="btn primary" id="ok">Enregistrer</button></div>`, true);
    $('#ok', b).addEventListener('click', async () => { await addEvent(id, { type: 'arrosage', date: $('#dd', b).value || today() }); closeModal(); re(); });
  });
  $('#soil').addEventListener('click', () => soilCheck(id, re));
  $('#evadd').addEventListener('click', async () => {
    const type = $('#evtype').value, date = $('#evdate').value || today();
    await addEvent(id, { type, date, texte: $('#evtext').value.trim() });
    if (type === 'rempotage') { const p = await DB.get('plants', id); if (!p.rempotage || date > p.rempotage) { p.rempotage = date; await DB.put('plants', p); } }
    re();
  });
  $$('[data-del]').forEach(b => b.addEventListener('click', async () => { const p = await DB.get('plants', id); p.journal = arr(p.journal).filter(e => e.id !== b.dataset.del); await DB.put('plants', p); re(); }));
  $('#delp').addEventListener('click', async () => {
    if (!confirm(`Supprimer « ${pl.nom} » et ses ${photos.length} photo(s) ? C'est définitif.`)) return;
    for (const ph of photos) await DB.del('photos', ph.id);
    await DB.del('plants', id); toast('Plante supprimée'); location.hash = '#/mes-plantes';
  });
  $('#ph').addEventListener('change', async e => {
    const file = e.target.files[0]; if (!file) return;
    try {
      const blob = await compress(file);
      const ph = { id: uid(), plantId: id, date: today(), blob, markers: [], note: '' };
      await DB.put('photos', ph);
      await addEvent(id, { type: 'photo', date: today(), texte: '' });
      await re(); annotate(ph.id, re);
    } catch (err) { toast('Impossible de lire cette image'); console.error(err); }
  });
  $$('[data-ph]').forEach(b => b.addEventListener('click', () => annotate(b.dataset.ph, re)));
}
async function compress(file, max = 1600) {
  const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' }).catch(() => createImageBitmap(file));
  const k = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const c = document.createElement('canvas'); c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
  c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
  return new Promise((res, rej) => c.toBlob(b => b ? res(b) : rej(new Error('compression')), 'image/jpeg', 0.85));
}

/* Annotation : clic pour poser un repère, glisser pour le déplacer */
const DEFAUTS = { trou: 'Trou', 'tache-brune': 'Tache brune', 'tache-jaune': 'Tache jaune', jaunissement: 'Jaunissement', 'bout-sec': 'Bout sec', brulure: 'Brûlure', ravageur: 'Ravageur visible', moisissure: 'Moisissure', fletri: 'Flétri', 'nouvelle-pousse': 'Nouvelle pousse', autre: 'Autre' };
const DEF_SEARCH = { trou: 'trou', 'tache-brune': 'tache', 'tache-jaune': 'tache', jaunissement: 'jaune', 'bout-sec': 'pointe', brulure: 'brul', ravageur: '', moisissure: 'moisi', fletri: 'pend' };
async function annotate(photoId, after) {
  const ph = await DB.get('photos', photoId); if (!ph) return;
  const pl = await DB.get('plants', ph.plantId);
  const all = (await DB.byPlant(ph.plantId)).sort((a, b) => a.date.localeCompare(b.date));
  const prev = all.filter(x => x.id !== ph.id && x.date <= ph.date).pop();
  let markers = arr(ph.markers).map(m => ({ ...m })); let curType = 'trou'; let sel = -1; let dirty = false;
  const url = URL.createObjectURL(ph.blob);
  const box = openModal(`<h2 style="margin-top:0">${esc(pl ? pl.nom : '')}, photo du ${fmtDate(ph.date)}</h2>
  <p class="small muted">Choisissez un type de défaut puis cliquez sur la photo pour placer un repère. Glissez un repère pour le déplacer.</p>
  <div class="chips" id="types">${Object.entries(DEFAUTS).map(([k, v]) => `<button class="chip ${k === curType ? 'on' : ''}" data-t="${k}">${v}</button>`).join('')}</div>
  <div class="two" style="margin-top:12px"><div><div class="annot" id="annot"><img src="${url}" alt="photo" draggable="false"></div></div>
  <div><label class="field">Date de la photo<input type="date" id="phdate" value="${esc(ph.date)}" max="${today()}"></label>
  <label class="field" style="margin-top:8px">Note générale<textarea id="phnote">${esc(ph.note || '')}</textarea></label>
  <h3 style="margin-top:12px">Repères</h3><ul class="clean marker-list" id="mlist"></ul>
  <div id="links"></div></div></div>
  ${prev ? `<details style="margin-top:12px"><summary>Comparer avec la photo précédente (${fmtDate(prev.date)})</summary><img src="${URL.createObjectURL(prev.blob)}" style="max-height:50vh;border-radius:10px;margin-top:8px" alt=""></details>` : ''}
  <div class="row" style="margin-top:14px"><button class="btn primary" id="phsave">Enregistrer</button><span class="spacer"></span><button class="btn danger" id="phdel">Supprimer la photo</button></div>`);
  const wrap = $('#annot', box); const img = $('img', wrap);
  const draw = () => {
    $$('.pin', wrap).forEach(p => p.remove());
    markers.forEach((m, i) => {
      const d = document.createElement('div'); d.className = 'pin' + (i === sel ? ' sel' : ''); d.textContent = i + 1;
      d.style.left = (m.x * 100) + '%'; d.style.top = (m.y * 100) + '%'; d.title = DEFAUTS[m.type] || '';
      d.addEventListener('pointerdown', ev => startDrag(ev, i)); wrap.appendChild(d);
    });
    $('#mlist', box).innerHTML = markers.map((m, i) => `<li><span class="n">${i + 1}</span><div><select data-mt="${i}">${Object.entries(DEFAUTS).map(([k, v]) => `<option value="${k}" ${k === m.type ? 'selected' : ''}>${v}</option>`).join('')}</select>
      <input type="text" data-mn="${i}" value="${esc(m.note || '')}" placeholder="précision (taille, couleur...)" style="width:100%;margin-top:4px"></div><button class="btn sm" data-md="${i}">x</button></li>`).join('') || '<li class="muted small" style="display:block">Aucun repère. Cliquez sur la photo.</li>';
    $$('[data-mt]', box).forEach(s => s.addEventListener('change', () => { markers[s.dataset.mt].type = s.value; dirty = true; draw(); }));
    $$('[data-mn]', box).forEach(s => s.addEventListener('input', () => { markers[s.dataset.mn].note = s.value; dirty = true; }));
    $$('[data-md]', box).forEach(s => s.addEventListener('click', () => { markers.splice(Number(s.dataset.md), 1); sel = -1; dirty = true; draw(); }));
    const types = [...new Set(markers.map(m => m.type))].filter(t => DEF_SEARCH[t] !== undefined);
    $('#links', box).innerHTML = types.length ? `<p class="small" style="margin-top:10px"><strong>Pistes :</strong> ${types.map(t => `<a href="#/diagnostic?plante=${esc(ph.plantId)}&q=${encodeURIComponent(DEF_SEARCH[t])}">${esc(DEFAUTS[t])}</a>`).join(', ')}</p>` : '';
  };
  let drag = null;
  function startDrag(ev, i) {
    ev.preventDefault(); ev.stopPropagation(); sel = i; drag = { i, moved: false };
    const r = img.getBoundingClientRect();
    const move = e => { drag.moved = true; markers[i].x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)); markers[i].y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)); const p = $$('.pin', wrap)[i]; if (p) { p.style.left = markers[i].x * 100 + '%'; p.style.top = markers[i].y * 100 + '%'; } };
    const up = () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); if (drag.moved) dirty = true; drag = null; draw(); };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
  }
  img.addEventListener('click', e => {
    const r = img.getBoundingClientRect();
    markers.push({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height, type: curType, note: '' });
    sel = markers.length - 1; dirty = true; draw();
    const n = $(`[data-mn="${sel}"]`, box); if (n) n.focus();
  });
  $$('[data-t]', box).forEach(b => b.addEventListener('click', () => { curType = b.dataset.t; $$('[data-t]', box).forEach(x => x.classList.toggle('on', x === b)); }));
  $('#phsave', box).addEventListener('click', async () => {
    ph.markers = markers; ph.note = $('#phnote', box).value; ph.date = $('#phdate', box).value || ph.date;
    await DB.put('photos', ph); closeModal(); toast('Photo enregistrée'); after && after();
  });
  $('#phdel', box).addEventListener('click', async () => {
    if (!confirm('Supprimer cette photo ? C\'est définitif.')) return;
    await DB.del('photos', ph.id); closeModal(); after && after();
  });
  draw();
}

/* ---------- Diagnostic ---------- */
const ZONES = { feuille: 'Feuilles', tige: 'Tiges', terre: 'Terre', racines: 'Racines', 'plante-entiere': 'Plante entière' };
async function diagnostic(id) {
  const qs = new URLSearchParams(location.hash.split('?')[1] || '');
  const plId = qs.get('plante'); const pl = plId ? await DB.get('plants', plId) : null; const sp = pl ? species(pl) : null;
  let zone = ''; let q = qs.get('q') || '';
  const openId = id && !id.includes('?') ? id.split('?')[0] : '';
  app.innerHTML = `
  <h1>Diagnostic</h1>
  <p class="lead">Décrivez ce que vous voyez : l'appli liste les causes possibles, les indices pour trancher et quoi faire. Rappelez-vous qu'un problème a souvent une seule cause principale : l'arrosage, puis la lumière.</p>
  ${pl ? `<div class="alert info"><strong>Pour ${esc(pl.nom)}${sp ? ' (' + esc(sp.nom) + ')' : ''}</strong>Les symptômes propres à son espèce sont affichés en premier.</div>` : ''}
  <div class="filters"><label class="field" style="flex:1;min-width:220px">Je vois...<input type="search" id="dq" value="${esc(q)}" placeholder="trous, taches, jaune, toile, mouches..."></label>
  <div class="field">Où<div class="chips"><button class="chip on" data-z="">Partout</button>${Object.entries(ZONES).map(([k, v]) => `<button class="chip" data-z="${k}">${v}</button>`).join('')}</div></div></div>
  <div id="dsp"></div><div id="dlist"></div>`;
  const upd = () => {
    q = $('#dq').value; const n = norm(q);
    const spSym = sp ? arr(sp.symptomes).filter(s => !n || norm(JSON.stringify(s)).includes(n)) : [];
    $('#dsp').innerHTML = spSym.length ? `<h2>Chez ${esc(sp.nom)}</h2>${spSym.map(x => `<details class="card" style="margin:8px 0" open><summary><strong>${esc(x.signe)}</strong></summary><p style="margin-top:8px"><strong>Causes possibles :</strong> ${esc(arr(x.causes).join(', '))}</p><p><strong>Que faire :</strong> ${esc(x.remede || '')}</p></details>`).join('')}<h2>Guide général</h2>` : '';
    const res = SYM.filter(s => (!zone || s.zone === zone) && (!n || norm(JSON.stringify(s)).includes(n)));
    $('#dlist').innerHTML = res.map(s => `<details class="card" style="margin:8px 0" ${s.id === openId || res.length === 1 ? 'open' : ''} id="s-${esc(s.id)}"><summary><strong>${esc(s.signe)}</strong> <span class="badge">${esc(ZONES[s.zone] || '')}</span></summary>
      <p class="muted" style="margin-top:8px">${esc(s.details || '')}</p>
      ${s.normal ? `<div class="alert ok"><strong>Ce qui est normal</strong>${esc(s.normal)}</div>` : ''}
      ${arr(s.causes).map(c => `<div style="border-top:1px solid var(--line);padding-top:8px;margin-top:8px"><strong>${esc(c.cause)}</strong>${c.indices ? `<p class="small"><em>Indices :</em> ${esc(c.indices)}</p>` : ''}${c.solution ? `<p class="small"><em>Solution :</em> ${esc(c.solution)}</p>` : ''}</div>`).join('')}
      ${s.quandSInquieter ? `<div class="alert warn"><strong>Quand s'inquiéter</strong>${esc(s.quandSInquieter)}</div>` : ''}</details>`).join('') || '<p class="empty">Aucun symptôme ne correspond. Essayez un autre mot.</p>';
  };
  $('#dq').addEventListener('input', upd);
  $$('[data-z]').forEach(b => b.addEventListener('click', () => { zone = b.dataset.z; $$('[data-z]').forEach(x => x.classList.toggle('on', x === b)); upd(); }));
  upd();
  if (openId) { const el = $('#s-' + CSS.escape(openId)); if (el) el.scrollIntoView({ block: 'start' }); }
}

/* ---------- Astuces ---------- */
const CAT = { 'idee-recue': 'Idées reçues', arrosage: 'Arrosage', nettoyage: 'Nettoyage', 'engrais-maison': 'Engrais maison', ravageurs: 'Ravageurs', lumiere: 'Lumière', rempotage: 'Rempotage', vacances: 'Vacances', bouture: 'Bouture' };
const VERDICT = { vrai: ['Vrai', 'b-green'], faux: ['Faux', 'b-danger'], nuance: ['Ça dépend', 'b-gold'] };
function astuces(id) {
  let cat = ''; const openId = id || '';
  app.innerHTML = `<h1>Astuces et idées reçues</h1>
  <p class="lead">Ce qui marche vraiment, ce qui ne sert à rien, et ce qui peut nuire, avec les sources.</p>
  <div class="filters"><label class="field" style="flex:1;min-width:200px">Chercher<input type="search" id="tq" placeholder="marc de café, microfibre, règles..."></label>
  <div class="field">Thème<div class="chips"><button class="chip on" data-c="">Tout</button>${Object.entries(CAT).map(([k, v]) => `<button class="chip" data-c="${k}">${v}</button>`).join('')}</div></div></div>
  <div id="tlist"></div>`;
  const upd = () => {
    const n = norm($('#tq').value);
    const res = AST.filter(a => (!cat || a.categorie === cat) && (!n || norm(a.titre + ' ' + a.resume + ' ' + a.detail).includes(n)));
    $('#tlist').innerHTML = res.map(a => `<details class="card" style="margin:8px 0" id="a-${esc(a.id)}" ${a.id === openId ? 'open' : ''}><summary><strong>${esc(a.titre)}</strong> ${badge(VERDICT[a.verdict])} <span class="badge">${esc(CAT[a.categorie] || '')}</span><div class="small muted" style="margin-top:4px">${esc(a.resume || '')}</div></summary>
      <p style="margin-top:10px">${esc(a.detail || '')}</p>${arr(a.commentFaire).length ? `<h3>Comment faire</h3><ol>${arr(a.commentFaire).map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : ''}${sources(a.sources)}</details>`).join('') || '<p class="empty">Rien trouvé.</p>';
  };
  $('#tq').addEventListener('input', upd);
  $$('[data-c]').forEach(b => b.addEventListener('click', () => { cat = b.dataset.c; $$('[data-c]').forEach(x => x.classList.toggle('on', x === b)); upd(); }));
  upd();
  if (openId) { const el = $('#a-' + CSS.escape(openId)); if (el) el.scrollIntoView({ block: 'start' }); }
}

/* ---------- Réglages et sauvegarde ---------- */
const blobToData = b => new Promise(r => { const f = new FileReader(); f.onload = () => r(f.result); f.readAsDataURL(b); });
async function reglages() {
  const plants = await DB.all('plants'); const photos = await DB.all('photos');
  app.innerHTML = `<h1>Réglages</h1>
  <div class="card"><h3>Mon climat</h3><p class="small muted">Sert au calendrier des aromatiques et aux plantes sauvages de votre région.</p>
    <select id="clim">${Object.entries(CLIMATS).map(([k, v]) => `<option value="${k}" ${k === settings.get('climat') ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
  <div class="card" style="margin-top:14px"><h3>Sauvegarde</h3>
    <p>${plants.length} plante(s) et ${photos.length} photo(s) enregistrées sur cet appareil uniquement. Exportez régulièrement un fichier de sauvegarde, il permet aussi de passer d'un appareil à l'autre.</p>
    <div class="row"><button class="btn primary" id="exp">Exporter mes données</button><label class="btn" style="cursor:pointer">Importer une sauvegarde<input type="file" accept="application/json,.json" id="imp" hidden></label></div></div>
  <div class="card" style="margin-top:14px"><h3>À propos des données</h3><p class="small">Fiches rédigées à partir de sources botaniques, d'herboristerie et de jardinage (citées en bas de chaque fiche). Elles ne remplacent ni un avis médical, ni la vérification sur le terrain par une personne compétente.</p>
    <p class="small muted">${SAUV.length} plantes sauvages, ${ARO.length} aromatiques, ${INT.length} plantes d'intérieur, ${AST.length} astuces, ${SYM.length} symptômes.</p></div>`;
  $('#clim').addEventListener('change', e => { settings.set('climat', e.target.value); toast('Climat enregistré'); });
  $('#exp').addEventListener('click', async () => {
    const data = { app: 'herbier', version: 1, date: new Date().toISOString(), plants: await DB.all('plants'), photos: [] };
    for (const p of await DB.all('photos')) data.photos.push({ ...p, blob: await blobToData(p.blob) });
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: 'application/json' }));
    a.download = `herbier-sauvegarde-${today()}.json`; a.click(); toast('Sauvegarde téléchargée');
  });
  $('#imp').addEventListener('change', async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      if (data.app !== 'herbier') throw new Error('Ce fichier n\'est pas une sauvegarde Herbier');
      if (!confirm(`Importer ${data.plants.length} plante(s) et ${data.photos.length} photo(s) ? Les plantes portant le même identifiant seront remplacées.`)) return;
      for (const p of data.plants) await DB.put('plants', p);
      for (const p of data.photos) await DB.put('photos', { ...p, blob: await (await fetch(p.blob)).blob() });
      toast('Import terminé'); reglages();
    } catch (err) { toast('Import impossible : ' + err.message); }
  });
}

router();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
