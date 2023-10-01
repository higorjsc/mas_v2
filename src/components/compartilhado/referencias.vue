<template>

    <main
        class="main-pop-up"
    >
        <div class="referencias-container">
            <h2
                class="titulo-inside-pop-up"
            >{{ $t('tituloReferencias') }}</h2>
            <ul>
                <li>
                    <a href="http://dx.doi.org/10.1590/0370-44672021760094" target="_blank">{{ $t('referenciaCardozoArtigo') }}</a>
                </li>
                <li>
                    <a href="http://hdl.handle.net/10183/262393" target="_blank">{{ $t('referenciaCardozoTese') }}</a>
                </li>
                <li>
                    <a href="" target="_blank">{{ $t('referenciaVergne') }}</a>
                </li>
                <li>
                    <a href="" target="_blank">{{ $t('referenciaMoser') }}</a>
                </li>
                <li>
                    <a href="" target="_blank">{{ $t('referenciaBanda') }}</a>
                </li>
                <li>
                    <a href="" target="_blank">{{ $t('referenciaShariar') }}</a>
                </li>
                <li>
                    <a href="" target="_blank">{{ $t('referenciaAtaei') }}</a>
                </li>
            </ul>
        </div>
    </main>

</template>

<script>

export default {
    name: "vue-referencias-acessos"
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
