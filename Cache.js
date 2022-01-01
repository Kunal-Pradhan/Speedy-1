self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('Speedy').then((cache) => cache.addAll([
'Speedy.js',
'Speedy.html',
'Speedy.css',
'jQuery.js',
'Product.ttf',
'Icons.woff2'
])),
);
});
self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
});
