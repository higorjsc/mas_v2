<template>

    <div
        class="matriz-container"
    >
        <table
            class="matriz"
            :id="idMatriz"
        >
            <!-- Linha de título -->
            <tr
                class="linha-titulo"
            >
                <th></th>
                <th
                    class="th-titulo-linha"
                    v-for="(item, optionIndex) in optionMatriz"
                    :key="optionIndex"
                >
                    {{ item }}
                </th>

            </tr>
            <!-- Demais linhas -->
            <tr
                v-for="(item, optionIndex) in optionMatriz"
                :key="optionIndex"
                class="linha-valores"
            >
                <th
                    class="th-titulo-coluna"
                >
                    {{ item }}
                </th>
                <td
                    v-for="(item, valueIndex) in valueMatriz[optionIndex]"
                    :key="valueIndex"
                    class="celulas-valores"
                >
                    {{valueMatriz[optionIndex][valueIndex]}}
                </td>

            </tr>

        </table>
    </div>
</template>
<script>
export default {
    name: "vue-matriz",
    props: {
        idMatriz: {
            type: String,
            default: ""
        },
        optionMatriz: {
            type: Array, // Define o tipo esperado como um array
            default: () => [] // Define um valor padrão como um array vazio
        },
        valueMatriz: {
            type: Array, // Define o tipo esperado como um array
            default: () => [
                [1, 1, 1, 1],
                [1, 1, 1, 1],
                [1, 1, 1, 1],
                [1, 1, 1, 1]
            ] // Define um valor padrão como um array vazio
        }
    },
    data() {
        return {

        }
    }
}

</script>
<style scoped>

    .matriz-container{
        margin: auto;
        margin-top: 1%;
        display: flex;
        flex-direction: row;
    }
    .matriz{
        width: 100%;
        height: 100%;
    }
    .matriz td:hover{
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }
    .matriz tr{
        justify-content: space-evenly;
    }
    .matriz td{
        min-width: 80px;
        max-width: 100px;
        text-align: center;
        border: var(--borda-simples);
        background-color: rgba(3, 49, 3, 0.8);
        color: var(--cor-texto-tema);
    }
    .th-titulo-coluna{
        min-width: 120px;
        max-width: 150px;
        font-size: 12pt;
        font-weight: bold;
        text-align: left;
        color: var(--cor-tema)

    }
    .th-titulo-linha{
        font-size: 12pt;
        font-weight: bold;
        height: 50px;
        color: var(--cor-tema)

    }
</style>