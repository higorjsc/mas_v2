
<template>

    <main
        class="main-container-primeira"
    >
        <!-- SEÇÃO DOS INPUTS -->
        <section
            class="section-esquerda-primeira"
        >
            <!-- Titulo matriz em edição -->
            <h3 class="titulo-matriz-input-primeira">
                {{ matrizAtual }}
            </h3>

            <div
                v-for="(itemParent, indexParent) in criteriosPrimeira"
                :key="indexParent"
            >
                <div
                    v-if="itemParent === matrizAtual"
                    class="slider-container-primeira"
                >
                    <vueSlider
                        v-for="(itemChildren, indexChildren) in sliderStore[0]"
                        :key="indexChildren"
                        :id="`${indexChildren}`"
                        :classe="`${indexParent}`"
                        :name="`slider-${indexParent+1}-${indexChildren+2}`"
                        :texto="itemChildren.texto"
                        :valor="sliderStore[indexParent][indexChildren].valor"
                        @slider-value="handleInputValue"
                    />
                </div>

            </div>
        </section>

        <!-- SEÇÃO DAS MATRIZES -->
        <section
            class="section-direita-primeira"
        >
            <vueHelpAhp/>
            <div
                class="matriz-container-primeira"
                v-for="(itemCriterio, indexMatriz) in criteriosPrimeira"
                :key="indexMatriz"
            >
                <h4
                    class="titulo-matriz-primeira"
                >
                    {{ itemCriterio }}
                </h4>

                <div
                    class="matriz-vetor-container-primeira"
                >
                    <vueMatriz
                        :idMatriz="itemCriterio"
                        :optionMatriz="optionsPrimeira"
                        :valueMatriz="matrizValores[indexMatriz]"
                        @click="trocaMatrizInputAtual(itemCriterio)"
                    />
                    <vueVetor
                        tituloVetor="Peso"
                        :idVetor="itemCriterio"
                        :valueVetor="vetorPeso(indexMatriz)"
                        @click="trocaMatrizInputAtual(itemCriterio)"
                    />
                    <vueConsistencia
                        :RI="consistencia(indexMatriz, 'ri')"
                        :CI="consistencia(indexMatriz, 'ci')"
                        :CR="consistencia(indexMatriz, 'cr')"
                        :lambda="consistencia(indexMatriz, 'lambda')"
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
import calculoAhpMixin from "@/components/mcdm/compartilhado/mixins/calculoAhpMixin.vue"
import { throttle } from "lodash"
import { RI } from "@/assets/javascript/globalConstants.js"
import vueHelpAhp from "@/components/mcdm/compartilhado/helpAhp.vue"


export default {
    name: "vue-primeira-etapa",
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
            return this.$store.getters.currentMatrizPrimeira
        },
        slideres() {
            return this.$store.getters.currentSlideresPrimeira
        },
        criteriosPrimeira() {
            return this.$store.getters.currentCriteriosPrimeira
        },
        optionsPrimeira() {
            return this.$store.getters.currentOptionsPrimeira
        }
    },
    created() {
        this.sliderStore = this.$store.getters.currentSlideresPrimeira
        this.changeMatrix()
        // Define a matriz em edição no loading
        this.$store.dispatch("changeMatrizInputAtual", this.criteriosPrimeira[0])
    },
    mounted() {
        this.changeMatrixColor()
    },
    beforeUnmount() {
        this.$store.dispatch("changeSlideresPrimeira", this.sliderStore)
        this.changeMatrix()
    },
    methods: {
        trocaMatrizInputAtual(matrizName) {
            this.$store.dispatch("changeMatrizInputAtual", matrizName)
            this.$store.dispatch("changeSlideresPrimeira", this.sliderStore)
            this.changeMatrixColor(matrizName)
        },
        handleInputValue(value) {
            this.sliderStore[value[0]][value[1]].valor = Number(value[2])
            this.hoverInput(value)
            const throttledDefineMatriz = throttle(this.changeMatrix, 50)
            throttledDefineMatriz()
        },
        matrizMaker(index) {
            const dirValue = (key) => {
                const valor = key[0] === key[1] ? 1.00 : this.conveterEscala(this.sliderStore[index].find(item => item.id === key).valor)
                return valor.toFixed(2)
            }
            const invValue = (key) => {
                const valor = this.conveterEscala(this.sliderStore[index].find(item => item.id === key).valor)
                return (1 / valor).toFixed(2)
            }
            const matriz = []
            for (let i = 1; i <= this.optionsPrimeira.length; i++) {
                const linha = []
                for (let j = 1; j <= this.optionsPrimeira.length; j++) {
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
            let matrizPrimeira = []
            for (let i = 0; i < this.criteriosPrimeira.length; i++) {
                matrizPrimeira.push(this.matrizMaker(i))
            }
            matrizPrimeira = this.calcula(matrizPrimeira)
            this.$store.dispatch("changeMatrizPrimeira", matrizPrimeira)
        },
        calcula(matrizPrimeira) {
            // Normalização da matriz
            const somaColunaMatriz = (matriz, col, jmax) => {
                let soma = 0
                for (let lin = 0; lin < jmax; lin++) {
                    soma += Number(matriz[lin][col])
                }
                return soma
            }
            const normalizaMatriz = (index) => {
                const matriz = []
                for (let lin = 0; lin < matrizPrimeira[index].length; lin++) {
                    const linha = []
                    for (let col = 0; col < matrizPrimeira[index][lin].length; col++) {
                        const celula = Number(matrizPrimeira[index][lin][col]) / somaColunaMatriz(matrizPrimeira[index], col, matrizPrimeira[index].length)
                        linha.push(celula.toFixed(2))
                    }
                    matriz.push(linha)
                }
                return matriz
            }
            const normalizada = []
            for (let i = 0; i < matrizPrimeira.length; i++) {
                normalizada.push(normalizaMatriz(i))
            }
            // Cálculo do vetor peso
            const calculaPeso = (index) => {
                const vetor = []
                for (let lin = 0; lin < normalizada[index].length; lin++) {
                    vetor.push(
                        (normalizada[index][lin].reduce((acc, valor) => acc + parseFloat(valor), 0) / normalizada[index][lin].length).toFixed(2)
                    )
                }
                return vetor
            }
            const pesos = []
            for (let i = 0; i < normalizada.length; i++) {
                pesos.push(calculaPeso(i))
            }
            // Cálculo do vetor WS
            const calculaWs = (index) => {
                const vetor = []
                for (let lin = 0; lin < matrizPrimeira[index].length; lin++) {
                    const soma = []
                    for (let col = 0; col < matrizPrimeira[index].length; col++) {
                        soma.push(Number(pesos[index][col]) * Number(matrizPrimeira[index][lin][col]))
                    }
                    vetor.push(soma.reduce((acc, valor) => acc + valor, 0))
                }
                return vetor
            }
            const ws = []
            for (let i = 0; i < matrizPrimeira.length; i++) {
                ws.push(calculaWs(i))
            }
            // Cálculo do vetor consistencia
            const calculaConsistence = (index) => {
                const vetor = []
                for (let i = 0; i < pesos[index].length; i++) {
                    vetor.push(ws[index][i] / pesos[index][i])
                }
                return vetor
            }
            const consistence = []
            for (let i = 0; i < pesos.length; i++) {
                consistence.push(calculaConsistence(i))
            }
            // Cálculo do lambda
            const lambda = []
            for (let i = 0; i < consistence.length; i++) {
                lambda.push(
                    consistence[i].reduce((acc, valor) => acc + valor, 0) / consistence[i].length
                )
            }
            // Cálculo do CI
            const consistenceIndex = []
            const n = consistence.length
            for (let i = 0; i < consistence.length; i++) {
                consistenceIndex.push(
                    (lambda[i] - n) / (n - 1)
                )
            }
            // Cálculo do CR (RI importado de globalConstants.js)
            const consistenceRatio = []
            for (let i = 0; i < consistence.length; i++) {
                consistenceRatio.push(
                    consistenceIndex[i] / (RI[n])
                )
            }
            // Armazenamento de valores calculados na matrizPrimeira
            const armazenaCalculos = (index) => {
                const objeto = {
                    normalizada: normalizada[index],
                    pesos: pesos[index],
                    ws: ws[index],
                    cons: consistence[index],
                    lambda: lambda[index],
                    ci: consistenceRatio[index],
                    cr: consistenceRatio[index],
                    ri: RI[n],
                    n: n
                }
                return objeto
            }
            for (let index = 0; index < matrizPrimeira.length; index++) {
                matrizPrimeira[index].push(armazenaCalculos(index))
            }
            return matrizPrimeira
        },
        vetorPeso(index) {
            return (this.matrizValores[index][this.matrizValores[index].length - 1]["pesos"])
        },
        consistencia(index, item) {
            return (this.matrizValores[index][this.matrizValores[index].length - 1][item])
        }
    }
}
</script>
<style scoped>


</style>