// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import api from './server/http/axios.js';
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

var options={
		fullscreenEl:true //关闭全屏按钮
	}
Vue.use(preview,options)

Vue.config.productionTip = false

Vue.prototype.$axios = api //把api给挂到实例上去了 api.post(url,data)  $axois.post
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
