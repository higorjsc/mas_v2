<template>
    <!-- RESULTADOS -->
    <div
        class="resultados-container"
    >
        <span 
            :class="`resultado ${tema}`"
        >
            {{ $t(this.$store.getters.currentResultado) }}
        </span>

    </div>

</template>
  
<script>

    export default {
        props:{
            tema:{
                type: String,
                default: ''
            },
        },
}

</script>
  
<style scoped>
   *{
        margin: 0;
        padding: 0;
    }
    .section-resultados{
        position: relative;
        width: 100%;
        border-top: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-right: var(--borda-simples);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .container{
        position: relative;
        display: flex;
        align-items: center;
        margin: auto;
    }

    .resultados-container{
        display: flex;
        position: absolute;
        width: 80%;
        height: 10%;
        bottom: 20%;
        left: 10%;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        background-color: var(--cor-tema);
        color: var(--cor-texto-tema);
    }
</style>
  