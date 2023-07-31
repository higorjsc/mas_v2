

<template>


    <footer >
        
        <img id="ufrgs" src="@\assets\Imagens\ufrgs.png" alt="logo_ufrgs_img">
        <div class="div-esquerda">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        
        <div class="div-direita">
            <h4>Links</h4>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <img id="laprom" src="@\assets\Imagens\laprom.png" alt="logo_laprom_png">

    </footer>

</template>
<script>
    export default {
        name: '',
        props: '',
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
        grid-template-columns: minmax(250px, 5fr) minmax(300px, 5fr) minmax(500px, 9fr) minmax(420px, 7fr);
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
        font-size: 10pt;
        opacity: 0.8;
        color: white;
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
        color: white;
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