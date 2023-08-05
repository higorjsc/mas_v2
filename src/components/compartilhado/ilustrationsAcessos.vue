<template>
    <section
        class="section-ilustrations"
    >
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloIlustration') }}</h2>

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
                alt="imagem shaft vertical"
            >
            <img 
                id="rampa-pit" 
                v-if="this.$store.getters.currentIlustrations['rampa_pit']"
                src="@\assets\Imagens\rampa.png" 
                alt="imagem shaft vertical"
            >
            <!-- <img 
                id="shaft" 
                v-if="ilustrations['shaft']"
                src="@\assets\Imagens\correia.png" 
                alt="imagem shaft vertical"
                > -->
            <img 
                id="vent" 
                v-if="this.$store.getters.currentIlustrations['ventilacao']"
                src="@\assets\Imagens\vent.png" 
                alt="imagem shaft vertical"
            >
            <img 
                id="superficie" 
                v-if="this.$store.getters.currentIlustrations['superficie']"
                src="@\assets\Imagens\superficie.png" 
                alt="imagem shaft vertical"
            >
            <img 
                id="superficie-pit" 
                v-if="this.$store.getters.currentIlustrations['superficie_pit']"
                src="@\assets\Imagens\superficie_pit.png" 
                alt="imagem shaft vertical"
            >
            <img 
                v-if="this.$store.getters.currentIlustrations['orebody']"
                id="orebody" 
                src="@\assets\Imagens\orebody.png" 
                alt="imagem shaft vertical"
            >
            <img 
                id="truck" 
                v-if="this.$store.getters.currentIlustrations['truck']"
                src="@\assets\Imagens\truck.png" 
                alt="imagem shaft vertical"
            >
            <img 
                id="usina" 
                v-if="this.$store.getters.currentIlustrations['usina']"
                src="@\assets\Imagens\usina.png" 
                alt="imagem shaft vertical"
            >

        </div>
        <Resultados />

    </section>

</template>
  
<script>
    import Resultados from '@/components/compartilhado/resultadosAcessos.vue'
    export default {
        components:{
            Resultados
        },
        props:{
            tema:{
                type: String,
                default: ''
            },
        },
        computed:{
            resultadoFluxograma() {
                let resultado = this.$store.getters.currentResult[this.metodo]['resultado'];
                switch (resultado) {
                    case 'shaft':
                        resultado = 'textoShaft';
                        break;
                    case 'outroValor':
                        resultado = 'textoOutroValor';
                        break;
                    // Adicione mais casos conforme necessário
                    default:
                        resultado = ''; // Defina um valor padrão se não houver correspondência
                }
                return resultado;
            },

        },
};


</script>
  
<style scoped>
   *{
        margin: 0;
        padding: 0;
    }
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
        position: absolute;
        top: 5%;
        height: 65%;
        width: 360px;
        overflow: hidden;
    }
    img{
        position: absolute;
    }
    #shaft{
        top: 16%;
        left: 12%;
        height: 230px;
    }
    #orebody{
        top: 50%;
        left: 3%;
    }
    #usina{
        top: -2%;
        right: -11%;
        transform: rotate(-3deg);
    }
    #superficie{
        top: 14%;
        left: 4%;
        z-index: -1;
    }
    #superficie-pit{
        top: 12%;
        left: -11%;
        z-index: -1;
    }
    #vent{
        height: 240px;
        top: 15%;
        left: 69%
    }
    #rampa-pit{
        top: 25.8%;
        left: 37%;
        height: 200px;
    }
    #rampa{
        top: 16.5%;
        left: 35%;
        height: 250px;
    }
    #truck{
        top: 11.8%;
        left: 10%;
        transform: rotate(3deg);
    }

</style>
  