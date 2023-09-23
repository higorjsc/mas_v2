<template>

    <main class="contaiener-inputs">
        <vueInputs/>
    </main>
</template>

<script>
import vueInputs from "@/components/ahp/livre/primeiraLivre.vue"

export default {
    name: "vue-view-ahp-cardozo",
    components: {
        vueInputs
    }

}
</script>
<style scoped>

.contaiener-inputs{
    position: relative;
    grid-column: 1/3;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    width: 100%;
    height: 100%;
    overflow: hidden;
}

</style>
