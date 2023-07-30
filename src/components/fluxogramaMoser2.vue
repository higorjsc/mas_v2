<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloFluxogramaMoser') }}</h2>

        <div class="container">

            <div class="fluxograma" id="start">
                {{ $t('startFluxoMoser') }}
            </div>
            <div class="fluxograma" id="rock-mass">
                {{ $t('rmFluxoMoser') }}
            </div>
            <div class="fluxograma" id="surface-material">
                {{ $t('smFluxoMoser') }}
            </div>
            <div class="fluxograma" id="open-pit">
                {{ $t('opFluxoMoser') }}
            </div>
            <div class="fluxograma" id="depth-center">
                {{ $t('depthCenterFluxoMoser') }}
            </div>
            <div class="fluxograma" id="shaft">
                {{ $t('shaftFluxoMoser') }}
            </div>
            <div class="fluxograma" id="prod-center">
                {{ $t('prodFluxoMoser') }}
            </div>
            <div class="fluxograma" id="ramp">
                {{ $t('rampFluxoMoser') }}
            </div>
            <div class="fluxograma" id="depth-left">
                {{ $t('depthLeftFluxoMoser') }}
            </div>
            <div class="fluxograma" id="prod-left">
                {{ $t('prodLeftFluxoMoser') }}
            </div>
        </div>

    </section>
</template>

<script>

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
    .fluxograma{
        position: absolute;
        display: block;
        background-color: white;
        padding: 5px;
        border: var(--borda-simples);
        border-radius: 10px;
        left: var(--IDENT);
        width: var(--WIDTH)
    }
    .fluxograma:hover{
        cursor: pointer;
        box-shadow: var(--shadow-hover);
    }

    #start{
        top: 10px;
        background: rgba(49, 202, 49, 0.8);
    }
    #rock-mass{
        top: 60px
    }
    #surface-material{
        top: 120px
    }
    #open-pit{
        top: 180px
    }
    #depth-center{
        top: 180px;
        left: calc(var(--IDENT) + 150px)
    }
    #shaft{
        top: 180px;
        left: calc(var(--IDENT) + 300px);
        background: rgba(40, 212, 212, 0.5);

    }
    #prod-center{
        top: 240px;
        left: calc(var(--IDENT) + 150px)
    } 
 
    #depth-left{
        top: 240px
    }

    #prod-left{
        top: 300px
    }

    #ramp{
        top: 300px;
        left: calc(var(--IDENT) + 150px);
        background: rgba(40, 212, 212, 0.5);
    }

</style>