<template>

    <div
        class="container-description"
    >

        <vueDescriptionAhp
            class="description-ahp"
        />
        <div
            class="container-description-cardozo"
        >

            <h4
                class="titulo-description-metodo-mcdm"
            >
                {{ $t('tituloSobreMetodoCardozoAhp') }}
            </h4>
            <p
                class="paragrafo-explicacao-metodo-mcdm"
            >
                {{ $t('paragrafoExplicacaoMetodoCardozoAhp') }}
            </p>
            <br>
            <br>
            <img id="img-mapa-cardozo-ahp" src="@\assets\Imagens\mapa_cardozo_ahp.jpg" alt="Mapa da decisão por AHP no métodoo Cardozo">
        </div>
    </div>

</template>
<script>
import vueDescriptionAhp from "@/components/mcdm/compartilhado/descriptionAhp.vue"

export default {
    name: "vue-description-metodo-ahp-cardozo",
    components:{
        vueDescriptionAhp
    }

}
</script>
<style scoped>
.container-description{
    position: relative;
    display: grid;
    grid-template-columns: 1.5fr 1.5fr;
    column-gap: 30px;
}
.description-ahp{
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
}
.container-description-cardozo{
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
}
#img-mapa-cardozo-ahp{
    width: 580px;
    align-self: center ;
}
</style>