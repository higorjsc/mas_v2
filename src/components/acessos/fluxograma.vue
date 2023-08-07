<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloFluxograma') }}</h2>
        <!-- CONTAINER DE OBJETOS -->
        <div class="container">
            <!-- START -->
            <div 
                v-for ="(item, index) in objeto"
                :key="index"
                class="itens" 
                :style="{
                    top: item.top,
                    left: item.left,
                    background: this.$store.getters.currentColor[`${item.id}`],
                    transform: item.transform,
                    width: item.width,
                    height: item.height
               }"
            >
                {{ $t(`${objeto[index]['Text']}`) }} 
            </div>
           <!-- CONTAINER DE SETAS -->
            <Seta 
                v-for="(item, index) in seta"
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

    import Seta from './seta.vue';
    import Way from './way.vue';
    import  fluxoDataMixin  from './fluxoDataMixin.vue';

    export default {
        components:{
            Seta,
            Way
        },
        mixins:[
            fluxoDataMixin
        ],
        props:{
            metodo: {
                type: String,
                default: 'cardozo'
            }
        },
        data() {
            return {
                objeto: '',
                way: '',
                seta: ''
            }
        },
        mounted() {
            this.objeto = this.objetos[`${this.metodo}`]
            this.way = this.ways[`${this.metodo}`]
            this.seta = this.setas[`${this.metodo}`]
        },
        computed:{
            valoresObjetos(){
                return this.objetos[`${this.metodo}`]
            },
            valoresWay(){
                return this.ways[`${this.metodo}`]
            },
            valoresSetas(){
                return this.setas[`${this.metodo}`]
            }
        },
};


</script>
  
<style scoped>
   *{
        padding: 0;
        --IDENT: 20px;
        --WIDTH: 80px;
        --SPACING: 70px
    }
    section{
        position: relative;
        margin: 0;
        border-top: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-right: var(--borda-simples);
    }
    .container{
        position: relative;
        display: flex;
        margin: auto;
        margin-top: 1%;
        width: 430px;
        height: 500px;
        overflow: hidden;
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
  