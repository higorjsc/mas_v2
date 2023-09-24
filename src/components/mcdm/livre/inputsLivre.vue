<template>

    <section>

        <div
            class="criterios-ahp-container"
        >
            <h3>{{ $t('tituloAhpCriterios') }}</h3>
            <div
                v-for="(item, index) in criteriosPrimeira"
                :key="index"
                class="label-criterios"
            >
                <label>
                    {{ index+1 }} -
                </label>
                <input
                    class="criterios"
                    v-model="criteriosPrimeira[index]"
                >
                <button
                    @click="removeCriterio(index)"
                    class="criterio-button remove-criterio-button"
                > - </button>
            </div>
            <button
                @click="addCriterio()"
                class="criterio-button  add-criterio-button"
            > + </button>
        </div>

        <!-- OPÇÕES E BOTÕES DE ADICIONAR OPÇÕES -->
        <div
            class="options-ahp-container"
        >
            <h3>{{ $t('tituloAhpOptions') }}</h3>
            <div
                v-for="(item, index) in optionsPrimeira"
                :key="index"
            >
                <label>
                    {{ index+1 }} -
                </label>
                <input
                    class="options"
                    v-model="optionsPrimeira[index]"
                >
                <button
                    @click="removeOption(index)"
                    class="option-button remove-option-button"
                > - </button>
            </div>
            <button
                @click="addOption()"
                class="option-button  add-option-button"
            > + </button>
        </div>

    </section>
</template>
<script>
export default {
    name: "vue-inputs-etapa-livre",
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
    beforeUnmount() {
        this.$store.dispatch("changeCriteriosPrimeira", this.criteriosPrimeira)
        this.$store.dispatch("changeOptionsPrimeira", this.optionsPrimeira)
        this.$store.dispatch("changeCriteriosSegunda", this.criteriosSegunda)
        this.$store.dispatch("changeOptionsSegunda", this.optionsSegunda)
    },
    methods: {
        addCriterio() {
            if (this.criteriosPrimeira.length < 9) {
                this.criteriosPrimeira.push(`Criterio-${this.criteriosPrimeira.length + 1}`)
            } else {
                window.alert("Você atingiu o limite de inputs para o método!")
            }
            console.log(this.criteriosPrimeira)
        },
        removeCriterio(index) {
            this.criteriosPrimeira.splice(index, 1)
        },
        addOption() {
            if (this.optionsPrimeira.length < 5) {
                this.optionsPrimeira.push(`Opção-${this.optionsPrimeira.length + 1}`)
            } else {
                window.alert("Você atingiu o limite de opções para o método!")
            }
            console.log(this.optionsPrimeira)
        },
        removeOption(index) {
            this.optionsPrimeira.splice(index, 1)
        }
    }
}
</script>
<style scoped>
    section{
        display: flex;
        flex-direction: column;
        padding-left: 2%;
    }

    .criterios-ahp-container{
        align-items: center;
        width: 100%;
    }
    h3{
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .criterios, .options{
        border-radius: 20px;
        margin: 1px;
        text-align: center;
        width: 80%;
    }
    .criterio-button, .option-button{
        position: relative;
        display: inline-block;
        margin-top: 5px;
        height: 18px;
        width: 18px;
        border: var(--borda-simples);
        border-radius: 50%;
        transform: translateY(1px);
        font-size: 12pt;
    }
    .criterio-button:hover, .option-button:hover {
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }
    .add-criterio-button, .add-option-button{
        background-color: var(--cor-tema);
        color: var(--cor-texto-tema);
        margin-bottom: 10px;
    }
    .remove-criterio-button, .remove-option-button{
        background-color: rgba(235, 28, 28, 0.719);
        color: var(--cor-texto-tema);
    }
    .remove-criterio-button:hover, .remove-option-button:hover{
        cursor: pointer;
        box-shadow: 0 0 10px red;
    }
</style>
