import router from './router/index';
// import $store from '@/store/index';
//只加载一次路由
let registerRouteFresh = true;
//路由拦截
router.beforeEach(async (to, from, next) => {
  if (registerRouteFresh) {
    // let currentSwjgDm = sessionStorage.getItem('currentSwjgDm');
    // if (!currentSwjgDm) {
    //   await $store.dispatch('getAjaxSwjg');
    //   registerRouteFresh = false;
    // }
    next();
  } else {
    next();
  }
});
