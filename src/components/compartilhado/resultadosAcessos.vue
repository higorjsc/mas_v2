<template>
    <section
        class="section-resultados"
    >
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloIlustration') }}</h2>

        <span 
        >
            {{  }}
        </span>

    </section>
</template>
  
<script>

    export default {
        components:{
        
        },
        props:{
        
        },
        data() {
            return {
            
            }
        },
        mounted() {

        },
        computed:{

            resultadoFluxograma(){
                let resultado = (this.$store.getters.currentResult[metodo][resultado])
                if(resultado =='shaft'){
                    resultado == $('textoShaft')
                }else if(resultado =='shaft'){
                    resultado == $('textoShaft')
                }else if(resultado =='shaft'){
                    resultado == $('textoShaft')
                }
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
</style>
  