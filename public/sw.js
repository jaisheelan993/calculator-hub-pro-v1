const CACHE = 'calc-hub-v2';
const toCache = ['/','/offline.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(toCache))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
