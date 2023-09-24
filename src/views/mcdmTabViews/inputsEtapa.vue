<template>

    <section class="container">

        <vueTemplateSelector/>

        <vueInputsLivre
            v-if="verificarTemplate === 'inserir'"
        />

        <vueInputsCardozo
            v-if="verificarTemplate === 'primeiraTemplate'"
        />

    </section>

</template>

<script>
import vueInputsLivre from "@/components/mcdm/livre/inputsLivre.vue"
import vueInputsCardozo from "@/components/mcdm/cardozo/inputsCardozo.vue"
import vueTemplateSelector from "@/components/mcdm/compartilhado/templateSelector.vue"

export default {
    name: "vue-view-mcdm-inputs-etapa",
    components: {
        vueInputsLivre,
        vueInputsCardozo,
        vueTemplateSelector

    },
    computed: {
        verificarTemplate() {
            return this.$store.getters.currentTemplateMcdm
        }
    }
}
</script>
<style scoped>

.container{
    position: relative;
    grid-column: 1/2;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    width: 100%;
    height: 100%;
    padding-bottom: 5%;
    overflow:hidden
}

</style>
