<template>
    <div
        id="balao"
        v-html="`${$t(texto)}`"
    >
    </div>
</template>

<script>
export default {
    name: "balao-mixin",
    data () {
        return {
            idObjeto: "",
            balao: null
        }
    },
    methods: {
        formataId (id) {
            // Remove os sufixos "-menor" e "-maior" que diferenciam os ids dos labels dos radio buttons
            id = id.replace(/-menor/g, "")
            id = id.replace(/-maior/g, "")
            id = id.replace(/-nao/g, "")
            id = id.replace(/-sim/g, "")
            id = id.replace(/-/g, "_")
            return id
        },
        balaoEntra (id) {
            this.$store.dispatch("changeBalao", this.formataId(id))
            this.balao.style.display = "block"
        },
        balaoSai () {
            this.balao.style.display = "none"
        },
        balaoPosition (event) {
            if (this.balao) {
                this.balao.style.top = event.clientY + -40 + "px"
                this.balao.style.left = event.clientX + 40 + "px"
            }
        }
    },
    mounted () {
        this.balao = document.getElementById("balao")
        document.addEventListener("mousemove", this.balaoPosition)
    },
    beforeUnmount () {
        document.removeEventListener("mousemove", this.balaoPosition)
    },
    computed: {
        texto () {
            return this.$store.getters.currentBalao
        }
    }
}
</script>

<style>

#balao {
    display: none;
    position: absolute;
    background-color: white;
    border: var(--borda-simples);
    border-radius: 10px;
    color: black;
    text-align: center;
    min-width: 100px;
    z-index: 999;
    padding: 5px;
}

</style>
