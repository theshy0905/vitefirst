import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'


App.use(createPinia())
App.use(router)

createApp(App).mount('#app')


