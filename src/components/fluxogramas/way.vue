<template>

    <!-- WAY CONTAINER-->
    <div
        class="container-way"
        :style="{
            top: Top,
            left: Left,
            width: Width,
            height: Height,
            transform: Transform,
        }"
    >
        <!-- WAY TEXT -->
        <slot
            class="texto-way"
        />

    </div>

</template>

<script>

export default {
    name: "vue-ways-fluxograma",
    props: {

        Width: {
            type: String,
            default: "auto"
        },
        Height: {
            type: String,
            default: "12px"
        },
        Top: {
            type: String,
            default: "0px"
        },
        Left: {
            type: String,
            default: "0px"
        },
        Transform: {
            type: String,
            default: "rotate(0deg)"
        },
        Text: {
            type: String,
            default: ""
        }
    }

}

</script>

<style scoped>

   *{
        margin: 0;
        padding: 0;
    }

    .container-way{
        position: absolute;
        border-radius: 20;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        font-size: 9pt;
        text-shadow:
            -1px -2px 2px #fff,
            1px -2px 2px #fff,
            -1px 2px 2px #fff,
            1px 2px 2px #fff;
        -webkit-text-stroke-width: 0.07px;
        /* -webkit-text-stroke-color: white; */
    }
    .texto-way{
        z-index: 8;
        text-shadow:1px 1px 1px white;
    }

</style>
