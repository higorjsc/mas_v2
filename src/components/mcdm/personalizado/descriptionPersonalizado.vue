<template>

    <div
        class="container-description"
    >

        <div
            class="container-texto-description"
        >
            <div
                class="container-description-ahp"
            >

                <h4
                    class="titulo-description-metodo-mcdm"
                >
                    {{ $t('tituloSobreAhp')}}
                </h4>
                <p
                    class="paragrafo-explicacao-metodo-mcdm"
                >
                    {{ $t('paragrafoExplicacaoAhp') }}
                </p>
            </div>
            <img
                id="img-mapa-ahp"
                :src="require(`@/assets/Imagens/mapa_ahp_${this.$store.getters.currentLanguage}.png`)"
                alt="fluxograma do metodo ahp"
                :title="$t('tituloMapaAhp')"
            />
        </div>
        <div
            class="container-fluxograma-ahp"
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
.container-description{
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0;
    column-gap: 30px;
    height: 100%;
    max-height: 100%;
}

.container-texto-description{
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
}
.container-description-ahp{
    display: flex;
    flex-direction: column;
}
.container-description-cardozo{
    display: flex;
    flex-direction: column;
    text-align: justify;
}
.container-fluxograma-ahp{
    grid-column: 2/3;
    height: 100%;
    width: 100%;
    display: flex;
}

#img-fluxograma-ahp{
    position: relative;
    margin: auto;
    height: 90%;
    max-height: 760px;
}
#img-mapa-ahp{
    position: relative;
    margin: auto;
    width: 90%;
    max-height: 380px;
}
</style>