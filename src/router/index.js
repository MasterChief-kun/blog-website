import { createRouter, createWebHistory } from 'vue-router' 

const routes = 
[
    {
        path: "/",
        name: 'Home Page', 
        component: () => import('../views/home_page.vue')
    },
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})
export default router