<template>
    <div
        class="container-pop-up-help"
    >
        <h2  class="titulo-inside-pop-up">
            {{ $t('tituloHelpPrimeiraEtapa') }}
        </h2>
        <div
            class="paragrafo-help"
        >
            {{ $t('paragrafoHelpPrimeiraEtapa') }}
            <ul>
                <li class="li-um">
                    {{ $t('primeiraEtapaLiUm') }}
                </li>
                <li class="li-dois">
                    {{ $t('primeiraEtapaLidois') }}
                </li>
                <li class="li-tres">
                    {{ $t('primeiraEtapaLiTrês') }}
                </li>
                <li class="li-dois">
                    {{ $t('primeiraEtapaLiQuatro') }}
                </li>
                <li class="li-um">
                    {{ $t('primeiraEtapaLiCinco') }}
                </li>
                <li class="li-dois">
                    {{ $t('primeiraEtapaLiSeis') }}
                </li>
                <li class="li-dois">
                    {{ $t('primeiraEtapaLiSete') }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

</script>
<style>
    .container-pop-up-help{
        position: relative;
        margin: 1px;
        display: flex;
        align-items: center;
        padding: 3px;
        box-sizing: border-box;
        flex-direction: column;
        background-color: white;
        z-index: 5;
        width: 100%;
        border-radius: 10px;
        padding: 2%;
        border: var(--borda-simples);
    }
    .titulo-inside-pop-up {
        text-align: center;
        font-weight: bold;
        font-size: 16pt;
        margin: 0;
    }
    .paragrafo-help{
        text-align: justify;
    }
    li{
        list-style: none;
    }
    .li-um{
        margin-left: 0px;
    }
    .li-dois{
        margin-left: 20px;
    }
    .li-tres{
        margin-left: 40px;
    }
    ul{
        padding: 1%;
    }
</style>