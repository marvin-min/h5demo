import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.baseURL = '/api/'
axios.defaults.timeout = 6000
axios.interceptors.request.use(config => {
  config.headers.Authorization =
    'Bearer ' + window.sessionStorage.getItem('accessToken')
  return config
})
axios.interceptors.response.use(
  data => {
    return data
  },
  err => {
    if (err.response.status == 401) {
      Message.error('会话已过期，请重新登陆！')
      window.sessionStorage.clear()
    }
  }
)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
