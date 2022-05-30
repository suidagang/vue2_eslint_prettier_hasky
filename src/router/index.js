import Vue from 'vue';
import VueRouter from 'vue-router';
// 解决重复点击路由报警告问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
import Home from '../views/home.vue';
Vue.use(VueRouter);
const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
