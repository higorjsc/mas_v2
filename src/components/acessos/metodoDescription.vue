<template>
    <div>
        <p class="paragrafo-1"> 
            {{ $t(paragrafoDescription) }}
        </p>
        
        
        <br>
        <span> {{ $t("observations") }}</span>
        <br>
        <p class="paragrafo-2"> 
            {{ $t(`${paragrafoObservations}`) }}
        </p>
        
        <br>
        <span> {{ $t("references") }}</span>
        <br>
        <p class="paragrafo-3"> 
            {{ $t(`${paragrafoReferences}`) }}
        </p>
        
    </div>

</template>

    <script>
    export default {
        name: 'Metodo Description',
        props: {
            metodo:{
                type: String,
                default: ''
            }
        },
        data() {
            return {
                paragrafoDescription: 'paragrafoDescription',
                paragrafoObservations: 'paragrafoObservations',
                paragrafoReferences: 'paragrafoReferences'
            }
        },
        mounted(){
            this.defineTexto()
        },
        watch:{
            metodo(){
                this.defineTexto()
            }
        },
        methods:{
            defineTexto(){
                this.paragrafoDescription += this.metodo
                this.paragrafoObservations += this.metodo
                this.paragrafoReferences += this.metodo
            }
        },
        }
</script>

<style scoped>

    p{
        display: flex;
        padding: 2%;
        text-align: justify;
        font-size: 9pt;
    }
      

</style>
