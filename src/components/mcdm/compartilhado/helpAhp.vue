<template>

    <div
        class="help-container"
    >
        <label
            class="label-checkbox"
            for="checkbox-mostrar-tabela"
        >
            {{ $t('helpEscalaSaaty') }}
        </label>

        <input
            type="checkbox"
            class="checkbox-mostra-escala-saaty"
            id="checkbox-mostrar-tabela"
            v-model="mostrarEscala"
        >

        <div
            class="escala-saaaty-container"
            v-if="mostrarEscala"
        >

            <table
                class="tabela-escala-saaty"
            >
                <caption class="caption-titulo-escala-saaty">
                    {{$t('tituloEscalaSaaty')}}
                </caption>
                <thead>
                    <tr>
                        <th>{{$t('verbalEscalaSaaty')}}</th>
                        <th>{{$t('numericaEscalaSaaty')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{$t('igualImportanciaEscalaSaaty')}}</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>{{$t('moderadamenteSuperiorEscalaSaaty')}}</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>{{$t('superiorEscalaSaaty')}}</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>{{$t('muitoSuperiorEscalaSaaty')}}</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>{{$t('extremamenteSuperiorEscalaSaaty')}}</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>
            <span
                v-if="mostrarEscala"
                class="legenda-escala-saaty"
            >
                {{$t('legendaEscalaSaaty')}}
            </span>

        </div>

    </div>
</template>
<script>
export default{
    name: "vue-escala-saaty",
    data() {
        return{
            mostrarEscala:false
        }
    }
}
</script>
<style scoped>


.help-container{
    position: fixed;
    margin-top: 20px;
    right: 2%;
    display: flex;
    flex-direction: column;
}
.escala-saaaty-container{
    position: fixed;
    margin-top: 30px;
    right: 2%;
    display: flex;
    align-items: center;
    padding: 3px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: white;
    z-index: 5;
    width: 280px;
    border-radius: 10px;
    border: var(--borda-simples);
}
.label-checkbox{
    border: var(--borda-simples);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 20px;
    font-size: 8pt;
    font-weight: bold;
}

label:hover{
    cursor: pointer;
    box-shadow: 0 0 10px var(--cor-hover);
    transform: scale(1.1);
}

.checkbox-mostra-escala-saaty{
    display: none;
}
.caption-titulo-escala-saaty{
    font-size: 10pt;
    text-align: center;
    font-weight: bold;
    width: 100%;
}
.legenda-escala-saaty{
    margin-top: 0;
    font-size: 10pt;
    text-align: center;
    width: 90%;
}
.tabela-escala-saaty {
    border-collapse: collapse;
    text-indent: initial;
    border-spacing: 1px;
    text-align: center;
    font-size: 9pt;
    margin-bottom: 0;
    width: 90%;
    background-color: white;

}
.tabela-escala-saaty thead{
    border-bottom: var(--borda-simples);
    text-align: center;
}
.tabela-escala-saaty tbody{
    border-bottom: var(--borda-simples);
    margin-bottom: 0;
}

</style>