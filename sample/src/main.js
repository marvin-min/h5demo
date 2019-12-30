import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
axios.defaults.baseURL = '/api/'
axios.defaults.timeout = 6000
axios.interceptors.request.use(config => {
  config.headers.Authorization =
    'Bearer ' + window.sessionStorage.getItem('accessToken')
  return config
})
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
