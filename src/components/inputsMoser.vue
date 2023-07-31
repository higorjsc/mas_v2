
<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloInputsMoser') }}</h2>
        
        <!--LOGISTICA-->
        <div class='parametros-container' id="logistica">
            <h3>{{ $t('logisticaTitulo') }}</h3>
            <span>{{ $t('logisticaDescription') }}</span>
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
            <h3>{{$t('rmTitulo')}}</h3>
            <span>{{ $t('rmDescription') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" class="rm" v-model="moser.rockMass" value="menor" id="rm-menor">
                <label for="rm-menor" class="radio-label"></label> 
                <span>{{ $t('rmMenor') }}</span>
                <!-- MAIOR -->
                <input type="radio" class="rm" v-model="moser.rockMass" value="maior" id="rm-maior">
                <label for="rm-maior" class="radio-label"></label>
                <span>{{ $t('rmMaior') }}</span> 
            </div>
        </div>
        <!-- SURFACE MATERIALS-->
        <div class='parametros-container' id="sm">
            <h3>{{$t('csTitulo')}}</h3>
            <span>{{ $t('csDescription') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="moser.surfaceMaterial" value="menor" id="sm-menor">
                <label for="sm-menor" class="radio-label"></label> 
                <span>{{ $t('smMenor') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="moser.surfaceMaterial" value="maior" id="sm-maior">
                <label for="sm-maior" class="radio-label"></label>
                <span>{{ $t('smMaior') }}</span> 
            </div>
        </div>
        <!-- OPEN PIT -->
        <div class='parametros-container' id="op">
            <h3>{{$t('opTitulo')}}</h3>
            <span>{{ $t('opDescription') }}</span>
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
            <h3>{{ $t('prodTitulo') }}</h3>
            <span> {{ $t('prodDescription') }}</span>
            <select v-model="moser.prod" class="depth">
                <option value=""></option>
                <option value="menor">{{('prodMenor')}}</option>
                <option value="entre">{{('prodEntre')}}</option>
                <option value="maior">{{('prodMaior')}}</option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <div class='parametros-container' id="prod">
            <h3>{{ $t('depthTitulo') }}</h3>
            <span>{{ $t('depthDescription') }}</span>
            <select v-model="moser.depth" class="prod">
                <option value=""></option>
                <option value="menor">{{('depthMenor')}}</option>
                <option value="entre">{{('depthEntre')}}</option>
                <option value="maior">{{('depthMaior')}}</option>
            </select>
        </div>


    </section>
   
  
</template>

<script>

    import {disableObject, enableObjects} from '@/assets/javascript/acessos.js'
    import {coresDefault} from '@/assets/javascript/constants.js'
    
    export default {
        name: 'navBar',
        data(){
            return{
                moser:{
                    logistica: '',
                    rockMass: '',
                    surfaceMaterial: '',
                    openPit: '',
                    prod: '',
                    depth: '',
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
                    rockMass: 'Transparent',
                    surfaceMaterial: 'Transparent',
                    openPit: 'Transparent',
                    prodCenter: 'Transparent',
                    prodLeft: 'Transparent',
                    depthCenter: 'Transparent',
                    depthLeft: 'Transparent',
                    rampa: coresDefault.fluxoBlue,
                    shaft: coresDefault.fluxoBlue,
                }           
            }
        },
        created(){
            // disableObject(['rm', 'sm', 'op', 'depth', 'prod'])
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
                objetos.forEach((objeto)=>{
                    this.colorMoser[objeto] = coresDefault.fluxoGreen
                })
            },
            newValue(){
                
                let resultado
                // LOGISTICA
                if(this.moser.logistica == 'sim'){
                    enableObjects('rm')
                    this.setColorGreen(['logistica'])
                }else if(this.moser.logistica == 'nao'){
                    resultado = 'shaft'
                    this.setColorRed()
                    this.setColorGreen(['logistica', 'shaft'])
                }

                // SURFACE MATERIAL
                if (this.moser.logistica == "sim" && this.moser.rockMass == "maior") {
                    resultado = "shaft"
                } else if (this.moser.logistica == "sim" && this.moser.rockMass == "menor") {
                    enableObjects("sm")
                }

                // ROCK MASS
                if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor") {
                    enableObjects("open-pit")
                } else if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "maior") {
                    resultado = "shaft"
                }

                // OPEN PIT
                if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && (this.moser.openPit == "sim" || this.moser.openPit == "nao")) {
                    enableObjects("depth")
                }

                // PROFUNDIDADE OPEN PIT NÃO
                if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && this.moser.openPit == "nao" && (this.moser.depth == "entre" || this.moser.depth == "maior")) {
                    resultado = "shaft"
                } else if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && this.moser.openPit == "nao" && this.moser.depth == "menor") {
                    enableObjects("prod")
                }

                // PRODUÇÃO OPEN PIT NÃO
                if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && this.moser.depth == "menor" && this.moser.prod == "menor") {
                    resultado = "rampa"
                } else if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && this.moser.depth == "menor" && (this.moser.prod == "entre" || this.moser.prod == "maior")) {
                    resultado = "shaft"
                }

                // PROFUNDIDADE OPEN PIT NÃO
                if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && this.moser.openPit == "sim" && this.moser.depth == "maior") {
                    resultado = "shaft"
                } else if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && this.moser.openPit == "sim" && (this.moser.depth == "menor" || this.moser.depth == "entre")) {
                    enableObjects("prod")
                }

                // PRODUÇÃO OPEN PIT SIM
                if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && this.moser.openPit == "sim" && (this.moser.depth == "menor" || this.moser.depth == "entre") && (this.moser.prod == "menor" || this.moser.prod == "entre")) {
                    resultado = "rampa"
                } else if (this.moser.logistica == "sim" && this.moser.rockMass == "menor" && this.moser.surfaceMaterial == "menor" && this.moser.openPit == "sim" && (this.moser.depth == "menor" || this.moser.depth == "entre") && this.moser.prod == "maior") {
                    resultado = "shaft"
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
                    this.$store.commit('setMoser', this.moser)
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

<style scoped>
    *{
        margin: 0;
        padding: 0;
        --cor-fluxoBlue: rgba(31, 191, 219, 0.493);
        --cor-fluxoGreen: rgba(14, 224, 49, 0.8);
    }
    section{
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border: var(--borda-simples);
    }

    h3{
        grid-column: 1/3;
        margin-top: 0;
    }
    .parametros-container {
        margin-top: 15px;
        width: 100%;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        padding-left: 3%;
        box-sizing: border-box;
        align-items: center;
        
    }
    .radio-container{
        position: relative;
        grid-column: 2/3;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 0.25fr 1fr;
        align-content: center;
    }

    input[type='radio']{
        display: none;
    }
    .radio-label{
        align-self: center;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1pt solid var(--cor-tema);
    }
    .radio-label:hover {
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }
    .radio-label::before {
        content: ' ';
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: transparent;
        position: relative;
        display: flex;
        margin: auto;
    }
    input[type='radio']:checked + .radio-label {
        background-color: white; 
    }

    input[type='radio']:checked + .radio-label::before {
        background-color: var(--cor-tema); 
    }

    select {
        width: 90%;
        text-align: center;
        border-radius: 20px;
        border: 1pt solid var(--cor-tema);
    }

    select:hover {
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }

</style>
