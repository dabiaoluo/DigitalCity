import Vue from 'vue'
import VueRouter from 'vue-router'
import CesiumView from '../views/Cesium.vue'
import BabylonView from '../views/Babylon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cesium',
    component: CesiumView
  },
  {
    path: '/babylon',
    name: 'Babylon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Babylon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
