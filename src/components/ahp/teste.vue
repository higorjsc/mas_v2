<template>
    <section>
        <div
            v-for="(criter, indexCriterio) in criterios"
            :key="indexCriterio"
            :name="criter.value"
            class="criterio-container"
        >
            <h3 class="titulo-matriz">
                {{ criter.value }}
            </h3>
            <div class="matriz-container">
                <table class="matrizes" @click="trocaMatrizInputAtual(criter.value)">
                    <tr>
                        <th></th>
                        <th v-for="item in options" :key="item.index">
                            {{ item.value }}
                        </th>
                    </tr>
                    <tr v-for="(linha, rowIndex) in sliderValue[indexCriterio]" :key="rowIndex">
                        <th>{{ options[rowIndex].value }}</th>
                        <td v-for="celula in linha" :key="celula">
                            {{ celula }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>
