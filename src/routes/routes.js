import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue'
import about from '../views/about.vue'

const routes = [
    {   
        path: '/',
        name: 'home',
        component: home
    },
    {   
        path: '/about',
        name: 'about',
        component: about
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router