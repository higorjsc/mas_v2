<template>

    <div class="etapas-container">
        <label class="buttons-etapas" ref="label-inputs">
            <a class="link" @click.prevent="handleLink(0,'/mcdm/inputs')">INPUTS</a>
        </label>

        <label class="buttons-etapas" ref="label-primeira">
            <a class="link" @click.prevent="handleLink(1,'/mcdm/primeira')">ETAPA 1</a>
        </label>

        <label class="buttons-etapas" ref="label-segunda">
            <a class="link" @click.prevent="handleLink(2,'/mcdm/segunda')">ETAPA 2</a>
        </label>

        <label class="buttons-etapas" ref="label-resultados">
            <a class="link" @click.prevent="handleLink(3,'/mcdm/resultados')">RESULTADOS</a>
        </label>

    </div>

</template>
<script>
export default {
    name: "vue-mcdm-header",
    computed:{
        viewProgress() {
            return this.$store.getters.currentViewProgress
        },
        templateAtual() {
            return this.$store.getters.currentTemplateMcdm
        }
    },
    watch:{
        templateAtual() {
            this.handleTemplate()
        }
    },
    mounted() {
        this.changeTabOpacity()
        this.changeAtualTab("/mcdm/inputs")
        this.$router.push("/mcdm/inputs")
    },
    created() {
        this.$store.dispatch("changeViewProgress", 0)
    },
    methods: {
        handleTemplate() {
            this.templateAtual === "" ? this.$store.dispatch("changeViewProgress", 0) : this.$store.dispatch("changeViewProgress", 1)
            this.changeTabOpacity()
            this.changeAtualTab("/mcdm/inputs")
        },
        changeTabOpacity() {
            document.querySelectorAll(".buttons-etapas").forEach((element) => {
                element.style.opacity = 0.6
            })
            for(let i = 0; (i <= this.viewProgress && i < 4); i++) {
                document.querySelectorAll("label")[i].style.opacity = 0.85
            }
        },
        changeAtualTab(atual) {
            atual = atual.split("/")[2]
            this.$refs[`label-${atual}`].style.opacity = 1
            this.$store.dispatch("changeTabViewAtual", atual)
        },
        handleLink(index, route) {
            if(this.viewProgress > index && this.templateAtual !== "") {
                this.changeTabOpacity()
                this.changeAtualTab(route)
                this.$router.push(route)
            }else if(this.viewProgress === index && this.templateAtual !== "") {
                this.$store.dispatch("changeViewProgress", this.viewProgress + 1)
                this.changeTabOpacity()
                this.changeAtualTab(route)
                this.$router.push(route)
            }else if(this.viewProgress === index && this.templateAtual === "") {
                this.$store.dispatch("changeViewProgress", 0)
                this.$router.push("/mcdm/inputs")
                this.changeTabOpacity()
            }

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
        height: 100%;
        max-height: 75px;
        border-bottom: var(--borda-simples);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        box-sizing: border-box;
        overflow: hidden !important;
    }

    .buttons-etapas{
        height: 100%;
        width: calc(100%/3);
        background-color: var(--cor-tema);
        opacity: 0.9;
        z-index: 2;
        overflow: hidden !important;
    }
    .buttons-etapas:hover{
        opacity: 1;
        overflow: hidden !important;

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
        overflow: hidden !important;

    }
    .link:hover{
        cursor: pointer;
    }

</style>
