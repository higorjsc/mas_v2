<template>

    <body
      class="main-body"
    >

        <Cabecalho>
          {{ $t('tituloMoser') }}
        </Cabecalho>

        <main
          class="main-container"
        >

            <NavBar
              class="main-elements navbar"
            >
            </NavBar>

            <inputs
              class="main-elements inputs"
            />

            <Fluxograma
                class="main-elements Fluxograma"
            />

            <Ilustrations
                class ="main-elements resultados"
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
import inputs from "@/components/acessos/inputsMoser.vue"

export default {
    name: "vue-moser",
    components: {
        NavBar,
        inputs,
        Fluxograma,
        Cabecalho,
        Rodape,
        Ilustrations,
        Balao
    },
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Moser")
    }
}
</script>
