import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Tostify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Tostify, { autoClose: 2000 });

app.mount('#app')
