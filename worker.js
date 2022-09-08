// (A) FILES TO CACHE
const cName = "demo-pwa",
cFiles = [
  // (A1) POS "SYSTEM"
  "JS-POS.html",
  "JS-POS.css",
  "JS-POS.js",

  // (A2) IMAGES
  "images/banana.png",
  "images/cherry.png",
  "images/favicon.png",
  "images/icecream.png",
  "images/icon-512.png",
  "images/orange.png",
  "images/strawberry.png",
  "images/watermelon.png"
];

// (B) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
});

// (C) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request)
    .then((res) => { return res || fetch(evt.request); })
  );
});
