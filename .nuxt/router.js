import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f385fbc = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6b032037 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _87504600 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _310d0358 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _3f385fbc,
    name: "contact"
  }, {
    path: "/service",
    component: _6b032037,
    name: "service"
  }, {
    path: "/test",
    component: _87504600,
    name: "test"
  }, {
    path: "/",
    component: _310d0358,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
