
<template>
    <!-- TEMPLASTES MCDM -->
    <div class="templates-mcdm-container">
        <h3>{{ $t('templatesMcdmTitulo') }}</h3>
        <select v-model="template">
            <option value="">
                selecione
            </option>
            <option value="cardozoTemplate">
                {{ $t('cardozoTemplateMcdm') }}
            </option>
            <option value="personalizado">
                {{ $t('ahpPersonalizado') }}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    name: "template-selector-mcdm",
    data() {
        return {
            template: ""
        }
    },
    computed: {
        templateAtual() {
            return this.$store.getters.currentTemplateMcdm
        }
    },
    watch: {
        template() {
            this.handleTemplateMcdm()
        }
    },
    mounted() {
        this.template = this.templateAtual
    },
    methods: {
        handleTemplateMcdm() {
            this.$store.dispatch("changeTemplateMcdm", this.template)
        }
    }

}
</script>
<style scoped>
.templates-mcdm-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
}
select{
    align-self: center;
}
</style>