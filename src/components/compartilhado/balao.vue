<template>
    <div
        id="balao" ref="balao" class="balao-help"
    >
        <p
            v-html="$t(`${texto}`)"
        >
        </p>
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
        },
        metodo() {
            return this.$store.getters.currentMetodo
        }
    },
    mounted() {
        this.balao = document.getElementById("balao")
        this.addPageListeners()
        this.addBalaoListener()
    },
    beforeUnmount() {
        this.removePageListeners()
    },
    methods: {
        addPageListeners() {
            document.querySelectorAll("label").forEach(element => {
                element.addEventListener("mouseover", () => this.balaoEntra(element.id))
                element.addEventListener("mouseleave", this.balaoSai)
            })

        },
        removePageListeners() {
            document.querySelectorAll("label").forEach(element => {
                element.removeEventListener("mouseover", () => this.balaoEntra(element.id))
                element.removeEventListener("mouseleave", this.balaoSai)
            })
        },
        addBalaoListener() {
            document.addEventListener("mousemove", this.balaoPosition)
        },
        balaoEntra(id) {
            this.$store.dispatch("changeBalao", this.formataId(id))
            if(this.texto !== "") {
                this.balao.style.display = "block"
            }
        },
        balaoSai() {
            this.balao.style.display = "none"
        },
        balaoPosition(event) {
            this.balao.style.top = event.clientY - 40 + window.scrollY + "px"
            this.balao.style.left = event.clientX + 40 + "px"
        },
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
        }
    }
}
</script>

  <style scoped>
  .balao-help {
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
