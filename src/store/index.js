import { createStore } from 'vuex';

export default createStore({
  state: {
    language: 'pt', // Idioma padrão
    cardozo:{

    },
    vergne:{

    },
    moser:{
        logistica: '',
        rockMass: '',
        coberturaSuperficial: '',
        openPit: '',
        prod: '',
        depth: '',
    }  
  },
  mutations: {
    setLanguage(state, data) {
      data == false ? 'pt': 'en'
      state.language = data;
    },
    setMoser(state, data) {
      state.moser = data;
    },

  },
  getters: {
    currentLanguage(state) {
      return state.language;
    },
  },
  actions: {
    changeLanguage(context, language) {
      context.commit('setLanguage', language);
    },
  },
});
