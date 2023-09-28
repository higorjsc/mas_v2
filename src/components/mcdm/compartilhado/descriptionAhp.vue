<template>
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
</template>
<script>
export default {
    name: "vue-description-metodo-ahp"

}
</script>

<style scoped>
p{
    overflow: hidden !important;
}
</style>