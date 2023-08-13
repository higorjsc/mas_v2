
<template>

    <div class="etapas-container">

        <div class="buttons-etapas" id="first-etapa">
            <RouterLink class='link' to="/ahp-cardozo/first-etapa">
                ETAPA 1
            </RouterLink>
        </div>

        <div class="buttons-etapas" id="secound-etapa">
            <RouterLink class='link' to="/ahp-cardozo/secound-etapa">
                ETAPA 2
            </RouterLink>
        </div>

        <div class="buttons-etapas" id="resultados">
            <RouterLink class='link' to="/ahp-cardozo/resultados">
                RESULTADOS
            </RouterLink>
        </div>

    </div>

</template>
<script>
export default {
    name: "vue-ahp-cardozo-header"
}

</script>

<style scoped>

    .etapas-container{
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        max-width: 100%;
        height: 53px;
        border-bottom: var(--borda-simples);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .buttons-etapas{
        height: 100%;
        width: calc(100%/3);
        background-color: var(--cor-tema);
        opacity: 0.9;
    }
    .buttons-etapas:hover{
        opacity: 1;
    }

    #first-etapa{
        border-right: 2pt solid white;
    }
    #secound-etapa{
        border-right: 2pt solid white;
    }
    .link{
        color: var(--cor-texto-tema);
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
