<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloFluxogramaMoser') }}</h2>
  
        <div class="container">

            <div 
                v-for="(item, index) in itensFluxograma" 
                :key="index" 
                class="itens" 
                :id="item.id" 
                :style="{ top: item.top, left: item.left, background: item.background }"
            >
                {{ $t(item.text) }}
            </div>

            <Seta 
                v-for="item in setasFluxograma"
                class="setas"
                :key="item.id"  
                :id="item.id" 
                :Head="item.head" 
                :Body="item.body" 
                :Color="item.color" 
                :Top="item.top" 
                :Left="item.left"
                :Width="item.width"
                :Transform="item.transform"  
            ></Seta>


        </div>
       
  
    </section>
</template>
  
<script>
    import Seta from '@/components/ilustrations/seta.vue';

  export default {
    components:{
        Seta
    },
    data() {
      return {
        itensFluxograma: [
            { 
                id: 'start', 
                top: '10px', 
                left: 'var(--IDENT)', 
                background: 'rgba(49, 202, 49, 0.8)', 
                text: 'startFluxoMoser' 
            },
            { 
                id: 'rock-mass', 
                top: '80px', left: 'var(--IDENT)', 
                text: 'rmFluxoMoser' 
            },
            { 
                id: 'surface-material', 
                top: '150px', left: 'var(--IDENT)', 
                text: 'smFluxoMoser' 
            },
            { 
                id: 'open-pit', 
                top: '220px', 
                left: 'var(--IDENT)', 
                text: 'opFluxoMoser' 
            },
            { 
                id: 'depth-center', 
                top: '220px', 
                left: 'calc(var(--IDENT) + 150px)', 
                text: 'depthCenterFluxoMoser' 
            },
            { 
                id: 'shaft', 
                top: '220px', 
                left: 'calc(var(--IDENT) + 300px)', 
                background: 'rgba(40, 212, 212, 0.5)', 
                text: 'shaftFluxoMoser' 
            },
            { 
                id: 'prod-center', 
                top: '290px', 
                left: 'calc(var(--IDENT) + 150px)', 
                text: 'prodFluxoMoser' 
            },
            { 
                id: 'depth-left', 
                top: '290px', 
                left: 'var(--IDENT)', 
                text: 'depthLeftFluxoMoser' 
            },
            { 
                id: 'prod-left', 
                top: '360px', 
                left: 'var(--IDENT)', 
                text: 'prodLeftFluxoMoser' 
            },
            { 
                id: 'ramp', 
                top: '360px', 
                left: 'calc(var(--IDENT) + 150px)', 
                background: 'rgba(40, 212, 212, 0.5)', 
                text: 'rampFluxoMoser' 
            },
        ],
        setasFluxograma: [
            {   
                id: 'seta-1', //horizontal do start-shaft
                head: false,
                color: 'black',
                top: '25px', 
                left: '110px',
                width: '256px',
                transform: 'rotate(0deg)'
            },
            {   
                id: 'seta-12', //horizontal de rm-shaft
                head: false,
                color: 'black',
                top: '95px', 
                left: '110px',
                width: '256px',
                transform: 'rotate(0deg)'
            },
            {   
                id: 'seta-13', //horizontal de sm-shaft
                head: false,
                color: 'black',
                top: '164px', 
                left: '110px',
                width: '256px',
                transform: 'rotate(0deg)'
            },
            {   
                id: 'seta-12', //vertical start-shaft
                head: true,
                color: 'black',
                top: '118px', 
                left: '268px',
                width: '185px',
                transform: 'rotate(90deg)'
                
            },
            {   
                id: 'seta-3', //vertical start-rm
                head: true,
                body: true,
                color: 'black',
                top: '55px', 
                left: '47px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   
                id: 'seta-4', //vertical rm-sm
                head: true,
                body: true,
                color: 'black',
                top: 'calc(55px + 1 * 70px)', 
                left: '47px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   
                id: 'seta-5', //vertical sm-op
                head: true,
                body: true,
                color: 'black',
                top: 'calc(55px + 2 * 70px)', 
                left: '47px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   
                id: 'seta-6', //vertical op-depthLeft
                head: true,
                body: true,
                color: 'black',
                top: 'calc(55px + 3 * 70px)', 
                left: '47px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   
                id: 'seta-7', //vertical depthLeft-prodLeft
                head: true,
                body: true,
                color: 'black',
                top: 'calc(55px + 4 * 70px)', 
                left: '47px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   
                id: 'seta-8', 
                head: true,
                body: true,
                color: 'black',
                top: 'calc(55px + 3 * 70px)', 
                left: '197px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   
                id: 'seta-9', 
                head: true,
                body: true,
                color: 'black',
                top: 'calc(55px + 4 * 70px)', 
                left: '197px',
                width: '30px',
                transform: 'rotate(90deg)',
            },
            {   
                id: 'seta-10', 
                head: true,
                body: true,
                color: 'black',
                top: '372px', 
                left: '110px',
                width: '50px',
                transform: 'rotate(0deg)',
            },
        

        ]
      }
    },
    methods:{

    }
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
        width: 450px;
        height: 420px;
        background-color: antiquewhite;
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
    }
    .itens:hover{
        cursor: pointer;
        box-shadow: var(--shadow-hover);
    }
    .container .setas {
        position: absolute;
    }

</style>
  