import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "@/assets/css/root.css"
import "@/assets/css/mainAcessos.css"
import "@/assets/css/inputsAcessos.css"
import portuguese from "@/assets/javascript/portuguese.js"
import english from "@/assets/javascript/english.js"
import store from "./store" // Importe o arquivo de configuração do store

const app = createApp(App)

app.use(store) // Usa o Vuex antes de criar a instância do Vue Router

app.use(router)

// Configura a função que define o idioma como $ft('variável')
app.config.globalProperties.$ft = function (key) {
    if(this.$store.getters.currentLanguage === 'pt'){
        return portuguese[key] ? portuguese[key] : key
    }
    if(this.$store.getters.currentLanguage === 'en'){
        return english[key] ? portuguese[key] : key
    }
}


app.mount("#app")
