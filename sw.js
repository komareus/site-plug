importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/30f9ab24c198eebad5a1.js",
    "revision": "0fc7c66c4eaf5005538033808105b489"
  },
  {
    "url": "/_nuxt/32426d16fb2195f64c6e.js",
    "revision": "3e2361ebb3683e2b974354b9451d9689"
  },
  {
    "url": "/_nuxt/3beb96aff0a3c991018c.js",
    "revision": "a4899b6d89493a7b653c4e3e80fd58b2"
  },
  {
    "url": "/_nuxt/59e7cbe8e79267171fac.js",
    "revision": "71627f489008e4cbe08136b4481debd3"
  },
  {
    "url": "/_nuxt/eb41ed1d5258bd749337.js",
    "revision": "68e8d02b76aaffc9386432665750a139"
  },
  {
    "url": "/_nuxt/eef7c0b21bc99e332d5c.js",
    "revision": "98ed17e7941ac2ae532b233bc335c7c3"
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
