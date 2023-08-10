<template>
    <div 
        id="balao"
        :v-if="visibilidade"
    >
        {{ $t(texto) }}
    </div>

</template>

<script>

    export default {
        data(){
            return{
                visibilidade: '',
                text: {
                    type: String,
                    default: ''
                },
            }
        },
        mounted(){
            //POSICIONA O BALÃO DE AJUDA NA POSIÇÃO DO CURSOR
            const balao = document.getElementById("balao")
            document.addEventListener("mousemove", function (event) {
                balao.style.top = event.clientY + "px"
                balao.style.left = event.clientX + "px"
            })
        },
        methods:{
            // RECEVE O ID KNBEAD-CASE E RETORNA A VARIÁVEL DA TRADUÇÃO. Exemplo: start-cardozo → start_cardozo
            balaoEntra(id){
                this.visibilidade = true
                this.$store.dispatch('changeBalao', id.replace(/-/g, '_'))
            },
            // OCULTA O BALÃO HELP
            balaoSai(){
                console.log(this.visibilidade)
                this.visibilidade = false
                console.log(this.visibilidade)
            }
        },
        computed:{
            texto(){
                return this.$store.getters.currentBalao
            },
            vis(){
                return this.visibilidade
            }
        }
    }

</script>

<style>
    #balao{
        position: absolute;
        background-color: white;
        border: var(--borda-simples);
        border-radius: 10px;
        width: 100px;
        height: 100px;
        z-index: 999;
    }
</style>