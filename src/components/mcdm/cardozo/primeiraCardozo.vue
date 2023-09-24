
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
                >{{ $t('matrizFluxogramaCardozo') }}</h4>
                <vueMatriz
                    :optionMatriz="options"
                    :valueMatriz="resultadoMatrizFluxograma"
                    @click="trocaMatrizInputAtual('Fluxograma')"
                />
            </div>

            <div
                class="matriz-container"
                v-for="(itemCriterio, indexMatriz) in criterios"
                :key="indexMatriz"
            >
                <h4
                    class="titulo-matriz"
                >{{ itemCriterio }}</h4>
                <vueMatriz
                    :optionMatriz="options"
                    :valueMatriz="matrizValores[indexMatriz+1]"
                    @click="trocaMatrizInputAtual(itemCriterio)"
                />
            </div>

        </section>

    </main>

</template>
<script>
import vueSlider from "@/components/compartilhado/sliderButton.vue"
import vueMatriz from "@/components/mcdm/compartilhado/matriz.vue"
import { throttle } from "lodash"

export default {
    name: "vue-primeira-etapa-cardozo",
    components: {
        vueSlider,
        vueMatriz
    },
    data() {
        return {
            resultadoFluxograma: "rampa",
            sliderValue: [],
            sliderStore: [],
            matrizCompleta: [],
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
                    ["1", "3", "3", "5"],
                    ["1/3", "1", "1", "2"],
                    ["1/3", "1", "1", "2"],
                    ["1/5", "1/2", "1/2", "1"]
                ],
                rampa: [
                    ["1", "1/3", "1/3", "2"],
                    ["3", "1", "1", "5"],
                    ["3", "1", "1", "5"],
                    ["1/2", "1/5", "1/5", "1"]
                ],
                correia: [
                    ["1", "1", "1", "1/7"],
                    ["1", "1", "1", "1/7"],
                    ["1", "1", "1", "1/7"],
                    ["7", "7", "7", "1"]
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
    created() {
        this.criaSlideres()
        this.sliderStore = this.$store.getters.currentSlideres
        this.changeMatrix()
        this.$store.dispatch("changeMatrizInputAtual", this.criterios[0])
    },
    methods: {
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
            const dirValue = (key) => {
                return key[0] === key[1] ? "1" : `${this.sliderStore[index].find(item => item.id === key).valor}`
            }
            const invValue = (key) => {
                return `1/${(this.sliderStore[index].find(item => item.id === key).valor)}`
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
        }
    }
}
</script>
<style scoped>

    main{
        display: grid;
        grid-template-columns: 3fr 9fr;
        min-height: 667px;
        overflow: hidden;
    }
    main .slideres-container{
        display: block;
        grid-column: 1/2;
        width: 100%;
        border-right: var(--borda-simples);
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
    .slider-container{
        display: flex;
        flex-direction: column;
        background-color: aquamarine;
        width: 98%;
        height: 600px;
    }
    .titulo-matriz{
        text-align: center;
        margin-bottom: 10px;
    }

</style>
