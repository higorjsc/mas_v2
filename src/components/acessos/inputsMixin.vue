
<script>

    export default {
        data(){
            return{
                resultado: '',
                color: {
                    start: '',
                    logistica: '',
                    rockMass: '',
                    surfaceMaterial: '',
                    openPit: '',
                    prodCenter: '',
                    prodLeft: '',
                    depthCenter: '',
                    depthLeft: '',
                    correia: '',
                    rampa: '',
                    shaft: '',
                } ,
                defaultColor: {
                    start: 'rgba(14, 224, 49, 0.8)',
                    logistica: 'rgba(14, 224, 49, 0.8)',
                    rockMass: 'white',
                    surfaceMaterial: 'white',
                    openPit: 'white',
                    prodCenter: 'white',
                    prodLeft: 'white',
                    depthCenter: 'white',
                    depthLeft: 'white',
                    correia: 'rgba(31, 191, 219, 0.493)',
                    rampa: 'rgba(31, 191, 219, 0.493)',
                    shaft: 'rgba(31, 191, 219, 0.493)',
                },     
                ilustrations:{
                    orebody: true,
                    superficie: true,
                    superficie_pit: false,
                    ventilacao: true,
                    usina: true,
                    shaft: false,
                    rampa: false,
                    rampa_pit: false,
                    truck: false,
                    correia: false,
                    pit: false,
                },
                defaultIlustrations:{
                    orebody: true,
                    superficie: true,
                    superficie_pit: false,
                    ventilacao: true,
                    usina: true,
                    shaft: false,
                    rampa: false,
                    rampa_pit: false,
                    truck: false,
                    correia: false,
                    pit: false,
                }             
            }
        },
        methods:{
            setDefaultColor() {
                for (const key in this.color) {
                    this.color[key] = this.defaultColor[key];
                } 
            },
            setColorRed() {
                for (const key in this.color) {
                    this.color[key] = 'rgba(236, 22, 22, 0.8)'
                } 
            },
            setColorGreen(objetos = []){
                // Muda a cor dos objetos do array para verde
                objetos.forEach((objeto)=>{
                    this.color[objeto] = 'rgba(14, 224, 49, 0.8)'
                })
            },
            defaultImages(){
                this.ilustrations = JSON.parse(JSON.stringify(this.defaultIlustrations));
            },
            showImages(itens){
                itens.forEach(item =>{
                    this.ilustrations[item] = true
                })
            },
            // DESABILITA OS OBJETOS NA SEQUENCIA DO FLUXOGRAMA
            enableObjects(id){
                // Altera a opacidade da div a partir do id
                let objeto = document.querySelector(`#${id}`)
                if(objeto) {
                    objeto.style.opacity = "1"
                }
                // Desabilita o input a partir da classe
                const elementos = document.querySelectorAll(`.${id}`)
                if(elementos){
                    elementos.forEach(element => {
                        element.disabled = false
                })
                }
            },
            // HABILITA O PRÓXIMO ELEMENTO DO FLUXOGRAMA
            disableObject(ids=[]){
                ids.forEach((id) =>{
                    // Altera a opacidade da div a partir do id
                    let objeto = document.querySelector(`#${id}`)
                    if(objeto) {
                        objeto.style.opacity = "0.5"
                    }
                    // Desabilita o input a partir da classe
                    const elementos = document.querySelectorAll(`.${id}`)
                    if(elementos){
                        elementos.forEach(element => {
                            element.disabled = true
                        })
                    }
                })
            }
        },
        watch:{
            color:{
                handler(){
                    this.$store.dispatch('changeColor', this.color)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            },
            ilustrations:{
                handler(){
                    this.$store.dispatch('changeIlustrations', this.ilustrations)
                },
                deep: true //deep: true → O que estiver dentro da variável será observado
            },
            resultado(){
                this.$store.dispatch('changeResultado', this.resultado)
            } 
        }
    }
</script>