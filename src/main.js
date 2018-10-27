// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'	// 路由模块
import VueResource from 'vue-resource'	// http模块

import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
// 配置路由
const router = new VueRouter({
	routes: [
		{path: '/', component: Home},
		{path: '/helloworld', component: HelloWorld}
	],
	mode: 'history'	// 搜索栏的去除 # 
});

// 全局注册组件
// import Users from './components/Users.vue'
// Vue.component('users', Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
