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
                    background: this.$store.getters.currentColorVergne[`${item.id}`],
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
                        Text: 'startFluxoVergne'
                    },
                    {   
                        id: 'shallowOverburden',
                        top: '70px',
                        left: '140px',
                        width: '150px',
                        Text: 'smFluxoVergne'
                    },
                    {   
                        id: 'soundRock',
                        top: '130px',
                        left: '180px',
                        Text: 'rmFluxoVergne'
                    },
                    {   
                        id: 'depthCenter',
                        top: '190px',
                        left: '140px',
                        width: '150px',
                        Text: 'depthCenterFluxoVergne'
                    },
                    {   
                        id: 'prodCenter',
                        top:'250px',
                        left: '140px',
                        width: '150px',
                        Text: 'prodCenterFluxoVergne'
                    },
                    {   
                        id: 'depthLeft',
                        top: '310px',
                        left: '140px',
                        width: '150px',
                        Text: 'depthLeftFluxoVergne',
                    },
                    {   
                        id: 'prodLeft',
                        top: '300px',
                        left: '32px',
                        Text: 'prodLeftFluxoVergne',
                        transform: 'rotate(-90deg)'
                    },
                    {   
                        id: 'rampa',
                        top: '385px',
                        left: '60px',
                        width: '180px',
                        Text: 'correiaFluxoVergne',
                        transform: 'rotate(-12deg)'
                    },
                    {   
                        id:'shaft',
                        top: '132px',
                        left: '-15px',
                        width: '170px',
                        Text: 'shaftFluxoVergne',
                        transform: 'rotate(-90deg)'
                    },
                    {   
                        id: 'correia',
                        top: '250px',
                        left: '270px',
                        width: '200px',
                        Text: 'rampaFluxoVergne',
                        transform: 'rotate(-70deg)'
                    },
            ],
            wayFluxograma:[

                {   //shallowOverburden - soundRock
                    top: '95px',
                    left: '213px',
                    Text: 'YES',
                },  
                {   //soundRock - depthCenter
                    top: '155px',
                    left: '213px',
                    Text: 'YES',
                }, 
                {   //depthCenter - prodCenter
                    top: '215px',
                    left: '213px',
                    Text: 'YES',
                },  
                {   //prodCenter - depthLeft
                    top: '275px',
                    left: '213px',
                    Text: 'YES',
                }, 
                {   //depthCenter - rampa
                    top: '335px',
                    left: '213px',
                    Text: 'YES',
                },  
                {   //depthCenter - correia
                    top: '252px',
                    left: '320px',
                    Text: 'NO',
                }, 
                {   //depthLeft - prodLeft 
                    top: '313px',
                    left: '117px',
                    Text: 'NO',
                },  
                {   //prodLeft - rampa
                    top: '365px',
                    left: '64px',
                    Text: 'YES',
                }, 
                {   //prodLeft - shaft
                    top: '250px',
                    left: '68px',
                    Text: 'NO',
                }, 
                {   //depthCenter - shaft
                    top: '192px',
                    left: '110px',
                    Text: 'NO',
                },  
                {   //soundRock - shaft
                    top: '124px',
                    left: '134px',
                    Text: 'NO',
                },
                {   //shallowOverburden - shaft
                    top: '71px',
                    left: '102px',
                    Text: '>70 m',
                }, 

            ],
            setasFluxograma: [

                {   //start - shallowOverburden
                    top: '47px', 
                    left: '207px',
                    width: '27px',
                    transform: 'rotate(90deg)',
                },
                {   //shallowOverburden - soundRock
                    top: '107px', 
                    left: '207px',
                    width: '27px',
                    transform: 'rotate(90deg)',
                },
                {   //soundRock - depthCenter
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
                {   //prodCenter - correia
                    top: '257px', 
                    left: "303px",
                    width: '50px',
                },
                {   //depthLeft - rampa
                    top: '347px', 
                    left: '206px',
                    width: '29px',
                    transform: 'rotate(90deg)',
                },
                {   //prodLeft - rampa
                    top: '378px', 
                    left: '56px',
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
                    top: '318px', 
                    left: '97px',
                    width: '34px',
                    transform: 'rotate(-180deg)',
                },
                {   //depthCenter - shaft
                    top: '197px', 
                    left: '87px',
                    width: '44px',
                    transform: 'rotate(-180deg)',
                },
                {   //soundRock - shaft
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
  