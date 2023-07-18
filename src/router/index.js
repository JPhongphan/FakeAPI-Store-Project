import {createRouter, createWebHistory} from 'vue-router'

import Products_page from '../views/Products_page.vue'
import Product_detail from '../views/Product_detail.vue'
import Cart_page from '../views/Cart_page.vue'
import About_page from '../views/About_page.vue'
import Home from '../views/Home.vue'


const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/Products',
        name:'Products',
        component: Products_page
    },
    {
        path:'/Product_detail/:id', 
        name:'Product_detail',
        component: Product_detail
    },
    {
        path:'/Cart_page', 
        name:'Cart_page',
        component: Cart_page
    },
    {
        path:'/About', 
        name:'About_page',
        component: About_page
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router