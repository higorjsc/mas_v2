
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
            <h3 class="subtitulo-inputs">{{$t('smTituloCardozo')}}</h3>
            <span>{{ $t('smDescriptionCardozo') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="cardozo.surfaceMaterial" value="menor" id="sm-menor">
                <label for="sm-menor" class="radio-label"></label> 
                <span>{{ $t('smMenorCardozo') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="cardozo.surfaceMaterial" value="maior" id="sm-maior">
                <label for="sm-maior" class="radio-label"></label>
                <span>{{ $t('smMaiorCardozo') }}</span> 
            </div>
        </div>
        <!--rockMass CONDITIONS-->
        <div class='parametros-container' id="rm">
            <h3 class="subtitulo-inputs">{{$t('rmTituloCardozo')}}</h3>
            <span>{{ $t('rmDescriptionCardozo') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="rm" v-model="cardozo.rockMass" value="menor" id="rm-menor">
                <label for="rm-menor" class="radio-label"></label> 
                <span>{{ $t('rmMenorCardozo') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="rm" v-model="cardozo.rockMass" value="maior" id="rm-maior">
                <label for="rm-maior" class="radio-label"></label>
                <span>{{ $t('rmMaiorCardozo') }}</span> 
            </div>
        </div>
        <!-- PROFUNDIDADE -->
        <div class='parametros-container' id="depth">
            <h3 class="subtitulo-inputs">{{ $t('depthTituloCardozo') }}</h3>
            <span>{{ $t('depthDescriptionCardozo') }}</span>
            <select v-model="cardozo.depth" class="depth">
                <option value=""></option>
                <option value="menor">{{('depthMenorCardozo')}}</option>
                <option value="entre">{{('depthEntreCardozo')}}</option>
                <option value="maior">{{('depthMaiorCardozo')}}</option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <div class='parametros-container' id="prod">
            <h3 class="subtitulo-inputs">{{ $t('prodTituloCardozo') }}</h3>
            <span> {{ $t('prodDescriptionCardozo') }}</span>
            <select v-model="cardozo.prod" class="prod">
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
                cardozo:{
                    surfaceMaterial: '',
                    rockMass: '',
                    prod: '',
                    depth: '',
                },
                resultado: '',
                colorCardozo: {
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
                defaultColorCardozo: {
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
                },     
                ilustrations:{
                    orebody: true,
                    superficie: true,
                    superficie_pit: false,
                    ventilacao: true,
                    usina: true,
                    shaft: false,
                    rampa: false,
                    rampa_pit: false,
                    truck: false,
                    correia: false,
                    pit: false,
                },
                defaultIlustrations:{
                    orebody: true,
                    superficie: true,
                    superficie_pit: false,
                    ventilacao: true,
                    usina: true,
                    shaft: false,
                    rampa: false,
                    rampa_pit: false,
                    truck: false,
                    correia: false,
                    pit: false,
                }           
            }
        },
        mounted(){
            disableObject(['rm', 'depth', 'prod'])
        },
        methods:{
            setDefaultColor() {
                for (const key in this.colorCardozo) {
                    this.colorCardozo[key] = this.defaultColorCardozo[key];
                } 
            },
            setColorRed() {
                for (const key in this.colorCardozo) {
                    this.colorCardozo[key] = ' rgba(236, 22, 22, 0.8)';
                } 
            },
            setColorGreen(objetos = []){
                objetos.forEach((objeto)=>{
                    this.colorCardozo[objeto] = coresDefault.fluxoGreen
                })
            },
            defaultImages(){
                this.ilustrations = JSON.parse(JSON.stringify(this.defaultIlustrations));
            },
            showImages(itens){
                itens.forEach(item =>{
                    this.ilustrations[item] = true
                })
            },
            newValue(){  

                // SURFACE MATERIAL
                if (this.cardozo.surfaceMaterial == "maior") {
                    this.resultado = "shaft"
                    this.showImages(['shaft'])
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "shaft"])
                } else if (this.cardozo.surfaceMaterial == "menor") {
                    enableObjects("rm")
                    this.setColorGreen(["start", "surfaceMaterial"])
                }

                // ROCK MASS
                if (this.cardozo.surfaceMaterial == "menor" && this.cardozo.rockMass == "maior") {
                    this.resultado = "shaft"
                    this.showImages(['shaft'])
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "shaft"])
                } else if (this.cardozo.surfaceMaterial == "menor" && this.cardozo.rockMass == "menor") {
                    enableObjects("depth")
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass"])
                }

                // PROFUNDIDADE
                if (this.cardozo.surfaceMaterial == "menor" && this.cardozo.rockMass == "menor" && this.cardozo.depth == "maior") {
                    this.resultado = "shaft"
                    this.showImages(['shaft'])
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "shaft"])

                } else if (this.cardozo.surfaceMaterial == "menor" && this.cardozo.rockMass == "menor" && (this.cardozo.depth == "entre" || this.cardozo.depth == "menor")) {
                    enableObjects("prod")
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter"])
                }

                // PRODUÇÃO
                if (this.cardozo.surfaceMaterial == "menor" && this.cardozo.rockMass == "menor" && (this.cardozo.depth == "entre" || this.cardozo.depth == "menor") && this.cardozo.prod == "maior") {
                    this.resultado = "correia"
                    this.showImages(['correia'])
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "correia"])

                } else if (this.cardozo.surfaceMaterial == "menor" && this.cardozo.rockMass == "menor" && (this.cardozo.depth == "entre" || this.cardozo.depth == "menor") && (this.cardozo.prod == "menor" || this.cardozo.prod == "entre") && this.cardozo.depth == "menor") {
                    this.resultado = "rampa"
                    this.showImages(['rampa', 'truck'])
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "rampa"])

                } else if (this.cardozo.surfaceMaterial == "menor" && this.cardozo.rockMass == "menor" && (this.cardozo.depth == "entre" || this.cardozo.depth == "menor") && this.cardozo.prod == "menor" && this.cardozo.depth == "entre") {
                    this.resultado = "rampa"
                    this.showImages(['rampa', 'truck'])
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "prodLeft", "rampa"])

                } else if (this.cardozo.surfaceMaterial == "menor" && this.cardozo.rockMass == "menor" && (this.cardozo.depth == "entre" || this.cardozo.depth == "menor") && this.cardozo.prod == "entre" && this.cardozo.depth == "entre") {
                    this.resultado = "shaft"
                    this.showImages(['shaft'])
                    this.setColorRed()
                    this.setColorGreen(["start", "surfaceMaterial", "rockMass", "depthCenter", "prodCenter", "depthLeft", "prodLeft", "shaft"])
                }
            }
        },
        watch:{
            cardozo:{
                handler(){
                    // Desabilita os inputs e altera a opacidade das divs
                    disableObject(['rm', 'depth', 'prod'])
                    // Define a cor de todos os elementos para o padrão.
                    this.setDefaultColor()
                    // Oculta as todas as imagens não default
                    this.defaultImages()
                    // Chama a função com a lógica do fluxograma
                    this.newValue()
                    // Altera o valor de cardozo na store VueExe
                    this.$store.dispatch('changeInputsAcessosCardozo', this.cardozo)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            },
            colorCardozo:{
                handler(){
                    this.$store.dispatch('changeColorCardozo', this.colorCardozo)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            },
            ilustrations:{
                handler(){
                    this.$store.dispatch('changeIlustrations', this.ilustrations)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            },
            resultado(){
                this.$store.dispatch('changeResultado', this.resultado)
            }   
        },
    }

</script>

