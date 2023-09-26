<template>

    <section
        class="resultados-container"
    >

        <div
            class="matriz-resultados-container"
        >
            <h4
                class="titulo-matriz-pesos"
            >
                {{ $ft('matrizPrioridadesGlobais') }}
            </h4>
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
                        {{ $ft('tituloPesoGlobal') }}
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

            <h4
                class="titulo-prioridade-final"
            >{{$ft('vetorPrioridadeGlobal')}}</h4>
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
    methods: {
        resultadoFinal() {
            const primeira = this.matrizPrimeira
            const segunda = this.matrizSegunda
            // console.log('primeira')
            // console.log(primeira)
            // console.log('segunda')
            // console.log(segunda)

            const multiplicaPeso = (index) => {
                const vetor = []
                for (let j = 0; j < segunda[index].length - 1; j++) {
                    vetor.push(
                        Number(segunda[segunda.length - 1]["pesos"][index]) * Number(primeira[index][primeira[index].length - 1]["pesos"][j])
                    )
                }
                return vetor
            }

            const pesos = []
            for (let i = 0; i < segunda.length - 1; i++) {
                pesos.push(multiplicaPeso(i))
            }

            const resultado = []
            const  somaColuna = (index)=> {
                let soma = 0
                for (let lin = 0; lin < pesos.length; lin++) {
                    soma += pesos[lin][index]
                }
                return soma.toFixed(2)
            }
            for (let index = 0; index < pesos[0].length; index++) {
                resultado.push(somaColuna(index))
            }

            return resultado
        }
    }
}

</script>
