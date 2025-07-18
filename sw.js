const CACHE_NAME = 'translator-v1';
const urlsToCache = [
  './',
  './translator-pwa.html', // دڵنیابە ناوی فایلی HTMLـەکەت ڕاستە
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});