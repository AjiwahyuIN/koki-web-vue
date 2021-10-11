import Vue from 'vue'
import VueRouter from 'vue-router'
import WhyFudo from '../views/WhyFudo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'WhyFudo',
        component: WhyFudo
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  