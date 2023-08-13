<template>

  <RouterView></RouterView>

</template>
<script>

export default {
    name: "vue-app",
    mounted () {
    // CONFIGURA AS VARIÁVEIS CSS QUE DEFINEM AS CORES DO TEMA
        document.documentElement.style.setProperty("--cor-tema", this.$store.getters.currentTemaMAS.mainColor)
        document.documentElement.style.setProperty("--cor-hover", this.$store.getters.currentTemaMAS.HoverColor)
        document.documentElement.style.setProperty("--shadow-hover", this.$store.getters.currentTemaMAS.shadowHover)
        document.documentElement.style.setProperty("--shadow-input", this.$store.getters.currentTemaMAS.shadowInput)
        document.documentElement.style.setProperty("--cor-texto-tema", this.$store.getters.currentTemaMAS.textColor)
    }
}
</script>

<style scoped>

</style>
