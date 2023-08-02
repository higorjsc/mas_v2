<template>

    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloFluxograma') }}</h2>
        <div class="container">
            <!-- CONTAINER DE OBJETOS -->
            <div 
                v-for ="(item, index) in objetos"
                :key="index"
                class="itens" 
                id="start" 
                :style="{
                    top: objetos[index]['top'],
                    left: objetos[index]['left'],
                    background: this.$store.getters.currentColorMoser[`${item.id}`]
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
                    id: 'logistica',
                    top: '10px',
                    left: '20px',
                    Text: 'logisticaFluxoMoser'
                },
                {   
                    id: 'rockMass',
                    top: '70px',
                    left: '20px',
                    Text: 'rmFluxoMoser'
                },
                {   
                    id: 'surfaceMaterial',
                    top: '135px',
                    left: '20px',
                    Text: 'smFluxoMoser'
                },
                {   
                    id: 'depthCenter',
                    top: '218px',
                    left: '170px',
                    Text: 'depthCenterFluxoMoser'
                },
                {   
                    id: 'prodCenter',
                    top:'305px',
                    left: '170px',
                    Text: 'prodCenterFluxoMoser'
                },
                {   
                    id:'openPit',
                    top: '218px',
                    left: '20px',
                    Text: 'opFluxoMoser'
                },
                {   
                    id: 'depthLeft',
                    top: '300px',
                    left: '20px',
                    Text: 'depthLeftFluxoMoser'
                },
                {   
                    id: 'prodLeft',
                    top: '382px',
                    left: '20px',
                    Text: 'prodLeftFluxoMoser'
                },
                {   
                    id: 'rampa',
                    top: '420px',
                    left: '170px',
                    Text: 'rampaFluxoMoser'
                },
                {   
                    id: 'shaft',
                    top: '220px',
                    left: '320px',
                    Text: 'shaftMoser'
                },
            ],
            wayFluxograma:[
                {   //logistica - shaft
                    top: '45px',
                    left: '358px',
                    Text: 'NO',
                }, 
                {   //logistica - rockMass
                    top: '41px',
                    left: '53px',
                    width: '20px',
                    Text: 'YES',
                }, 
                {   //rockMass - surfaceMaterial
                    top: '102px',
                    left: '39px',
                    width: '60px',
                    Text: 'Class I - V',
                }, 
                {   //surfaceMaterial - openPit
                    top: '185px',
                    left: '45px',
                    width: '40px',
                    Text: '<70 m',
                }, 
                {   //openPit - depthLeft
                    top: '268px',
                    left: '53px',
                    width: '20px',
                    Text: 'YES',
                }, 
                {   //depthLeft - prodLeft
                    top: '349px',
                    left: '42px',
                    width: '50px',
                    Text: '<600 m',
                },
                {   //rockMass - shaft
                    top: '75px',
                    left: '180px',
                    Text: 'class VI-VII',
                }, 
                {   //surfaceMaterial - shaft
                    top: '150px',
                    left: '195px',
                    Text: '>70 m',
                    width: '40px',
                }, 
                {   //depthCenter - prodCenter
                    top: '268px',
                    left: '197px',
                    Text: '>70 m',
                    width: '40px',
                }, 
                {   //prodCenter - rampa
                    top: '340px',
                    left: '197px',
                    Text: '>70 m',
                    width: '40px',
                },
                {   //prodleft - shaft
                    top: '387px',
                    left: '125px',
                    Text: '>600 k ton/year',
                    width: '80px',
                },
                {   //depthleft - shaft
                    top: '313px',
                    left: '118px',
                    Text: '>600 m',
                    width: '40px',
                },
                {   //openPit - depthCenter
                    top: '223px',
                    left: '126px',
                    Text: 'No',
                    width: '20px',
                },
            ],
            setasFluxograma: [
                {   //logistica - shaft 1
                    head: false,
                    top: '25px', 
                    left: '110px',
                    width: '256px',
                },
                {   //logistica - shaft 2
                    top: '118px', 
                    left: '268px',
                    width: '185px',
                    transform: 'rotate(90deg)'
                },
                {   //rockMass - shaft 
                    head: false,
                    top: '84px', 
                    left: '110px',
                    width: '256px',
                },
                {   //surfaceMaterial - shaft
                    head: false,
                    top: '158px', 
                    left: '110px',
                    width: '256px',
                },
                {   //logistica - rockMass
                    top: '50px', 
                    left: '47px',
                    width: '20px',
                    transform: 'rotate(90deg)',
                },
                {   //rockMass - surfaceMaterial
                    top: '112px', 
                    left: '46px',
                    width: '25px',
                    transform: 'rotate(90deg)',
                },
                {   //surfaceMaterial - openPith
                    top: '196px', 
                    left: '46px',
                    width: '25px',
                    transform: 'rotate(90deg)',
                },
                {   //openPith - depthLeft
                    top: '278px', 
                    left: '46px',
                    width: '25px',
                    transform: 'rotate(90deg)',
                },
                {   //depthLeft - prodLeft
                    top: '360px', 
                    left: '46px',
                    width: '25px',
                    transform: 'rotate(90deg)',
                },
                {   //depthCenter - prodCenter
                    top: '280px', 
                    left: '197px',
                    transform: 'rotate(90deg)',
                },
                {   //prodCenter - Rampa
                    top: '372px', 
                    left: '175px',
                    width: '75px',
                    transform: 'rotate(90deg)',
                },
                {   //openPit - depthCenter
                    top: '230px', 
                    left: '112px',
                    width: '50px',
                },
                {   //depthLeft - shaft 1
                    head: false,
                    top: '323px', 
                    left: '112px',
                    width: '50px',
                },
                {   //depthLeft - shaft 2
                    head: false,
                    top: '344px', 
                    left: '140px',
                    width: '42px',
                    transform: 'rotate(90deg)'
                },
                {   //depthLeft - shaft 3
                    head: false,
                    top: '365px', 
                    left: '160px',
                    width: '207px',
                },
                {   //depthCenter - shaft
                    top: '230px', 
                    left: '262px',
                    width: '50px',
                },
                {   //prodLeft -shaft 1
                    head: false,
                    top: '395px', 
                    left: '112px',
                    width: '255px',
                },
                {   //prodLeft -shaft 2
                    top: '318px', 
                    left: '293px',
                    width: '138px',
                    transform: 'rotate(-90deg)'
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
        z-index: 1;
    }

    .container .way {
        position: absolute;
        cursor: default;
    }
</style>
  