self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/app.js',
                '/service-worker.js',
                '/images/icon-192x192.png',
                '/images/icon-512x512.png',
                'https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
