importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2af30938fed1c24f29be.js",
    "revision": "73288c28d5b496fba3a988b844c260a5"
  },
  {
    "url": "/_nuxt/59e7cbe8e79267171fac.js",
    "revision": "71627f489008e4cbe08136b4481debd3"
  },
  {
    "url": "/_nuxt/6a0db60d1f6396566674.js",
    "revision": "ad4830cf42892d9db3c79dda84293dad"
  },
  {
    "url": "/_nuxt/7c3afa8e85c22f7d14c9.js",
    "revision": "3b2232cfa44d1aafe95bdec006601be4"
  },
  {
    "url": "/_nuxt/8b46a46c9259c1fb7189.js",
    "revision": "7ec30af20ab4332096b2b2163e4e5ca9"
  },
  {
    "url": "/_nuxt/ab93229e93ed9c86a009.js",
    "revision": "09e6890d6b20675012d95929ec5baa64"
  }
], {
  "cacheId": "heroes",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
