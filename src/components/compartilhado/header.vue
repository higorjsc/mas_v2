
<template>


    <div
        class="header-container"
    >

        <img
            class='mining-symbol'
            id='direita'
            src="@\assets\Imagens\mining_symbol.png"
            alt="Simbolo da mineração"
        >
        <img
            class='mining-symbol'
            id='esquerda'
            src="@\assets\Imagens\mining_symbol.png"
            alt="Simbolo da mineração"
        >

        <h1 class="titulo-pagina">
            {{ $t(`titulo${this.$store.getters.currentMetodo}`) }}
        </h1>

    </div>

</template>
<script>
export default {
    name: "vue-header"
}

</script>

<style scoped>

    .header-container{
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        max-width: 100%;
        height: 65px;
        background-color: var(--cor-tema);
        border-radius: 20px;
        border: var(--borda-simples);
        overflow: hidden !important;
    }

    .titulo-pagina {
        font-size: 14pt;
        color: var(--cor-texto-tema);
        text-align: center;
        width: 100%;
    }

    #esquerda {
        position: absolute;
        top: 10%;
        left: 1%;
    }

    #direita {
        position: absolute;
        right: 1%;
        top: 10%;
    }

</style>
