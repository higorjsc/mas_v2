<template>


    <header
        class="header-container"
    >
        <vueHeader/>
    </header>

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


</template>

<script>
import vueNavBar from "@/components/compartilhado/navbar.vue"
import vueHeader from "@/components/compartilhado/header.vue"
import vueFooter from "@/components/compartilhado/footer.vue"
import vueFluxograma from "@/components/fluxogramas/fluxograma.vue"
import vueIlustrations from "@/components/fluxogramas/ilustrations.vue"
import vueInputs from "@/components/fluxogramas/inputsCardozo.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-cardozo",
    components: {
        vueNavBar,
        vueInputs,
        vueFluxograma,
        vueHeader,
        vueFooter,
        vueIlustrations
    },
    mixins: [

    ],
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Cardozo")
        aplicarTema("temaVermelho")
    }
}
</script>
<style scoped>

</style>