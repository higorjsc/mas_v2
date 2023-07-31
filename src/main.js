import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "@/assets/css/estilo.css";
import translation from "@/assets/javascript/translation.js";
import store from './store'; // Importe o arquivo de configuração do store

const app = createApp(App);

app.use(store); // Usa o Vuex antes de criar a instância do Vue Router

app.use(router);

// Configura a função que define o idioma como $t('variável')
app.config.globalProperties.$t = function (key) {
  return translation[this.$store.getters.currentLanguage][key] || key;
};

app.mount('#app');
