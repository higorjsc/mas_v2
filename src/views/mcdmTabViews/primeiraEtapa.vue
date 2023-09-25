<template>

    <section class="contaiener-tabview-primeira">
        <vuePrimeiraLivre
            v-if="verificarTemplate === 'inserir'"
        />
        <vuePrimeiraCardozo
            v-if="verificarTemplate === 'primeiraTemplate'"
        />
    </section>

</template>

<script>
import vuePrimeiraLivre from "@/components/mcdm/livre/primeiraLivre.vue"
import vuePrimeiraCardozo from "@/components/mcdm/cardozo/primeiraCardozo.vue"

export default {
    name: "vue-view-mcdm-primeira-etapa",
    components: {
        vuePrimeiraLivre,
        vuePrimeiraCardozo
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