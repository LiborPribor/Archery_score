const CACHE_NAME = 'archery-v1';
const ASSETS = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/610/610064.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
