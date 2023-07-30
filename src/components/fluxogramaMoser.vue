<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloFluxogramaMoser') }}</h2>
  
        <div class="container">
            <div 
                v-for="(item, index) in itensFluxograma" 
                :key="index" class="itens" :id="item.id" 
                :style="{ top: item.top, left: item.left, background: item.background }"
                
            >
            {{ $t(item.text) }}
            </div>
            <div 
                v-for="(item, index) in setasFluxograma" 
                :key="index" class="setas" :id="item.id" 
                :style="{ top: item.top, left: item.left, background: item.background, width:item.width, height:item.height }"
            >
            </div>
        </div>
  
    </section>
</template>
  
<script>
import { handleError } from 'vue';

  export default {
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
                top: '60px', left: 'var(--IDENT)', 
                text: 'rmFluxoMoser' 
            },
            { 
                id: 'surface-material', 
                top: '120px', left: 'var(--IDENT)', 
                text: 'smFluxoMoser' 
            },
            { 
                id: 'open-pit', 
                top: '180px', 
                left: 'var(--IDENT)', 
                text: 'opFluxoMoser' 
            },
            { 
                id: 'depth-center', 
                top: '180px', 
                left: 'calc(var(--IDENT) + 150px)', 
                text: 'depthCenterFluxoMoser' 
            },
            { 
                id: 'shaft', 
                top: '180px', 
                left: 'calc(var(--IDENT) + 300px)', 
                background: 'rgba(40, 212, 212, 0.5)', 
                text: 'shaftFluxoMoser' 
            },
            { 
                id: 'prod-center', 
                top: '240px', 
                left: 'calc(var(--IDENT) + 150px)', 
                text: 'prodFluxoMoser' 
            },
            { 
                id: 'depth-left', 
                top: '240px', 
                left: 'var(--IDENT)', 
                text: 'depthLeftFluxoMoser' 
            },
            { 
                id: 'prod-left', 
                top: '300px', 
                left: 'var(--IDENT)', 
                text: 'prodLeftFluxoMoser' 
            },
            { 
                id: 'ramp', 
                top: '300px', 
                left: 'calc(var(--IDENT) + 150px)', 
                background: 'rgba(40, 212, 212, 0.5)', 
                text: 'rampFluxoMoser' 
            },
        ],
        setasFluxograma: [
            {   
                id: 'seta-1', 
                top: '25px', 
                left: '120px',
                background:  'var(--cor-tema)',
                width: '250px',
                height: '2px'
            },
            {   
                id: 'seta-2', 
                top: '25px', 
                left: '360px',
                background:  'var(--cor-tema)',
                width: '2px',
                height: '150px'
            },

        ]
      }
    }
  }
</script>
  
<style scoped>
   *{
        margin: 0;
        padding: 0;
        --IDENT: 20px;
        --WIDTH: 80px;
        --SPACING: 60px
    }
    section{
        grid-column: 3/4;
        border-top: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-right: var(--borda-simples);
    }
    .container{
        position: relative;
        margin: auto;
        margin-top: 8%;
        width: 450px;
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
    }
    .itens:hover{
        cursor: pointer;
        box-shadow: var(--shadow-hover);
    }
    .setas{
        position: absolute;
        cursor: default;
        z-index: 1;
    }

</style>
  