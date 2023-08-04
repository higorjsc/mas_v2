

<template>


    <header>
        
        <img class='mining-symbol' id='direita' src="@\assets\Imagens\mining_symbol.png" alt="Simbolo da mineração">
        <img class='mining-symbol' id='esquerda' src="@\assets\Imagens\mining_symbol.png" alt="Simbolo da mineração">

        <h1 class="titulo-pagina">
            <slot class="slot-titulo-pagina"></slot>

        </h1>

    </header>

</template>
<script>
    export default {
        name: '',
        props: {
            tema:{
                type: String,
                default: ''
            },
        },
        data (){
            return{

            }
        }

    }

</script>

<style scoped>

    header  {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        max-width: 100%;
        height: 53px;
        background-color: var(--cor-tema);
        border-radius: 20px;
        border: var(--borda-simples);
    }

    h1 {
        font-size: 14pt;
        color: white;
        text-align: center;
        width: 100%;
    }

    #esquerda {
        position: absolute;
        top: 7%;
        left: 1%;
    }

    #direita {
        position: absolute;
        right: 1%;
        top: 7%;
    }

</style>