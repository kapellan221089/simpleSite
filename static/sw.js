importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0b4dde7d6921fb9ec6a2.js",
    "revision": "55116627dcd6406f2927cb2da2cc6255"
  },
  {
    "url": "/_nuxt/7a4120a1924f5e372d45.js",
    "revision": "ec849f3b1d585954bbd313355f1b9378"
  },
  {
    "url": "/_nuxt/7b9c65f3091cc19ca6b5.js",
    "revision": "da04e0e29ec019f19aa8d63fc1792d8d"
  },
  {
    "url": "/_nuxt/9457bb34e2971149e6b3.js",
    "revision": "d3a8494b4094f6ba767081d1bf60c819"
  },
  {
    "url": "/_nuxt/992877075ea77f474435.js",
    "revision": "c7e2a556633cee9575b996e91f7c67eb"
  },
  {
    "url": "/_nuxt/c6ab7635abe871ef3887.js",
    "revision": "76fb8d63675657e34e05f62a24022214"
  },
  {
    "url": "/_nuxt/fc5521eff13d4894dcd1.js",
    "revision": "8dbe502c9740ecf803330a1fcbb05c9c"
  }
], {
  "cacheId": "chat-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
