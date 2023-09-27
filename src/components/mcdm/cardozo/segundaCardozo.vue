
<template>

    <main
        class="main-container-segunda"
    >
        <!-- SEÇÃO DOS INPUTS -->
        <section
            class="section-esquerda-segunda"
        >

            <div
                class="slider-container-segunda"
            >
                <vueSlider
                    v-for="(itemChildren, indexChildren) in sliderStore"
                    :key="indexChildren"
                    :id="`${indexChildren}`"
                    classe="0"
                    :name="`slider-0-${indexChildren+2}`"
                    :texto="itemChildren.texto"
                    :valor="sliderStore[indexChildren].valor"
                    @slider-value="handleInputValue"
                />
            </div>

        </section>

        <!-- SEÇÃO DAS MATRIZES -->
        <section
            class="section-direita-segunda"
        >
            <vueHelpAhp/>

            <div
                class="matriz-container-segunda"
            >
                <h4
                    class="titulo-matriz-segunda"
                >
                    {{ $t('tituloMatrizSegundaEtapaAhp') }}
                </h4>

                <div
                    class="matriz-vetor-container-segunda"
                >
                    <vueMatriz
                        idMatriz="matriz-segunda-etapa"
                        :optionMatriz="criteriosSegunda"
                        :valueMatriz="matrizValores"
                    />
                    <vueVetor
                        idVetor="matriz-segunda-etapa"
                        tituloVetor="Peso"
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
import vueHelpAhp from "@/components/mcdm/compartilhado/helpAhp.vue"
import calculoAhpMixin from "@/components/mcdm/compartilhado/mixins/calculoAhpMixin.vue"
import { throttle } from "lodash"
import { RI } from "@/assets/javascript/globalConstants.js"

export default {
    name: "vue-segunda-etapa-cardozo",
    components: {
        vueSlider,
        vueMatriz,
        vueVetor,
        vueConsistencia,
        vueHelpAhp
    },
    mixins:[
        calculoAhpMixin
    ],
    data() {
        return {
            sliderValue: [],
            sliderStore: [],
            vetorPesos: []
        }
    },
    computed: {
        matrizAtual() {
            return this.$store.getters.currentMatrizInputAtual
        },
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
    mounted() {
        this.$store.dispatch("changeMatrizInputAtual", "matriz-segunda-etapa")
        this.changeMatrixColor()
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
            this.hoverInput(value, "segunda")
            const throttledDefineMatriz = throttle(this.changeMatrix, 50)
            throttledDefineMatriz()
        },
        matrizMaker() {
            const dirValue = (key) => {
                const valor = key[0] === key[1] ? 1.00 : this.conveterEscala(this.sliderStore.find(item => item.id === key).valor)
                return valor.toFixed(2)
            }
            const invValue = (key) => {
                const valor = this.conveterEscala(this.sliderStore.find(item => item.id === key).valor)
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
            const n = consistence.length
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

    .resultados-fluxograma-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>