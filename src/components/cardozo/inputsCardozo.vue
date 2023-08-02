
<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloInputs') }}</h2>
        <!-- SURFACE MATERIALS-->
        <div class='parametros-container' id="sm">
            <h3>{{$t('smTituloCardozo')}}</h3>
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
        <!--ROCK CONDITIONS-->
        <div class='parametros-container' id="rm">
            <h3>{{$t('rmTituloCardozo')}}</h3>
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
            <h3>{{ $t('prodTituloCardozo') }}</h3>
            <span> {{ $t('prodDescriptionCardozo') }}</span>
            <select v-model="cardozo.prod" class="depth">
                <option value=""></option>
                <option value="menor">{{('prodMenor')}}</option>
                <option value="entre">{{('prodEntre')}}</option>
                <option value="maior">{{('prodMaior')}}</option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <div class='parametros-container' id="prod">
            <h3>{{ $t('depthTituloCardozo') }}</h3>
            <span>{{ $t('depthDescriptionCardozo') }}</span>
            <select v-model="cardozo.depth" class="prod">
                <option value=""></option>
                <option value="menor">{{('depthMenorCardozo')}}</option>
                <option value="entre">{{('depthEntreCardozo')}}</option>
                <option value="maior">{{('depthMaiorCardozo')}}</option>
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
                cardozo:{
                    surfaceMaterial: '',
                    rockMass: '',
                    prod: '',
                    depth: '',
                },
                colorCardozo: {
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
            },setColorRed() {
                for (const key in this.colorCardozo) {
                    this.colorCardozo[key] = ' rgba(236, 22, 22, 0.8)';
                } 
            },
            setColorGreen(objetos = []){
                objetos.forEach((objeto)=>{
                    this.colorCardozo[objeto] = coresDefault.fluxoGreen
                })
            },
            newValue(){  
                
            }
        },
        watch:{
            cardozo:{
                handler(){
                    // Desabilita os inputs e altera a opacidade das divs
                    disableObject(['rm', 'depth', 'prod'])
                    // Muda a cor de todos os elementos para vermelho.
                    this.setDefaultColor()
                    // Chama a função com a lógica do fluxograma
                    this.newValue()
                    // Altera o valor de cardozo na store VueExe
                    this.$store.dispatch('changeCardozo', this.cardozo)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            },
            colorCardozo:{
                handler(){
                    this.$store.dispatch('changecolorCardozo', this.colorCardozo)
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
        max-width: 280px;
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
