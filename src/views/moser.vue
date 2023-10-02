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

        <vueInputs
            class="main-elements vueInputs"
        />

        <vueFluxograma
            class="main-elements vueFluxograma"
        />

        <vueIlustrations
            class ="main-elements resultados"
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
import vueInputs from "@/components/fluxogramas/inputsMoser.vue"
import vueBalao from "@/components/compartilhado/balao.vue"

import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-moser",
    components: {
        vueNavBar,
        vueInputs,
        vueFluxograma,
        vueHeader,
        vueFooter,
        vueIlustrations
    },
    mixins: [
        vueBalao
    ],
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Moser")
        aplicarTema("temaVermelho")
    }
}
</script>
