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
                    v-html="`${$t('paragrafoExplicacaoSoftware')}`"
                >
                </p>
                <h4
                    class="titulo-about"
                >
                    {{ $t('tituloSobreAnaliseMulticriterial') }}
                </h4>
                <p
                    class="paragrafo-explicacao-analise-multicrietio"
                    v-html="`${$t('paragrafoExplicacaoAnaliseMulticriterio')}`"
                >
                </p>

            </div>
            <div
                class="container-fluxograma"
            >
                <img src="@/assets/Imagens/fluxograma_mcdm.png" alt="Fluxograma do processo de tomada de decisão por análise multicritério"/>
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
    grid-template-columns:1fr 1fr ;
    height: 100%;
}

.titulo-about{
    font-size: 14pt;
}

.container-about{
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
}
.container-fluxograma{
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2/3;
    margin: auto;
}

p{
    padding: 0;
    margin: 0;
}
</style>