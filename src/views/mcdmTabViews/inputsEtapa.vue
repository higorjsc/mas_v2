<template>

    <section class="section-esquerda-inputs">
        <switchLanguage
            class="switch-language"
            id="switch-language-mcdm"
        />

        <vueTemplateSelector/>

        <vueInputsPersonalizado
            v-if="verificarTemplate === 'personalizado'"
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
        <vueDescriptionPersonalizado
            v-if="verificarTemplate === 'personalizado'"
        />

        <div
            v-if="verificarTemplate === ''"
            class="container-description"
        >
            <!-- ABOUT -->
            <div
                class="column bigger"
            >
                <h4
                    class="titulo-description-metodo-mcdm"
                >
                    {{ $t('tituloSobreAnaliseMulticriterial') }}
                </h4>
                <p
                    class="paragrafo-explicacao-analise-multicrietio"
                    v-html="`${$t('paragrafoExplicacaoAnaliseMulticriterio')}`"
                >
                </p>
                <br>
                <img
                    id="img-wordcloud-mcdm"
                    :src="require(`@/assets/Imagens/wordcloud_mcdm.png`)"
                    alt="Nuvem de Palavras MCDM"
                    :title="$t('tituloWordCloud')"
                />
                <span
                    class="legenda-wordcloud-mcdm"
                >
                    {{ $t('legendaWordcloudMcdm') }}
                </span>
            </div>
            <div
                class="column"
            >
                <img
                    id="img-fluxograma-mcdm"
                    :src="require(`@/assets/Imagens/fluxograma_mcdm_${this.$store.getters.currentLanguage}.png`)"
                    alt="Fluxograma do processo de tomada de decisão por análise multicritério"
                    :title="$t('tituloFluxogramaMcdm')"
                />
            </div>

        </div>

    </section>


</template>

<script>
import vueInputsPersonalizado from "@/components/mcdm/personalizado/inputsPersonalizado.vue"
import vueInputsCardozo from "@/components/mcdm/cardozo/inputsCardozo.vue"
import vueDescriptionCardozo from "@/components/mcdm/cardozo/descriptionCardozo.vue"
import vueDescriptionPersonalizado from "@/components/mcdm/personalizado/descriptionPersonalizado.vue"
import vueTemplateSelector from "@/components/mcdm/compartilhado/templateSelector.vue"
import criaSlideresMixin from "@/components/mcdm/compartilhado/mixins/criaSlideres.vue"
import switchLanguage from "@/components/compartilhado/switchLanguage.vue"
import vueBalao from "@/components/compartilhado/balao.vue"


export default {
    name: "vue-view-mcdm-inputs-etapa",
    components: {
        vueInputsPersonalizado,
        vueInputsCardozo,
        vueTemplateSelector,
        switchLanguage,
        vueDescriptionCardozo,
        vueDescriptionPersonalizado
    },
    mixins: [
        criaSlideresMixin,
        vueBalao
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
.switch-language{
    position: absolute;
    margin-top: -14%;
    opacity: 1;
}

#img-fluxograma-mcdm{
    margin-top: 35px;
    height: 700px;
}

p{
    padding: 0;
    margin: 0;

}
#img-wordcloud-mcdm{
    align-self: center;
    justify-self: center;
    width: 90%;
    max-height: 325px;
}
#img-wordcloud-mcdm:hover{
    transform: translateY(-90px)scale(1.5);
    cursor: pointer;
    z-index: 2;
    border: var(--borda-simples);
}

.legenda-wordcloud-mcdm{
    text-align: center;
    width: 100%;
}
</style>