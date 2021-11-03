//Version: 1.2

self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('Speedy').then((cache) => cache.addAll([
'Speedy.js',
'Speedy.html'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
});
