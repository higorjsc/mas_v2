
<script>
import { CORES } from "@/assets/javascript/globalConstants.js"

export default {

    data() {
        return {
            resultado: "",
            color: {
                start: "",
                logistica: "",
                rockMass: "",
                surfaceMaterial: "",
                openPit: "",
                prodCenter: "",
                prodLeft: "",
                depthCenter: "",
                depthLeft: "",
                correia: "",
                rampa: "",
                shaft: ""
            },
            defaultColor: {
                start: CORES.fluxoVerde,
                logistica: CORES.fluxoVerde,
                rockMass: "white",
                surfaceMaterial: "white",
                openPit: "white",
                prodCenter: "white",
                prodLeft: "white",
                depthCenter: "white",
                depthLeft: "white",
                correia: CORES.fluxoAzul,
                rampa: CORES.fluxoAzul,
                shaft: CORES.fluxoAzul
            },
            ilustrations: {
                orebody: true,
                superficie: true,
                superficiePit: false,
                ventilacao: true,
                usina: true,
                shaft: false,
                rampa: false,
                rampaPit: false,
                truck: false,
                correia: false,
                pit: false
            },
            defaultIlustrations: {
                orebody: true,
                superficie: true,
                superficiePit: false,
                ventilacao: true,
                usina: true,
                shaft: false,
                rampa: false,
                rampaPit: false,
                truck: false,
                correia: false,
                pit: false
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
    methods: {
        setDefaultColor() {
            for (const key in this.color) {
                this.color[key] = this.defaultColor[key]
            }
        },
        setColorRed() {
            for (const key in this.color) {
                this.color[key] = CORES.fluxoVermelho
            }
        },
        setColorGreen(objetos = []) {
            // Muda a cor dos objetos do array para verde
            objetos.forEach((objeto) => {
                this.color[objeto] = CORES.fluxoVerde
            })
        },
        defaultImages() {
            this.ilustrations = JSON.parse(JSON.stringify(this.defaultIlustrations))
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
