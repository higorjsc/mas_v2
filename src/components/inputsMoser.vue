
<template>
    
    <section class="section-inputs">
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloInputs') }}</h2>

         <!-- BOTÃO SWITCH -->
         <switchLanguage 
              class="main-elements switch-language"
        />

        <!--LOGISTICA-->
        <div class='parametros-container' id="logistica">
            <h3 class="subtitulo-inputs">{{ $t('logisticaTituloMoser') }}</h3>
            <span>{{ $t('logisticaDescriptionMoser') }}</span>
            <div class="radio-container">
                <!-- SIM -->
                <input type="radio" v-model="moser.logistica" value="sim" id="logistica-sim">
                <label for="logistica-sim" class="radio-label"></label> 
                <span>{{ $t('sim') }}</span>
                <!-- NÃO -->
                <input type="radio"  v-model="moser.logistica" value="nao" id="logistica-nao">
                <label for="logistica-nao" class="radio-label"></label>
                <span>{{ $t('nao') }}</span> 
            </div>
        </div>
        <!--ROCK CONDITIONS-->
        <div class='parametros-container' id="rm">
            <h3 class="subtitulo-inputs">{{$t('rmTituloMoser')}}</h3>
            <span>{{ $t('rmDescriptionMoser') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="rm" v-model="moser.rockMass" value="menor" id="rm-menor">
                <label for="rm-menor" class="radio-label"></label> 
                <span>{{ $t('rmMenorMoser') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="rm" v-model="moser.rockMass" value="maior" id="rm-maior">
                <label for="rm-maior" class="radio-label"></label>
                <span>{{ $t('rmMaiorMoser') }}</span> 
            </div>
        </div>
        <!-- SURFACE MATERIALS-->
        <div class='parametros-container' id="sm">
            <h3 class="subtitulo-inputs">{{$t('smTituloMoser')}}</h3>
            <span>{{ $t('smDescriptionMoser') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="moser.surfaceMaterial" value="menor" id="sm-menor">
                <label for="sm-menor" class="radio-label"></label> 
                <span>{{ $t('smMenorMoser') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="moser.surfaceMaterial" value="maior" id="sm-maior">
                <label for="sm-maior" class="radio-label"></label>
                <span>{{ $t('smMaiorMoser') }}</span> 
            </div>
        </div>
        <!-- OPEN PIT -->
        <div class='parametros-container' id="op">
            <h3 class="subtitulo-inputs">{{$t('opTituloMoser')}}</h3>
            <span>{{ $t('opDescriptionMoser') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="op" v-model="moser.openPit" value="sim" id="op-sim">
                <label for="op-sim" class="radio-label"></label> 
                <span>{{ $t('sim') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="op" v-model="moser.openPit" value="nao" id="op-nao">
                <label for="op-nao" class="radio-label"></label>
                <span>{{ $t('nao') }}</span> 
            </div>
        </div>
        <!-- PROFUNDIDADE -->
        <div class='parametros-container' id="depth">
            <h3 class="subtitulo-inputs">{{ $t('depthTituloMoser') }}</h3>
            <span>{{ $t('depthDescriptionMoser') }}</span>
            <select v-model="moser.depth" class="depth">
                <option value=""></option>
                <option value="menor">{{('depthMenorMoser')}}</option>
                <option value="entre">{{('depthEntreMoser')}}</option>
                <option value="maior">{{('depthMaiorMoser')}}</option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <div class='parametros-container' id="prod">
            <h3 class="subtitulo-inputs">{{ $t('prodTituloMoser') }}</h3>
            <span> {{ $t('prodDescriptionMoser') }}</span>
            <select v-model="moser.prod" class="prod">
                <option value=""></option>
                <option value="menor">{{('prodMenorMoser')}}</option>
                <option value="entre">{{('prodEntreMoser')}}</option>
                <option value="maior">{{('prodMaiorMoser')}}</option>
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
                moser:{
                    logistica: '',
                    rockMass: '',
                    surfaceMaterial: '',
                    openPit: '',
                    prod: '',
                    depth: '',
                    resultado:'',
                },
                colorMoser: {
                    logistica: '',
                    rockMass: '',
                    surfaceMaterial: '',
                    openPit: '',
                    prodCenter: '',
                    prodLeft: '',
                    depthCenter: '',
                    depthLeft: '',
                    rampa: '',
                    shaft: '',
                } ,
                defaultColorMoser: {
                    logistica: coresDefault.fluxoGreen,
                    rockMass: 'white',
                    surfaceMaterial: 'white',
                    openPit: 'white',
                    prodCenter: 'white',
                    prodLeft: 'white',
                    depthCenter: 'white',
                    depthLeft: 'white',
                    rampa: coresDefault.fluxoBlue,
                    shaft: coresDefault.fluxoBlue,
                }           
            }
        },
        mounted(){
            disableObject(['rm', 'sm', 'op', 'depth', 'prod'])
        },
        methods:{
            setDefaultColor() {
                for (const key in this.colorMoser) {
                    this.colorMoser[key] = this.defaultColorMoser[key];
                } 
            },setColorRed() {
                for (const key in this.colorMoser) {
                    this.colorMoser[key] = ' rgba(236, 22, 22, 0.8)';
                } 
            },
            setColorGreen(objetos = []){
                // Muda a cor dos objetos do array para verde
                objetos.forEach((objeto)=>{
                    this.colorMoser[objeto] = coresDefault.fluxoGreen
                })
            },
            newValue(){

                // LOGISTICA
                if(this.moser.logistica == 'sim'){
                    enableObjects('rm')
                    this.setColorGreen(['logistica'])
                }else
                if(this.moser.logistica == 'nao'){
                    this.moser.resultado = 'shaft'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'shaft'])
                }

                // ROCK MASS
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'){
                    enableObjects('sm')
                    this.setColorGreen(['logistica', 'rockMass'])
                }else
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'maior'){
                    this.moser.resultado = 'shaft'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'rockMass', 'shaft'])
                }
                
                // SURFACE MATERIAL
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'maior'){
                    this.moser.resultado = 'shaft'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'shaft'])
                }else 
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor'){
                    enableObjects('op')
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial'])
                } 
                
                // ACESSO POR OPEN PIT
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && (this.moser.openPit == 'sim' || this.moser.openPit == 'nao') ){
                    enableObjects('depth')
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit'])
                }
                
                // PROFUNDIDADE OPEN PIT NÃO
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && this.moser.openPit == 'nao'  && (this.moser.depth == 'entre'||this.moser.depth == 'maior')){
                    this.moser.resultado = 'shaft'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit', 'depthCenter', 'shaft'])
                }else
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && this.moser.openPit == 'nao'  && this.moser.depth == 'menor'){
                    enableObjects('prod')
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit', 'depthCenter'])
                }

                // PROFUNDIDADE OPEN PIT SIM
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && this.moser.openPit == 'sim'  && this.moser.depth == 'maior'){
                    this.moser.resultado = 'shaft'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit', 'depthLeft', 'shaft'])
                }else
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && this.moser.openPit == 'sim'  && (this.moser.depth == 'menor'||this.moser.depth == 'entre')){
                    enableObjects('prod')
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit', 'depthLeft'])
                }

                //PRODUCTION OPEN PIT NÃO
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && this.moser.openPit == 'nao'  && this.moser.depth == 'menor' && this.moser.prod == 'menor'){
                    this.moser.resultado == 'rampa'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit', 'depthCenter', 'prodCenter', 'rampa'])
                }else
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && this.moser.openPit == 'nao'  && this.moser.depth == 'menor' && (this.moser.prod == 'entre'||this.moser.prod == 'maior')){
                    this.moser.resultado == 'rampa'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit', 'depthCenter', 'prodCenter', 'shaft'])
                }

                //PRODUCTION OPEN PIT SIM
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && this.moser.openPit == 'sim'  && (this.moser.depth == 'menor'||this.moser.depth == 'entre') && (this.moser.prod == 'menor'||this.moser.prod == 'entre') ){
                    this.moser.resultado == 'rampa'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit', 'depthLeft', 'prodLeft', 'rampa'])
                }else
                if(this.moser.logistica == 'sim' && this.moser.rockMass == 'menor'  && this.moser.surfaceMaterial == 'menor' && this.moser.openPit == 'sim'  && (this.moser.depth == 'menor'||this.moser.depth == 'entre') && this.moser.prod == 'maior'){
                    this.moser.resultado == 'shaft'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'rockMass', 'surfaceMaterial', 'openPit', 'depthLeft', 'prodLeft', 'shaft'])
                }
            }
        },
        watch:{
            moser:{
                handler(){
                    // Desabilita os inputs e altera a opacidade das divs
                    disableObject(['rm', 'sm', 'op', 'depth', 'prod'])
                    // Muda a cor de todos os elementos para vermelho.
                    this.setDefaultColor()
                    // Chama a função com a lógica do fluxograma
                    this.newValue()
                    // Altera o valor de moser na store VueExe
                    this.$store.dispatch('changeInputsAcessosMoser', this.moser)

                    console.log(this.moser.depth)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            },
            colorMoser:{
                handler(){
                    this.$store.dispatch('changeColorMoser', this.colorMoser)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            }
        },
    }

</script>
