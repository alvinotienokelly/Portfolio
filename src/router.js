import Vue from 'vue';
import VueRouter from  'vue-router'
import HelloWorld from "@/components/HelloWorld";
import services from "@/components/services";
import about from "@/components/about"
import Work from "@/components/Work";
import Process from "@/components/Process";
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
         path: '/process',
         component: Process
     },
     {
         path: '/work',
         component: Work
     }
 ]
})