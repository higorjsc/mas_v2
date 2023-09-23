<template>

    <section class="contaiener">
        <vueInputs/>
    </section>

</template>

<script>
import vueInputs from "@/components/ahp/livre/segundaLivre.vue"

export default {
    name: "vue-view-ahp-cardozo",
    components: {
        vueInputs
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
