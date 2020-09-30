import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueScrollTo from 'vue-scrollto'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueParticles from 'vue-particles'
import Animation from  'animate.css'
import router from "@/router"
// ES6
import VueTypedJs from 'vue-typed-js'
Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VueParticles)
Vue.use(VueTypedJs)
Vue.use(Animation)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
