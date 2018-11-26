const staticAssets = [
  './',
  './assets/css/style.css',
  './assets/js/app.js',
  './assets/js/branch-detail.js',
  './assets/js/signup.js',
  './assets/images/office/1/1.jpg',
  './assets/images/office/1/2.jpg',
  './assets/images/office/1/3.jpg',
  './assets/images/office/1/4.jpg',
  './assets/images/office/1/4.jpg',
  './assets/images/office/2/1.jpg',
  './assets/images/office/2/2.jpg',
  './assets/images/office/2/3.jpg',
  './assets/images/office/2/4.jpg',
  './assets/images/office/2/5.jpg',
  './assets/images/office/2/6.jpg',
  './assets/images/office/2/7.jpg',
  './assets/images/office/2/8.jpg',
  './assets/images/office/3/1.jpg',
  './assets/images/office/3/2.jpg',
  './assets/images/office/3/3.jpg',
  './assets/images/office/3/4.jpg',
  './assets/images/office/3/5.jpg',
  './assets/images/office/3/6.jpg',
];

self.addEventListener('install', async event => {
  const cache = await caches.open('news-static');

  cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  return cachedResponse || fetch(request);
}

async function cacheImages(request) {
  const cache = await caches.open('images');

  try {
    const respond = await fetch(request);
    cache.put(request, respond.clone());
    return respond;
  } catch (error) {
    return await cache.match(request);
  }
}

async function networkFirst(request) {
  const cache = await caches.open('news-dynamic');

  try {
    const respond = await fetch(request);
    cache.put(request, respond.clone());
    return respond;
  } catch (error) {
    return await cache.match(request);
  }
}