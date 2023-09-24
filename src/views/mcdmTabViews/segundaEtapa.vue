<template>

    <section class="contaiener">
        <vueInputs/>
    </section>

</template>

<script>
import vueInputs from "@/components/mcdm/livre/segundaLivre.vue"

export default {
    name: "vue-view-mcdm-segunda-etapa",
    components: {
        vueInputs
    },
    computed: {
        verificarTemplate() {
            return this.$store.getters.currentTemplateMcdm
        }
    }

}
</script>
<style scoped>

.contaiener{
    position: relative;
    grid-column: 1/2;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    width: 100%;
    height: 100%;
    padding-bottom: 5%
}

</style>
