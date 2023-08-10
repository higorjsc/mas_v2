<template>
    <div 
        id="balao"
    >
        {{ $t(texto) }}
    </div>
</template>

<script>
export default {
    name: 'balao-mixin',
    data() {
        return {
            balao: null
        }
    },
    methods: {
        formataId(id){
            // Remove os sufixos "-menor" e "-maior" que diferenciam os ids dos labels dos radio buttons
            return id.replace(/-menor/g, '').replace(/-maior/g, '').replace(/-/g, '-')
        },
        balaoEntra(id) {
            this.balao.style.display = 'block';
            id = this.formataId(id)
            this.$store.dispatch('changeBalao', id)
            console.log(id)
        },
        balaoSai() {
            this.balao.style.display = 'none'
        },
        balaoPosition(event) {
            if (this.balao) {
                this.balao.style.top = event.clientY + -40 + "px" 
                this.balao.style.left = event.clientX + "px"
            }
        }
    },
    mounted() {
        this.balao = document.getElementById("balao");
        document.addEventListener("mousemove", this.balaoPosition)
    },
    beforeUnmount() {
        document.removeEventListener("mousemove", this.balaoPosition)
    },
    computed: {
        texto() {
            return this.$store.getters.currentBalao
        },
    }
}
</script>

<style>
#balao {
    position: absolute;
    background-color: white;
    border: var(--borda-simples);
    border-radius: 10px;
    z-index: 999;
    padding: 5px;
}
</style>
