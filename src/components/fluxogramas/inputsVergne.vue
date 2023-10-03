
<template>
    <section class="section-inputs-acessos">
        <!-- TITULO SEÇÃO -->
        <h2
            class="titulo-section-acessos"
        >
            {{ $t('tituloInputs') }}
        </h2>

        <!-- BOTÃO SWITCH -->
        <switchLanguage
            class="main-elements switch-language"
        />

        <!-- SURFACE MATERIALS-->
        <div class='container-inputs-acessos' id="sm">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('smTituloVergne') }}
            </h3>
            <span>{{ $t('smDescriptionVergne') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="vergne.surfaceMaterial" value="menor" id="sm-menor">
                <label for="sm-menor" class="radio-label" id="sm-vergne-menor"></label>
                <span>{{ $t('sim') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="vergne.surfaceMaterial" value="maior" id="sm-maior">
                <label for="sm-maior" class="radio-label" id="sm-vergne-maior"></label>
                <span>{{ $t('nao') }}</span>
            </div>
        </div>
        <!--ROCKMASS CONDITIONS-->
        <div class='container-inputs-acessos' id="rm">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('rmTituloVergne') }}
            </h3>
            <span>{{ $t('rmDescriptionVergne') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="rm" v-model="vergne.rockMass" value="menor" id="rm-menor">
                <label for="rm-menor" class="radio-label" id="rm-vergne-menor"></label>
                <span>{{ $t('sim') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="rm" v-model="vergne.rockMass" value="maior" id="rm-maior">
                <label for="rm-maior" class="radio-label" id="rm-vergne-maior"></label>
                <span>{{ $t('nao') }}</span>
            </div>
        </div>
        <!-- PROFUNDIDADE -->
        <div class='container-inputs-acessos' id="depth">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('depthTituloVergne') }}
            </h3>
            <span>{{ $t('depthDescriptionVergne') }}</span>
            <select v-model="vergne.depth" class="depth" id="depth-vergne">
                <option value=""></option>
                <option value="menor">
                    {{ $t('depthMenorVergne') }}
                </option>
                <option value="entre">
                    {{ $t('depthEntreVergne') }}
                </option>
                <option value="maior">
                    {{ $t('depthMaiorVergne') }}
                </option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <div class='container-inputs-acessos' id="prod">
            <h3 class="subtitulo-inputs-acessos">
                {{ $t('prodTituloVergne') }}
            </h3>
            <span> {{ $t('prodDescriptionVergne') }}</span>
            <select v-model="vergne.prod" class="prod" id="prod-vergne">
                <option value=""></option>
                <option value="menor">
                    {{ $t('prodMenorVergne') }}
                </option>
                <option value="entre">
                    {{ $t('prodEntreVergne') }}
                </option>
                <option value="maior">
                    {{ $t('prodMaiorVergne') }}
                </option>
            </select>
        </div>

    </section>

</template>

<script>
import switchLanguage from "@/components/compartilhado/switchLanguage.vue"
import inputsMixin from "@/components/fluxogramas/mixins/inputsMixin.vue"

export default {
    components: {
        switchLanguage
    },
    mixins: [
        inputsMixin
    ],
    data() {
        return {
            vergne: {
                surfaceMaterial: "",
                rockMass: "",
                prod: "",
                depth: ""
            }
        }
    },
    watch: {
        vergne: {
            handler() {
                // Desabilita os inputs e altera a opacidade das divs
                this.disableObject(["rm", "depth", "prod"])
                // Oculta as todas as imagens não default
                this.defaultImages()
                // Muda a cor de todos os elementos para vermelho.
                this.setDefaultColor()
                // Chama a função com a lógica do fluxograma
                this.newValue()
                // Altera o valor de vergne na store VueExe
                this.$store.dispatch("changeInputsAcessos", { metodo: "vergne", value: this.vergne })
            },
            deep: true // deep: true → O que estiver dentro da variável será observado
        }
    },
    mounted() {
        // Muda a cor de todos os elementos para o padrão definido
        this.setDefaultColor()
        // Desabilita todas as divs e inputs não-inicias
        this.disableObject(["rm", "depth", "prod"])
    },
    methods: {
        newValue() {
            this.resultado = ""
            // SURFACE MATERIAL
            if (this.vergne.surfaceMaterial === "maior") {
                this.resultado = "resultadoShaftVergne"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "shaft"])
            } else if (this.vergne.surfaceMaterial === "menor") {
                this.enableObjects("rm")
                this.setColorGreen(["start", "surfaceMaterial"])
            }

            // ROCK MASS
            if (this.vergne.surfaceMaterial === "menor" && this.vergne.rockMass === "maior") {
                this.resultado = "resultadoShaftVergne"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "shaft"])
            } else if (this.vergne.surfaceMaterial === "menor" && this.vergne.rockMass === "menor") {
                this.enableObjects("depth")
                this.setColorGreen(["start", "surfaceMaterial", "rockMass"])
            }

            // PROFUNDIDADE
            if (this.vergne.surfaceMaterial === "menor" && this.vergne.rockMass === "menor" && this.vergne.depth === "maior") {
                this.resultado = "resultadoShaftVergne"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "shaft"])
            } else if (this.vergne.surfaceMaterial === "menor" && this.vergne.rockMass === "menor" && (this.vergne.depth === "entre" || this.vergne.depth === "menor")) {
                this.enableObjects("prod")
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter"])
            }

            // PRODUÇÃO
            if (this.vergne.surfaceMaterial === "menor" && this.vergne.rockMass === "menor" && (this.vergne.depth === "entre" || this.vergne.depth === "menor") && this.vergne.prod === "maior") {
                this.resultado = "resultadoCorreiVergne"
                this.showImages(["correia"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "correia"])
            } else if (this.vergne.surfaceMaterial === "menor" && this.vergne.rockMass === "menor" && (this.vergne.depth === "entre" || this.vergne.depth === "menor") && (this.vergne.prod === "menor" || this.vergne.prod === "entre") && this.vergne.depth === "menor") {
                this.resultado = "resultadoRampaVergne"
                this.showImages(["rampa", "truck"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "rampa"])
            } else if (this.vergne.surfaceMaterial === "menor" && this.vergne.rockMass === "menor" && (this.vergne.depth === "entre" || this.vergne.depth === "menor") && this.vergne.prod === "menor" && this.vergne.depth === "entre") {
                this.resultado = "resultadoRampaVergne"
                this.showImages(["rampa", "truck"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "prodLeft", "rampa"])
            } else if (this.vergne.surfaceMaterial === "menor" && this.vergne.rockMass === "menor" && (this.vergne.depth === "entre" || this.vergne.depth === "menor") && this.vergne.prod === "entre" && this.vergne.depth === "entre") {
                this.resultado = "resultadoShaftVergne"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "prodLeft", "shaft"])
            }
        }
    }
}

</script>
