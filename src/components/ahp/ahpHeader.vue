
<template>

    <div class="etapas-container">

        <div class="buttons-etapas" id="inputs-etapa">
            <RouterLink class='link' to="/ahp/inputs-etapa">
                INPUTS
            </RouterLink>
        </div>
        <div class="buttons-etapas" id="primeira-etapa">
            <RouterLink class='link' to="/ahp/primeira-etapa">
                ETAPA 1
            </RouterLink>
        </div>
        <div class="buttons-etapas" id="segunda-etapa">
            <RouterLink class='link' to="/ahp/segunda-etapa">
                ETAPA 2
            </RouterLink>
        </div>
        <div class="buttons-etapas" id="resultados-etapa">
            <RouterLink class='link' to="/ahp/resultados-etapa">
                RESULTADOS
            </RouterLink>
        </div>

    </div>

</template>
<script>
export default {
    name: "vue-ahp-header"
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
