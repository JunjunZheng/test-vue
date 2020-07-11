import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import User from '../views/User'
import Register from '../views/Register'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
