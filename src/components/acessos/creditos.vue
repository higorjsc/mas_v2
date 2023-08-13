<template>

    <main>

        <div id="div-creditos">

            <span id="universidade">{{ $t('universidadeCreditos') }}</span>
            <span id="laboratorio">{{ $t('laboratorioCreditos') }}</span>
            <span id="versao">{{ $t('versaoCreditos') }}</span>
            <h1 id="titulo-ferramenta">
                {{ $t('tituloFerramentaCreditos') }}
            </h1>
            <h2 id="titulo-autores">
                {{ $t('tituloAutoresCreditos') }}
            </h2>
            <span id="autores">{{ $t('nomeAutoresCreditos') }}</span>
            <h2 id="titulo-apoio">
                {{ $t('tituloApoioCreditos') }}
            </h2>
            <span id="apoio-1">{{ $t('nomeApoioCreditos') }}</span>
            <span id="localizacao">{{ $t('localizacaoCreditos') }}</span>
            <span id="data">{{ $t('dataCreditos') }}</span>

        </div>

    </main>

</template>

<script>
export default {
    name: "vue-creditos-acessos",
    data() {
        return {

        }
    }

}
</script>

<style scoped>
    body {
        height: auto;
        overflow: scroll;
        margin: 0;
        padding-bottom: 15px;
        padding-top: 5px;
    }
    main {
        position: relative;
        width: 98%;
        height: 100%;
        border: var(--borda-simples);
        border-radius: 20px;
        padding: 10px;
        margin: auto;
        box-sizing: border-box;
        background-color: white;
    }
    #div-creditos {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        align-content: center;
    }

    #div-creditos span {
        width: 100%;
        text-align: center;
        line-height: 1.5;
    }

    #universidade,
    #laboratorio {
        font-size: 12pt;
        font-weight: bold;
    }

    #data,
    #localizacao {
        font-size: 10pt;
    }

    #versao {
        font-size: 9pt;
        margin: 0;
    }

    #autores {
        font-size: 12pt;
        font-weight: bold;
        margin-bottom: 5px;
    }

    #titulo-ferramenta {
        font-size: 22pt;
        margin-bottom: 0;
        margin-top: 0;
        text-align: center;
    }

    #titulo-autores,
    #titulo-apoio {
        font-size: 9pt;
        font-weight: normal;
    }

</style>
