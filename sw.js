importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3271e5f6e1a6f83f657d.js",
    "revision": "be8ae3fe50d7621529d802854b9a6aed"
  },
  {
    "url": "/_nuxt/6564df2e4823d5a5a321.js",
    "revision": "299b778a21f022f146ccf8b447560aed"
  },
  {
    "url": "/_nuxt/75f41907885580b25902.js",
    "revision": "b87136eba780c9edf0bf4a9654508775"
  },
  {
    "url": "/_nuxt/7e547ed3c1199b9e6cae.js",
    "revision": "cd13f7e8a2ce70f88312b3b8e83b090e"
  },
  {
    "url": "/_nuxt/d3d994a2c77e0759f414.js",
    "revision": "3fb3f70e508cf72aec3a2c9132b7efdd"
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
