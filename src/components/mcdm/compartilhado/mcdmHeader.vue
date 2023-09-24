<template>

    <div class="etapas-container">
        <label class="buttons-etapas" ref="label-inputs">
            <a class="link" @click.prevent="handleLink('/mcdm/inputs')">INPUTS</a>
        </label>

        <label class="buttons-etapas" ref="label-primeira">
            <a class="link" @click.prevent="handleLink('/mcdm/primeira')">ETAPA 1</a>
        </label>

        <label class="buttons-etapas" ref="label-segunda">
            <a class="link" @click.prevent="handleLink('/mcdm/segunda')">ETAPA 2</a>
        </label>

        <label class="buttons-etapas" ref="label-resultados">
            <a class="link" @click.prevent="handleLink('/mcdm/resultados')">RESULTADOS</a>
        </label>

    </div>

</template>
<script>
export default {
    name: "vue-mcdm-header",
    mounted() {
        this.changeTabOpacity("inputs")
    },
    methods: {
        changeTabOpacity(escolhido) {
            document.querySelectorAll("label").forEach((element) => {
                element.style.opacity = 0.9
            })
            this.$refs[`label-${escolhido}`].style.opacity = 1
        },
        handleLink(route) {
            this.changeTabOpacity((route.split("/")[2]))
            this.$router.push(route)
        }
    }
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
        z-index: 2;
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
        z-index: 1;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .link:hover{
        cursor: pointer;
    }

</style>
