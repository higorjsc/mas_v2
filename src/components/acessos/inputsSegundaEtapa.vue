<template>

    <!-- SE ETAPA 2 -->
    <div>
        <div class="container" id="resultado-fluxograma-ahp-cardozo">
            <h3>{{ $t('resultadosFluxogramaTituloAhpCardozo') }}</h3>
            <select v-model="resultadoFluxograma">
                <option>{{ $t('resultadoShaftCardozo') }}</option>
                <option>{{ $t('resultadoCorreiaCardozo') }}</option>
                <option>{{ $t('resultadoRampaCardozo') }}</option>
            </select>
        </div>
        <vueSlider
            v-for="item in slidereSecoundEtapa"
            :key="item.id"
            :id="item.id"
            :texto="item.texto"
            :value="item.valor"
            @slider-value="handleInputValue"
        />
    </div>

</template>
<script>
import vueSlider from "@/components/compartilhado/sliderButton.vue"
export default {
    name: "vue-inputs-secound-etapa-ahp-cardozo",
    components: {
        vueSlider
    },
    props: {
    },
    data() {
        return {
            resultadoFluxograma: "",
            slideresSecoundEtapa: [
                {
                    id: "slider-fluxograma",
                    texto: "firstText",
                    valor: 0
                },
                {
                    id: "slider-avaliacao-economica",
                    texto: "firstText",
                    valor: 0
                },
                {
                    id: "slider-risco-energetico",
                    texto: "firstText",
                    valor: 0
                },
                {
                    id: "slider-custo-ambiental",
                    texto: "firstText",
                    valor: 0
                },
                {
                    id: "slider-custo-social",
                    texto: "firstText",
                    valor: 0
                }
            ]
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
