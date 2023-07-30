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
        currentMoser(state){
            return state.moser
        }
    },
    actions: {
        changeLanguage(context, data) {
            data == false ? 'pt': 'en'
            context.commit('setLanguage', data);
        },
  },
})
