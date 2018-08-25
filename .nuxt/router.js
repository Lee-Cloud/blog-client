import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0e76c865 = () => import('../pages/post/index.vue' /* webpackChunkName: "pages/post/index" */).then(m => m.default || m)
const _1a017a04 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _0c30284c = () => import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */).then(m => m.default || m)
const _27e9dd48 = () => import('../pages/login/qq.vue' /* webpackChunkName: "pages/login/qq" */).then(m => m.default || m)
const _6575a00d = () => import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */).then(m => m.default || m)
const _ce376100 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/post",
			component: _0e76c865,
			name: "post"
		},
		{
			path: "/about",
			component: _1a017a04,
			name: "about"
		},
		{
			path: "/login",
			component: _0c30284c,
			name: "login"
		},
		{
			path: "/login/qq",
			component: _27e9dd48,
			name: "login-qq"
		},
		{
			path: "/post/:id",
			component: _6575a00d,
			name: "post-id"
		},
		{
			path: "/",
			component: _ce376100,
			name: "index"
		},
		{
			path: "/post/:id/:slug",
			component: _6575a00d,
			name: "post"
		}
    ],
    
    
    fallback: false
  })
}
