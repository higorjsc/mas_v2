<template>

    <body
        class="main-body"
    >

        <vueCabecalho>
            {{ $t('tituloCardozo') }}
        </vueCabecalho>

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

        <vueRodape/>

        <vueBalao
            class="balao"
        />

    </body>

</template>

<script>
import vueNavBar from "@/components/acessos/navbar.vue"
import vueCabecalho from "@/components/compartilhado/header.vue"
import vueRodape from "@/components/compartilhado/footer.vue"
import vueBalao from "@/components/compartilhado/balao.vue"

import vueFluxograma from "@/components/acessos/fluxograma.vue"
import vueIlustrations from "@/components/acessos/ilustrations.vue"
import vueInputs from "@/components/acessos/inputsCardozo.vue"

export default {
    name: "view-cardozo",
    components: {
        vueNavBar,
        vueInputs,
        vueFluxograma,
        vueCabecalho,
        vueRodape,
        vueIlustrations,
        vueBalao
    },
    mixins: [

    ],
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Cardozo")
    }
}
</script>
