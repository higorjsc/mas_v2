<template>
    <div
        class="container-tools"
    >
        <button
            id="button-print-screen"
            class="button-tools button-print-screen"
        >
            <img class="img-print" src="@\assets\Imagens\print.png" alt="icone botao print screen"/>
        </button>
        <button
            id="button-imprimir"
            class="button-tools button-imprimir"
            @click="screenshotElement"
        >
            <img sclass="img-impressora" src="@\assets\Imagens\impressora.png" alt="botao imprimir relatorio (impresora)"/>
        </button>
        <button
            id="button-salvar"
            class="button-tools button-salvar"
        >
            <img class="img-save" src="@\assets\Imagens\save.png" alt="icone botao save file"/>
        </button>
    </div>
</template>
<script>

export default {
    name: "vue-menu-tools-ahp",
    methods: {

    }
}
</script>
<style scoped>
.container-tools{
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 50px;
    bottom: 10px;
}
.button-tools{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: white;
    border: none;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    /* z-index: 3; */
}
.button-tools:hover{
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 10px var(--cor-tema);
}
.img-save{
    height: 32px;
    width: 32px;
}
.img-print{
    height: 42px;
    width: 42px;
}

</style>