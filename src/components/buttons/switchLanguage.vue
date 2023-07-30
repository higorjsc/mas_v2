<template>

    <div classs="switch-container">
        <input type="checkbox" v-model="switchLanguage" class="switch" />
        <label for="switch" class="switch-label">
            <span id="texto">{{ $t('ptSwitchLanguage') }}</span>
            <span id="texto">{{ $t('enSwitchLanguage') }}</span>
        </label>
    </div>
    
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

    .switch {
        display: none;
    }
    
    #texto {
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

    #switch:checked + .switch-label::after {
        transform: translateX(30px);
    }

</style>