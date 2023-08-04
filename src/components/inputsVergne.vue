
<template>
    <section class="section-inputs">
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloInputs') }}</h2>

        <!-- BOTÃO SWITCH -->
        <switchLanguage 
              class="main-elements switch-language"
        />

        <!-- SURFACE MATERIALS-->
        <div class='parametros-container' id="sm">
            <h3 class="subtitulo-inputs">{{$t('smTituloVergne')}}</h3>
            <span>{{ $t('smDescriptionVergne') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="vergne.surfaceMaterial" value="menor" id="sm-menor">
                <label for="sm-menor" class="radio-label"></label> 
                <span>{{ $t('smMenorVergne') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="vergne.surfaceMaterial" value="maior" id="sm-maior">
                <label for="sm-maior" class="radio-label"></label>
                <span>{{ $t('smMaiorVergne') }}</span> 
            </div>
        </div>
        <!--rockMass CONDITIONS-->
        <div class='parametros-container' id="rm">
            <h3 class="subtitulo-inputs">{{$t('rmTituloVergne')}}</h3>
            <span>{{ $t('rmDescriptionVergne') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="rm" v-model="vergne.rockMass" value="menor" id="rm-menor">
                <label for="rm-menor" class="radio-label"></label> 
                <span>{{ $t('rmMenorVergne') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="rm" v-model="vergne.rockMass" value="maior" id="rm-maior">
                <label for="rm-maior" class="radio-label"></label>
                <span>{{ $t('rmMaiorVergne') }}</span> 
            </div>
        </div>
        <!-- PROFUNDIDADE -->
        <div class='parametros-container' id="depth">
            <h3 class="subtitulo-inputs">{{ $t('depthTituloVergne') }}</h3>
            <span>{{ $t('depthDescriptionVergne') }}</span>
            <select v-model="vergne.depth" class="depth">
                <option value=""></option>
                <option value="menor">{{('depthMenorVergne')}}</option>
                <option value="entre">{{('depthEntreVergne')}}</option>
                <option value="maior">{{('depthMaiorVergne')}}</option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <div class='parametros-container' id="prod">
            <h3 class="subtitulo-inputs">{{ $t('prodTituloVergne') }}</h3>
            <span> {{ $t('prodDescriptionVergne') }}</span>
            <select v-model="vergne.prod" class="prod">
                <option value=""></option>
                <option value="menor">{{('prodMenor')}}</option>
                <option value="entre">{{('prodEntre')}}</option>
                <option value="maior">{{('prodMaior')}}</option>
            </select>
        </div>

    </section>
   
  
</template>

<script>

    import {disableObject, enableObjects} from '@/assets/javascript/acessos.js'
    import {coresDefault} from '@/assets/javascript/constants.js'
    import switchLanguage from '@/components/compartilhado/switchLanguage.vue'

    export default {
        name: 'navBar',
        components:{
            switchLanguage
        },  
        data(){
            return{
                vergne:{
                    surfaceMaterial: '',
                    rockMass: '',
                    prod: '',
                    depth: '',
                    resultado: '',
                },
                colorVergne: {
                    start: '',
                    rockMass: '',
                    surfaceMaterial: '',
                    prodCenter: '',
                    prodLeft: '',
                    depthCenter: '',
                    depthLeft: '',
                    correia: '',
                    rampa: '',
                    shaft: '',
                },
                defaultColorVergne: {
                    start: coresDefault.fluxoGreen,
                    rockMass: 'Transparent',
                    surfaceMaterial: 'Transparent',
                    prodCenter: 'Transparent',
                    prodLeft: 'Transparent',
                    depthCenter: 'Transparent',
                    depthLeft: 'Transparent',
                    correia: coresDefault.fluxoBlue,
                    rampa: coresDefault.fluxoBlue,
                    shaft: coresDefault.fluxoBlue,
                }           
            }
        },
        mounted(){
            disableObject(['rm', 'depth', 'prod'])
        },
        methods:{
            setDefaultColor() {
                for (const key in this.colorVergne) {
                    this.colorVergne[key] = this.defaultColorVergne[key];
                } 
            }
            ,setColorRed() {
                for (const key in this.colorVergne) {
                    this.colorVergne[key] = 'rgba(236, 22, 22, 0.8)';
                } 
            },
            setColorGreen(objetos = []){
                objetos.forEach((objeto)=>{
                    this.colorVergne[objeto] = coresDefault.fluxoGreen
                })
            },
            newValue(){  

                // SURFACE MATERIAL
                if (this.vergne.surfaceMaterial == "maior") {
                    this.vergne.resultado = "shaft"
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "shaft"])
                } else if (this.vergne.surfaceMaterial == "menor") {
                    enableObjects("rm")
                    this.setColorGreen(["start", "surfaceMaterial"])
                }

                // ROCK MASS
                if (this.vergne.surfaceMaterial == "menor" && this.vergne.rockMass == "maior") {
                    this.vergne.resultado = "shaft"
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "shaft"])
                } else if (this.vergne.surfaceMaterial == "menor" && this.vergne.rockMass == "menor") {
                    enableObjects("depth")
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass"])
                }

                // PROFUNDIDADE
                if (this.vergne.surfaceMaterial == "menor" && this.vergne.rockMass == "menor" && this.vergne.depth == "maior") {
                    this.vergne.resultado = "shaft"
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "shaft"])

                } else if (this.vergne.surfaceMaterial == "menor" && this.vergne.rockMass == "menor" && (this.vergne.depth == "entre" || this.vergne.depth == "menor")) {
                    enableObjects("prod")
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter"])
                }

                // PRODUÇÃO
                if (this.vergne.surfaceMaterial == "menor" && this.vergne.rockMass == "menor" && (this.vergne.depth == "entre" || this.vergne.depth == "menor") && this.vergne.prod == "maior") {
                    this.vergne.resultado = "correia"
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "correia"])

                } else if (this.vergne.surfaceMaterial == "menor" && this.vergne.rockMass == "menor" && (this.vergne.depth == "entre" || this.vergne.depth == "menor") && (this.vergne.prod == "menor" || this.vergne.prod == "entre") && this.vergne.depth == "menor") {
                    this.vergne.resultado = "rampa"
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "rampa"])

                } else if (this.vergne.surfaceMaterial == "menor" && this.vergne.rockMass == "menor" && (this.vergne.depth == "entre" || this.vergne.depth == "menor") && this.vergne.prod == "menor" && this.vergne.depth == "entre") {
                    this.vergne.resultado = "rampa"
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "prodLeft", "rampa"])

                } else if (this.vergne.surfaceMaterial == "menor" && this.vergne.rockMass == "menor" && (this.vergne.depth == "entre" || this.vergne.depth == "menor") && this.vergne.prod == "entre" && this.vergne.depth == "entre") {
                    this.vergne.resultado = "shaft"
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "prodLeft", "shaft"])
                }
            }
        },
        watch:{
            vergne:{
                handler(){
                    // Desabilita os inputs e altera a opacidade das divs
                    disableObject(['rm', 'depth', 'prod'])
                    // Muda a cor de todos os elementos para vermelho.
                    this.setDefaultColor()
                    // Chama a função com a lógica do fluxograma
                    this.newValue()
                    // Altera o valor de vergne na store VueExe
                    this.$store.dispatch('changeInputsAcessosVergne', this.vergne)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            },
            colorVergne:{
                handler(){
                    this.$store.dispatch('changeColorVergne', this.colorVergne)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            }
        },
    }

</script>

