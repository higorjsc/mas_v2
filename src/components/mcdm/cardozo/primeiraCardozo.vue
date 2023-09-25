
<template>

    <main
        class="main-container-primeira-cardozo"
    >
        <!-- SEÇÃO DOS INPUTS -->
        <section
            class="slideres-container"
        >
            <!-- Titulo matriz em edição -->
            <h3 class="titulo-matriz-input">
                {{ alterarMatriz }}
            </h3>

            <!-- Resultados do fluxograma -->
            <div
                v-if="alterarMatriz==='Fluxograma'"
                class="resultados-fluxograma-container"
            >
                <select v-model="resultadoFluxograma">
                    <option value="">
                    </option><option value="poco">
                        {{ $t('resultadoShaftCardozo') }}
                    </option>
                    <option value="rampa">
                        {{ $t('resultadoRampaCardozo') }}
                    </option>
                    <option value="correia">
                        {{ $t('resultadoCorreiaCardozo') }}
                    </option>
                </select>
            </div>

            <div
                v-for="(itemParent, indexParent) in criteriosPrimeira"
                :key="indexParent"
            >
                <div
                    v-if="itemParent === alterarMatriz"
                    class="slider-container"
                >
                    <vueSlider
                        v-for="(itemChildren, indexChildren) in sliderStore[0]"
                        :key="indexChildren"
                        :id="`${indexChildren}`"
                        :classe="`${indexParent}`"
                        :texto="itemChildren.texto"
                        :valor="sliderStore[indexParent][indexChildren].valor"
                        @slider-value="handleInputValue"
                    />
                </div>

            </div>
        </section>

        <!-- SEÇÃO DAS MATRIZES -->
        <section
            class="matrizes-container-primeira-cardozo"
        >
            <div
                class="matriz-container"
            >
                <h4
                    class="titulo-matriz"
                >
                    {{ $t('matrizFluxogramaCardozo') }}
                </h4>

                <div
                    class="matriz-vetor-container"
                >
                    <vueMatriz
                        :optionMatriz="optionsPrimeira"
                        :valueMatriz="resultadoMatrizFluxograma"
                        @click="trocaMatrizInputAtual('Fluxograma')"
                    />
                    <vueVetor
                        tituloVetor="PESO"
                        :valueVetor="vetorPeso(0)"
                        @click="trocaMatrizInputAtual(itemCriterio)"
                    />
                    <vueConsistencia
                        :RI="consistencia(0, 'ri')"
                        :CI="consistencia(0, 'ci')"
                        :CR="consistencia(0, 'cr')"
                        :lambda="consistencia(0, 'lambda')"
                    />
                </div>
            </div>

            <div
                class="matriz-container"
                v-for="(itemCriterio, indexMatriz) in criteriosPrimeira"
                :key="indexMatriz"
            >
                <h4
                    class="titulo-matriz"
                >
                    {{ itemCriterio }}
                </h4>

                <div
                    class="matriz-vetor-container"
                >
                    <vueMatriz
                        :optionMatriz="optionsPrimeira"
                        :valueMatriz="matrizValores[indexMatriz+1]"
                        @click="trocaMatrizInputAtual(itemCriterio)"
                    />
                    <vueVetor
                        tituloVetor="PESO"
                        :valueVetor="vetorPeso(indexMatriz+1)"
                        @click="trocaMatrizInputAtual(itemCriterio)"
                    />
                    <vueConsistencia
                        :RI="consistencia(indexMatriz+1, 'ri')"
                        :CI="consistencia(indexMatriz+1, 'ci')"
                        :CR="consistencia(indexMatriz+1, 'cr')"
                        :lambda="consistencia(indexMatriz+1, 'lambda')"
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
    name: "vue-primeira-etapa-cardozo",
    components: {
        vueSlider,
        vueMatriz,
        vueVetor,
        vueConsistencia
    },
    data() {
        return {
            resultadoFluxograma: "rampa",
            sliderValue: [],
            sliderStore: [],
            vetorPesos: [],
            matrizFluxograma: {
                poco: [
                    [1.00, 3.00, 3.00, 5.00],
                    [0.33, 1.00, 1.00, 2.00],
                    [0.33, 1.00, 1.00, 2.00],
                    [0.20, 0.50, 0.50, 1.00]
                ],
                rampa: [
                    [1.00, 0.33, 0.33, 2.00],
                    [3.00, 1.00, 1.00, 5.00],
                    [3.00, 1.00, 1.00, 5.00],
                    [0.50, 0.20, 0.20, 1.00]
                ],
                correia: [
                    [1.00, 1.00, 1.00, 0.14],
                    [1.00, 1.00, 1.00, 0.14],
                    [1.00, 1.00, 1.00, 0.14],
                    [7.00, 7.00, 7.00, 1.00]
                ]
            }
        }
    },
    computed: {
        alterarMatriz() {
            return this.$store.getters.currentMatrizInputAtual
        },
        matrizValores() {
            return this.$store.getters.currentMatrizPrimeira
        },
        slideres() {
            return this.$store.getters.currentSlideresPrimeira
        },
        resultadoMatrizFluxograma() {
            return this.matrizFluxograma[this.resultadoFluxograma]
        },
        criteriosPrimeira() {
            return this.$store.getters.currentCriteriosPrimeira
        },
        optionsPrimeira() {
            return this.$store.getters.currentOptionsPrimeira
        }
    },
    watch: {
        resultadoFluxograma() {
            this.handleResultadoFluxograma()
        }
    },
    created() {
        this.sliderStore = this.$store.getters.currentSlideresPrimeira
        this.changeMatrix()
        this.$store.dispatch("changeMatrizInputAtual", this.criteriosPrimeira[0])
    },
    beforeUnmount() {
        this.$store.dispatch("changeSlideresPrimeira", this.sliderStore)
        this.changeMatrix()
    },
    methods: {
        handleResultadoFluxograma() {
            this.changeMatrix()
        },
        trocaMatrizInputAtual(matrizName) {
            this.$store.dispatch("changeMatrizInputAtual", matrizName)
            this.$store.dispatch("changeSlideresPrimeira", this.sliderStore)
        },
        handleInputValue(value) {
            this.sliderStore[value[0]][value[1]].valor = Number(value[2])
            const throttledDefineMatriz = throttle(this.changeMatrix, 50)
            throttledDefineMatriz()
        },
        matrizMaker(index) {
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
                const valor = key[0] === key[1] ? 1.00 : conveterEscala(this.sliderStore[index].find(item => item.id === key).valor)
                return valor.toFixed(0)
            }
            const invValue = (key) => {
                const valor = conveterEscala(this.sliderStore[index].find(item => item.id === key).valor)
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
            matrizPrimeira.push(this.resultadoMatrizFluxograma)
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
            const n = consistence.length - 1
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
            return (this.matrizValores[index][this.matrizValores.length - 1]["pesos"])
        },
        consistencia(index, item) {
            // console.log(this.matrizValores[index][this.matrizValores.length - 1][item])
            return (this.matrizValores[index][this.matrizValores.length - 1][item])
        }
    }
}
</script>
<style scoped>

    main{
        display: grid;
        grid-template-columns: 3fr 9fr;
        overflow: hidden;
    }
    main .slideres-container{
        display: block;
        grid-column: 1/2;
        width: 100%;
        border-right: var(--borda-simples);
        box-sizing: border-box;
        padding-left: 2%;
    }
    .slider-container{
        display: flex;
        flex-direction: column;
        width: 98%;
        height: 600px;
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
    .matrizes-container-primeira-cardozo{
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
    }
    .titulo-matriz{
        text-align: center;
        margin-bottom: 10px;
    }

</style>