<template>

    <section class="contaiener-tabview-segunda">
        <vueInputsLivre
            v-if="verificarTemplate === 'inserir'"
        />
        <vueInputsCardozo
            v-if="verificarTemplate === 'primeiraTemplate'"
        />
    </section>

</template>

<script>
import vueInputsLivre from "@/components/mcdm/livre/segundaLivre.vue"
import vueInputsCardozo from "@/components/mcdm/cardozo/segundaCardozo.vue"

export default {
    name: "vue-view-mcdm-segunda-etapa",
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

.contaiener-tabview-segunda{
    position: relative;
    grid-column: 1/3;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
}

</style>
