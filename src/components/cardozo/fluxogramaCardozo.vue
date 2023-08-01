<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloFluxogramaCardozo') }}</h2>
  
        <div class="container">
            <!-- START -->
            <div 
                v-for ="(item, index) in objetos"
                :key="index"
                class="itens" 
                id="start" 
                :style="{
                    top: objetos[index]['top'],
                    left: objetos[index]['left'],
                    background: this.$store.getters.currentColorCardozo[`${item.id}`]
                }"
            >
                {{ $t('startFluxoCardozo') }} 
            </div>
           
            <Seta 
                v-for="(item, index) in setasFluxograma"
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

            <Way 
                v-for="(item, index) in wayFluxograma"
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

    export default {
        components:{
            Seta,
            Way
        },
        data() {
        return {
            objetos:[
                    {   
                        id: 'start',
                        top: '10px',
                        left: '20px',
                    },
                    {   
                        id: 'rockMass',
                        top: '70px',
                        left: '20px',
                    },
                    {   
                        id: 'surfaceMaterial',
                        top: '135px',
                        left: '20px',
                    },
                    {   
                        id: 'depthCenter',
                        top: '218px',
                        left: '170px',
                    },
                    {   
                        id: 'prodCenter',
                        top:'305px',
                        left: '170px',
                    },
                    {   
                        id: 'depthLeft',
                        top: '300px',
                        left: '20px',
                    },
                    {   
                        id: 'prodLeft',
                        top: '382px',
                        left: '20px',
                    },
                    {   
                        id: 'rampa',
                        top: '420px',
                        left: '170px',
                    },
                    {   
                        id:'correia',
                        top: '220px',
                        left: '320px',
                    },
                    {   
                        id: 'shaft',
                        top: '220px',
                        left: '320px',
                    },
            ],
            wayFluxograma:[
                {   //logistica - shaft
                    top: '45px',
                    left: '358px',
                    Text: 'NO',
                }, 

            ],
            setasFluxograma: [

                {   //logistica - rockMass
                    top: '50px', 
                    left: '47px',
                    width: '20px',
                    transform: 'rotate(90deg)',
                }


            ]
        }
        },

    }
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
        margin: auto;
        margin-top: 1%;
        width: 430px;
        height: 420px;
    }
    .itens{
        position: absolute;
        display: block;
        background-color: white;
        padding: 5px;
        border: var(--borda-simples);
        border-radius: 10px;
        left: var(--IDENT);
        width: var(--WIDTH);
        z-index: 2;
        text-align: center;
        font-size: 9pt;
        /* background-color: rgba(12, 187, 12, 0.719); */
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
  