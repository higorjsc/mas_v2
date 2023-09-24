<template>

    <section class="contaiener">
        RESULTADOS
    </section>

</template>

<script>

export default {
    name: "vue-view-mcdm-resultados-etapa",
    components: {
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
