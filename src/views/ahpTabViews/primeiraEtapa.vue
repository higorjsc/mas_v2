<template>

    <section class="contaiener-inputs">
        <vueInputs/>
    </section>
    <section class="contaiener-matrizes">
        <vueMatrizes/>
    </section>
</template>

<script>
import vueInputs from "@/components/ahp/inputsPrimeiraEtapa.vue"
import vueMatrizes from "@/components/ahp/matrizesPrimeira.vue"

export default {
    name: "vue-view-ahp-cardozo",
    components: {
        vueInputs,
        vueMatrizes
    }

}
</script>
<style scoped>

.contaiener-inputs{
    position: relative;
    grid-column: 1/2;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    width: 100%;
    height: 100%;
    padding-bottom: 5%;
    overflow: hidden;
}
.contaiener-matrizes{
    position: relative;
    grid-column: 2/3;
    grid-row: 2/3;
    border-right: var(--borda-simples);
    width: 100%;
    height: 100%;
    max-height: 600px;
    padding-bottom: 5%;
    background-color: rgba(0, 0, 255, 0.068);
    overflow: scroll;
    overflow-x: hidden;
}

</style>
