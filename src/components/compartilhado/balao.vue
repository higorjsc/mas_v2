<template>
    <div
        id="balao"
        v-html="`${$t(texto)}`"
    >
    </div>
</template>

<script>
export default {
    name: "vue-balao",
    data() {
        return {
            idObjeto: "",
            balao: null
        }
    },
    computed: {
        texto() {
            return this.$store.getters.currentBalao
        }
    },
    mounted() {
        this.balao = document.getElementById("balao")
        // Adiciona o listner para mover o balão
        document.addEventListener("mousemove", this.balaoPosition)
    },
    beforeUnmount() {
        document.removeEventListener("mousemove", this.balaoPosition)
    },
    methods: {
        formataId(id) {
            // Dividir a string em partes usando "-" como separador
            let idFormatado = id.split("-")
            // Converte o id para pascalCase
            idFormatado = idFormatado.map(parte => {
                // Converter primeira letra para maiúscula
                return parte.charAt(0).toUpperCase() + parte.slice(1)
            })
            idFormatado[0] = idFormatado[0].toLowerCase()
            // Junta as partes novamente removendo o separador do id "-"
            idFormatado = idFormatado.join("")
            // Remove os sufixos "-menor" e "-maior" que diferenciam os ids dos labels dos radio buttons
            idFormatado = idFormatado.replace(/Menor/g, "").replace(/Nao/g, "").replace(/Sim/g, "").replace(/Maior/g, "")
            return idFormatado
        },
        balaoEntra(id) {
            this.$store.dispatch("changeBalao", this.formataId(id))
            this.balao.style.display = "block"
        },
        balaoSai() {
            this.balao.style.display = "none"
        },
        balaoPosition(event) {
            if (this.balao) {
                this.balao.style.top = event.clientY + -40 + window.scrollY + "px"
                this.balao.style.left = event.clientX + 40 + "px"
            }
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
