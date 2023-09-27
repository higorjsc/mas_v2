<template>


    <section class="section-container-inputs">

        <div
            class="criterios-ahp-container-cardozo"
        >
            <h3
                class="titulo-inputs-criterios"
            >
                {{ $t('mcdmTituloCriterios') }}
            </h3>
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
                    Risco Social
                </li>
            </ol>
        </div>
        <div
            class="options-ahp-container-cardozo"
        >
            <h3
                class="titulo-inputs-options"
            >
                {{ $t('mcdmTituloOptions') }}
            </h3>
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
    data() {
        return {
            resultadoFluxograma: "",
            optionsPrimeira: [
                "Poço",
                "R. Diesel",
                "R. Elétrico",
                "Correia"
            ],
            criteriosPrimeira: [
                "Aval. Econômica",
                "Risco Energético",
                "Custo Ambiental",
                "Risco Social"
            ],
            optionsSegunda: [
                "Poço",
                "R. Diesel",
                "R. Elétrico",
                "Correia"
            ],
            criteriosSegunda: [
                "Fluxograma",
                "Aval. Econômica",
                "Risco Energético",
                "Custo Ambiental",
                "Risco Social"
            ]
        }
    },
    created() {
        this.$store.dispatch("changeCriteriosPrimeira", this.criteriosPrimeira)
        this.$store.dispatch("changeOptionsPrimeira", this.optionsPrimeira)
        this.$store.dispatch("changeCriteriosSegunda", this.criteriosSegunda)
        this.$store.dispatch("changeOptionsSegunda", this.optionsSegunda)
    }
}

</script>
<style scoped>

    .criterios-ahp-container-cardozo, .options-ahp-container-cardozo{
        margin-bottom: 10px;
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