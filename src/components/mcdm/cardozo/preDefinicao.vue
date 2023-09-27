<template>
    <!-- FLUXOGRAMA -->
    <div
        class="fluxograma-container"
        v-if="selectSolicitado==='Fluxograma'"
    >
        <p v-html="`${$t('paragrafoExplicacaoFluxograma')}`"></p>
        <select v-model="fluxograma">
            <option value="poco">
                {{ $t('poco') }}
            </option>
            <option value="rampa">
                {{ $t('rampaCaminhoes') }}
            </option>
            <option value="correia">
                {{ $t('correiaTransportadora') }}
            </option>
        </select>
        <vueMatriz
            class="tabela-predefinicao-cardozo"
            idMatriz="matriz-energetico-texto"
            :optionMatriz="optionsPrimeira"
            :valueMatriz="matrizFluxograma[fluxograma]"
        />
    </div>
    <!-- AVALIAÇÃO ECONÔMICA -->
    <div
        v-if="selectSolicitado==='Aval. Econômica'"
    >
    </div>
    <!-- RISCO ENERGÉTICO -->
    <div
        class="energetico-container"
        v-if="selectSolicitado==='Risco Energético'"
    >
        <p v-html="`${$t('paragrafoRiscoEnergetico')}`"></p>
        <select v-model="riscoEnergetico">
            <option value="baixo">
                {{ $t('baixo') }}
            </option>
            <option value="medio">
                {{ $t('medio') }}
            </option>
            <option value="alto">
                {{ $t('alto') }}
            </option>
        </select>
        <vueMatriz
            v-if="riscoEnergetico !== ''"
            idMatriz="matriz-energetico-texto"
            :optionMatriz="optionsPrimeira"
            :valueMatriz="matrizEnergetico[riscoEnergetico]"
        />

    </div>
    <!-- CUSTO AMBIENTAL/EMISSÕES -->
    <div
        class="emissao-container"
        v-if="selectSolicitado==='Custo Ambiental'"
        @load="emissao()"
    >
        <p v-html="`${$t('paragrafoExplicacaoEmissoes')}`"></p>
        <vueMatriz
            idMatriz="matriz-emissoes-texto"
            :optionMatriz="optionsPrimeira"
            :valueMatriz="matrizEmissao"
        />
    </div>

    <!-- RISCO SOCIAL -->
    <div
        class="social-container"
        v-if="selectSolicitado==='Risco Social'"
    >
        <p v-html="`${$t('paragrafoExplicacaoSocial')}`"></p>
        <select v-model="social">
            <option value="baixo">
                {{ $t('baixo') }}
            </option>
            <option value="medio">
                {{ $t('medio') }}
            </option>
            <option value="alto">
                {{ $t('alto') }}
            </option>
        </select>
        <vueMatriz
            idMatriz="matriz-energetico-texto"
            :optionMatriz="optionsPrimeira"
            :valueMatriz="matrizSocial[social]"
        />
    </div>


</template>
<script>
import vueMatriz from "@/components/mcdm/compartilhado/matrizTexto.vue"
export default{
    name: "predefinicao-cardozo",
    components:{
        vueMatriz
    },
    props:{
        selectSolicitado:{
            type: String,
            default: ""
        }
    },
    emits:[
        "matriz-definida"
    ],
    data() {
        return{
            fluxograma: "poco",
            riscoEnergetico: "baixo",
            social: "baixo",
            matrizEmissao:[
                [1.00, 5.00, 0.20, 0.33],
                [0.20, 1.00, 0.14, 0.14],
                [5.00, 7.00, 1.00, 2.00],
                [3.00, 7.00, 0.50, 1.00]
            ],
            matrizEnergetico:{
                baixo:[ //Alto Potencial
                    [1.00, 7.00, 3.00, 0.33],
                    [0.14, 1.00, 0.11, 0.11],
                    [0.33, 9.00, 1.00, 0.11],
                    [3.00, 9.00, 9.00, 1.00]
                ],
                medio:[ //Médio Potencial
                    [1.00, 1.00, 1.00, 1.00],
                    [1.00, 1.00, 0.20, 0.33],
                    [1.00, 5.00, 1.00, 0.33],
                    [1.00, 3.00, 3.00, 1.00]
                ],
                alto:[ //Baixo Potencial
                    [1.00, 0.33, 0.33, 3.00],
                    [3.00, 1.00, 3.00, 5.00],
                    [3.00, 0.33, 1.00, 5.00],
                    [0.33, 0.20, 0.20, 1.00]
                ]
            },
            matrizSocial:{
                alto:[
                    [1.00, 0.14, 0.20, 1.00],
                    [7.00, 1.00, 5.00, 5.00],
                    [5.00, 0.20, 1.00, 5.00],
                    [1.00, 0.20, 0.20, 1.00]
                ],
                medio:[
                    [1.00, 0.33, 1.00, 1.00],
                    [3.00, 1.00, 0.33, 3.00],
                    [1.00, 3.00, 1.00, 3.00],
                    [1.00, 0.33, 0.33, 1.00]
                ],
                baixo:[
                    [1.00, 1.00, 1.00, 1.00],
                    [1.00, 1.00, 1.00, 1.00],
                    [1.00, 1.00, 1.00, 1.00],
                    [1.00, 1.00, 1.00, 1.00]
                ]
            },
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
        criteriosPrimeira() {
            return this.$store.getters.currentCriteriosPrimeira
        },
        optionsPrimeira() {
            return this.$store.getters.currentOptionsPrimeira
        }
    },
    watch:{
        fluxograma() {
            this.$emit("matriz-definida", [0, this.matrizFluxograma[this.fluxograma]])
        },
        riscoEnergetico() {
            this.$emit("matriz-definida", [2, this.matrizEnergetico[this.riscoEnergetico]])
        },
        social() {
            this.$emit("matriz-definida", [4, this.matrizSocial[this.social]])
        }
    }

}

</script>
<style scoped>

    select{
        width: 97%;
    }
    p{
        text-align: justify;
        padding-right: 3%;
        box-sizing: border-box;
    }
    .emissao-container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .tabela-emissao-ahp td{
        width: 100px;
        text-align: center;
    }
    .tabela-emissao-ahp .th-linha{
        text-align: center;
    }
    .tabela-emissao-ahp .th-coluna{
        text-align: left;
    }
    .tabela-emissao-ahp{
        display: block;
    }
</style>