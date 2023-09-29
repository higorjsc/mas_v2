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
                <img id="img-mapa-cardozo-ahp" src="@\assets\Imagens\mapa_cardozo_ahp.png" alt="Mapa da decisão por AHP no métodoo Cardozo">
            </div>
        </div>
        <div
            class="container-fluxograma-ahp"
        >

            <img id="img-fluxograma-ahp" src="@\assets\Imagens\fluxograma_ahp.png" alt="fluxograma do metodo ahp"/>
        </div>

    </div>

</template>
<script>

export default {
    name: "vue-description-metodo-ahp-cardozo"

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
}
.container-description-ahp{
    display: flex;
    flex-direction: column;
}
.container-description-cardozo{
    display: flex;
    flex-direction: column;
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
    height: 100%;
    max-height: 760px;
}
#img-mapa-cardozo-ahp{
    position: relative;
    margin: auto;
    width: 100%;
}
</style>