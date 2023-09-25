<template>

    <section
        class="resultados-container"
    >

        <div
            class="matriz-resultados-container"
        >
            <table
                class="matriz-resultados"
            >
                <tr>
                    <th
                        class="th-titulo-coluna"
                    > </th>
                    <th
                        class="th-titulo-linha"
                        v-for="(itemCriterio, indexCriterio) in criteriosSegunda"
                        :key="indexCriterio"
                    >
                        {{ itemCriterio }}
                    </th>
                </tr>
                <tr>
                    <th
                        class="th-titulo-coluna"
                    >
                        {{ $t('tituloPesoGlobal') }}
                    </th>
                    <td
                        v-for="(pesoGlobal, indexPesoGlobal) in matrizSegunda[matrizSegunda.length-1]['pesos']"
                        :key="indexPesoGlobal"
                    >
                        {{ pesoGlobal }}
                    </td>
                </tr>

                <tr
                    v-for="(itemOption,indexOption) in optionsSegunda"
                    :key="indexOption"
                >
                    <th
                        class="th-titulo-coluna"
                    >
                        {{ itemOption }}
                    </th>
                    <td
                        v-for="(pesoCriterio,indexPesoCriterio) in matrizPrimeira"
                        :key="indexPesoCriterio"
                    >
                        {{ pesoCriterio[pesoCriterio.length-1]['pesos'][indexOption] }}
                    </td>
                </tr>

            </table>
        </div>
        <div
            class="vetor-resultado-container"
        >

            <span
                class="span-prioridade-final"
            >{{$t('prioridadeFinal')}}</span>
            <table
                class="vetor-resultado"
            >
                <tr>
                    <th
                        class="th-titulo-linha"
                        v-for="(itemOption, indexOption) in optionsSegunda"
                        :key="indexOption"
                    >
                        {{itemOption}}
                    </th>
                </tr>
                <tr>
                    <td
                        v-for="(itemOption, indexOption) in resultadoFinal()"
                        :key="indexOption"
                    >
                        {{itemOption}}
                    </td>
                </tr>

            </table>
        </div>
    </section>
</template>
<script>

export default {
    name: "vue-resultados-etapa-livre",
    components: {
    },
    data() {

    },
    computed: {
        matrizPrimeira() {
            return this.$store.getters.currentMatrizPrimeira
        },
        matrizSegunda() {
            return this.$store.getters.currentMatrizSegunda
        },
        criteriosSegunda() {
            return this.$store.getters.currentCriteriosSegunda
        },
        optionsSegunda() {
            return this.$store.getters.currentOptionsSegunda
        }
    },
    mounted() {
        // console.log(this.matrizPrimeira)
        this.resultadoFinal()
    },
    methods: {
        resultadoFinal() {
            const primeira = this.matrizPrimeira
            const segunda = this.matrizSegunda
            // console.log(segunda)
            const multiplicaPeso = (index) => {
                const vetor = []
                for (let j = 0; j < segunda[index].length; j++) {
                    // console.log(segunda[segunda.length - 1]["pesos"][i])
                    vetor.push(
                        segunda[segunda.length - 1]["pesos"][index] * primeira[index][primeira[index].length - 1]["pesos"][j]
                    )
                }
                return vetor
            }
            const pesos = []
            for (let i = 0; i < primeira.length; i++) {
                pesos.push(multiplicaPeso(i))
            }
            const resultado = []
            for (let i = 0; i < primeira.length; i++) {
                resultado.push(pesos[i].reduce((acc, valor) => acc + valor, 0).toFixed(2))
            }
            return resultado
        }
    }
}

</script>
<style scoped>

    .matriz-resultados-container{
        display: flex;
        margin: auto;
        margin-top: 5%;
        width: 70%;
        height: 50%;
    }
    .vetor-resultado-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        margin-top: 5%;
        width: 70%;
        height: 50%;
    }
    .span-prioridade-final{
        margin-right: 20px;
    }
    .matriz-resultados, .vetor-resultado{
        width: 100%;
        height: 100%
    }
    .matriz-resultados td, .vetor-resultado td{
        width: 90px;
        text-align: center;
        border: var(--borda-simples);
        background-color: rgba(3, 49, 3, 0.8);
        color: var(--cor-texto-tema);
    }
    .th-titulo-coluna{
        width: 10%;
        font-size: 12pt;
        font-weight: bold;
        text-align: left;
        color: var(--cor-tema)

    }
    .th-titulo-linha{
        width: 10%;
        font-size: 12pt;
        font-weight: bold;
        height: 50px;
        color: var(--cor-tema)
    }

</style>