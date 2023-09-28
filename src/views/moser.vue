<template>

    <body>
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
        <footer
            class="footer-container"
        >
            <vueFooter/>
        </footer>

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
import vueInputs from "@/components/acessos/inputsMoser.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-moser",
    components: {
        vueNavBar,
        vueInputs,
        vueFluxograma,
        vueHeader,
        vueFooter,
        vueIlustrations,
        vueBalao
    },
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Moser")
        aplicarTema("temaVermelho")
    }
}
</script>
