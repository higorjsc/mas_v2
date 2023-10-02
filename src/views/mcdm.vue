<template>

    <header
        class="header-container"
    >
        <vueHeader/>
    </header>

    <main class="main-mcdm">

        <vueNavBar class="navbar-mcdm"/>

        <section class="section-mcdm">
            <vueAhpHeader class="header-mcdm"/>
            <RouterView ></RouterView>
        </section>
    </main>

    <vueFooter/>

</template>

<script>
import vueNavBar from "@/components/compartilhado/navbar.vue"
import vueHeader from "@/components/compartilhado/header.vue"
import vueAhpHeader from "@/components/mcdm/compartilhado/mcdmHeader.vue"
import vueFooter from "@/components/compartilhado/footer.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-mcdm",
    components: {
        vueNavBar,
        vueHeader,
        vueFooter,
        vueAhpHeader
    },
    beforeCreate() {
        this.$store.dispatch("changeMetodo", "Mcdm")
        aplicarTema("temaVermelho")
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
  width: 100%;
  max-height: 840px;
  overflow: hidden !important;
  display: grid;
    margin: 0.1%;
}

.section-mcdm {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr minmax(667px, 10fr); /* Deixando o cabeçalho com tamanho necessário e o restante para os inputs */
    border: var(--borda-simples);
    border-radius: 20px;
    margin-left: 0.1%;
    box-sizing: border-box;
    overflow: hidden !important;
    max-height: 840px;

}

.header-mcdm{
    grid-column: 1/3;
    grid-row: 1/2;
    height: 100%;
    overflow: hidden !important;
}
</style>
