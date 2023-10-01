<template>

    <div
        class="menu-container"
    >
        <!-- ESCALA SAAATY -->
        <label
            class="label-menu-ahp"
            for="checkbox-mostra-escala-saaty"
            v-if="tabView !== 'resultados'"
        >
            {{ $t('helpEscalaSaaty') }}
        </label>
        <input
            type="checkbox"
            class="checkbox-menu-ahp"
            id="checkbox-mostra-escala-saaty"
            v-model="mostrarEscala"
        >
        <vueEscalaSaaty
            class="escala"
            v-if="mostrarEscala"
        />
        <!-- HELP PRIMEIRA ETAPA -->
        <label
            class="label-menu-ahp"
            v-if="tabView === 'primeira'"
            id="label-menu-ahp-menu-primeira-etapa"
            for="button-menu-primeira-etapa"
        >
            {{ $t('helpPrimeiraEtapa') }}
        </label>
        <button
            class="button-menu-ahp"
            id="button-menu-primeira-etapa"
            @click="abrirPopUp('helpPrimeiraEtapa')"
        >
        </button>
        <!-- HELP SEGUNDA ETAPA -->
        <label
            class="label-menu-ahp"
            v-if="tabView === 'segunda'"
            id="label-menu-ahp-menu-segunda-etapa"
            for="button-menu-segunda-etapa"
        >
            {{ $t('helpSegundaEtapa') }}
        </label>
        <button
            class="button-menu-ahp"
            id="button-menu-segunda-etapa"
            @click="abrirPopUp('helpSegundaEtapa')"
        ></button>
        <!-- MENU RESULTADOS ETAPA -->
        <label
            class="label-menu-ahp"
            v-if="tabView == 'resultados'"
            id="label-menu-ahp-menu-resultados-etapa"
            for="checkbox-menu-resultados-etapa"
        >
            {{ $t('helpResultadosEtapa') }}
        </label>
        <input
            type="checkbox"
            class="checkbox-menu-ahp"
            id="checkbox-menu-resultados-etapa"
            v-model="mostrarHelpResultadosEtapa"
        >
        <p
            class="paragrafo-menu"
            v-html="$t('paragrafoHelpResultadosEtapa')"
            v-if="mostrarHelpResultadosEtapa"
        >
        </p>
        <!-- PASSO A PASSO AHP -->
        <label
            class="label-menu-ahp"
            id="label-button-calculos-ahp"
            for="button-calculos-ahp"
        >
            {{ $t('helpCalculosAhp') }}
        </label>
        <button
            class="button-menu-ahp"
            id="button-calculos-ahp"
            @click="abrirPopUp('passosAhp')"
        >
        </button>
        <!-- MAIS SOBRE AHP-->
        <label
            class="label-menu-ahp"
            id="label-button-mais-sobre-ahp"
            for="button-mais-sobre-ahp"
        >
            {{ $t('helpMaisSobreAhp') }}
        </label>
        <button
            class="button-menu-ahp"
            id="button-mais-sobre-ahp"
            @click="abrirPopUp('maisSobreAhp')"
        >
        </button>

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
            mostrarHelpPrimeiraEtapa:false,
            mostrarHelpSegundaEtapa:false,
            mostrarHelpResultadosEtapa:false
        }
    },
    computed:{
        tabView() {
            return this.$store.getters.currentTabViewAtual
        }
    },
    methods:{
        abrirPopUp(frame) {
            this.$store.dispatch("changePopUp", frame)
        }
    }

}
</script>
<style scoped>
    .menu-container {
        position: fixed;
        margin-top: 20px;
        right: 2%;
        display: flex;
        flex-direction: column;
    }

    .label-menu-ahp {
    border: var(--borda-simples);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    font-size: 10pt;
    font-weight: bold;
    position: relative;
    align-self: flex-end;
    }

    /* Correção aqui: */
    .label-menu-ahp:hover {
    cursor: pointer;
    box-shadow: 0 0 10px var(--cor-hover);
    transform: scale(1.1);
    }

    .checkbox-menu-ahp {
    display: none;
    }
    .button-menu-ahp{
    display: none;
    }
</style>
