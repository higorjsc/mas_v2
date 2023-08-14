<template>

    <body class="body">

        <vueHeader/>

        <main class="main-ahp-cardozo">

            <vueNavBar class="navbar-ahp-cardozo"/>

            <section class="section-ahp-cardozo">
                <vueAhpHeader class="header-ahp-cardozo"/>
                <RouterView></RouterView>
            </section>

        </main>

        <vueFooter/>

        <vueBalao
            class="balao"
        />

    </body>

</template>

<script>
import vueNavBar from "@/components/acessos/navbar.vue"
import vueHeader from "@/components/compartilhado/header.vue"
import vueAhpHeader from "@/components/acessos/ahpCardozoHeader.vue"
import vueFooter from "@/components/compartilhado/footer.vue"
import vueBalao from "@/components/compartilhado/balao.vue"
import { aplicarTema } from "@/assets/javascript/globalFunctions.js"

export default {
    name: "vue-view-ahp-cardozo",
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
        this.$store.dispatch("changeMetodo", "ahpCardozo")
        aplicarTema("temaVerde")
    }
}
</script>
<style scoped>
.main-ahp-cardozo {
  display: grid;
  grid-template-columns: 1fr 5fr; /* Deixando a barra de navegação com o tamanho necessário e o restante para a seção principal */
  box-sizing: border-box;
  margin: 0.1%
}

.section-ahp-cardozo {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 10fr; /* Deixando o cabeçalho com tamanho necessário e o restante para os inputs */
    border: var(--borda-simples);
    border-radius: 20px;
    box-sizing: border-box;

}

main .navbar-ahp-cardozo{
    grid-column: 1/2;
    margin-right: 0.8%;
}
.header-ahp-cardozo{
    grid-column: 1/3;
    grid-row: 1/2
}
.inputs-ahp-cardozo{
    position: relative;
    grid-column: 1/2;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    width: 100%;
    padding-bottom: 5%
}

</style>
