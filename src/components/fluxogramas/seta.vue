<template>

    <!-- ARROW CONTAINER -->
    <div
        class="arrow-container"
        :style="{
            top: Top,
            left: Left,
            transform: Transform
        }"
    >
        <!-- ARROW BODY -->
        <div
            v-if="Body"
            class="arrow-body"
            :style="{
                backgroundColor: Color,
                width: Width,
            }"
        >
        </div>
        <!-- ARROW HEAD -->
        <div
            v-if = "Cabecalho"
            class="arrow-head"
            :style="{
                'border-left-color': `${Color}`
            }"
        >
        </div>

    </div>

</template>

<script>

export default {
    name: "vue-setas-fluxograma",
    props: {
        Body: {
            type: Boolean,
            default: true
        },
        Cabecalho: {
            type: Boolean,
            default: true
        },
        Color: {
            type: String,
            default: "black"
        },
        Width: {
            type: String,
            default: "30px"
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
        }
    }

}

</script>

<style scoped>

   *{
        margin: 0;
        padding: 0;
    }

    .arrow-container{
        position: absolute;
        display: flex;
        align-items: center;
        justify-items: flex-start;
    }
    .arrow-body {
        position: relative;
        height: 3px; /* Ajuste a altura da seta */
        background-color: black; /* Cor da seta */
        transform: rotate(0deg); /* Ângulo da seta */
    }

    .arrow-head {
        position: relative;
        width: 0;
        height: 0;
        border-left: 10px solid; /* Tamanho da cauda */
        border-top: 5px solid transparent; /* Inclinação da cauda */
        border-bottom: 5px solid transparent;
    }

</style>
