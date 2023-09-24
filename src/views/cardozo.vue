<template>

    <body
        class="main-body"
    >

        <vueHeader/>

        <main
            class="main-container"
        >

            <vueNavBar
                class="main-elements navbar"
            >
            </vueNavBar>

            <vueInputs class="main-elements inputs"></vueInputs>

            <vueFluxograma
                class="main-elements fluxograma"
            />

            <vueIlustrations
                class="main-elements resultados"
            />

        </main>

        <vueFooter/>

        <vueBalao
            class="balao"
        />

    </body>

</template>

<script>
import vueNavBar from "@/components/compartilhado/navbar.vue"
import vueHeader from "@/components/compartilhado/header.vue"
import vueFooter from "@/components/compartilhado/footer.vue"
import vueBalao from "@/components/compartilhado/balao.vue"
import vueFluxograma from "@/components/acessos/fluxograma.vue"
import vueIlustrations from "@/components/acessos/ilustrations.vue"
import vueInputs from "@/components/acessos/inputsCardozo.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-cardozo",
    components: {
        vueNavBar,
        vueInputs,
        vueFluxograma,
        vueHeader,
        vueFooter,
        vueIlustrations,
        vueBalao
    },
    mixins: [

    ],
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Cardozo")
        aplicarTema("temaVermelho")
    }
}
</script>
