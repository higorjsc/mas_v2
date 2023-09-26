
<template>

    <main
        class="main-container-primeira-cardozo"
    >
        <!-- SEÇÃO DOS INPUTS -->
        <section
            class="slideres-container"
        >
            <!-- Titulo matriz em edição -->
            <div
                class="container-metodo-alterador"
            >
                <h3 class="titulo-matriz-input">
                    {{ matrizAtual }}
                </h3>

                <div
                    class="radio-container"
                    v-if="((matrizAtual!== 'Fluxograma') && (matrizAtual !== 'Aval. Econômica'))"
                >
                    <!-- PRÉ-DEFINIDO -->
                    <div>
                        <input type="radio" class="radio-metodo-definido" v-model="metodoDefinido" value="predefinido" id="predefinido">
                        <label for="predefinido" class="label-metodo-definido"></label>
                        <span>{{ $ft('predefinido') }}</span>
                    </div>
                    <!-- PERSONALIZADO -->
                    <div>
                        <input type="radio" class="radio-metodo-definido" v-model="metodoDefinido" value="personalizado" id="personalizado">
                        <label for="personalizado" class="label-metodo-definido"></label>
                        <span>{{ $ft('personalizado') }}</span>
                    </div>
                </div>

            </div>

            <!-- Resultados do fluxograma -->
            <div
                v-if="matrizAtual==='Fluxograma'"
                class="resultados-fluxograma-container"
            >
                <preSelect
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
            <!-- OUTROS SELETORES -->
            <div
                v-if="metodoDefinido==='predefinido'"
                v-for="(itemParent, indexParent) in criteriosPrimeira"
                :key="indexParent"
                class="predefinido-container"
            >
                <preSelect
                    v-if="(itemParent === matrizAtual)"
                    :selectSolicitado="matrizAtual"
                    @matriz-definida="handlePreDefinido"
                />
            </div>

        </section>

        <!-- SEÇÃO DAS MATRIZES -->
        <section
            class="matrizes-container-primeira-cardozo"
        >

            <!-- FLUXOGRAMA -->
            <div
                class="matriz-container"
            >
             
                <h4
                    class="titulo-matriz"
                >
                    {{ $ft('matrizFluxogramaCardozo') }}
                </h4>
                <div
                    class="matriz-vetor-container"
                >
                
                    <vueMatriz
                        :optionMatriz="optionsPrimeira"
                        :valueMatriz="matrizesPreDefinidas[0]"
                        @click="trocaMatrizInputAtual('Fluxograma')"
                    />
                    <vueVetor
                        tituloVetor="Peso"
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
                        tituloVetor="Peso"
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
import preSelect from "@/components/mcdm/cardozo/preDef.vue"
import { throttle } from "lodash"
import { RI } from "@/assets/javascript/globalConstants.js"

export default {
    name: "vue-primeira-etapa-cardozo",
    components: {
        vueSlider,
        vueMatriz,
        vueVetor,
        vueConsistencia,
        preSelect
    },
    data() {
        return {
            metodoDefinido: "personalizado",
            fluxograma: [0, "poco"],
            energetico: [0, "baixo"],
            social: [0, "baixo"],
            emissao: [0, 'emissao'],
            criteriosPreDefinidos: {
                'Fluxograma': true,
                'Aval. Economica': false,
                'Risco Energético': false,
                'Custo Ambiental': false,
                'Risco Social': false
            },
            sliderValue: [],
            sliderStore: [],
            vetorPesos: [],
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
        metodoDefinido(){
            this.handleMetodoDefinido()
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
        handleMetodoDefinido() {
            if (this.metodoDefinido === 'predefinido') {
                this.criteriosPreDefinidos[this.matrizAtual] = true
            } else {
                this.criteriosPreDefinidos[this.matrizAtual] = false
            }
            this.changeMatrix()
        },
        handlePreDefinido(value) {
            const index = value[0]// O índice da matriz a ser atualizada
            const data = value[1] // Os novos dados da matriz

            this.$store.dispatch("changeMatrizesPreDefinidas", { index, data })
            console.log(value[1])
            this.changeMatrix()
        },
        trocaMatrizInputAtual(matrizName) {
            console.log(matrizName)
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
            let matrizPrimeira = Array.from({ length: 5 });
            matrizPrimeira[0] = this.matrizesPreDefinidas[0]
            // console.log(this.matrizesPreDefinidas[3])
            matrizPrimeira[1] = this.criteriosPreDefinidos['Aval. Economica']? this.matrizesPreDefinidas[1] : this.matrizMaker(0)
            matrizPrimeira[2] = this.criteriosPreDefinidos['Risco Energético']? this.matrizesPreDefinidas[2] : this.matrizMaker(1)
            matrizPrimeira[3] = this.criteriosPreDefinidos['Custo Ambiental']? this.matrizesPreDefinidas[3] : this.matrizMaker(2)
            matrizPrimeira[4] = this.criteriosPreDefinidos['Risco Social']? this.matrizesPreDefinidas[4] : this.matrizMaker(3)
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

    main{
        display: grid;
        grid-template-columns: 3fr 9fr;
        overflow: hidden;
    }
    main .slideres-container{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-start;
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
    .titulo-matriz{
        text-align: center;
        margin-bottom: 1px;
        margin-top: 10px;
        font-size: 12pt;
    }
    
    .container-metodo-alterador{
        display: flex;
        justify-content: space-between;
    }
    
    input[type='radio']{
        display: none;
    }
    .radio-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .radio-container div{
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

    .titulo-matriz-input{
        text-align: left;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 1.5%;
        text-decoration: none;
        border: none;
        font-size: 16pt;
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
        margin-bottom: 20px;
    }
    .matriz-vetor-container{
        display: flex;
        gap: 1px;
        margin: auto;
    }
    .matriz-container:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
    .predefinido-container{
        display: flex;
        flex-direction: column;
        width: 95%;
        margin-top: 10px;
    }

</style>