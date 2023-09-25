import { createStore } from "vuex"
import { TEMAS, CORES } from "@/assets/javascript/globalConstants.js"

// const fluxoRed  ='rgba(31, 191, 219, 0.493)'
// const fluxoGreen = 'rgba(14, 224, 49, 0.8)'
// const fluxoBlue  ='rgba(31, 191, 219, 0.493)'

export default createStore({
    state: {
        application: "metodoAcesso",
        language: "pt", // Idioma padrão
        resultado: "", // resultado do fluxograma de escolha de acessos
        metodo: "", // Metodo/view atual
        popUp: null, // popUp aberto (null = nenhum)
        balao: "", // Variável de texto do balao help
        matrizInputAtual: "",
        templateMcdm: "",
        slideresPrimeira: [],
        slideresSegunda: [],
        matrizPrimeira: [],
        matrizSegunda: [],
        inputsAcessos: {
            moser: {
                logistica: "",
                rockMass: "",
                surfaceMaterial: "",
                openPit: "",
                prod: "",
                depth: ""
            },
            cardozo: {
                surfaceMaterial: "",
                rockMass: "",
                prod: "",
                depth: ""
            },
            vergne: {
                surfaceMaterial: "",
                rockMass: "",
                prod: "",
                depth: ""
            }
        },
        criteriosPrimeira: [
        ],
        optionsPrimeira: [
        ],
        criteriosSegunda: [
        ],
        optionsSegunda: [
        ],
        tema: {
            temaMAS: TEMAS.temaVermelho,
            temaMMS: TEMAS.temaVermelho
        },
        color: {
            start: CORES.fluxoVerde,
            logistica: CORES.fluxoVerde,
            rockMass: "white",
            surfaceMaterial: "white",
            openPit: "white",
            prodCenter: "white",
            prodLeft: "white",
            depthCenter: "white",
            depthLeft: "white",
            correia: CORES.fluxoAzul,
            rampa: CORES.fluxoAzul,
            shaft: CORES.fluxoAzul
        },
        ilustrations: {
            orebody: true,
            superficie: true,
            superficiePit: false,
            ventilacao: true,
            usina: true,
            shaft: false,
            rampa: false,
            rampaPit: false,
            truck: false,
            correia: false
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
        setCriteriosPrimeira(state, data) {
            state.criterios = data
        },
        setOptionsPrimeira(state, data) {
            state.options = data
        },
        setCriteriosSegunda(state, data) {
            state.criteriosSegunda = data
        },
        setOptionsSegunda(state, data) {
            state.optionsSegunda = data
        },
        setMatrizInputAtual(state, data) {
            state.matrizInputAtual = data
        },
        setTemplateMcdm(state, data) {
            state.templateMcdm = data
        },
        setSlideresPrimeira(state, data) {
            state.slideresPrimeira = data
        },
        setMatrizPrimeira(state, data) {
            state.matrizPrimeira = data
        },
        setSlideresSegunda(state, data) {
            state.slideresSegunda = data
        },
        setMatrizSegunda(state, data) {
            state.matrizSegunda = data
        }
    },
    getters: {
        currentLanguage(state) {
            return state.language
        },
        currentInputsAcesso(state) {
            return state.inputsAcessos
        },
        currentColor(state) {
            return state.color
        },
        currentIlustrations(state) {
            return state.ilustrations
        },
        currentResultado(state) {
            return state.resultado
        },
        currentMetodo(state) {
            return state.metodo
        },
        currentTemaMAS(state) {
            return state.temaMAS
        },
        currentTemaMMS(state) {
            return state.temaMMS
        },
        currentBalao(state) {
            return state.balao
        },
        currentPopUp(state) {
            return state.popUp
        },
        currentApplication(state) {
            return state.application
        },
        currentCriteriosPrimeira(state) {
            return state.criterios
        },
        currentOptionsPrimeira(state) {
            return state.options
        },
        currentCriteriosSegunda(state) {
            return state.criteriosSegunda
        },
        currentOptionsSegunda(state) {
            return state.optionsSegunda
        },
        currentMatrizInputAtual(state) {
            return state.matrizInputAtual
        },
        currentTemplateMcdm(state) {
            return state.templateMcdm
        },
        currentSlideresPrimeira(state) {
            return state.slideresPrimeira
        },
        currentSlideresSegunda(state) {
            return state.slideresSegunda
        },
        currentMatrizPrimeira(state) {
            return state.matrizPrimeira
        },
        currentMatrizSegunda(state) {
            return state.matrizSegunda
        }
    },
    actions: {
        changeLanguage(context, data) {
            context.commit("setLanguage", data)
        },
        changeInputsAcessosCardozo(context, data) {
            context.commit("setInputsAcessosCardozo", data)
        },
        changeInputsAcessosVergne(context, data) {
            context.commit("setInputsAcessosVergne", data)
        },
        changeInputsAcessosMoser(context, data) {
            context.commit("setInputsAcessosMoser", data)
        },
        changeColor(context, data) {
            context.commit("setColor", data)
        },
        changeIlustrations(context, data) {
            context.commit("setIlustrations", data)
        },
        changeResultado(context, data) {
            context.commit("setResultado", data)
        },
        changeMetodo(context, data) {
            context.commit("setMetodo", data)
        },
        changeBalao(context, data) {
            context.commit("setBalao", data)
        },
        changePopUp(context, data) {
            context.commit("setPopUp", data)
        },
        changeCriteriosPrimeira(context, data) {
            context.commit("setCriteriosPrimeira", data)
        },
        changeOptionsPrimeira(context, data) {
            context.commit("setOptionsPrimeira", data)
        },
        changeCriteriosSegunda(context, data) {
            context.commit("setCriteriosSegunda", data)
        },
        changeOptionsSegunda(context, data) {
            context.commit("setOptionsSegunda", data)
        },
        changeMatrizInputAtual(context, data) {
            context.commit("setMatrizInputAtual", data)
        },
        changeTemplateMcdm(context, data) {
            context.commit("setTemplateMcdm", data)
        },
        changeSlideresPrimeira(context, data) {
            context.commit("setSlideresPrimeira", data)
        },
        changeSlideresSegunda(context, data) {
            context.commit("setSlideresSegunda", data)
        },
        changeMatrizPrimeira(context, data) {
            context.commit("setMatrizPrimeira", data)
        },
        changeMatrizSegunda(context, data) {
            context.commit("setMatrizSegunda", data)
        }
    }
})