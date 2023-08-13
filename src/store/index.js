import { createStore } from 'vuex'
import { TEMAS, CORES } from '@/assets/javascript/globalConstants.js'

// const fluxoRed  ='rgba(31, 191, 219, 0.493)'
// const fluxoGreen = 'rgba(14, 224, 49, 0.8)'
// const fluxoBlue  ='rgba(31, 191, 219, 0.493)'

export default createStore({
    state: {
        language: 'pt', // Idioma padrão
        resultado: '', // resultado do fluxograma de escolha de acessos
        metodo: '', // Metodo/view atual 
        popUp: null, // popUp aberto (null = nenhum)
        balao: '', // Variável de texto do balao help 
        inputsAcessos:{
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
        },
        temaMAS: TEMAS.temaVermelho,
        temaMMS: TEMAS.temaVermelho,
        color:{
            start: CORES.fluxoVerde,
            logistica: CORES.fluxoVerde,
            rockMass: 'white',
            surfaceMaterial: 'white',
            openPit: 'white',
            prodCenter: 'white',
            prodLeft: 'white',
            depthCenter: 'white',
            depthLeft: 'white',
            correia: CORES.fluxoAzul,
            rampa: CORES.fluxoAzul,
            shaft: CORES.fluxoAzul,
        },
        ilustrations:{
            orebody: true,
            superficie: true,
            superficie_pit: false,
            ventilacao: true,
            usina: true,
            shaft: false,
            rampa: false,
            rampa_pit: false,
            truck: false,
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
        setColor(state, data) {
            state.color = data
        },
        setIlustrations(state, data) {
            state.ilustrations = data
        },
        setResultado(state, data) {
            state.resultado = data
        },
        setMetodo(state, data) {
            state.metodo = data
        },
        setBalao(state, data) {
            state.balao = data
        },        
        setPopUp(state, data) {
            state.popUp = data
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
        },
        currentResultado(state){
            return state.resultado
        },
        currentMetodo(state){
            return state.metodo
        },
        currentTemaMAS(state){
            return state.temaMAS
        },
        currentTemaMMS(state){
            return state.temaMMS
        },
        currentBalao(state){
            return state.balao
        },
        currentPopUp(state){
            return state.popUp
        }
    },
    actions: {
        changeLanguage(context, data) {
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
        changeColor(context, data){
            context.commit('setColor', data)
        },
        changeIlustrations(context, data){
            context.commit('setIlustrations', data)
        },
        changeResultado(context, data){
            context.commit('setResultado', data)
        },
        changeMetodo(context, data){
            context.commit('setMetodo', data)
        },
        changeBalao(context, data){
            context.commit('setBalao', data)
        },
        changePopUp(context, data){
            context.commit('setPopUp', data)
        }
  },
})
