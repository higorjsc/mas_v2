<template>

    <header
        class="header-container"
    >
        <vueHeader/>
    </header>

    <main
        class="main-container"
    >

        <vueNavBar class="main-elements navbar">
        </vueNavBar>

        <vueInputs
            class="main-elements vueInputs"
        >
        </vueInputs>

        <vueFluxograma
            class="main-elements vueFluxograma"
        />

        <vueIlustrations
            class="main-elements resultados"
        />

    </main>


    <vueFooter/>

    <vueBalao
        class="balao"
    />


</template>

<script>
import vueNavBar from "@/components/compartilhado/navbar.vue"
import vueHeader from "@/components/compartilhado/header.vue"
import vueFooter from "@/components/compartilhado/footer.vue"
import vueBalao from "@/components/compartilhado/balao.vue"
import vueFluxograma from "@/components/acessos/fluxograma.vue"
import vueIlustrations from "@/components/acessos/ilustrations.vue"
import vueInputs from "@/components/acessos/inputsVergne.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-vergne",
    components: {
        vueNavBar,
        vueInputs,
        vueFluxograma,
        vueIlustrations,
        vueHeader,
        vueFooter,
        vueBalao
    },
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Vergne")
        aplicarTema("temaVermelho")
    }
}
</script>
