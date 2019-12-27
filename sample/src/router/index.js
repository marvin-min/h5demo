import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
//挂在路由导航守卫
router.beforeEach((to, from, next) => {
  if(to.path == '/login') return next();
  const totals = window.sessionStorage.getItem("totals");
  if(!totals) return next('/login');
  next();
});
export default router;
