<template>

    <div
        class="help-container"
    >

        <label
            class="label-checkbox"
            for="checkbox-mostra-escala-saaty"
        >
            {{ $t('helpEscalaSaaty') }}
        </label>

        <input
            type="checkbox"
            class="checkbox-help-ahp"
            id="checkbox-mostra-escala-saaty"
            v-model="mostrarEscala"
        >

        <vueEscalaSaaty
            v-if="mostrarEscala"
        />

        <label
            class="label-checkbox"
            id="label-checkbox-help-primeira-etapa"
            for="checkbox-help-primeira-etapa"
        >
            {{ $t('helpPrimeiraEtapa') }}
        </label>

        <input
            type="checkbox"
            class="checkbox-help-ahp"
            id="checkbox-help-primeira-etapa"
            v-model="mostrarHelpPrimeiraEtapa"
        >

    </div>

</template>
<script>
import vueEscalaSaaty from  "@/components/mcdm/compartilhado/escalaSaaty.vue"

export default{
    name: "vue-escala-saaty",
    components:{
        vueEscalaSaaty
    },
    data() {
        return{
            mostrarEscala:false,
            mostrarHelpPrimeiraEtapa:false
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
.label-checkbox{
    border: var(--borda-simples);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    font-size: 10pt;
    font-weight: bold;
    position: relative;
}

label:hover{
    cursor: pointer;
    box-shadow: 0 0 10px var(--cor-hover);
    transform: scale(1.1);
}

.checkbox-help-ahp{
    display: none;
}
</style>