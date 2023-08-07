
<script>

    import {disableObject} from '@/assets/javascript/acessos.js'
    import {coresDefault} from '@/assets/javascript/constants.js'

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
                    start: 'coresDefault.fluxoGreen',
                    logistica: coresDefault.fluxoGreen,
                    rockMass: 'white',
                    surfaceMaterial: 'white',
                    openPit: 'white',
                    prodCenter: 'white',
                    prodLeft: 'white',
                    depthCenter: 'white',
                    depthLeft: 'white',
                    correia: coresDefault.fluxoBlue,
                    rampa: coresDefault.fluxoBlue,
                    shaft: coresDefault.fluxoBlue,
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
        mounted(){
            disableObject(['rm', 'sm', 'op', 'depth', 'prod'])
        },
        methods:{
            setDefaultColor() {
                for (const key in this.color) {
                    this.color[key] = this.defaultColor[key];
                } 
            },
            setColorRed() {
                for (const key in this.color) {
                    this.color[key] = ' rgba(236, 22, 22, 0.8)';
                } 
            },
            setColorGreen(objetos = []){
                // Muda a cor dos objetos do array para verde
                objetos.forEach((objeto)=>{
                    this.color[objeto] = coresDefault.fluxoGreen
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