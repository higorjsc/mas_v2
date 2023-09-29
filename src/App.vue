<template>

    <div id="app" ref="app">

        <RouterView></RouterView>
        <vueBalao
            class="balao"
        />
    </div>

</template>

<script>
import vueBalao from "@/components/compartilhado/balao.vue"

export default {
    name: "vue-app",
    components: {
        vueBalao
    }
}
</script>
