import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Auth from '../components/auth/Auth.vue'
import Roles from '../components/role/Roles.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/welcome',
    component: Home,
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/auth', component: Auth },
      { path: '/roles', component: Roles }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//挂在路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next()
  const totals = window.sessionStorage.getItem('totals')
  if (!totals) return next('/login')
  next()
})
export default router
