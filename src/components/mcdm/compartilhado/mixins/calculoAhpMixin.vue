<script>

export default{
    name: "vue-calculo-ahp-mixin",
    data() {

        return{

        }
    },
    methods:{
        conveterEscala(valorOriginal) {
            let minDesejado
            let maxDesejado
            let minOriginal
            let maxOriginal
            if (valorOriginal > 50) {
                minDesejado = 1
                maxDesejado = 9
                minOriginal = 50
                maxOriginal = 100
            } else {
                minDesejado = -1
                maxDesejado = -9
                minOriginal = 50
                maxOriginal = 0
            }
            let valor = minDesejado + (((valorOriginal - minOriginal) / (maxOriginal - minOriginal)) * (maxDesejado - minDesejado))
            valor = valor < 0 ? Math.abs(1 / valor) : Math.floor(valor)
            return (valor)
        },
        changeMatrixColor(matrizId) {
            const matrizes = document.querySelectorAll(".matriz td")
            matrizes.forEach(element => {
                element.style.backgroundColor = "var(--cor-tema-2)"
                element.style.color = "var(--cor-texto-tema)"

            })
            const matriz = document.getElementsByName(`${matrizId}`)
            matriz.forEach(elementParent => {
                elementParent.querySelectorAll("td").forEach(elementChild => {
                    elementChild.style.backgroundColor = "white"
                    elementChild.style.color = "black"
                })
            })
        }

    }
}


</script>