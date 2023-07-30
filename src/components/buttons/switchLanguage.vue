<template>

    <input type="checkbox" v-model="switchLanguage" id="checkbox-switch" />
    <label for="checkbox-switch" class="switch-label" id="switch-label">
        <span id="switch-texto">{{ $t('ptSwitchLanguage') }}</span>
        <span id="switch-texto">{{ $t('enSwitchLanguage') }}</span>
    </label>

</template>
<script>

    export default {
        name: 'switchLanguage',
        data(){
            return{
                switchLanguage: false
            }
        },
        watch:{
            switchLanguage(){
                this.$store.commit('setLanguage', this.switchLanguage)
            }
        }
    }
    
</script>
<style scoped>
    #checkbox-switch {
        display: none;
    }
    
    #switch-texto {
        color: white;
        font: normal 8pt;
        position: inherit;
        top: 22%;
        margin-left: 1px;
        margin-right: 5px;
        z-index: 2;
    }
    .switch-label {
        display: inline-block;
        cursor: pointer;
        width: 50px;
        height: 20px;
        background-color: var(--cor-tema);
        border-radius: 15px;
        position: absolute;
        top: 45px;
        right: 2%;
        box-shadow: var(--shadow-tema)
    }
    .switch-label:hover {
        box-shadow: 0 0 20px var(--cor-tema);
        font: 12pt;
        font-weight: bold;
    }
    .switch-label::after {
        content: '';
        display: block;
        width: 19px;
        height: 17px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        top: 2px;
        transition: transform 0.2s ease-in-out;
    }

    .switch-label:hover::after {
        box-shadow: 0 0 20px var(--cor-tema);
        font: 12pt;
        font-weight: bold;
    }

    #checkbox-switch:checked + .switch-label::after {
        transform: translateX(30px);
    }

</style>