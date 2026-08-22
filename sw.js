const CACHE_NAME = 'bakimrehberim-v3.1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/main.css',
    './css/components.css',
    './css/print.css',
    './js/nandaData.js',
    './js/templatesData.js',
    './js/calculators.js',
    './js/carePlanBuilder.js',
    './js/storage.js',
    './js/app.js',
    './assets/logo.png',
    './manifest.json'
];

// Install Event - Cache assets and skip waiting immediately
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate Event - Purge old caches and claim clients immediately
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Purging old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event - Network First strategy to guarantee fresh code on online updates
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    // Do not intercept chrome-extension or external cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // If offline or network fails, fall back to cached response
                return caches.match(event.request);
            })
    );
});
