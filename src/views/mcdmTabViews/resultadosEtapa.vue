<template>

    <section class="contaiener-tabview-resultados">
        <vueInputsPersonalizado
            v-if="verificarTemplate === 'personalizado'"
        />
        <vueInputsCardozo
            v-if="verificarTemplate === 'cardozoTemplate'"
        />
    </section>

</template>

<script>
import vueInputsPersonalizado from "@/components/mcdm/personalizado/resultadosPersonalizado.vue"
import vueInputsCardozo from "@/components/mcdm/cardozo/resultadosCardozo.vue"
import vueBalao from "@/components/compartilhado/balao.vue"

export default {
    name: "vue-view-mcdm-resultados-etapa",
    components: {
        vueInputsPersonalizado,
        vueInputsCardozo
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

.contaiener-tabview-resultados{
    position: relative;
    grid-column: 1/3;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    box-sizing: border-box;
    width: 100%;
    min-height: 760px;
    overflow: hidden !important;
}

</style>