<script>
export default {
    computed: {
        criteriosPrimeira() {
            return this.$store.getters.currentCriteriosPrimeira
        },
        optionsPrimeira() {
            return this.$store.getters.currentOptionsPrimeira
        },
        criteriosSegunda() {
            return this.$store.getters.currentCriteriosSegunda
        },
        optionsSegunda() {
            return this.$store.getters.currentOptionsSegunda
        }
    },
    methods: {
        // Segunda etapa
        arranjoCriterios() {
            const arranjoCriterios = []
            for (let i = 0; i < this.criteriosSegunda.length; i++) {
                for (let j = 0; j < this.criteriosSegunda.length; j++) {
                    if (i < j) {
                        arranjoCriterios.push(
                            {
                                id: `${i + 1}${j + 1}`,
                                texto: `${this.criteriosSegunda[i]} vs ${this.criteriosSegunda[j]}`,
                                valor: 50
                            }
                        )
                    }
                }
            }
            return arranjoCriterios
        },
        // Primeira etapa
        arranjoOptions() {
            const arranjoOptions = []
            for (let i = 0; i < this.optionsPrimeira.length; i++) {
                for (let j = 0; j < this.optionsPrimeira.length; j++) {
                    if (i < j) {
                        arranjoOptions.push(
                            {
                                id: `${i + 1}${j + 1}`,
                                texto: `${this.optionsPrimeira[i]} vs ${this.optionsPrimeira[j]}`,
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
            for (let i = 0; i < this.criteriosPrimeira.length; i++) {
                slideres.push(
                    this.arranjoOptions()
                )
            }
            console.log(slideres)
            this.$store.dispatch("changeSlideresPrimeira", slideres)
        },
        // Cria os slideres da segunda etapa a partir do arranjo de critérios
        criaSlideresSegunda() {
            const slideres = this.arranjoCriterios()
            this.$store.dispatch("changeSlideresSegunda", slideres)
        }
    }
}
</script>
