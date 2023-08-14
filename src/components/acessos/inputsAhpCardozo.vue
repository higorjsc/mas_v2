<template>

    <section>

        <div class="container" id="resultado-fluxograma-ahp-cardozo">
            <h3>{{ $t('resultadosFluxogramaTituloAhpCardozo') }}</h3>
            <select v-model="resultadoFluxograma">
                <option>{{ $t('resultadoShaftCardozo') }}</option>
                <option>{{ $t('resultadoCorreiaCardozo') }}</option>
                <option>{{ $t('resultadoRampaCardozo') }}</option>
            </select>
        </div>

        <vueSlider
            v-for="item in sliderButtons"
            :key="item.id"
            :id="item.id"
            :texto="item.texto"
            @slider-value="handleInputValue"
        />

    </section>

</template>
<script>
import vueSlider from "@/components/compartilhado/sliderButton.vue"
export default {
    name: "vue-inputs-ahp-cardozo",
    components: {
        vueSlider
    },
    data() {
        return {
            resultadoFluxograma: "",
            sliderButtons: [
                {
                    id: "first",
                    texto: "firstText"
                },
                {
                    id: "secound",
                    texto: "firstText"
                },
                {
                    id: "third",
                    texto: "firstText"
                },
                {
                    id: "fourth",
                    texto: "firstText"
                },
                {
                    id: "fifith",
                    texto: "firstText"
                },
                {
                    id: "sixth",
                    texto: "firstText"
                }
            ]
        }
    },
    methods: {
        handleInputValue(value) {
            console.log(`Valor do input recebido: ${value}`)
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
