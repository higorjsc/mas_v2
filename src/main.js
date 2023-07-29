import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/css/estilo.css"
import "@/assets/languages/translation.js"


createApp(App).use(router).mount('#app')
