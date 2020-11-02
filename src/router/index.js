import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        component: () => import("@/Views/MovieDetails/index")
    }
  ]
})
