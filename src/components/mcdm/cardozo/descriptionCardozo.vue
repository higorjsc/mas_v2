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
                v-html="$t('paragrafoExplicacaoAhp')"
            >
            </p>
            <h4
                class="titulo-description-metodo-mcdm"
            >
                {{ $t('tituloSobreMetodoCardozoAhp') }}
            </h4>
            <p
                class="paragrafo-explicacao-metodo-mcdm"
                v-html="$t('paragrafoExplicacaoMetodoCardozoAhp')"
            >
            </p>
            <img
                id="img-mapa-cardozo-ahp"
                :src="require(`@/assets/Imagens/mapa_cardozo_ahp_${this.$store.getters.currentLanguage}.png`)"
                alt="Mapa da decisão por AHP no métodoo Cardozo"
                :title="$t('tituloMapaCardozo')"
            >
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
    name: "vue-description-metodo-ahp-cardozo"

}
</script>
<style scoped>



#img-mapa-cardozo-ahp{
    width: 90%;
}
#img-fluxograma-ahp{
    margin-top: 35px;
    width: 100%;
}
</style>