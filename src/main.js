import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入rem自适应插件
import 'amfe-flexible/index.js'
import './style/base.less'
import './style/iconfont.less'

import Hmheader from './components/HmHeader'
import HmLogin from './components/HmLogin'
import HmInput from './components/HmInput'
import HmButton from './components/HmButton'
Vue.component('hm-header', Hmheader)
Vue.component('hm-login', HmLogin)
Vue.component('hm-input', HmInput)
Vue.component('hm-button', HmButton)
// 按需加载vant
import { Toast } from 'vant'
Vue.use(Toast)
// 引入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
// 设置响应拦截器
axios.interceptors.response.use(
  function(res) {
    return res
  },
  function(error) {
    console.log(error)
  }
)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
