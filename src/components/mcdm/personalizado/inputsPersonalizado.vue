<template>

    <section
        class="section-container-inputs"
    >

        <div
            class="criterios-ahp-container-personalizado"
        >
            <h3
                class="titulo-inputs-criterios"
            >
                {{ $t('mcdmTituloCriterios') }}
            </h3>
            <div
                v-for="(item, index) in criteriosPrimeira"
                :key="index"
                class="label-criterios"
            >
                <label>
                    {{ index+1 }} -
                </label>
                <input
                    class="input-criterios"
                    v-model="criteriosPrimeira[index]"
                >
                <button
                    @click="removeCriterio(index)"
                    class="remove-button"
                > - </button>
            </div>
            <button
                @click="addCriterio()"
                class="add-button"
            > + </button>
        </div>

        <!-- OPÇÕES E BOTÕES DE ADICIONAR OPÇÕES -->
        <div
            class="options-ahp-container-personalizado"
        >
            <h3
                class="titulo-inputs-criterios"
            >
                {{ $t('mcdmTituloOptions') }}
            </h3>
            <div
                v-for="(item, index) in optionsPrimeira"
                :key="index"
            >
                <label>
                    {{ index+1 }} -
                </label>
                <input
                    class="input-options"
                    v-model="optionsPrimeira[index]"
                >
                <button
                    @click="removeOption(index)"
                    class="remove-button"
                > - </button>
            </div>
            <button
                @click="addOption()"
                class="add-button"
            > + </button>
        </div>

    </section>
</template>
<script>
export default {
    name: "vue-inputs-etapa-personalizado",
    data() {
        return {
            slideres: [],
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
                "Social"
            ]
        }
    },
    mounted() {
        if (this.$store.getters.currentOptionsPrimeira) {
            this.optionsPrimeira = this.$store.getters.currentOptionsPrimeira
        }
        if (this.$store.getters.currentCriteriosPrimeira) {
            this.criteriosPrimeira = this.$store.getters.currentCriteriosPrimeira
        }
        this.$store.dispatch("changeCriteriosPrimeira", this.criteriosPrimeira)
        this.$store.dispatch("changeOptionsPrimeira", this.optionsPrimeira)
        this.$store.dispatch("changeCriteriosSegunda", this.criteriosPrimeira)
        this.$store.dispatch("changeOptionsSegunda", this.optionsPrimeira)
    },
    beforeUnmount() {
        try {
            this.$store.dispatch("changeCriteriosPrimeira", this.criteriosPrimeira)
            this.$store.dispatch("changeOptionsPrimeira", this.optionsPrimeira)
            this.$store.dispatch("changeCriteriosSegunda", this.criteriosPrimeira)
            this.$store.dispatch("changeOptionsSegunda", this.optionsPrimeira)
        } catch {
            console.log("falha no armazenamento")
        }
    },
    methods: {
        addCriterio() {
            if (this.criteriosPrimeira.length < 9) {
                this.criteriosPrimeira.push(`Criterio-${this.criteriosPrimeira.length + 1}`)
            } else {
                window.alert("Você atingiu o limite de inputs para o método!")
            }
        },
        removeCriterio(index) {
            if (this.criteriosPrimeira.length > 3) {
                this.criteriosPrimeira.splice(index, 1)
            } else {
                window.alert("Você deve análisar no mínimo 3 critérios!")
            }
        },
        addOption() {
            if (this.optionsPrimeira.length < 5) {
                this.optionsPrimeira.push(`Opção-${this.optionsPrimeira.length + 1}`)
            } else {
                window.alert("Você atingiu o limite de opções para o método!")
            }
        },
        removeOption(index) {
            if (this.optionsPrimeira.length > 3) {
                this.optionsPrimeira.splice(index, 1)
            } else {
                window.alert("Você deve análisar no mínimo 3 opções!")
            }
        }
    }
}
</script>
<style scoped>

    .criterios-ahp-container-personalizado{
        align-items: center;
        width: 100%;
    }
    .criterios-ahp-container-personalizado div, .options-ahp-container-personalizado div{
        display: flex;
        align-items: baseline;
    }
    .input-criterios, .input-options{
        border-radius: 20px;
        margin: 1px;
        text-align: center;
        width: 80%;
    }
    .add-button, .remove-button{
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-around;
        align-items: center;
        margin-top: 5px;
        height: 18px;
        width: 18px;
        border: var(--borda-simples);
        border-radius: 50%;
        transform: translateY(1px);
        font-size: 12pt;
        background-color: var(--cor-tema-alt);
        color: var(--cor-texto-tema);
        text-align: center;
    }
    .add-button:hover, .remove-button:hover {
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }

</style>