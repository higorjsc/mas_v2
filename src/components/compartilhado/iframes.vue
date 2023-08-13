<template>

    <iframe
        class="iframe-acessos"
        id="iframe-1"
        src=""
        frameborder="0"
    >
    </iframe>

</template>

<script>

export default {
    name: "vue-iframe"
}

</script>

<style scoped>
    iframe {
        z-index: 100;
        width: 100%;
        height: 100%;
        display: none;
        background-color: white;
    }
</style>
