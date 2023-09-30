<template>

    <main
        class="main-pop-up"
    >
        <div class="referencias-container">
            <h2  class="titulo-inside-pop-up">
                {{ $t('tituloMaisSobreAhp') }}
            </h2>
            <ul>
                <li>
                    <a href="" target="_blank">{{ $t('referenciaBanda') }}</a>
                </li>
                <li>
                    <a href="" target="_blank">{{ $t('referenciaShariar') }}</a>
                </li>
                <li>
                    <a href="" target="_blank">{{ $t('referenciaAtaei') }}</a>
                </li>
                <li>
                    <a  href="https://doi.org/10.1016/0377-2217(90)90057-I"  target="_blank">{{ $t('referenciaSaaty') }}</a>
                </li>
                <li>
                    <a href="https://doi.org/10.20985/1980-5160.2016.v11n3.988" target="_blank">{{ $t('referenciaRibeiro') }}</a>
                </li>
            </ul>
        </div>
    </main>

</template>

<script>

export default {
    name: "vue-referencias-ahp"
}

</script>

<style scoped>

    .main-ref {
        width: 98%;
        max-height: 200px;
        border: var(--borda-simples);
        border-radius: 20px;
        padding: 5px;
    }

    .referencias-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .referencias-container a {
        color: black;
        font-size: 10pt;
        line-height: 1;
    }

    .titulo-inside-pop-up {
        text-align: center;
        font-weight: bold;
        font-size: 16pt;
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 20px;
        list-style-type: disc;
        text-align: justify;
    }

    li {
        margin-bottom: 10px;
    }

</style>
