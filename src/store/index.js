import { createStore } from 'vuex'
import { coresDefault } from '@/assets/javascript/constants.js'

export default createStore({
    state: {
        language: 'pt', // Idioma padrão
        inputsAcessos:{
            moser:{
                logistica: '',
                rockMass: '',
                surfaceMaterial: '',
                openPit: '',
                prod: '',
                depth: '',
                resultado: '',
            }, 
            cardozo:{
                surfaceMaterial: '',
                rockMass: '',
                prod: '',
                depth: '',
                resultado:'',
            },
            vergne:{
                surfaceMaterial: '',
                rockMass: '',
                prod: '',
                depth: '',
                resultado:'',
            },
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
        },
        ilustrations:{
            orebody: true,
            superficie: true,
            superficie_pit: false,
            ventilacao: true,
            usina: true,
            shaft: true,
            rampa: true,
            rampa_pit: true,
            truck: true,
            correia: false,
        }
    },
     mutations: {
        setLanguage(state, data) {
            state.language = data
        },
        setInputsAcessosMoser(state, data) {
            state.inputsAcessos.moser = data
        },
        setInputsAcessosCardozo(state, data) {
            state.inputsAcessos.cardozo = data
        },
        setInputsAcessosVergne(state, data) {
            state.inputsAcessos.vergne = data
        },
        setColorMoser(state, data) {
            state.color.moser = data
        },
        setColorCardozo(state, data) {
            state.color.cardozo = data
        },
        setColorVergne(state, data) {
            state.color.vergne = data
        },
        setIlustrations(state, data) {
            state.ilustrations = data
        },
    },
    getters: {
        currentLanguage(state) {
            return state.language
        },
        currentInputsAcesso(state){
            return state.inputsAcessos
        },
        currentColor(state){
            return state.color
        },
        currentIlustrations(state){
            return state.ilustrations
        }
    },
    actions: {
        changeLanguage(context, data) {
            data == false ? 'pt': 'en'
            context.commit('setLanguage', data)
        },
        changeInputsAcessosCardozo(context, data){
            context.commit('setInputsAcessosCardozo', data)
        },
        changeInputsAcessosVergne(context, data){
            context.commit('setInputsAcessosVergne', data)
        },
        changeInputsAcessosMoser(context, data){
            context.commit('setInputsAcessosMoser', data)
        },
        changeColorMoser(context, data){
            context.commit('setColorMoser', data)
        },
        changeColorCardozo(context, data){
            context.commit('setColorCardozo', data)
        },
        changeColorVergne(context, data){
            context.commit('setColorVergne', data)
        },
        changeIlustrations(context, data){
            context.commit('setIlustrations', data)
        }
  },
})
