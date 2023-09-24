<script>
export default {
    computed: {
        criterios() {
            return this.$store.getters.currentCriterios
        },
        options() {
            return this.$store.getters.currentOptions
        }
    },
    methods: {
        arranjoCriterios() {
            const arranjoOptions = []
            for (let i = 0; i < this.criterios.length; i++) {
                for (let j = 0; j < this.criterios.length; j++) {
                    if (i < j) {
                        arranjoOptions.push(
                            {
                                id: `${i + 1}${j + 1}`,
                                texto: `${this.criterios[i]} vs ${this.criterios[j]}`,
                                valor: 50
                            }
                        )
                    }
                }
            }
            return arranjoOptions
        },
        arranjoOptions() {
            const arranjoOptions = []
            for (let i = 0; i < this.options.length; i++) {
                for (let j = 0; j < this.options.length; j++) {
                    if (i < j) {
                        arranjoOptions.push(
                            {
                                id: `${i + 1}${j + 1}`,
                                texto: `${this.options[i]} vs ${this.options[j]}`,
                                valor: 50
                            }
                        )
                    }
                }
            }
            return arranjoOptions
        },
        // Cria os slideres da primeira etapa a partir do arranjo de opções
        criaSlideresPrimeira() {
            const slideres = []
            for (let i = 0; i < this.criterios.length; i++) {
                slideres.push(
                    this.arranjoOptions()
                )
            }
            this.$store.dispatch("changeSlideresPrimeira", slideres)
        },
        // Cria os slideres da segunda etapa a partir do arranjo de critérios
        criaSlideresSegunda() {
            const slideres = []
            slideres.push(
                this.arranjoCriterios()
            )
            this.$store.dispatch("changeSlideresSegunda", slideres)
        }
    }
}
</script>
