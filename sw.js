/* Cache hors ligne : réseau d'abord pour les fichiers de l'appli, cache d'abord pour les photos de référence déjà vues. */
const CACHE = 'herbier-v2';
const IMG_CACHE = 'herbier-photos-v1';
const FILES = ['./', 'index.html', 'styles.css', 'js/db.js', 'js/app.js', 'data/sauvages.js', 'data/sauvages-a.js', 'data/sauvages-b.js', 'data/sauvages-c.js', 'data/aromatiques.js', 'data/interieur.js', 'data/interieur-b.js', 'data/astuces.js', 'data/photos.js', 'manifest.json', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'];
const IMG_HOSTS = /(inaturalist-open-data\.s3\.amazonaws\.com|static\.inaturalist\.org|upload\.wikimedia\.org|bs\.plantnet\.org)$/;
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== IMG_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (IMG_HOSTS.test(url.hostname)) {
    e.respondWith(caches.open(IMG_CACHE).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') c.put(e.request, r.clone()); return r; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(e.request, c)); return r; }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
