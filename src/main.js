import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import '@/assets/css/index.css'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
