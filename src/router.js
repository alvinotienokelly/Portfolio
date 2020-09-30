import Vue from 'vue';
import VueRouter from  'vue-router'
import HelloWorld from "@/components/HelloWorld";
import services from "@/components/services";
import about from "@/components/about"
import Work from "@/components/Work";
Vue.use(VueRouter)

export  default  new VueRouter({
    mode:'history',
 routes:[
     {
         path:'/',
         name:'Home',
         component:HelloWorld
     },
     {
         path: '/services',
         component: services
     },
     {
         path: '/about',
         component: about
     },
     {
         path: '/work',
         component: Work
     }
 ]
})