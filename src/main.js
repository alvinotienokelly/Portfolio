import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueScrollTo from 'vue-scrollto'
import router from "@/router";
Vue.config.productionTip = false
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
