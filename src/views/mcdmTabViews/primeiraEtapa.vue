<template>

    <section class="contaiener-tabview-primeira">
        <vueInputsLivre
            v-if="verificarTemplate === 'inserir'"
        />
        <vueInputsCardozo
            v-if="verificarTemplate === 'primeiraTemplate'"
        />
    </section>

</template>

<script>
import vueInputsLivre from "@/components/mcdm/livre/primeiraLivre.vue"
import vueInputsCardozo from "@/components/mcdm/cardozo/primeiraCardozo.vue"

export default {
    name: "vue-view-mcdm-primeira-etapa",
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

.contaiener-tabview-primeira{
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
