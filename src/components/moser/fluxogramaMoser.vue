<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloFluxogramaMoser') }}</h2>
  
        <div class="container">
            <!-- START -->
            <div 
                class="itens" 
                id="start" 
                :style="{background: this.$store.getters.currentColorMoser.logistica}"
            >
                {{ $t('logisticaFluxoMoser') }} 
            </div>
            <!-- ROCKMASS -->
            <div 
                class="itens" 
                id="rock-mass" 
                :style="{background: this.$store.getters.currentColorMoser.rockMass}" 
            >
                {{ $t('rmFluxoMoser') }} 
            </div>
            <!-- SURFACE MATERIALS -->
            <div 
                class="itens" 
                id="surface-material" 
                :style="{background: this.$store.getters.currentColorMoser.surfaceMaterial}"
            >
                {{ $t('smFluxoMoser') }}
            </div>
            <!-- ACESS BY OPEN PIT -->
            <div 
                class="itens" 
                id="open-pit" 
                :style="{background: this.$store.getters.currentColorMoser.openPit}"
            >
                {{ $t('opFluxoMoser') }} 
            </div>
            <!-- PROFUNDIDADE DO CENTRO DO FLUXOGRAMA -->
            <div 
                class="itens" 
                id="depth-center" 
                :style="{background: this.$store.getters.currentColorMoser.depthCenter}"
            >
                {{ $t('depthCenterFluxoMoser') }}
            </div>
            <!-- UTILIZAR SHAFT -->
            <div 
                class="itens" 
                id="shaft" 
                :style="{background: this.$store.getters.currentColorMoser.shaft}"
            >
                {{ $t('shaftFluxoMoser') }}
            </div>
            <!-- PRODUÇÃO DO CENTRO DO FLUXOGRAMA -->
            <div
                class="itens" 
                id="prod-center"
                :style="{background: this.$store.getters.currentColorMoser.prodCenter}"
            >
                {{ $t('prodCenterFluxoMoser') }}
            </div>
            <!-- PROFUNDIDADE DA ESQUERDA DO FLUXOGRAMA -->
            <div 
                class="itens" 
                id="depth-left"
                :style="{background: this.$store.getters.currentColorMoser.depthLeft}" 
                >{{ $t('depthLeftFluxoMoser') }} 
            </div>
            <!-- PRODUÇÃO DA ESQUERDA DO FLUXOGRAMA -->
            <div 
                class="itens" 
                id="prod-left" 
                :style="{background: this.$store.getters.currentColorMoser.prodLeft}"
            >
                {{ $t('prodLeftFluxoMoser') }} 
            </div>
            <!-- UTILIZAR RAMPA -->
            <div 
                class="itens"
                id="rampa" 
                :style="{background: this.$store.getters.currentColorMoser.rampa}"
            >
                {{ $t('rampFluxoMoser') }} 
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
    #start{
        top: 10px;
        left: var(--IDENT)
    }

    #rock-mass{
        top: 70px;
        left: var(--IDENT);
        background: rgba(236, 22, 22, 0.5);
    }

    #surface-material{
        top: 135px;
        left: var(--IDENT)
    }

    #open-pit{
        top: 218px;
        left: var(--IDENT)
    }

    #depth-center{
        top: 218px;
        left: calc(var(--IDENT) + 150px)
    }

    #shaft{
        top: 220px;
        left: calc(var(--IDENT) + 300px)
    }

    #prod-center{
        top: 305px;
        left: calc(var(--IDENT) + 150px);
    }

    #depth-left{
        top: 300px;
        left: var(--IDENT);
    }

    #prod-left{
        top: 382px;
        left: var(--IDENT);
    }
    #rampa{
        top: 420px;
        left: calc(var(--IDENT) + 150px);
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
  