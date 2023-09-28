<template>

    <div id="app">

        <RouterView></RouterView>
    </div>

    <vuePopUp/>
</template>

<script>

import vuePopUp from "@/components/compartilhado/popUp.vue"
export default {
    name: "vue-app",
    components: {
        vuePopUp
    }
}
</script>
