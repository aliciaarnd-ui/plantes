/* Stockage local (IndexedDB) : mes plantes et photos. Rien ne quitte l'appareil. */
const DB = (() => {
  let dbp = null;
  function open() {
    if (dbp) return dbp;
    dbp = new Promise((res, rej) => {
      const r = indexedDB.open('herbier', 1);
      r.onupgradeneeded = () => {
        const d = r.result;
        if (!d.objectStoreNames.contains('plants')) d.createObjectStore('plants', { keyPath: 'id' });
        if (!d.objectStoreNames.contains('photos')) {
          const s = d.createObjectStore('photos', { keyPath: 'id' });
          s.createIndex('plantId', 'plantId');
        }
        if (!d.objectStoreNames.contains('kv')) d.createObjectStore('kv', { keyPath: 'k' });
      };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  function tx(store, mode, fn) {
    return open().then(d => new Promise((res, rej) => {
      const t = d.transaction(store, mode);
      const s = t.objectStore(store);
      let out;
      Promise.resolve(fn(s)).then(v => { out = v; });
      t.oncomplete = () => res(out);
      t.onerror = () => rej(t.error);
    }));
  }
  const req = r => new Promise((res, rej) => { r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  return {
    all: store => tx(store, 'readonly', s => req(s.getAll())),
    get: (store, id) => tx(store, 'readonly', s => req(s.get(id))),
    put: (store, v) => tx(store, 'readwrite', s => req(s.put(v))),
    del: (store, id) => tx(store, 'readwrite', s => req(s.delete(id))),
    byPlant: id => tx('photos', 'readonly', s => req(s.index('plantId').getAll(id))),
    clear: store => tx(store, 'readwrite', s => req(s.clear())),
    getKV: async (k, def) => { const r = await tx('kv', 'readonly', s => req(s.get(k))); return r ? r.v : def; },
    setKV: (k, v) => tx('kv', 'readwrite', s => req(s.put({ k, v }))),
  };
})();
