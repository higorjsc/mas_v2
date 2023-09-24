<template>

    <section class="container">

        <div
            class="criterios-ahp-cardozo-container"
        >
            <h3>{{ $t('tituloAhpCriteriosCardozo') }}</h3>
            <ol>
                <li>
                    Fluxograma de escolha
                </li>
                <li>
                    Avaliação econômica
                </li>
                <li>
                    Risco energético
                </li>
                <li>
                    Emissões/Custo Ambiental
                </li>
                <li>
                    Social
                </li>
            </ol>
        </div>
        <div
            class="options-ahp-cardozo-container"
        >
            <h3>{{ $t('tituloAhpOptionsCardozo') }}</h3>
            <ol>
                <li>
                    Poço
                </li>
                <li>
                    Rampa e Caminhão Diesel
                </li>
                <li>
                    Rampa e Caminhão Elétrico
                </li>
                <li>
                    Correia transportadora
                </li>
            </ol>

        </div>
    </section>

</template>
<script>
export default {
    name: "vue-inputs-etapa-cardozo",
    components: {

    },
    props: {
    },
    data() {
        return {
            resultadoFluxograma: ""
        }
    },
    methods: {
        handleInputValue(value) {
        }
    }
}

</script>
<style scoped>

    .container{
        display: flex;
        flex-direction: column;
        padding-left: 2%;
    }
    div{
        margin-bottom: 10px;
    }
    h3{
        margin-top: 10px;
        margin-bottom: 5px;
    }
    /* Estiliza a lista ordenada (ol) */
    ol {
        list-style-type: none; /* Tipo de marcador (números) */
        padding-left: 0; /* Remove o preenchimento padrão à esquerda */
    }

    /* Estiliza os itens da lista (li) */
    ol li {
        margin-bottom: 10px; /* Espaçamento entre os itens */
        counter-increment: list-item; /* Incrementa o contador a cada item */
    }
    ol li:before {
        content: counter(list-item) " - "; /* Adiciona número e hífen */
        font-weight: bold; /* Define o peso da fonte para negrito */
        margin-right: 5px; /* Espaçamento entre o hífen e o texto */
    }
</style>
