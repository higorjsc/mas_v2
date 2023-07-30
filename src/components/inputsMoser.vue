
<template>
    <section>
        <!-- TITULO SEÇÃO -->
        <h2>{{ $t('tituloInputsMoser') }}</h2>
        
        <!--LOGISTICA-->
        <h3>{{ $t('logisticaTitulo') }}</h3>
        <div class='parametros-container'>
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
        <h3>{{$t('rmTitulo')}}</h3>
        <div class='parametros-container'>
            <span>{{ $t('rmDescription') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="moser.rockMass" value="menor" id="rm-menor">
                <label for="rm-menor" class="radio-label"></label> 
                <span>{{ $t('rmMenor') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="moser.rockMass" value="maior" id="rm-maior">
                <label for="rm-maior" class="radio-label"></label>
                <span>{{ $t('rmMaior') }}</span> 
            </div>
        </div>
        <!-- ROCK CONDITIONS -->
        <h3>{{$t('csTitulo')}}</h3>
        <div class='parametros-container'>
            <span>{{ $t('csDescription') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="moser.coberturaSuperficial" value="menor" id="cm-menor">
                <label for="cm-menor" class="radio-label"></label> 
                <span>{{ $t('cmMenor') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="moser.coberturaSuperficial" value="maior" id="cm-maior">
                <label for="cm-maior" class="radio-label"></label>
                <span>{{ $t('cmMaior') }}</span> 
            </div>
        </div>
        <!-- OPEN PIT -->
        <h3>{{$t('opTitulo')}}</h3>
        <div class='parametros-container'>
            <span>{{ $t('opDescription') }}</span>
            <div class="radio-container">
                <!-- MENOR -->
                <input type="radio" v-model="moser.openPit" value="sim" id="op-sim">
                <label for="op-sim" class="radio-label"></label> 
                <span>{{ $t('sim') }}</span>
                <!-- MAIOR -->
                <input type="radio"  v-model="moser.openPit" value="nao" id="op-nao">
                <label for="op-nao" class="radio-label"></label>
                <span>{{ $t('nao') }}</span> 
            </div>
        </div>
        <!-- PROFUNDIDADE -->
        <h3>{{ $t('prodTitulo') }}</h3>
        <div class='parametros-container'>
            <span> {{ $t('prodDescription') }}</span>
            <select v-model="moser.prod">
                <option value=""></option>
                <option value="menor">{{('prodMenor')}}</option>
                <option value="entre">{{('prodEntre')}}</option>
                <option value="maior">{{('prodMaior')}}</option>
            </select>
        </div>
        <!-- PRODUÇÃO -->
        <h3>{{ $t('depthTitulo') }}</h3>
        <div class='parametros-container'>
            <span>{{ $t('depthDescription') }}</span>
            <select v-model="moser.depth">
                <option value=""></option>
                <option value="menor">{{('depthMenor')}}</option>
                <option value="entre">{{('depthEntre')}}</option>
                <option value="maior">{{('depthMaior')}}</option>
            </select>
        </div>


    </section>
   
  
</template>

<script>

    export default {
        name: 'navBar',
        data(){
            return{
                moser:{
                    logistica: '',
                    rockMass: '',
                    coberturaSuperficial: '',
                    openPit: '',
                    prod: '',
                    depth: '',
                }            
            }
        },
        watch:{
            moser:{
                handler(){
                    this.$store.commit('setMoser', this.moser)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            }
        }
    }

</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    section{
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border: var(--borda-simples);
    }

    h3{
        padding-left: 3%;
        margin-top: 15px;
    }
    .parametros-container {
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
