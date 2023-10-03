
<script>
import { CORES, IMGS } from "@/assets/javascript/globalConstants.js"

export default {

    data() {
        return {
            resultado: "",
            color: {
            },
            fontColor: {
            },
            ilustrations: {
            }
        }
    },
    watch: {
        color: {
            handler() {
                this.$store.dispatch("changeColor", this.color)
            },
            deep: true // deep: true → O que estiver dentro da variável será observado
        },
        fontColor: {
            handler() {
                this.$store.dispatch("changeFontColor", this.fontColor)
            },
            deep: true // deep: true → O que estiver dentro da variável será observado
        },
        ilustrations: {
            handler() {
                this.$store.dispatch("changeIlustrations", this.ilustrations)
            },
            deep: true // deep: true → O que estiver dentro da variável será observado
        },
        resultado() {
            this.$store.dispatch("changeResultado", this.resultado)
        }
    },
    mounted() {
        this.fontColor = JSON.parse(JSON.stringify(CORES.defaultFontColor))
        this.color = JSON.parse(JSON.stringify(CORES.defaultColor))
        this.ilustrations = JSON.parse(JSON.stringify(IMGS.defaultIlustrations))
    },
    methods: {
        setDefaultColor() {
            this.fontColor = JSON.parse(JSON.stringify(CORES.defaultFontColor))
            this.color = JSON.parse(JSON.stringify(CORES.defaultColor))
        },
        setColorRed() {
            for (const key in this.color) {
                this.color[key] = CORES.fluxoVermelho
                this.fontColor[key] = "white"
            }
        },
        setColorGreen(objetos = []) {
            // Muda a cor dos objetos do array para verde
            objetos.forEach((key) => {
                this.color[key] = CORES.fluxoVerde
                this.fontColor[key] = "black"
            })
        },
        defaultImages() {
            this.ilustrations = JSON.parse(JSON.stringify(IMGS.defaultIlustrations))
        },
        showImages(itens) {
            itens.forEach(item => {
                this.ilustrations[item] = true
            })
        },
        // DESABILITA OS OBJETOS NA SEQUENCIA DO FLUXOGRAMA
        enableObjects(id) {
            // Altera a opacidade da div a partir do id
            const objeto = document.querySelector(`#${id}`)
            if (objeto) {
                objeto.style.opacity = "1"
            }
            // Desabilita o input a partir da classe
            const elementos = document.querySelectorAll(`.${id}`)
            if (elementos) {
                elementos.forEach(element => {
                    element.disabled = false
                })
            }
        },
        // HABILITA O PRÓXIMO ELEMENTO DO FLUXOGRAMA
        disableObject(ids = []) {
            ids.forEach((id) => {
                // Altera a opacidade da div a partir do id
                const objeto = document.querySelector(`#${id}`)
                if (objeto) {
                    objeto.style.opacity = "0.5"
                }
                // Desabilita o input a partir da classe
                const elementos = document.querySelectorAll(`.${id}`)
                if (elementos) {
                    elementos.forEach(element => {
                        element.disabled = true
                    })
                }
            })
        }
    }
}
</script>
