<template>

    <div
        class="matriz-container"
    >
        <table
            class="matriz-texto"
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
        justify-content: space-around;
        width: 100%;
    }
    .matriz-texto{
        font-size: 10pt;
        width: 100%;
    }
    .matriz-texto td{
        width: 20%;
        text-align: center;
    }
    .th-titulo-coluna{
        font-size: 10pt;
        width: 20%;
        font-weight: bold;
        text-align: left;
    }
    .th-titulo-linha{
        font-size: 10pt;
        font-weight: bold;
        height: 50px;
    }
</style>