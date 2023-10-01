<template>

    <div id="app" ref="app">

        <RouterView></RouterView>
        <vueBalao
            class="balao"
        />
        <vuePopUp/>

    </div>

</template>

<script>
import vueBalao from "@/components/compartilhado/balao.vue"
import vuePopUp from "@/components/compartilhado/popUp.vue"

export default {
    name: "vue-app",
    components: {
        vueBalao,
        vuePopUp
    }
}
</script>
