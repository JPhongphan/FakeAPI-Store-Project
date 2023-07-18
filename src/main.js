import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' 

import {createPinia} from 'pinia'
const pinia = createPinia()

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import  './style.css'


const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

