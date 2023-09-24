<template>

    <main>
        <!-- SEÇÃO DOS SLIDERES -->
        <section
            class="slideres-container"
        >
            <!-- Titulo matriz em edição -->
            <h3 class="titulo-matriz-input">
                {{ alterarMatriz }}
            </h3>

            <div
                v-for="itemParent in criterios"
                :key="itemParent.index"
            >
                <div
                    v-if="itemParent.value === alterarMatriz"
                    class="slider-container"
                >
                    <vueSlider
                        v-for="itemChildren in sliderStore[0]"
                        :key="itemChildren.texto"
                        :id="`${itemChildren.index-1}`"
                        :classe="`${itemParent.index-1}`"
                        :texto="itemChildren.texto"
                        :valor="sliderStore[itemParent.index-1][itemChildren.index-1].value"
                        @slider-value="handleInputValue"
                    />
                </div>

            </div>
        </section>

        <!-- SEÇÃO DAS MATRIZES -->
        <section
            class="matrizes-container"
        >

            <div
                v-for="(criter, indexCriterio) in criterios"
                :key="indexCriterio"
                :name="criter.value"
                class="criterio-container"
            >
                <h3 class="titulo-matriz">
                    {{ criter.value}}
                </h3>
                <div
                    class="matriz-container"
                >

                    <table
                        class="matrizes"
                        @click="trocaMatrizInputAtual(criter.value)"
                    >
                        <!-- Primeira linha da tabela -->
                        <tr>
                            <th></th>
                            <th
                                v-for="item in options"
                                :key="item.index"
                            >
                                {{ item.value }}
                            </th>
                        </tr>
                        <!-- Demais linhas da tabela -->
                        <tr
                            v-for="(op, indexOption) in options"
                            :key="indexOption"
                        >
                            <th>
                                {{ op.value }}
                            </th>
                            <td
                                v-for="(item, indexCelula) in slideresValue[indexCriterio]"
                                :key="indexCelula"
                            >
                                {{ item[indexOption] }}
                            </td>

                        </tr>

                    </table>

                    <table
                        class="pesos"
                    >
                        <tr
                            v-for="item in options"
                            :key="item.index"
                        >
                            <td>a</td>
                        </tr>
                    </table>

                </div>
            </div>
        </section>
    </main>

</template>
<script>

import vueSlider from "@/components/compartilhado/sliderButton.vue"
import { throttle } from "lodash"
export default {
    name: "vue-primeira-etapa-livre",
    components: {
        vueSlider
    },
    data() {
        return {
            sliderValue: [],
            sliderStore: []
        }
    },
    computed: {
        alterarMatriz() {
            return this.$store.getters.currentMatrizInputAtual
        },
        criterios() {
            return this.$store.getters.currentCriterios
        },
        options() {
            return this.$store.getters.currentOptions
        },
        slideres() {
            return this.$store.getters.currentSlideres
        },
        slideresValue() {
            return this.$store.getters.currentSlideresValueLivre
        }
    },
    mounted() {
        this.criaSlideres()
        this.sliderStore = this.$store.getters.currentSlideres
        this.$store.dispatch("changeMatrizInputAtual", this.criterios[0].value)
        this.defineMatrizCriterios()
    },
    methods: {
        arranjoCriterios() {
            let index = 0
            const arranjoOptions = []
            const option = this.options
            for (let i = 0; i < option.length; i++) {
                for (let j = i + 1; j < option.length; j++) {
                    index += 1
                    arranjoOptions.push(
                        {
                            index: index,
                            texto: `${option[i].value} vs ${option[j].value}`,
                            value: 50
                        }
                    )
                }
            }
            return arranjoOptions
        },
        // Armazena um arranjo de opções para cada critério
        criaSlideres() {
            const criterio = this.criterios
            const slideres = []
            for (let i = 0; i < criterio.length; i++) {
                slideres.push(
                    this.arranjoCriterios()
                )
            }
            this.$store.dispatch("changeSlideres", slideres)
        },
        handleInputValue(value) {
            this.sliderStore[value[0]][value[1]].value = Number(value[2])
            const throttledDefineMatrizCriterios = throttle(this.defineMatrizCriterios, 500)
            throttledDefineMatrizCriterios()
        },
        trocaMatrizInputAtual(matrizName) {
            this.$store.dispatch("changeMatrizInputAtual", matrizName)
            this.$store.dispatch("changeSlideres", this.sliderStore)
        },
        defineMatrizOption(criterIndex) {
            const matriz = []
            let acrescimoDiagonal = 0
            for (let i = 0; i < this.options.length; i++) {
                const linha = []
                for (let j = 0; j <= this.options.length; j++) {
                    if (j < acrescimoDiagonal) {
                        linha.push(`${this.sliderStore[criterIndex][j].value}`)
                    } else if (j > acrescimoDiagonal) {
                        linha.push(`1/${this.sliderStore[criterIndex][j].value}`)
                    }
                }
                acrescimoDiagonal += 1
                matriz.push(linha)
            }
            return matriz
        },
        defineMatrizCriterios() {
            const matrizona = []
            for (let i = 0; i < this.criterios.length; i++) {
                matrizona.push(this.defineMatrizOption(i))
            }
            this.$store.dispatch("changeSlideresValueLivre", matrizona)
        }
    }
}
</script>
<style scoped>
    main{
        display: grid;
        grid-template-columns: 3fr 9fr;
        height: minmax(667px, 100%);
        overflow: hidden;
    }
    main .slideres-container{
        grid-column: 1/2;
        width: 100%;
        height: 100%;
        border-right: var(--borda-simples);
    }
    .matrizes-container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        grid-column: 2/3;
        max-height: 100%;
        overflow: scroll;
        overflow-x: hidden;
        padding-bottom: 5%;
    }
    .slider-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: aquamarine;
        width: 100%;
        height: 600px;
    }
    .titulo-matriz-input{
        text-align: center;
        margin-bottom: 10px;
    }
    .matriz-container{
        margin: auto;
        margin-top: 2%;
        display: flex;
        flex-direction: row;
        background-color: rgb(43, 255, 0);
    }
    .criterio-container{
        margin: auto;
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        background-color: aqua;
    }
    .matrizes:hover{
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }

    .titulo-matriz{
        text-align: center;
    }
    .matrizes{
        background-color: blueviolet;
    }

    .matrizes tr{
        display: flexbox;
        justify-content: space-evenly;
    }
    .matrizes td{
        min-width: 40px;
        max-width: 80px;
        text-align: center;
        background-color: rgb(255, 0, 234);
    }
    .matrizes th{
        font-size: 10pt;
    }

</style>
