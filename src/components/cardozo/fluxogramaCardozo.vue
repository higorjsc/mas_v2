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
                id="start" 
                :style="{
                    top: item.top,
                    left: item.left,
                    background: this.$store.getters.currentColorCardozo[`${item.id}`],
                    transform: item.transform,
                    width: item.width,
                    height: item.height
               }"
            >
                {{ $t(`${objetos[index]['Text']}`) }} 
            </div>
           <!-- CONTAINER DE SETAS -->
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
            <!-- CONTAINER DE TEXTOS OVERSETAS -->
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
                        left: '180px',
                        Text: 'startFluxoCardozo'
                    },
                    {   
                        id: 'surfaceMaterial',
                        top: '70px',
                        left: '140px',
                        width: '150px',
                        Text: 'smFluxoCardozo'
                    },
                    {   
                        id: 'rockMass',
                        top: '130px',
                        left: '180px',
                        Text: 'rmFluxoCardozo'
                    },
                    {   
                        id: 'depthCenter',
                        top: '190px',
                        left: '140px',
                        width: '150px',
                        Text: 'depthCenterFluxoCardozo'
                    },
                    {   
                        id: 'prodCenter',
                        top:'250px',
                        left: '140px',
                        width: '150px',
                        Text: 'prodCenterFluxoCardozo'
                    },
                    {   
                        id: 'depthLeft',
                        top: '310px',
                        left: '140px',
                        width: '150px',
                        Text: 'depthLeftFluxoCardozo',
                    },
                    {   
                        id: 'prodLeft',
                        top: '300px',
                        left: '32px',
                        Text: 'prodLeftFluxoCardozo',
                        transform: 'rotate(-90deg)'
                    },
                    {   
                        id: 'rampa',
                        top: '385px',
                        left: '60px',
                        width: '180px',
                        Text: 'correiaFluxoCardozo',
                        transform: 'rotate(-12deg)'
                    },
                    {   
                        id:'shaft',
                        top: '132px',
                        left: '-15px',
                        width: '170px',
                        Text: 'shaftFluxoCardozo',
                        transform: 'rotate(-90deg)'
                    },
                    {   
                        id: 'correia',
                        top: '250px',
                        left: '270px',
                        width: '200px',
                        Text: 'rampaFluxoCardozo',
                        transform: 'rotate(-70deg)'
                    },
            ],
            wayFluxograma:[
                {   //prodLeft - shaft
                    top: '345px',
                    left: '0px',
                    Text: 'NO',
                }, 

            ],
            setasFluxograma: [

                {   //start - surfaceMaterial
                    top: '47px', 
                    left: '207px',
                    width: '27px',
                    transform: 'rotate(90deg)',
                },
                {   //surfaceMaterial - rockMass
                    top: '107px', 
                    left: '207px',
                    width: '27px',
                    transform: 'rotate(90deg)',
                },
                {   //rockMass - depthCenter
                    top: '167px', 
                    left: '207px',
                    width: '27px',
                    transform: 'rotate(90deg)',
                },
                {   //depthCenter - prodCenter
                    top: '227px', 
                    left: '207px',
                    width: '26px',
                    transform: 'rotate(90deg)',
                },
                {   //prodCenter - depthLeft
                    top: '287px', 
                    left: '207px',
                    width: '27px',
                    transform: 'rotate(90deg)',
                },
                {   //depthLeft - rampa
                    top: '347px', 
                    left: '206px',
                    width: '29px',
                    transform: 'rotate(90deg)',
                },
                {   //prodLeft - rampa
                    top: '378px', 
                    left: '58px',
                    width: '30px',
                    transform: 'rotate(90deg)',
                },
                {   //depthLeft - prodLeft 1
                    top: '249px', 
                    left: '57px',
                    width: '29px',
                    transform: 'rotate(-90deg)',
                },
                {   //depthLeft - prodLeft
                    top: '350px', 
                    left: '57px',
                    width: '29px',
                    transform: 'rotate(0deg)',
                },
                {   //depthCenter - shaft
                    top: '197px', 
                    left: '87px',
                    width: '44px',
                    transform: 'rotate(-180deg)',
                },
                {   //rockMass - shaft
                    top: '137px', 
                    left: '87px',
                    width: '85px',
                    transform: 'rotate(-180deg)',
                },
                {   //prodLeft - shaft
                    top: '77px', 
                    left: '87px',
                    width: '44px',
                    transform: 'rotate(-180deg)',
                },


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
  