

<template>


    <footer >
        
        <img id="ufrgs" src="@\assets\Imagens\ufrgs.png" alt="logo_ufrgs_img">
        <div class="div-esquerda">
            <span>{{ $t('universidadeFooter') }}</span>
            <span>{{ $t('laboratorioFooter') }}</span>
            <span>{{ $t('localizacaoFooter') }}</span>
            <span>{{ $t('contatoFooter') }}</span>
        </div>
        
        <div class="div-direita">
            <h4>{{ $t('linksFooter') }}</h4>
            <span> {{ $t('creditosFooter') }}</span>
            <span> {{ $t('referenciasFooter') }}</span>
            <span> {{ $t('reportarErroFooter') }}</span>
        </div>
        <img id="laprom" src="@\assets\Imagens\laprom.png" alt="logo_laprom_png">

    </footer>

</template>
<script>
    export default {
        name: '',
        data (){
            return{
                src_symbol: './src/assets/Imagens/mining_symbol.png',
                alt_symbol: "Simbolo da mineração"
            }
        }

    }

</script>
<style scoped>

    footer {
        background-color: var(--cor-tema);
        border: var(--borda-simples);
        display: grid;
        grid-template-columns: 1fr 4fr 1fr 3fr;
        position: relative;
        grid-column: 1/5;
        min-width: 100%;
        width: 100%;
        max-width: 100%;
        height: 100px;
        border-radius: 20px;
        align-items: center;
        align-content: center;
        overflow: hidden;
    }

    .div-esquerda{
        display: flex;
        flex-direction: column;
        grid-column: 2/3;
        font-size: 10pt;
        opacity: 0.8;
        color: var(--cor-texto-tema);
    }

    .div-direita {
        display: block;
        position: absolute;
        grid-column: 4/5;
        left: 5%;
    }

    .div-direita h4, 
    .div-direita span {
        display: block;
        margin: 0;
        padding: 0;
        color: var(--cor-texto-tema);
        font-size: 10pt;
    }

    .div-direita span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    
    #ufrgs {
        position: absolute;
        grid-column: 1/2;
        transform: scale(0.6);
        bottom: -16%;
        left: -10%;
    }

    #laprom {
        position: absolute;
        grid-column: 3/4;
        justify-self: left;
        left: -10%;
    }

</style>