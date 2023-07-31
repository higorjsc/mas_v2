import { createStore } from 'vuex'
import { coresDefault } from '@/assets/javascript/constants.js'

export default createStore({
    state: {
        language: 'pt', // Idioma padrão
        colorMoser: {
            logistica: coresDefault.fluxoGreen,
            rockMass: 'Transparent',
            surfaceMaterial: 'Transparent',
            openPit: 'Transparent',
            prodCenter: 'Transparent',
            prodLeft: 'Transparent',
            depthCenter: 'Transparent',
            depthLeft: 'Transparent',
            rampa: coresDefault.fluxoBlue,
            shaft: coresDefault.fluxoBlue,
        }, 
        cardozo:{

        },
        vergne:{

        },
        moser:{
            logistica: '',
            rockMass: '',
            surfaceMaterial: '',
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
        setColorMoser(state, data) {
            state.colorMoser = data;
        },
    },
    getters: {
        currentLanguage(state) {
            return state.language;
        },
        currentMoser(state){
            return state.moser
        },
        currentColorMoser(state){
            return state.colorMoser
        },
    },
    actions: {
        changeLanguage(context, data) {
            data == false ? 'pt': 'en'
            context.commit('setLanguage', data);
        },
        changeColorMoser(context, data){
            context.commit('setColorMoser', data);
        }
  },
})
