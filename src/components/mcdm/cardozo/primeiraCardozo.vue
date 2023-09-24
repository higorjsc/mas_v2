
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
                v-for="(itemParent, indexParent) in criterios"
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
                        :optionMatriz="options"
                        :valueMatriz="resultadoMatrizFluxograma"
                        @click="trocaMatrizInputAtual('Fluxograma')"
                    />
                    <vueVetor
                        tituloVetor="PESO"
                        :valueVetor="[1,1,1,1]"
                        @click="trocaMatrizInputAtual(itemCriterio)"
                    />
                </div>
            </div>

            <div
                class="matriz-container"
                v-for="(itemCriterio, indexMatriz) in criterios"
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
                        :optionMatriz="options"
                        :valueMatriz="matrizValores[indexMatriz+1]"
                        @click="trocaMatrizInputAtual(itemCriterio)"
                    />
                    <vueVetor
                        tituloVetor="PESO"
                        :valueVetor="[1,1,1,1]"
                        @click="trocaMatrizInputAtual(itemCriterio)"
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
import { throttle } from "lodash"

export default {
    name: "vue-primeira-etapa-cardozo",
    components: {
        vueSlider,
        vueMatriz,
        vueVetor
    },
    data() {
        return {
            resultadoFluxograma: "rampa",
            sliderValue: [],
            sliderStore: [],
            options: [
                "Poço",
                "R. Diesel",
                "R. Elétrico",
                "Correia"
            ],
            criterios: [
                "Aval. Econômica",
                "Risco Energético",
                "Custo Ambiental",
                "Social"
            ],
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
            },
            slideresCardozo: [
                {
                    id: "12",
                    texto: "Poço vs R. Diesel",
                    valor: 50
                },
                {
                    id: "13",
                    texto: "Poço vs R. Elétrico",
                    valor: 50
                },
                {
                    id: "14",
                    texto: "Poço vs R. Correia",
                    valor: 50
                },
                {
                    id: "23",
                    texto: "R. Diesel vs R. Elétrico",
                    valor: 50
                },
                {
                    id: "24",
                    texto: "R. Diesel vs R. Correia",
                    valor: 50
                },
                {
                    id: "34",
                    texto: "R. Elétrico vs R. Correia",
                    valor: 50
                }
            ]
        }
    },
    computed: {
        alterarMatriz() {
            return this.$store.getters.currentMatrizInputAtual
        },
        matrizValores() {
            return this.$store.getters.currentFinalMatrix
        },
        slideres() {
            return this.$store.getters.currentSlideres
        },
        resultadoMatrizFluxograma() {
            return this.matrizFluxograma[this.resultadoFluxograma]
        }
    },
    watch: {
        resultadoFluxograma() {
            this.handleResultadoFluxograma()
        }
    },
    created() {
        this.criaSlideres()
        this.sliderStore = this.$store.getters.currentSlideres
        this.changeMatrix()
        this.$store.dispatch("changeMatrizInputAtual", this.criterios[0])
    },
    methods: {
        handleResultadoFluxograma() {
            this.changeMatrix()
        },
        criaSlideres() {
            const criterio = this.criterios
            const slideres = []
            for (let i = 0; i < criterio.length; i++) {
                slideres.push(
                    JSON.parse(JSON.stringify(this.slideresCardozo))
                )
            }
            this.$store.dispatch("changeSlideres", slideres)
        },
        trocaMatrizInputAtual(matrizName) {
            this.$store.dispatch("changeMatrizInputAtual", matrizName)
            this.$store.dispatch("changeSlideres", this.sliderStore)
        },
        handleInputValue(value) {
            this.sliderStore[value[0]][value[1]].valor = Number(value[2])
            const throttledDefineMatriz = throttle(this.changeMatrix, 100)
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
            const matriz = [
                // Poço
                [dirValue("11"), dirValue("12"), dirValue("13"), dirValue("14")],
                // Rampa Diesel
                [invValue("12"), dirValue("22"), dirValue("23"), dirValue("24")],
                // Rampa Elétrico
                [invValue("13"), invValue("23"), dirValue("33"), dirValue("34")],
                // Correia Transportadora
                [invValue("14"), invValue("24"), invValue("34"), dirValue("44")]
            ]
            return matriz
        },
        changeMatrix() {
            const finalMatrix = []
            finalMatrix.push(this.resultadoMatrizFluxograma)
            for (let i = 0; i < this.criterios.length; i++) {
                finalMatrix.push(this.matrizMaker(i))
            }
            this.$store.dispatch("changeFinalMatrix", finalMatrix)
            this.calcula(finalMatrix)
        },
        calcula(finalMatrix) {
            const somaColunaMatriz = (matriz, col, jmax) => {
                let soma = 0
                for (let lin = 0; lin < jmax; lin++) {
                    soma += Number(matriz[lin][col])
                }
                return soma
            }
            const normalizaMatriz = (index) => {
                const matriz = []
                for (let lin = 0; lin < finalMatrix[index].length; lin++) {
                    const linha = []
                    for (let col = 0; col < finalMatrix[index][lin].length; col++) {
                        const celula = Number(finalMatrix[index][lin][col]) / somaColunaMatriz(finalMatrix[index], col, finalMatrix[index].length)
                        linha.push(celula.toFixed(2))
                    }
                    matriz.push(linha)
                }
                return matriz
            }
            const normalizada = []
            for (let i = 0; i < finalMatrix.length; i++) {
                normalizada.push(normalizaMatriz(i))
            }

            const calculaPeso = (index) => {
                const peso = []
                for (let lin = 0; lin < normalizada[index].length; lin++) {
                    peso.push(
                        normalizada[index][lin].reduce((acc, valor) => acc + parseFloat(valor), 0) / normalizada[index][lin].length
                    )
                }
                return peso
            }
            const pesos = []
            for (let i = 0; i < normalizada.length; i++) {
                pesos.push(calculaPeso(i))
            }
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
