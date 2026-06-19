const CACHE_NAME = 'klondike-pwa-reference-visuals-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/icons/favicon-32.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/themes/default-ref.jpg',
  './assets/themes/light-ref.jpg',
  './assets/themes/dark-ref.jpg',
  './assets/themes/minecraft-ref.jpg',
  './assets/themes/halloween-ref.png',
  './assets/themes/chernobyl-ref.jpg',
  './assets/themes/kitty-ref.jpg',
  './assets/themes/sponge-ref.jpg',
  './assets/themes/sponge-back.svg',
  './assets/themes/minecraft-back.svg',
  './assets/themes/halloween-back.svg',
  './assets/themes/chernobyl-back.svg',
  './assets/themes/kitty-back.svg',
  './assets/faces/mc_j.png','./assets/faces/mc_q.png','./assets/faces/mc_k.png',
  './assets/faces/sp_j.png','./assets/faces/sp_q.png','./assets/faces/sp_k.png',
  './assets/faces/kitty_j.png','./assets/faces/kitty_q.png','./assets/faces/kitty_k.png',
  './assets/faces/ch_j.png','./assets/faces/ch_q.png','./assets/faces/ch_k.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
    return response;
  }).catch(() => caches.match('./index.html'))));
});
