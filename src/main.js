import Vue from 'vue'
/**
 * 挂载的路由文件
 * */
import App from './App.vue'
/**
 * 前端路由
 * */
import router from './router'
/**
 * 全局储存
 * */
import store from './store'
/**
 * elementUI框架全局使用
 * */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/**
 * 兼容IE，es6转为es5代码
 * */
import 'babel-polyfill'

/**
 * 清除浏览器默认样式
 * */
import '@/common/commonStyle/reset.css'
/**
 * 引入css全局变量
 * */
import '@/common/commonStyle/variable.less'

/**
 * 引入echarts
 * */
import * as echarts from 'echarts' //引入echarts
/**
 * 阻止vue启动生产消息
 * */
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts //引入组件

import comFilter from './plugin/comFilter/index'
Vue.use(comFilter)
//封装axios  ajax请求
import { post, fetch } from './common/request/api'
//定义全局变量
Vue.prototype.$get = fetch
Vue.prototype.$post = post

// 引入mitt.js
import mitt from 'mitt'
Vue.prototype.$mybus = mitt()

// 引入全局
import './permission'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
