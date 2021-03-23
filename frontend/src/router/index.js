import Vue from 'vue'
import Router from 'vue-router'
import Show from '../components/ShowPage'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:id',
      name: 'show',
      component: Show,
    },
  ],
})
