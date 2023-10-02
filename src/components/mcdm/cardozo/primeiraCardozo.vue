
<template>
    <!-- Manter fora do main -->
    <vueMenuAhp/>

    <main
        class="main-container-primeira"
    >
        <!-- SEÇÃO DOS INPUTS -->
        <section
            class="section-esquerda-primeira"
        >
            <!-- Titulo matriz em edição -->
            <div
                class="container-titulo-radio-primeira"
            >
                <h3 class="titulo-matriz-input-primeira">
                    {{ matrizAtual }}
                </h3>

                <div
                    class="radio-container-primeira"
                    v-if="((matrizAtual!== 'Fluxograma') && (matrizAtual !== 'Aval. Econômica'))"
                >
                    <!-- PRÉ-DEFINIDO -->
                    <div>
                        <input type="radio" class="radio-metodo-definido" v-model="metodoDefinido" value="predefinido" id="predefinido">
                        <label for="predefinido" class="label-metodo-definido"></label>
                        <span>{{ $t('predefinido') }}</span>
                    </div>
                    <!-- PERSONALIZADO -->
                    <div>
                        <input type="radio" class="radio-metodo-definido" v-model="metodoDefinido" value="personalizado" id="personalizado">
                        <label for="personalizado" class="label-metodo-definido"></label>
                        <span>{{ $t('personalizado') }}</span>
                    </div>
                </div>

            </div>

            <!-- Resultados do fluxograma -->
            <div
                v-if="matrizAtual==='Fluxograma'"
                class="container-resultados-fluxograma"
            >
                <vuePreSelect
                    :selectSolicitado="'Fluxograma'"
                    @matriz-definida="handlePreDefinido"
                />
            </div>

            <!-- OUTROS SLIDERES -->
            <div
                v-if="metodoDefinido==='personalizado'"
                v-for="(itemParent, indexParent) in criteriosPrimeira"
                :key="indexParent"
            >
                <div
                    v-if="itemParent === matrizAtual"
                    class="slider-container-primeira"
                >
                    <p
                        v-if="matrizAtual === 'Risco Energético'"
                        v-html="`${$t('paragrafoRiscoEnergetico')}`"
                    >
                    </p>
                    <p
                        v-if="matrizAtual === 'Aval. Econômica'"
                        v-html="`${$t('paragrafoExplicacaoAvalEconomica')}`"
                    >
                    </p>
                    <p
                        v-if="matrizAtual === 'Custo Ambiental'"
                        v-html="`${$t('paragrafoExplicacaoEmissoes')}`"
                    >
                    </p>
                    <p
                        v-if="matrizAtual === 'Risco Social'"
                        v-html="`${$t('paragrafoExplicacaoSocial')}`"
                    >
                    </p>

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
            <!-- OUTROS SELETORES -->
            <div
                v-if="metodoDefinido==='predefinido'"
                v-for="(itemParent, indexParent) in criteriosPrimeira"
                :key="indexParent"
                class="predefinido-container"
            >
                <vuePreSelect
                    v-if="(itemParent === matrizAtual)"
                    :selectSolicitado="matrizAtual"
                    @matriz-definida="handlePreDefinido"
                />
            </div>

        </section>

        <!-- SEÇÃO DAS MATRIZES -->
        <section
            class="section-direita-primeira"
        >
            <!-- FLUXOGRAMA -->
            <div
                class="matriz-container-primeira"
            >

                <h4
                    class="titulo-matriz-primeira"
                >
                    {{ $t('matrizFluxogramaCardozo') }}
                </h4>
                <div
                    class="matriz-vetor-container-primeira"
                >

                    <vueMatriz
                        idMatriz="Fluxograma"
                        :optionMatriz="optionsPrimeira"
                        :valueMatriz="matrizesPreDefinidas[0]"
                        @click="trocaMatrizInputAtual('Fluxograma')"
                    />
                    <vueVetor
                        tituloVetor="Peso"
                        idVetor="Fluxograma"
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

            <!-- OUTRAS MATRIZES -->
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
                        :valueMatriz="matrizValores[indexMatriz+1]"
                        @click="trocaMatrizInputAtual(itemCriterio)"
                    />
                    <vueVetor
                        tituloVetor="Peso"
                        :idVetor="itemCriterio"
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
import vueMenuAhp from "@/components/mcdm/compartilhado/menuAhp.vue"
import vuePreSelect from "@/components/mcdm/cardozo/preDefinicao.vue"
import calculoAhpMixin from "@/components/mcdm/compartilhado/mixins/calculoAhpMixin.vue"
import { throttle } from "lodash"
import { RI } from "@/assets/javascript/globalConstants.js"

export default {
    name: "vue-primeira-etapa-cardozo",
    components: {
        vueSlider,
        vueMatriz,
        vueVetor,
        vueConsistencia,
        vuePreSelect,
        vueMenuAhp
    },
    mixins:[
        calculoAhpMixin
    ],
    data() {
        return {
            metodoDefinido: "personalizado",
            criteriosPreDefinidos: {
                "Fluxograma": true,
                "Aval. Economica": false,
                "Risco Energético": false,
                "Custo Ambiental": false,
                "Risco Social": false
            },
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
        matrizesPreDefinidas() {
            return this.$store.getters.currentMatrizesPreDefinidas
        },
        criteriosPrimeira() {
            return this.$store.getters.currentCriteriosPrimeira
        },
        optionsPrimeira() {
            return this.$store.getters.currentOptionsPrimeira
        }
    },
    watch: {
        metodoDefinido() {
            this.handleMetodoDefinido()
        }
    },
    created() {
        this.sliderStore = this.$store.getters.currentSlideresPrimeira
        this.changeMatrix()
    },
    mounted() {
        this.trocaMatrizInputAtual("Fluxograma")
        this.changeMatrixColor()
        setTimeout(() => {
            this.hoverSlider("primeira")
        }, 200)
    },
    beforeUnmount() {
        this.$store.dispatch("changeSlideresPrimeira", this.sliderStore)
        this.changeMatrix()
    },
    methods: {
        handleMetodoDefinido() {
            if (this.metodoDefinido === "predefinido") {
                this.criteriosPreDefinidos[this.matrizAtual] = true
            } else {
                this.criteriosPreDefinidos[this.matrizAtual] = false
            }
            this.changeMatrix()
        },
        handlePreDefinido(value) {
            this.$store.dispatch("changeMatrizesPreDefinidas", { index: value[0], data:  value[1] })
            this.handleMetodoDefinido()
            this.changeMatrix()
        },
        trocaMatrizInputAtual(matrizName) {
            this.metodoDefinido = matrizName === "Aval. Econômica" ?  "personalizado" : this.metodoDefinido
            this.$store.dispatch("changeMatrizInputAtual", matrizName)
            this.$store.dispatch("changeSlideresPrimeira", this.sliderStore)
            this.changeMatrixColor()
            setTimeout(() => {
                this.hoverSlider("primeira")
            }, 200)
        },
        handleInputValue(value) {
            this.sliderStore[value[0]][value[1]].valor = Number(value[2])
            this.mouseDownSlider(value, "primeira")
            const throttledDefineMatriz = throttle(this.changeMatrix, 50)
            throttledDefineMatriz()
        },
        matrizMaker(index) {
            const dirValue = (key) => {
                const valor = key[0] === key[1] ? 1.00 : this.conveterEscala(this.sliderStore[index].find(item => item.id === key).valor)
                return valor.toFixed(2)
            }
            const invValue = (key) => {
                const valor = (1 / this.conveterEscala(this.sliderStore[index].find(item => item.id === key).valor))
                return valor > 1 ? Math.floor(valor).toFixed(2) : valor.toFixed(2)
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
            let matrizPrimeira = Array.from({ length: 5 })
            matrizPrimeira[0] = this.matrizesPreDefinidas[0]
            // console.log(this.matrizesPreDefinidas[3])
            matrizPrimeira[1] = this.criteriosPreDefinidos["Aval. Economica"] ? this.matrizesPreDefinidas[1] : this.matrizMaker(0)
            matrizPrimeira[2] = this.criteriosPreDefinidos["Risco Energético"] ? this.matrizesPreDefinidas[2] : this.matrizMaker(1)
            matrizPrimeira[3] = this.criteriosPreDefinidos["Custo Ambiental"] ? this.matrizesPreDefinidas[3] : this.matrizMaker(2)
            matrizPrimeira[4] = this.criteriosPreDefinidos["Risco Social"] ? this.matrizesPreDefinidas[4] : this.matrizMaker(3)
            this.$store.dispatch("changeMatrizPrimeira", matrizPrimeira)
            // console.log(matrizPrimeira)
            matrizPrimeira = this.calcula(matrizPrimeira)
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
            // A linha de código abaixo é explicitamente uma gambiarra.
            matrizPrimeira[0].splice(matrizPrimeira[1].length)

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

    .container-resultados-fluxograma{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container-titulo-radio-primeira{
        display: flex;
        justify-content: space-between;
    }

    input[type='radio']{
        display: none;
    }
    .radio-container-primeira{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .radio-container-primeira div{
        display: flex;
        gap: 5px;
        width: 100%;
        margin-right: 10%;
    }
    .label-metodo-definido{
        align-self: center;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-left: 40px;
        border: 1pt solid var(--cor-tema);
    }
    .label-metodo-definido:hover {
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }

    input[type='radio']:checked + .label-metodo-definido {
        background-color: var(--cor-tema);;
    }


</style>