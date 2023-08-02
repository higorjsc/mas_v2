<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloFluxograma') }}</h2>
        <!-- CONTAINER DE OBJETOS -->
        <div class="container">
            <!-- START -->
            <div 
                v-for ="(item, index) in objetos"
                :key="index"
                class="itens" 
                :style="{
                    top: item.top,
                    left: item.left,
                    background: this.$store.getters.currentColor[this.metodo][`${item.id}`],
                    transform: item.transform,
                    width: item.width,
                    height: item.height
               }"
            >
                {{ $t(`${objetos[index]['Text']}`) }} 
            </div>
           <!-- CONTAINER DE SETAS -->
            <Seta 
                v-for="(item, index) in setas"
                class="setas"
                :key="index"  
                :Head="item.head" 
                :Color="item.color" 
                :Top="item.top" 
                :Left="item.left"
                :Width="item.width"
                :Transform="item.transform"  
            >
            </Seta>
            <!-- CONTAINER DE TEXTOS OVERSETAS -->
            <Way 
                v-for="(item, index) in way"
                class="way"
                :key="index"  
                :BackgroundColor="item.backgroundColor" 
                :FontColor="item.color" 
                :FontSize="item.fontSize" 
                :TextAlign="item.textAlign" 
                :Top="item.top" 
                :Left="item.left"
                :Width="item.width"
                :Height="item.height"
                :Transform="item.transform"  
            >
                {{ item.Text }}
            </Way>


        </div>
         
    </section>
</template>
  
<script>
    import Seta from '@/components/compartilhado/seta.vue';
    import Way from '@/components/compartilhado/way.vue';
    import { objetos } from '@/assets/javascript/constants.js';

    export default {
        components:{
            Seta,
            Way
        },
        props:{
            metodo: {
                type: String,
                default: 'cardozo'
            }
        },
        data() {
            return {
                objetos: '',
                way: '',
                setas: ''
            }
        },
        mounted() {
            // Carregar os dados necessários assim que o componente for criado
            this.objetos = objetos['objeto'][`${this.metodo}`];
            this.way = objetos['way'][`${this.metodo}`];
            this.setas = objetos['setas'][`${this.metodo}`];
        },
        computed:{
            valoresObjetos(){
                return objetos['objeto'][`${this.metodo}`]
            },
            valoresWay(){
                return objetos['way'][`${this.metodo}`]
            },
            valoresSetas(){
                return objetos['setas'][`${this.metodo}`]
            }
        },
};


</script>
  
<style scoped>
   *{
        margin: 0;
        padding: 0;
        --IDENT: 20px;
        --WIDTH: 80px;
        --SPACING: 70px
    }
    section{
        position: relative;
        grid-column: 3/4;
        border-top: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-right: var(--borda-simples);
    }
    .container{
        position: relative;
        display: flex;
        align-items: center;
        margin: auto;
        margin-top: 1%;
        width: 430px;
        height: 420px;
    }
    .itens{
        position: absolute;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: white;
        padding: 5px;
        border: var(--borda-simples);
        border-radius: 10px;
        left: var(--IDENT);
        width: var(--WIDTH);
        z-index: 2;
        text-align: center;
        font-size: 9pt;
        font-weight: bold;
        line-height: 1;
    }
    .itens:hover{
        cursor: pointer;
        box-shadow: var(--shadow-hover);
    }

    .container .setas {
        position: absolute;
    }

    .container .way {
        position: absolute;
        cursor: default;
    }
</style>
  