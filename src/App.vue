<template>


  <RouterView></RouterView>

</template>
<script>

    import { TEMA_VERMELHO } from '@/assets/javascript/globalConstants.js'

    export default {
        mounted(){
            document.documentElement.style.setProperty('--cor-tema', TEMA_VERMELHO.mainColor);
            document.documentElement.style.setProperty('--cor-hover', TEMA_VERMELHO.HoverColor);
            document.documentElement.style.setProperty('--shadow-hover', TEMA_VERMELHO.shadowHover);
            document.documentElement.style.setProperty('--shadow-input', TEMA_VERMELHO.shadowInput);
        }
    }
</script>


<style scoped>

</style>
