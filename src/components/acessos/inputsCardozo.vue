
<template>
    <section class="section-inputs">
        <!-- TITULO SEÇÃO -->
        <h2>
            {{ $ft('tituloInputs') }}
        </h2>

        <!-- BOTÃO SWITCH -->
        <switchLanguage
            class="main-elements switch-language"
        />

        <!-- SURFACE MATERIALS-->
        <div class='parametros-container' id="sm">
            <h3 class="subtitulo-inputs">
                {{ $ft('smTituloCardozo') }}
            </h3>
            <span>{{ $ft('smDescriptionCardozo') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="cardozo.surfaceMaterial" value="menor" id="sm-menor">
                <label for="sm-menor" class="radio-label" id='sm-cardozo-menor' ></label>
                <span>{{ $ft('smMenorCardozo') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="cardozo.surfaceMaterial" value="maior" id="sm-maior">
                <label for="sm-maior" class="radio-label" id='sm-cardozo-maior' ></label>
                <span>{{ $ft('smMaiorCardozo') }}</span>
            </div>
        </div>
        <!--rockMass CONDITIONS-->
        <div class='parametros-container' id="rm">
            <h3 class="subtitulo-inputs">
                {{ $ft('rmTituloCardozo') }}
            </h3>
            <span>{{ $ft('rmDescriptionCardozo') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="rm" v-model="cardozo.rockMass" value="menor" id="rm-menor">
                <label for="rm-menor" id='rm-cardozo-menor' class="radio-label"></label>
                <span>{{ $ft('rmMenorCardozo') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="rm" v-model="cardozo.rockMass" value="maior" id="rm-maior">
                <label for="rm-maior" id='rm-cardozo-maior' class="radio-label"></label>
                <span>{{ $ft('rmMaiorCardozo') }}</span>
            </div>
        </div>
        <!-- PROFUNDIDADE -->
        <div class='parametros-container' id="depth">
            <h3 class="subtitulo-inputs">
                {{ $ft('depthTituloCardozo') }}
            </h3>
            <span>{{ $ft('depthDescriptionCardozo') }}</span>
            <select v-model="cardozo.depth" class="depth" id='depth-cardozo' >
                <option value=""></option>
                <option value="menor">
                    {{ $ft('depthMenorCardozo') }}
                </option>
                <option value="entre">
                    {{ $ft('depthEntreCardozo') }}
                </option>
                <option value="maior">
                    {{ $ft('depthMaiorCardozo') }}
                </option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <div class='parametros-container' id="prod">
            <h3 class="subtitulo-inputs">
                {{ $ft('prodTituloCardozo') }}
            </h3>
            <span> {{ $ft('prodDescriptionCardozo') }}</span>
            <select v-model="cardozo.prod" class="prod" id='prod-cardozo' >
                <option value=""></option>
                <option value="menor">
                    {{ $ft('prodMenorCardozo') }}
                </option>
                <option value="entre">
                    {{ $ft('prodEntreCardozo') }}
                </option>
                <option value="maior">
                    {{ $ft('prodMaiorCardozo') }}
                </option>
            </select>
        </div>

    </section>

</template>

<script>
import switchLanguage from "@/components/compartilhado/switchLanguage.vue"
import inputsMixin from "@/components/acessos/mixins/inputsMixin.vue"

export default {
    name: "vue-inputs-cardozo",
    components: {
        switchLanguage
    },
    mixins: [
        inputsMixin
    ],
    data() {
        return {
            cardozo: {
                surfaceMaterial: "",
                rockMass: "",
                prod: "",
                depth: ""
            }
        }
    },
    watch: {
        cardozo: {
            handler() {
                // Desabilita os inputs e altera a opacidade das divs
                this.disableObject(["rm", "depth", "prod"])
                // Define a cor de todos os elementos para o padrão.
                this.setDefaultColor()
                // Oculta as todas as imagens não default
                this.defaultImages()
                // Chama a função com a lógica do fluxograma
                this.newValue()
                // Altera o valor de cardozo na store VueExe
                this.$store.dispatch("changeInputsAcessosCardozo", this.cardozo)
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
            // SURFACE MATERIAL
            if (this.cardozo.surfaceMaterial === "maior") {
                this.resultado = "shaftCardozo"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "shaft"])
            } else if (this.cardozo.surfaceMaterial === "menor") {
                this.enableObjects("rm")
                this.setColorGreen(["start", "surfaceMaterial"])
            }

            // ROCK MASS
            if (this.cardozo.surfaceMaterial === "menor" && this.cardozo.rockMass === "maior") {
                this.resultado = "shaftCardozo"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "shaft"])
            } else if (this.cardozo.surfaceMaterial === "menor" && this.cardozo.rockMass === "menor") {
                this.enableObjects("depth")
                this.setColorGreen(["start", "surfaceMaterial", "rockMass"])
            }

            // PROFUNDIDADE
            if (this.cardozo.surfaceMaterial === "menor" && this.cardozo.rockMass === "menor" && this.cardozo.depth === "maior") {
                this.resultado = "shaftCardozo"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "shaft"])
            } else if (this.cardozo.surfaceMaterial === "menor" && this.cardozo.rockMass === "menor" && (this.cardozo.depth === "entre" || this.cardozo.depth === "menor")) {
                this.enableObjects("prod")
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter"])
            }

            // PRODUÇÃO
            if (this.cardozo.surfaceMaterial === "menor" && this.cardozo.rockMass === "menor" && (this.cardozo.depth === "entre" || this.cardozo.depth === "menor") && this.cardozo.prod === "maior") {
                this.resultado = "correiaCardozo"
                this.showImages(["correia"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "correia"])
            } else if (this.cardozo.surfaceMaterial === "menor" && this.cardozo.rockMass === "menor" && (this.cardozo.depth === "entre" || this.cardozo.depth === "menor") && (this.cardozo.prod === "menor" || this.cardozo.prod === "entre") && this.cardozo.depth === "menor") {
                this.resultado = "rampaCardozo"
                this.showImages(["rampa", "truck"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "rampa"])
            } else if (this.cardozo.surfaceMaterial === "menor" && this.cardozo.rockMass === "menor" && (this.cardozo.depth === "entre" || this.cardozo.depth === "menor") && this.cardozo.prod === "menor" && this.cardozo.depth === "entre") {
                this.resultado = "rampaCardozo"
                this.showImages(["rampa", "truck"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "prodLeft", "rampa"])
            } else if (this.cardozo.surfaceMaterial === "menor" && this.cardozo.rockMass === "menor" && (this.cardozo.depth === "entre" || this.cardozo.depth === "menor") && this.cardozo.prod === "entre" && this.cardozo.depth === "entre") {
                this.resultado = "shaftCardozo"
                this.showImages(["shaft"])
                this.setColorRed()
                this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "prodLeft", "shaft"])
            }
        }
    }
}

</script>
