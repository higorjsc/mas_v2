<template>

    <h3 class="titulo-matriz-input">
        {{ alterarMatriz }}
    </h3>

    <div
        v-for="itemParent in criterios"
        :key="itemParent.index"
    >
        <div
            v-if="itemParent.value === alterarMatriz"
            class="slider-container-1"
        >
            <vueSlider
                v-for="itemChildren in arranjoOptions"
                :key="itemChildren.texto"
                :id="`${itemChildren.index-1}`"
                :classe="`${itemParent.index-1}`"
                :texto="itemChildren.texto"
                :valor="sliderStore[itemParent.index-1][itemChildren.index-1].value"
                @slider-value="handleInputValue"
            />
        </div>

    </div>

</template>
<script>
import vueSlider from "@/components/compartilhado/sliderButton.vue"
export default {
    name: "vue-inputs-first-etaoa-ahp-cardozo",
    components: {
        vueSlider
    },
    data() {
        return {
            arranjoOptions: [],
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
            return this.$store.getters.currentSlideresPrimeiraEtapa
        }
    },
    mounted() {
        this.criaSlideres()
        this.arranjoOptions = this.$store.getters.currentSlideresPrimeiraEtapa[0]
        this.sliderStore = this.$store.getters.currentSlideresPrimeiraEtapa
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
            this.$store.dispatch("changeSlideresPrimeiraEtapa", slideres)
        },
        handleInputValue(value) {
            this.sliderStore[value[0]][value[1]].value = Number(value[2])
            this.$store.dispatch("changeSlideresPrimeiraEtapa", this.slideresStore)
        }
    }
}
</script>
<style scoped>

    .slider-container-1{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: aquamarine;
        width: 100%;
        height: 500px;
    }
    .titulo-matriz-input{
        text-align: center;
        margin-bottom: 10px;
    }
</style>
