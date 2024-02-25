// Instalar el Service Worker
self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("hello-kitty-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/principal.css",
          "/script.js",
          "/icon.png",
          "/icon-512.png",
          // Agrega aquí otros archivos que deseas cachear
        ]);
      })
    );
  });
  
  // Activar el Service Worker
  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== "hello-kitty-cache") {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
  // Intercepta las solicitudes y responde con los recursos en caché si están disponibles
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });