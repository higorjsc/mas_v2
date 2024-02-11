<template>

    <div
        class="container-description"
    >
        <div
            class="column bigger"
        >
            <h4
                class="titulo-description-metodo-mcdm"
            >
                {{ $t('tituloSobreAhp')}}
            </h4>
            <p
                class="paragrafo-explicacao-metodo-mcdm"
                v-html="`${$t('paragrafoExplicacaoAhp')}`"
            >
            </p>
            <img
                id="img-mapa-ahp"
                :src="require(`@/assets/Imagens/mapa_ahp_${this.$store.getters.currentLanguage}.png`)"
                alt="fluxograma do metodo ahp"
                :title="$t('tituloMapaAhp')"
            />
        </div>
        <div
            class="column"
        >
            <img
                id="img-fluxograma-ahp"
                :src="require(`@/assets/Imagens/fluxograma_ahp_${this.$store.getters.currentLanguage}.png`)"
                alt="fluxograma do metodo ahp"
                :title="$t('tituloFluxogramaAhp')"
            />
        </div>
    </div>


</template>
<script>

export default {
    name: "vue-description-metodo-ahp"

}
</script>
<style scoped>
.grid-description{
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
}
.grid-description-coluna-1{
    grid-column: 1/2;
    width: 100%;
}
#img-fluxograma-ahp{
    grid-column: 2/3;
    width: 100%;
}
#img-mapa-ahp{
    position: relative;
    margin: auto;
    width: 90%;
}
</style>