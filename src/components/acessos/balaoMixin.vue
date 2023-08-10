



<template>
    <div 
        v-if="text"   
        class="balao"
    >
        {{ texto }}
    </div>

</template>

<script>
    export default {

        name: 'balao',
        data(){
            return{
                text: false,
            }
        },
        methods:{
            balaoEntra(id){
                let id_form = id.replace(/-/g, '_')
                console.log(id_form)
                this.text = true
            },
            balaoSai(){
                this.text = false
            }
        },
        computed:{
            texto(){
                return this.text
            }
        }

    }

</script>
<style>
    .balao{
        position: absolute;
        top: 20%;
        background-color: aqua;
        width: 100px;
        height: 100px;
        z-index: 999;
    }

</style>