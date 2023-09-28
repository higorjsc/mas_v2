<template>

    <section class="section-esquerda-inputs">
        <switchLanguage
            class="switch-language"
            id="switch-language-mcdm"
        />
        <vueTemplateSelector/>

        <vueInputsLivre
            v-if="verificarTemplate === 'livre'"
        />

        <vueInputsCardozo
            v-if="verificarTemplate === 'cardozoTemplate'"
        />
    </section>
    <section
        class="section-direita-inputs"
    >
        <vueDescriptionCardozo
            v-if="verificarTemplate === 'cardozoTemplate'"
        />
        <vueDescriptionLivre
            v-if="verificarTemplate === 'livre'"
        />

        <div
            v-if="verificarTemplate === ''"
            class="container-software-description"
        >
            <!-- ABOUT -->
            <div
                class="container-about"
            >
                <h4
                    class="titulo-about"
                >
                    {{ $t('tituloSobreSoftware') }}
                </h4>
                <p
                    class="paragrafo-explicacao-software"
                >
                    {{ $t('paragrafoExplicacaoSoftware') }}
                </p>
            </div>

            <!-- CONTAINER ETAPAS -->
            <div
                class="container-etapas-description"
            >
                <!-- INPUTS -->
                <div
                    class="container-etapas"
                >
                    <h5
                        class="titulo-etapas"
                    >
                        {{ $t('tituloSobreEtapaInputs') }}
                    </h5>
                    <p
                        class="paragrafo-explicacao-etapa"
                    >
                        {{ $t('paragrafoExplicacaoEtapaInputs') }}
                    </p>
                </div>
                <!-- ETAPA 1 -->
                <div
                    class="container-etapas"
                >
                    <h5
                        class="titulo-etapas"
                    >
                        {{ $t('tituloSobrePrimeiraEtapa') }}
                    </h5>
                    <p
                        class="paragrafo-explicacao-etapa"
                    >
                        {{ $t('paragrafoExplicacaoPrimeiraEtapa') }}
                    </p>
                </div>
                <!-- ETAPA 2 -->
                <div
                    class="container-etapas"
                >
                    <h5
                        class="titulo-etapas"
                    >
                        {{ $t('tituloSobreSegundaEtapa') }}
                    </h5>
                    <p
                        class="paragrafo-explicacao-etapa"
                    >
                        {{ $t('paragrafoExplicacaoSegundaEtapa') }}
                    </p>
                </div>
                <!-- RESULTADOS -->
                <div
                    class="container-etapas"
                >
                    <h5
                        class="titulo-etapas"
                    >
                        {{ $t('tituloSobreEtapaResultados') }}
                    </h5>
                    <p
                        class="paragrafo-explicacao-etapa"
                    >
                        {{ $t('paragrafoExplicacaoEtapaResultados') }}
                    </p>
                </div>

            </div>
        </div>

    </section>


</template>

<script>
import vueInputsLivre from "@/components/mcdm/livre/inputsLivre.vue"
import vueInputsCardozo from "@/components/mcdm/cardozo/inputsCardozo.vue"
import vueDescriptionCardozo from "@/components/mcdm/cardozo/descriptionCardozo.vue"
import vueDescriptionLivre from "@/components/mcdm/livre/descriptionLivre.vue"
import vueTemplateSelector from "@/components/mcdm/compartilhado/templateSelector.vue"
import criaSlideresMixin from "@/components/mcdm/compartilhado/mixins/criaSlideres.vue"
import switchLanguage from "@/components/compartilhado/switchLanguage.vue"


export default {
    name: "vue-view-mcdm-inputs-etapa",
    components: {
        vueInputsLivre,
        vueInputsCardozo,
        vueTemplateSelector,
        switchLanguage,
        vueDescriptionCardozo,
        vueDescriptionLivre
    },
    mixins: [
        criaSlideresMixin
    ],
    computed: {
        verificarTemplate() {
            return this.$store.getters.currentTemplateMcdm
        }
    },
    beforeUnmount() {
        this.handleTemplate()
    },
    methods: {
        handleTemplate() {
            try {
                this.criaSlideresPrimeira()
                this.criaSlideresSegunda()
            } catch {
                console.log("falha ao criar slideres (normal na troca de métodos)")
            }
        }
    }
}
</script>
<style scoped>
.section-esquerda-inputs{
    position: relative;
    grid-column: 1/2;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    width: 100%;
    height: 100%;
    padding-bottom: 5%;
    padding-left: 2%;
    box-sizing: border-box;
    overflow:hidden !important;
}

.section-direita-inputs{
    grid-column: 2/3;
    grid-row: 2/3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: var(--borda-simples);
    width: 100%;
    height: 100%;
    padding-left: 2%;
    padding-right: 2%;
    box-sizing: border-box;
    overflow:hidden !important;
}
#switch-language-mcdm{
    position: absolute;
    top: -3%;
    opacity: 1;
}
.container-software-description{
    display: grid;
    grid-template-rows:1fr 4fr ;
    overflow: hidden !important;
}
.container-etapas-description{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.titulo-about{
    font-size: 12pt;
}
.titulo-etapas{
    font-size: 12pt;
}
.container-about{
    padding: 5px;
    box-sizing: border-box;
}
.container-etapas{
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
}
p{
    height: 50px;
}
</style>