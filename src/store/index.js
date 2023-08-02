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
        cardozo:{
            surfaceMaterial: '',
            rockMass: '',
            prod: '',
            depth: '',
        },
        vergne:{
            surfaceMaterial: '',
            rockMass: '',
            prod: '',
            depth: '',
        },
        color:{
            cardozo: {
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
            vergne: {
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
            moser: {
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
        }
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
        setVergne(state, data) {
            state.vergne = data;
        },
        setColorMoser(state, data) {
            state.color.moser = data;
        },
        setColorCardozo(state, data) {
            state.color.cardozo = data;
        },
        setColorVergne(state, data) {
            state.color.vergne = data;
        },
    },
    getters: {
        currentLanguage(state) {
            return state.language;
        },
        currentMoser(state){
            return state.moser
        },
        currentCardozo(state){
            return state.cardozo
        },
        currentVergne(state){
            return state.vergne
        },
        currentColor(state){
            return state.color
        }, 
        currentColorMoser(state){
            return state.color.moser
        },
        currentColorCardozo(state){
            return state.color.cardozo
        },
        currentColorVergne(state){
            return state.color.vergne
        },
    },
    actions: {
        changeLanguage(context, data) {
            data == false ? 'pt': 'en'
            context.commit('setLanguage', data);
        },
        changeMoser(state){
            return state.moser
        },
        changeCardozo(state){
            return state.cardozo
        },
        changeVergne(state){
            return state.vergne
        },
        changeColorMoser(context, data){
            context.commit('setColorMoser', data);
        },
        changeColorCardozo(context, data){
            context.commit('setColorCardozo', data);
        },
        changeColorVergne(context, data){
            context.commit('setColorVergne', data);
        }
  },
})
