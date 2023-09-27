<template>

    <div
        class="container-description"
    >

        <vueDescriptionAhp
            class="description-ahp"
        />

    </div>

</template>
<script>
import vueDescriptionAhp from "@/components/mcdm/compartilhado/descriptionAhp.vue"

export default {
    name: "vue-description-metodo-ahp-personalizado",
    components:{
        vueDescriptionAhp
    }

}
</script>
<style scoped>
.container-description{
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    column-gap: 30px;
}
.description-ahp{
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
}
.container-description-personalizado{
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
}
#img-mapa-personalizado-ahp{
    width: 600px;
    align-self: center ;
}
</style>