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
                    class="celulas-titulo-linha"
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
                    class="celulas-titulo-coluna"
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
        background-color: rgb(43, 255, 0);
    }
    .matriz{
        background-color: blueviolet;
    }
    .matriz:hover{
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }
    .matriz tr{
        justify-content: space-evenly;
    }
    .matriz td{
        min-width: 80px;
        max-width: 80px;
        text-align: center;
        background-color: rgb(255, 0, 234);
    }
    .matriz th{
        font-size: 10pt;
    }
</style>
