import { createStore } from "vuex"

export default createStore({
    state: {
        application: "metodoAcesso",
        language: "pt", // Idioma padrão
        resultado: "", // resultado do fluxograma de escolha de acessos
        metodo: "", // Metodo/view atual
        popUp: null, // popUp aberto (null = nenhum)
        balao: "", // Variável de texto do balao help
        matrizInputAtual: "Fluxograma",
        templateMcdm: "",
        matrizesPreDefinidas: [
            [ //fluxograma poco 0
                [1.00, 3.00, 3.00, 5.00],
                [0.33, 1.00, 1.00, 2.00],
                [0.33, 1.00, 1.00, 2.00],
                [0.20, 0.50, 0.50, 1.00]
            ],
            [], //Aval. Economica 1
            [ //risco energetico baixo 2
                [1.00, 7.00, 3.00, 0.33],
                [0.14, 1.00, 0.11, 0.11],
                [0.33, 9.00, 1.00, 0.11],
                [3.00, 9.00, 9.00, 1.00]
            ],
            [ //emissao 3
                [1.00, 5.00, 0.20, 0.33],
                [0.20, 1.00, 0.14, 0.14],
                [5.00, 7.00, 1.00, 2.00],
                [3.00, 7.00, 0.50, 1.00]
            ],
            [ //risco social baixo 4
                [1.00, 1.00, 1.00, 1.00],
                [1.00, 1.00, 1.00, 1.00],
                [1.00, 1.00, 1.00, 1.00],
                [1.00, 1.00, 1.00, 1.00]
            ]
        ],
        slideresPrimeira: [],
        slideresSegunda: [],
        matrizPrimeira: [],
        matrizSegunda: [],
        viewProgress: 1,
        tabViewAtual: null,
        inputsAcessos: {
            moser: {},
            cardozo: {},
            vergne: {}
        },
        criteriosPrimeira: [],
        optionsPrimeira: [],
        criteriosSegunda: [],
        optionsSegunda: [],
        tema: {},
        color: {},
        fontColor: {},
        ilustrations: {}
    },
    mutations: {
        setLanguage(state, data) {
            state.language = data
        },
        setColor(state, data) {
            state.color = data
        },
        setFontColor(state, data) {
            state.fontColor = data
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
        },
        setViewProgress(state, data) {
            state.viewProgress = data
        },
        setTabViewAtual(state, data) {
            state.tabViewAtual = data
        },
        setMatrizesPreDefinidas(state, { index, data }) {
            state.matrizesPreDefinidas[index] = data
        },
        setInputsAcessos(state, { metodo, data }) {
            state.inputsAcessos[metodo] = data
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
        currentFontColor(state) {
            return state.fontColor
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
        },
        currentViewProgress(state) {
            return state.viewProgress
        },
        currentTabViewAtual(state) {
            return state.tabViewAtual
        },
        currentMatrizesPreDefinidas(state) {
            return state.matrizesPreDefinidas
        }
    },
    actions: {
        changeLanguage(context, data) {
            context.commit("setLanguage", data)
        },
        changeColor(context, data) {
            context.commit("setColor", data)
        },
        changeFontColor(context, data) {
            context.commit("setFontColor", data)
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
        },
        changeViewProgress(context, data) {
            context.commit("setViewProgress", data)
        },
        changeTabViewAtual(context, data) {
            context.commit("setTabViewAtual", data)
        },
        changeMatrizesPreDefinidas(context, { index, data }) {
            context.commit("setMatrizesPreDefinidas", { index, data })
        },
        changeInputsAcessos(context, { metodo, data }) {
            context.commit("setInputsAcessos", { metodo, data })
        }
    }
})