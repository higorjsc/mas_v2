import { createStore } from 'vuex'
import { coresDefault } from '@/assets/javascript/constants.js'

export default createStore({
    state: {
        language: 'pt', // Idioma padrão
        moser:{
            logistica: '',
            rockMass: '',
            surfaceMaterial: '',
            openPit: '',
            prod: '',
            depth: '',
        }, 
        colorMoser: {
            logistica: coresDefault.fluxoGreen,
            rockMass: 'white',
            surfaceMaterial: 'white',
            openPit: 'white',
            prodCenter: 'white',
            prodLeft: 'white',
            depthCenter: 'white',
            depthLeft: 'white',
            rampa: coresDefault.fluxoBlue,
            shaft: coresDefault.fluxoBlue,
        }, 
        cardozo:{
            surfaceMaterial: '',
            rockMass: '',
            prod: '',
            depth: '',
        },
        colorCardozo: {
            start: coresDefault.fluxoGreen,
            rockMass: 'white',
            surfaceMaterial: 'white',
            prodCenter: 'white',
            prodLeft: 'white',
            depthCenter: 'white',
            depthLeft: 'white',
            correia: coresDefault.fluxoBlue,
            rampa: coresDefault.fluxoBlue,
            shaft: coresDefault.fluxoBlue,
        },
         
    },
     mutations: {
        setLanguage(state, data) {
            state.language = data;
        },
        setMoser(state, data) {
            state.moser = data;
        },
        setCardozo(state, data) {
            state.cardozo = data;
        },
        setColorMoser(state, data) {
            state.colorMoser = data;
        },
        setColorCardozo(state, data) {
            state.colorCardozo = data;
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
        currentColorCardozo(state){
            return state.colorCardozo
        },
    },
    actions: {
        changeLanguage(context, data) {
            data == false ? 'pt': 'en'
            context.commit('setLanguage', data);
        },
        changeColorMoser(context, data){
            context.commit('setColorMoser', data);
        },
        changeColorCardozo(context, data){
            context.commit('setColorCardozo', data);
        }
  },
})
