<template>

    <body>
        <header>
            <vueHeader/>
        </header>

        <main class="main-mcdm">

            <vueNavBar class="navbar-mcdm"/>

            <section class="section-mcdm">
                <vueAhpHeader class="header-mcdm"/>
                <RouterView ></RouterView>
            </section>
        </main>

        <footer>
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
import vueAhpHeader from "@/components/mcdm/compartilhado/mcdmHeader.vue"
import vueFooter from "@/components/compartilhado/footer.vue"
import vueBalao from "@/components/compartilhado/balao.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-mcdm",
    components: {
        vueNavBar,
        vueHeader,
        vueFooter,
        vueBalao,
        vueAhpHeader
    },
    mixins: [

    ],
    beforeMount() {
        this.$store.dispatch("changeMetodo", "Mcdm")
        aplicarTema("temaVerde")
    },
    beforeUnmount() {
        this.$store.dispatch("changeTemplateMcdm", "")
    }
}
</script>
<style scoped>
.main-mcdm {
  display: grid;
  grid-template-columns: 1fr 5fr; /* Deixando a barra de navegação com o tamanho necessário e o restante para a seção principal */
  box-sizing: border-box;
  margin: 0.1%;
  width: 100%;
}

.section-mcdm {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr minmax(667px, 10fr); /* Deixando o cabeçalho com tamanho necessário e o restante para os inputs */
    border: var(--borda-simples);
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
}

main .navbar-mcdm{
    grid-column: 1/2;
    margin-right: 0.8%;
}
.header-mcdm{
    grid-column: 1/3;
    grid-row: 1/2;
    height: 100%;
}
</style>
