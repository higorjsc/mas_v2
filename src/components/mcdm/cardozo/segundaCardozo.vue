
<template>

    <main
        class="main-container-segunda-cardozo"
    >
        <!-- SEÇÃO DOS INPUTS -->
        <section
            class="slideres-container"
        >
            <!-- Titulo matriz em edição -->
            <h3 class="titulo-matriz-input">
            </h3>

            <div
                class="slider-container"
            >
                <vueSlider
                    v-for="(itemChildren, indexChildren) in sliderStore"
                    :key="indexChildren"
                    :id="`${indexChildren}`"
                    classe="0"
                    :texto="itemChildren.texto"
                    :valor="sliderStore[indexChildren].valor"
                    @slider-value="handleInputValue"
                />
            </div>

        </section>

        <!-- SEÇÃO DAS MATRIZES -->
        <section
            class="matrizes-container-segunda-cardozo"
        >

            <div
                class="matriz-container"
            >
                <h4
                    class="titulo-matriz"
                >
                    {{ $t('tituloMatrizSegundaEtapaAhp') }}
                </h4>

                <div
                    class="matriz-vetor-container"
                >
                    <vueMatriz
                        :optionMatriz="criteriosSegunda"
                        :valueMatriz="matrizValores"
                    />
                    <vueVetor
                        tituloVetor="PESO"
                        :valueVetor="vetorPeso()"
                    />
                    <vueConsistencia
                        :RI="consistencia('ri')"
                        :CI="consistencia('ci')"
                        :CR="consistencia('cr')"
                        :lambda="consistencia('lambda')"
                    />
                </div>
            </div>

        </section>

    </main>

</template>
<script>
import vueSlider from "@/components/compartilhado/sliderButton.vue"
import vueMatriz from "@/components/mcdm/compartilhado/matriz.vue"
import vueVetor from "@/components/mcdm/compartilhado/vetor.vue"
import vueConsistencia from "@/components/mcdm/compartilhado/consistencia.vue"
import { throttle } from "lodash"
import { RI } from "@/assets/javascript/globalConstants.js"

export default {
    name: "vue-segunda-etapa-cardozo",
    components: {
        vueSlider,
        vueMatriz,
        vueVetor,
        vueConsistencia
    },
    data() {
        return {
            sliderValue: [],
            sliderStore: [],
            vetorPesos: []
        }
    },
    computed: {
        matrizValores() {
            return this.$store.getters.currentMatrizSegunda
        },
        slideres() {
            return this.$store.getters.currentSlideresSegunda
        },
        criteriosSegunda() {
            return (this.$store.getters.currentCriteriosSegunda)
        },
        optionsSegunda() {
            return this.$store.getters.currentOptionsSegunda
        }
    },
    watch: {
    },
    created() {
        this.sliderStore = this.$store.getters.currentSlideresSegunda
        this.changeMatrix()
    },
    beforeUnmount() {
        this.$store.dispatch("changeSlideresSegunda", this.sliderStore)
        this.changeMatrix()
    },
    methods: {
        handleInputValue(value) {
            this.sliderStore[value[1]].valor = Number(value[2])
            const throttledDefineMatriz = throttle(this.changeMatrix, 50)
            throttledDefineMatriz()
        },
        matrizMaker() {
            const conveterEscala = (valorOriginal) => {
                const minDesejado = 1.00
                const maxDesejado = 9.00
                let minOriginal
                let maxOriginal
                if (valorOriginal > 50) {
                    minOriginal = 50
                    maxOriginal = 100
                } else {
                    minOriginal = 50
                    maxOriginal = 0
                }
                return (minDesejado + (((valorOriginal - minOriginal) / (maxOriginal - minOriginal)) * (maxDesejado - minDesejado)))
            }
            const dirValue = (key) => {
                const valor = key[0] === key[1] ? 1.00 : conveterEscala(this.sliderStore.find(item => item.id === key).valor)
                return valor.toFixed(0)
            }
            const invValue = (key) => {
                const valor = conveterEscala(this.sliderStore.find(item => item.id === key).valor)
                return (1 / valor).toFixed(2)
            }
            const matriz = []
            for (let i = 1; i <= this.criteriosSegunda.length; i++) {
                const linha = []
                for (let j = 1; j <= this.criteriosSegunda.length; j++) {
                    if (i <= j) {
                        linha.push(dirValue(`${i}${j}`))
                    } else {
                        linha.push(invValue(`${j}${i}`))
                    }
                }
                matriz.push(linha)
            }
            return matriz
        },
        changeMatrix() {
            let matrizSegunda = this.matrizMaker()
            matrizSegunda = this.calcula(matrizSegunda)
            this.$store.dispatch("changeMatrizSegunda", matrizSegunda)
        },
        calcula(matrizSegunda) {
            // Normalização da matriz
            const somaColunaMatriz = (matriz, col, jmax) => {
                let soma = 0
                for (let lin = 0; lin < jmax; lin++) {
                    soma += Number(matriz[lin][col])
                }
                return soma
            }
            const normalizaMatriz = () => {
                const matriz = []
                for (let lin = 0; lin < matrizSegunda.length; lin++) {
                    const linha = []
                    for (let col = 0; col < matrizSegunda[lin].length; col++) {
                        const celula = Number(matrizSegunda[lin][col]) / somaColunaMatriz(matrizSegunda, col, matrizSegunda.length)
                        linha.push(celula.toFixed(2))
                    }
                    matriz.push(linha)
                }
                return matriz
            }
            const normalizada = normalizaMatriz()
            // Cálculo do vetor peso
            const calculaPeso = () => {
                const vetor = []
                for (let lin = 0; lin < normalizada.length; lin++) {
                    vetor.push(
                        (normalizada[lin].reduce((acc, valor) => acc + parseFloat(valor), 0) / normalizada[lin].length).toFixed(2)
                    )
                }
                return vetor
            }
            const pesos = calculaPeso()

            // Cálculo do vetor WS
            const calculaWs = () => {
                const vetor = []
                for (let lin = 0; lin < matrizSegunda.length; lin++) {
                    const soma = []
                    for (let col = 0; col < matrizSegunda.length; col++) {
                        soma.push(Number(pesos[col]) * Number(matrizSegunda[lin][col]))
                    }
                    vetor.push(soma.reduce((acc, valor) => acc + valor, 0))
                }
                return vetor
            }
            const ws = calculaWs()

            // Cálculo do vetor consistencia
            const calculaConsistence = () => {
                const vetor = []
                for (let i = 0; i < pesos.length; i++) {
                    vetor.push(ws[i] / pesos[i])
                }
                return vetor
            }
            const consistence = calculaConsistence()

            // Cálculo do lambda
            const lambda = consistence.reduce((acc, valor) => acc + valor, 0) / consistence.length

            // Cálculo do CI
            const n = consistence.length - 1
            const consistenceIndex = (lambda - n) / (n - 1)

            // Cálculo do CR (RI importado de globalConstants.js)
            const consistenceRatio = consistenceIndex / (RI[n])

            // Armazenamento de valores calculados na matrizSegunda
            const armazenaCalculos = () => {
                const objeto = {
                    normalizada: normalizada,
                    pesos: pesos,
                    ws: ws,
                    cons: consistence,
                    lambda: lambda,
                    ci: consistenceRatio,
                    cr: consistenceRatio,
                    ri: RI[n],
                    n: n
                }
                return objeto
            }
            matrizSegunda.push(armazenaCalculos())
            return matrizSegunda
        },
        vetorPeso() {
            return (this.matrizValores[this.matrizValores.length - 1]["pesos"])
        },
        consistencia(item) {
            return (this.matrizValores[this.matrizValores.length - 1][item])
        }
    }
}
</script>
<style scoped>

    main{
        display: grid;
        grid-template-columns: 3fr 9fr;
        overflow: hidden;
        height: 100%;
    }
    main .slideres-container{
        grid-column: 1/2;
        width: 100%;
        border-right: var(--borda-simples);
        box-sizing: border-box;
        padding-left: 2%;
        padding-bottom: 10%;
        overflow: scroll;
        overflow-x: hidden;
    }
    .resultados-fluxograma-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h4{
        margin-top: 10px;
    }
    h3{
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        text-decoration: none;
        border: none;
        font-size: 14pt;
    }
    .matrizes-container-segunda-cardozo{
        width: 100%;
        display: flex;
        flex-direction: column;
        grid-column: 2/3;
        max-height: 700px;
        overflow: scroll;
        overflow-x: hidden;
        padding-bottom: 5%;
    }
    .matriz-container{
        margin: auto;
    }
    .matriz-vetor-container{
        display: flex;
        gap: 1px;
        margin: auto;
        width: 90%;
    }
    .slider-container{
        display: flex;
        flex-direction: column;
        width: 98%;
        height: 600px;
    }
    .titulo-matriz{
        text-align: center;
        margin-bottom: 10px;
    }

</style>
