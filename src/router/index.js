import { createRouter, createWebHistory } from 'vue-router'

let routes = 
[
    {
        path: "/",
        name: 'Home Page', 
        component: () => import('../views/home_page.vue')
    },
    {
        path : "/posts/:id",
        component: () => import('../components/Post.vue')
    }
]
const router = createRouter({
    history: createWebHistory(), 
    routes
})
export default router