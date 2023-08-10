
<script>
    export default {

        name: 'balao-mixin',
        data(){
            return{
                visibilidade: true,
                text: {
                    type: String,
                    default: ''
                },
            }
        },
        methods:{
            // RECEVE O ID KNBEAD-CASE E RETORNA A VARIÁVEL DA TRADUÇÃO. Exemplo: start-cardozo → start_cardozo
            balaoEntra(id){
                this.visibilidade = true
                this.$store.dispatch('changeBalao', id.replace(/-/g, '_'))
            },
            // OCULTA O BALÃO HELP
            balaoSai(){
                this.visibilidade = false
            }
        },
    }

</script>
