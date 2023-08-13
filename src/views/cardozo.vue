<template>

    <body
        class="main-body"
    >

        <Cabecalho>
            {{ $t('tituloCardozo') }}
        </Cabecalho>

        <main
            class="main-container"
        >

            <NavBar
                class="main-elements navbar"
            >
            </NavBar>

            <Inputs class="main-elements inputs"></Inputs>

            <Fluxograma
                class="main-elements fluxograma"
            />

            <Ilustrations
                class="main-elements resultados"
            />
        </main>

        <Rodape/>

        <Balao
            class="balao"
        />

    </body>

</template>

<script>
import NavBar from "@/components/acessos/navbar.vue"
import Cabecalho from "@/components/compartilhado/header.vue"
import Rodape from "@/components/compartilhado/footer.vue"
import Balao from "@/components/compartilhado/balao.vue"

import Fluxograma from "@/components/acessos/fluxograma.vue"
import Ilustrations from "@/components/acessos/ilustrations.vue"
import Inputs from "@/components/acessos/inputsCardozo.vue"

export default {
    name: "view-cardozo",
    components: {
        NavBar,
        Inputs,
        Fluxograma,
        Cabecalho,
        Rodape,
        Ilustrations,
        Balao
    },
    mixins: [

    ],
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Cardozo")
    }
}
</script>
