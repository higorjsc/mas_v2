<template>

    <section class="contaiener">
        <vueInputs class="inputs-ahp-cardozo"/>
    </section>

</template>

<script>
import vueInputs from "@/components/acessos/inputsAhpCardozo.vue"

export default {
    name: "vue-view-ahp-cardozo",
    components: {
        vueInputs
    }

}
</script>
<style scoped>

.inputs-ahp-cardozo{
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
