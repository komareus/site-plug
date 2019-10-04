importScripts('/site-plug/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/site-plug/_nuxt/2af30938fed1c24f29be.js",
    "revision": "73288c28d5b496fba3a988b844c260a5"
  },
  {
    "url": "/site-plug/_nuxt/59e7cbe8e79267171fac.js",
    "revision": "71627f489008e4cbe08136b4481debd3"
  },
  {
    "url": "/site-plug/_nuxt/7c3afa8e85c22f7d14c9.js",
    "revision": "3b2232cfa44d1aafe95bdec006601be4"
  },
  {
    "url": "/site-plug/_nuxt/c5af6ee369e4a4137876.js",
    "revision": "251e2cc2e4dcd528065defd25d6b3bce"
  },
  {
    "url": "/site-plug/_nuxt/c91700a2bde7292897af.js",
    "revision": "b2c039d103414782190b7a41796b2b06"
  },
  {
    "url": "/site-plug/_nuxt/fa3fe07c1a6a88bef94e.js",
    "revision": "003d3dcbafa6a5bd71abeb7a3273ae7f"
  }
], {
  "cacheId": "heroes",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/site-plug/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/site-plug/.*'), workbox.strategies.networkFirst({}), 'GET')
