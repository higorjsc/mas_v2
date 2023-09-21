<template>

    <section>
        <!-- TEMPLASTES AHP -->
        <div class="templates-ahp-container" id="templates-ahp-container">
            <h3>{{ $t('templatesAhpTitulo') }}</h3>
            <select v-model="templateAhp">
                <option value="">
                </option>
                <option value="primeiraTemplate">
                    {{ $t('primeiraTemplateAhp') }}
                </option>
                <option value="segundaTemplate">
                    {{ $t('segundaTemplateAhp') }}
                </option>
                <option value="terceiraTemplate">
                    {{ $t('terceiraTemplateAhp') }}
                </option>
                <option value="inserir">
                    {{ $t('inserirInputsAhp') }}
                </option>
            </select>
        </div>

        <!-- CRITÉRIOS E BOTÕES DE ADICIONAR CRITÉRIOS -->
        <div
            v-if="verificaTemplate"
            class="criterios-ahp-container"
        >
            <h3>{{ $t('tituloAhpCriterios') }}</h3>
            <div
                v-for="(item) in criterios"
                :key="item.index"
                class="label-criterios"
                :for="`criterio-${item.index}`"
            >
                <label>
                    {{ item.index }} -
                </label>
                <input
                    :ref="`slider-criterio-${item.index}`"
                    class="criterios"
                    :id="`criterio-${item.index}`"
                    :placeholder="item.value"
                    v-model="item.value"
                >
                <button
                    @click="removeCriterio()"
                    ref="remove-criterio-button"
                    class="criterio-button remove-criterio-button"
                > - </button>
            </div>
            <button
                @click="addCriterio()"
                ref="add-criterio-button"
                class="criterio-button  add-criterio-button"
            > + </button>
        </div>

        <!-- OPÇÕES E BOTÕES DE ADICIONAR OPÇÕES -->
        <div
            v-if="verificaTemplate"
            class="options-ahp-container"
        >
            <h3>{{ $t('tituloAhpOptions') }}</h3>
            <div
                v-for="(item) in options"
                :key="item.index"
                class="label-options"
                :for="`option-${item.index}`"
            >
                <label>
                    {{ item.index }} -
                </label>
                <input
                    :ref="`slider-option-${item.index}`"
                    class="options"
                    :id="`option-${item.index}`"
                    :placeholder="item.value"
                    v-model="item.value"
                >
                <button
                    @click="removeOption()"
                    ref="remove-option-button"
                    class="option-button remove-option-button"
                > - </button>
            </div>
            <button
                @click="addOption()"
                ref="add-option-button"
                class="option-button  add-option-button"
            > + </button>
        </div>

    </section>
</template>
<script>
export default {
    name: "vue-ahp-inputs-etapa",
    components: {
    },
    data() {
        return {
            templateAhp: "inserir",
            criterioCounter: 3,
            optionCounter: 4,
            criterio: null,
            option: null,
            slideres: []
        }
    },
    computed: {
        verificaTemplate() {
            return this.templateAhp === "inserir"
        },
        criterios() {
            return this.$store.getters.currentCriterios
        },
        options() {
            return this.$store.getters.currentOptions
        }
    },
    mounted() {
    },
    methods: {
        addCriterio() {
            this.criterioCounter += 1
            if (this.criterioCounter <= 9) {
                this.criterio = this.$store.getters.currentCriterios
                this.criterio.push(
                    {
                        index: `${this.criterioCounter}`,
                        value: `Criterio ${this.criterioCounter}`
                    }
                )
                this.$store.dispatch("changeCriterios", this.criterio)
            } else {
                window.alert("Você atingiu o limite de inputs para o método!")
            }
        },
        removeCriterio() {
            this.criterioCounter = this.criterioCounter - 1
            this.criterio = this.$store.getters.currentCriterios
            this.criterio.pop()
            this.$store.dispatch("changeCriterios", this.criterio)
        },
        addOption() {
            if (this.optionCounter < 5) {
                this.optionCounter += 1
                this.option = this.$store.getters.currentOptions
                this.option.push(
                    {
                        index: `${this.optionCounter}`,
                        value: `Opção ${this.optionCounter}`
                    }
                )
                this.$store.dispatch("changeOptions", this.option)
            } else {
                window.alert("Você atingiu o limite de opções para o método!")
            }
        },
        removeOption() {
            if (this.optionCounter >= 0) {
                this.optionCounter = this.optionCounter - 1
                this.option = this.$store.getters.currentOptions
                this.option.length = this.option.length - 1
                this.$store.dispatch("changeOptions", this.option)
            }
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
