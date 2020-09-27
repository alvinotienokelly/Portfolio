import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
  data:{
    isTrue:true

  }
}).$mount('#app')
