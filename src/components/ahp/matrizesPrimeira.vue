<template>

    <section>

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
                            v-for="(item, indexCelula) in sliderValue[indexCriterio]"
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

</template>

<script>
export default {
    name: "vue-matrizes-first-etapa",
    data() {
        return {
            sliderValue: []
        }
    },
    computed: {
        criterios() {
            return this.$store.getters.currentCriterios
        },
        options() {
            return this.$store.getters.currentOptions
        },
        slideres() {
            return this.$store.getters.currentSlideresPrimeiraEtapa
        }
    },
    mounted() {
        this.$store.dispatch("changeMatrizInputAtual", this.criterios[0].value)
        // this.defineMatrizOption(0)
        this.defineMatrizCriterios()
    },
    methods: {
        trocaMatrizInputAtual(matrizName) {
            this.$store.dispatch("changeMatrizInputAtual", matrizName)
        },
        defineMatrizOption(criterIndex) {
            const matriz = []
            let acrescimoDiagonal = 0
            for (let i = 0; i < this.options.length; i++) {
                const linha = []
                for (let j = 0; j <= this.options.length; j++) {
                    if (j < acrescimoDiagonal) {
                        linha.push(`${this.slideres[criterIndex][j].value}`)
                    } else if (j > acrescimoDiagonal) {
                        linha.push(`1/${this.slideres[criterIndex][j].value}`)
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
            this.sliderValue = matrizona
        }
    }
}
</script>

<style scoped>
    section{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
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
