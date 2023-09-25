
<template>

    <div
        class="footer-container"
    >

        <img
            id="ufrgs" src="@\assets\Imagens\ufrgs.png"
            alt="logo_ufrgs_img"
        >

        <div class="div-esquerda">
            <ul
                class="ul-esquerda"
            >
                <li>{{ $ft('universidadeFooter') }}</li>
                <li>{{ $ft('laboratorioFooter') }}</li>
                <li>{{ $ft('localizacaoFooter') }}</li>
                <li>{{ $ft('contatoFooter') }}</li>
            </ul>
        </div>

        <div class="div-direita">
            <ul
                class="ul-direita"
            >
                <li>{{ $ft('linksFooter') }}</li>
                <li @click="abrirPopUp('creditos')">
                    {{ $ft('creditosFooter') }}
                </li>
                <li @click="abrirPopUp('referencias')">
                    {{ $ft('referenciasFooter') }}
                </li>
                <li @click="abrirPopUp('reportarErro')">
                    {{ $ft('reportarErroFooter') }}
                </li>
            </ul>

        </div>

        <img
            id="laprom" src="@\assets\Imagens\laprom.png"
            alt="logo_laprom_png"
        >

    </div>

    <vuePopUp/>

</template>

<script>

import vuePopUp from "./popUp.vue"
export default {
    name: "vue-footer",
    components: {
        vuePopUp
    },

    methods: {
        abrirPopUp(frame) {
            this.$store.dispatch("changePopUp", frame)
        }
    }
}

</script>

<style scoped>

    .footer-container {
        background-color: var(--cor-tema);
        border: var(--borda-simples);
        display: grid;
        grid-template-columns: 1fr 5fr 1fr 3fr;
        position: relative;
        grid-column: 1/5;
        min-width: 100%;
        width: 100%;
        max-width: 100%;
        height: 100px;
        border-radius: 20px;
        font-size: 5pt;
        align-items: center;
        align-content: center;
        overflow: hidden;
    }
    .footer-container div{
        display: flex;
        flex-direction: column;
        position: absolute;
        font-size: 11pt;
        color: var(--cor-texto-tema);
        opacity: 0.8;
    }
    .div-esquerda{
        grid-column: 2/3;
    }
    .div-direita {
        left: 20%;
        grid-column: 4/5;
    }
    ul{
        text-decoration: none;
    }
    .div-direita li:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    #ufrgs {
        position: absolute;
        grid-column: 1/2;
        transform: scale(0.6);
        bottom: -16%;
        left: -10%;
    }

    #laprom {
        position: absolute;
        grid-column: 3/4;
        justify-self: left;
        left: -10%;
    }

</style>
