<template>

    <div
        class="vetor-container"
    >
        <table
            class="vetor"
            :id="idVetor"
        >
            <tr>
                <th>{{ tituloVetor }}</th>
            </tr>
            <tr
                v-for="(item, index) in valueVetor"
                :key="index"
                class="linha-valores"
            >
                <td
                    class="celulas-valores"
                >
                    {{ item }}
                </td>

            </tr>

        </table>
    </div>
</template>
<script>
export default {
    name: "vue-vetor",
    props: {
        tituloVetor: {
            type: String,
            default: ""
        },
        idVetor: {
            type: String,
            default: ""
        },
        valueVetor: {
            type: Array, // Define o tipo esperado como um array
            default: () => [1, 1, 1, 1] // Define um valor padrão como um array vazio
        }
    },
    data() {
        return {

        }
    }
}

</script>
<style scoped>

.vetor-container{
        margin: auto;
        display: flex;
        flex-direction: row;
        background-color: rgb(43, 255, 0);
    }
    .vetor{
        background-color: blueviolet;
    }
    .vetor:hover{
        cursor: pointer;
        box-shadow: 0 0 10px var(--cor-tema);
    }
    .vetor tr{
        justify-content: space-evenly;
    }
    .vetor td{
        min-width: 80px;
        max-width: 80px;
        text-align: center;
        background-color: rgb(255, 0, 234);
    }
    .vetor th{
        font-size: 10pt;
    }
</style>
