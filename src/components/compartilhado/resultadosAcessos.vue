<template>
    <section
        class="section-resultados"
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
            <!-- <img 
                id="shaft" 
                v-if="ilustrations['shaft']"
                src="@\assets\Imagens\correia.png" 
                alt="imagem shaft vertical"
                > -->
            <img 
                id="vent" 
                v-if="this.$store.getters.currentIlustrations['vent']"
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
                id="orebody" 
                v-if="this.$store.getters.currentIlustrations['orebody']"
                src="@\assets\Imagens\orebody.png" 
                alt="imagem shaft vertical"
            >
            <img 
                id="truck" 
                v-if="this.$store.getters.currentIlustrations['truck']"
                src="@\assets\Imagens\usina.png" 
                alt="imagem shaft vertical"
            >

        </div>

        <div
            class="resultados-container"
        >
            <span 
                :class="`resultado ${tema}`"
            >
                {{ $t(this.$store.getters.currentInputsAcesso[this.metodo]['resultado']) }}
            </span>

        </div>
        
    </section>
</template>
  
<script>

    export default {
        components:{
        
        },
        props:{
            metodo:{
                type: String,
                default: 'cardozo'
            },
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
            }
        },
};


</script>
  
<style scoped>
   *{
        margin: 0;
        padding: 0;
    }
    .section-resultados{
        position: relative;
        width: 100%;
        border-top: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-right: var(--borda-simples);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .container{
        position: relative;
        display: flex;
        align-items: center;
        margin: auto;
    }

    .resultados-container{
        display: flex;
        position: absolute;
        width: 80%;
        height: 10%;
        bottom: 20%;
        left: 10%;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        background-color: var(--cor-tema);
        color: white;
    }
    .ilustration-container{
        position: absolute;
        top: 10%;
        background-color: blue;
        width: 98%;
    }
    img{
        position: absolute;
    }
</style>
  