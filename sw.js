importScripts('/site-plug/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/site-plug/_nuxt/45b239d1c77456b3416b.js",
    "revision": "69cdb10e0c02992d64a1a3a350f555e9"
  },
  {
    "url": "/site-plug/_nuxt/75f41907885580b25902.js",
    "revision": "b87136eba780c9edf0bf4a9654508775"
  },
  {
    "url": "/site-plug/_nuxt/7e547ed3c1199b9e6cae.js",
    "revision": "cd13f7e8a2ce70f88312b3b8e83b090e"
  },
  {
    "url": "/site-plug/_nuxt/a912c3eb2e3ee1e75661.js",
    "revision": "4994c384ea199fd3bd7a8a17c1b7bc90"
  },
  {
    "url": "/site-plug/_nuxt/d3d994a2c77e0759f414.js",
    "revision": "3fb3f70e508cf72aec3a2c9132b7efdd"
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
