<template>

    <section class="contaiener-tabview-resultados">
        <vueInputsLivre
            v-if="verificarTemplate === 'livre'"
        />
        <vueInputsCardozo
            v-if="verificarTemplate === 'cardozoTemplate'"
        />
    </section>

</template>

<script>
import vueInputsLivre from "@/components/mcdm/livre/resultadosLivre.vue"
import vueInputsCardozo from "@/components/mcdm/cardozo/resultadosCardozo.vue"

export default {
    name: "vue-view-mcdm-resultados-etapa",
    components: {
        vueInputsLivre,
        vueInputsCardozo
    },
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