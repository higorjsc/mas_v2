<template>

    <div class="switch-container">
        <input type="checkbox" v-model="switchLanguage" class="switch" id="switch"/>
        <label for="switch">
            <span>{{ $t('ptSwitchLanguage') }}</span>
            <span>{{ $t('enSwitchLanguage') }}</span>
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
                this.$store.dispatch('changeLanguage', this.switchLanguage)
            }
        }
    }
    
</script>

<style scoped>

    .switch {
        display: none;
    }
    
    span {
        color: var(--cor-texto-tema);
        font: normal 8pt;
        position: inherit;
        top: 22%;
        margin-left: 1px;
        margin-right: 5px;
        z-index: 2;
    }

    label {
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
    label:hover {
        box-shadow: 0 0 20px var(--cor-tema);
        font: 12pt;
        font-weight: bold;
    }
    label::after {
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

    label:hover::after {
        box-shadow: 0 0 20px var(--cor-tema);
        font: 12pt;
        font-weight: bold;
    }

    #switch:checked + label::after {
        transform: translateX(30px);
    }

</style>