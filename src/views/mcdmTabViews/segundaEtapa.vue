<template>

    <section class="contaiener-tabview-segunda">
        <vueInputsPersonalizado
            v-if="verificarTemplate === 'personalizado'"
        />
        <vueInputsCardozo
            v-if="verificarTemplate === 'cardozoTemplate'"
        />
    </section>

</template>

<script>
import vueInputsPersonalizado from "@/components/mcdm/personalizado/segundaPersonalizado.vue"
import vueInputsCardozo from "@/components/mcdm/cardozo/segundaCardozo.vue"

export default {
    name: "vue-view-mcdm-segunda-etapa",
    components: {
        vueInputsPersonalizado,
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

.contaiener-tabview-segunda{
    position: relative;
    grid-column: 1/3;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    box-sizing: border-box;
    width: 100%;
    min-height: 640px;
}

</style>