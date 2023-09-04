<template>

    <vueSlider
        v-for="item in slideresFirstEtapa"
        :key="item.id"
        :id="`${item.id}-fluxograma`"
        :texto="item.texto"
        :value="item.valor"
        @slider-value="handleInputValue"
    />

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
            resultadoFluxograma: "",
            slideresFirstEtapa: [
                {
                    id: "slider-re",
                    texto: "firstText",
                    valor: 0
                },
                {
                    id: "slider-rd",
                    texto: "firstText",
                    valor: 0
                },
                {
                    id: "slider-correia",
                    texto: "firstText",
                    valor: 0
                },
                {
                    id: "slider-shaft",
                    texto: "firstText",
                    valor: 0
                }
            ]
        }
    },
    computed: {
        alterarMatriz() {
            return this.$store.getters.currentMatriz
        }
    },
    methods: {
        handleInputValue(value) {
            console.log(`${value}`)
        }
    }
}
</script>
<style scoped>
    section{
        display: flex;
        flex-direction: column;
    }

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

</style>
