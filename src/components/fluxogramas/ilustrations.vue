<template>
    <section
        class="section-ilustrations"
    >
        <!-- TITULO SEÇÃO -->
        <h2
            class="titulo-section-acessos"
            id="titulo-section-ilustrations-acessos"
        >
            {{ $t('tituloIlustration') }}
        </h2>

        <div class="ilustration-container">
            <img
                id="shaft"
                v-if="this.$store.getters.currentIlustrations['shaft']"
                src="@\assets\Imagens\shaft.png"
                alt="imagem shaft vertical"
            >
            <img
                id="rampa"
                v-if="this.$store.getters.currentIlustrations['rampa']"
                src="@\assets\Imagens\rampa.png"
                alt="imagem rampa"
            >
            <img
                id="rampa-pit"
                v-if="this.$store.getters.currentIlustrations['rampaPit']"
                src="@\assets\Imagens\rampa.png"
                alt="imagem rampa a partir de mina open pit"
            >
            <div
                id="correia"
                v-if="this.$store.getters.currentIlustrations['correia']"
            ></div>
            <img
                id="vent"
                v-if="this.$store.getters.currentIlustrations['ventilacao']"
                src="@\assets\Imagens\vent.png"
                alt="imagem poço de ventilação"
            >
            <img
                id="superficie"
                v-if="this.$store.getters.currentIlustrations['superficie']"
                src="@\assets\Imagens\superficie.png"
                alt="imagem superficie"
            >
            <img
                id="superficie-pit"
                v-if="this.$store.getters.currentIlustrations['superficiePit']"
                src="@\assets\Imagens\superficie_pit.png"
                alt="imagem superficie com mina open pit"
            >
            <img
                v-if="this.$store.getters.currentIlustrations['orebody']"
                id="orebody"
                src="@\assets\Imagens\orebody.png"
                alt="imagem orebody"
            >
            <img
                id="truck"
                v-if="this.$store.getters.currentIlustrations['truck']"
                src="@\assets\Imagens\truck.png"
                alt="imagem caminhão"
            >
            <img
                id="usina"
                v-if="this.$store.getters.currentIlustrations['usina']"
                src="@\assets\Imagens\usina.png"
                alt="imagem usina de beneficiamento"
            >
        </div>

        <Resultados/>

    </section>

</template>

<script>
import Resultados from "./resultados.vue"
export default {
    name: "vue-ilustrations-acessos",
    components: {
        Resultados
    }
}

</script>

<style scoped>

    .section-ilustrations{
        position: relative;
        width: 100%;
        border-top: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-right: var(--borda-simples);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .ilustration-container{
        position: relative;
        margin: auto;
        height: 65%;
        width: 360px;
        overflow: hidden !important;
    }
    img{
        position: absolute;
    }
    #titulo-section-ilustrations-acessos{
        margin-bottom: 40px;
    }
    #shaft{
        top: 13.8%;
        left: 12%;
        height: 280px;
    }
    #orebody{
        top: 50%;
        left: 3%;
    }
    #usina{
        top: 1.4%;
        right: -9%;
        transform: rotate(-3deg);
    }
    #superficie{
        top: 12%;
        left: 4%;
        z-index: -1;
    }
    #superficie-pit{
        top: 12%;
        left: -11%;
        z-index: -1;
        transform: rotate(1deg);
    }
    #vent{
        height: 282px;
        top: 15.2%;
        left: 69%
    }
    #rampa-pit{
        top: 21.7%;
        left: 43%;
        height: 270px;
    }
    #rampa{
        top: 12.7%;
        left: 23%;
        height: 307px;
    }
    #correia{
        position: absolute;
        top: 37%;
        left: 15%;
        background-color: black;
        width: 390px;
        height: 2px;
        transform: rotate(-30deg);
    }
    #truck{
        top: 11.8%;
        left: 10%;
        transform: rotate(3deg);
    }

</style>
