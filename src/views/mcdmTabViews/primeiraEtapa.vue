<template>

    <section class="contaiener-tabview-primeira">
        <vuePrimeiraPersonalizado
            v-if="verificarTemplate === 'personalizado'"
        />
        <vuePrimeiraCardozo
            v-if="verificarTemplate === 'cardozoTemplate'"
        />
    </section>

</template>

<script>
import vuePrimeiraPersonalizado from "@/components/mcdm/personalizado/primeiraPersonalizado.vue"
import vuePrimeiraCardozo from "@/components/mcdm/cardozo/primeiraCardozo.vue"
import vueBalao from "@/components/compartilhado/balao.vue"

export default {
    name: "vue-view-mcdm-primeira-etapa",
    components: {
        vuePrimeiraPersonalizado,
        vuePrimeiraCardozo
    },
    mixins: [
        vueBalao
    ],
    computed: {
        verificarTemplate() {
            return this.$store.getters.currentTemplateMcdm
        }
    }

}
</script>
<style scoped>

.contaiener-tabview-primeira{
    position: relative;
    grid-column: 1/3;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    box-sizing: border-box;
    width: 100%;
    overflow: hidden !important;
}

</style>