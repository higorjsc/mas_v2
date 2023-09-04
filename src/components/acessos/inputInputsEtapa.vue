<template>

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
    <!-- INPUTS E BOTÕES DE ADICIONAR INPUT -->
    <div
        v-if="verificaTemplate"
        class="inputs-ahp-container"
    >
        <input
            v-for="(item) in inputMade"
            :key="item.idInput"
            :ref="item.idInput"
            class="inputs"
        >
        <button
            @click="addInput()"
            ref="add-input-button"
            class="buttons"
        >
            {{ inputCounter }}
        </button>
    </div>

</template>
<script>
export default {
    name: "vue-ahp-inputs-etapa",
    components: {
    },
    data() {
        return {
            templateAhp: "",
            inputCounter: 0,
            inputMade: [
                {
                    placeholder: "input-1",
                    idInput: "input-1"
                },
                {
                    placeholder: "input-2",
                    idInput: "input-2"
                },
                {
                    placeholder: "input-3",
                    idInput: "input-3"
                }
            ]
        }
    },
    computed: {
        verificaTemplate() {
            return this.templateAhp === "inserir"
        }
    },
    methods: {
        handleInputValue(value) {
            console.log(`${value}`)
        },
        addInput() {
            this.inputCounter += 1
            this.inputMade.push(
                {
                    placeholder: `input-${this.inputCounter}`,
                    idInput: `input-${this.inputCounter}`
                }
            )
        }
    }
}
</script>
<style scoped>
    section{
        display: flex;
        flex-direction: column;
    }

    .inputs-ahp-container{
        align-items: center;
        width: 100%;
    }

</style>
