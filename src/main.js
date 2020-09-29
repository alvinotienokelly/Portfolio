import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueScrollTo from 'vue-scrollto'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueParticles from 'vue-particles'
import router from "@/router";
// ES6
import VueTyperPlugin from 'vue-typer'
Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VueParticles)
Vue.use(VueTyperPlugin)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
