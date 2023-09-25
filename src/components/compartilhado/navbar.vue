<template>
    <section>
        <nav>
            <ul class="ul-parent">
                <li class="li-titulo">
                    {{ $ft('selectMethod') }}
                </li>
                <ul class="menu-option">
                    <li class="escolhida">
                        <span class= 'link' id='pagina-atual'>{{ presente.titulo }}</span>
                    </li>
                    <li class="option">
                        <RouterLink class= 'link' :to="option1.path">
                            {{ option1.titulo }}
                        </RouterLink>
                    </li>
                    <li class="option">
                        <RouterLink class= 'link' :to="option2.path">
                            {{ option2.titulo }}
                        </RouterLink>
                    </li>
                    <li class="option">
                        <RouterLink class= 'link' :to="option3.path">
                            {{ option3.titulo }}
                        </RouterLink>
                    </li>
                </ul>
            </ul>
        </nav>
        <!-- PARAGRAFO COM O TEXTO DE DESCRIÇÃO DO MÉTODO -->
        <p v-html="`${$ft('paragrafoExplicacao'+ metodo)}`"></p>

    </section>

</template>

<script>

export default {
    name: "navBar",
    data() {
        return {
            presente: {
                titulo: "",
                path: ""
            },
            option1: {
                titulo: "",
                path: ""
            },
            option2: {
                titulo: "",
                path: ""
            },
            option3: {
                titulo: "",
                path: ""
            },
            cardozo: {
                titulo: "CARDOZO (2023)",
                path: "/cardozo"
            },
            vergne: {
                titulo: "VERGNE (2003)",
                path: "/vergne"
            },
            moser: {
                titulo: "MOSER (1996)",
                path: "/moser"
            },
            ahpCardozo: {
                titulo: "MCDM",
                path: "/mcdm"
            }
        }
    },
    computed: {
        metodo() {
            return this.$store.getters.currentMetodo
        }
    },
    mounted() {
    // Chama a função que ordena a navBar e retorna o método selecionado
        this.defineMetodo()
    },
    methods: {
        defineMetodo() {
            switch (this.metodo) {
            case "Cardozo":
                this.presente = this.cardozo
                this.option1 = this.vergne
                this.option2 = this.moser
                this.option3 = this.ahpCardozo
                break
            case "Vergne":
                this.presente = this.vergne
                this.option1 = this.cardozo
                this.option2 = this.moser
                this.option3 = this.ahpCardozo
                break
            case "Moser":
                this.presente = this.moser
                this.option1 = this.cardozo
                this.option2 = this.vergne
                this.option3 = this.ahpCardozo
                break
            case "Mcdm":
                this.presente = this.ahpCardozo
                this.option1 = this.cardozo
                this.option2 = this.vergne
                this.option3 = this.cardozo
                break
            }
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        font-size: 10pt;
    }
    section{
        border-left: var(--borda-simples);
        border-right: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-top: var(--borda-simples);
        border-radius: 20px;
        overflow: hidden;
    }

    p{
        display: flex;
        flex-direction: column;
        padding: 2%;
        text-align: justify;
    }

    nav{
      width: 100%;
      text-align: center;
    }

    ul{
      overflow: hidden;
      list-style-type: none;
    }

    li{
      color: var(--cor-texto-tema);
    }

    .li-titulo{
      background-color: white;
      color: black;
      font-weight: bold;
    }

    .escolhida{
        display: block;
        border-top: 2pt solid white;
        border-bottom: 2pt solid white;
        background-color: var(--cor-tema);
    }
    .escolhida:hover{
        cursor:pointer;
    }

    .option{
        display: none;
        border-top: 2pt solid white;
        border-bottom: 2pt solid white;
        background-color: var(--cor-tema);
    }

    ul:hover .option{
        display: block;
        box-shadow: var(--shadow-hover);
    }
    ul:hover{
        box-shadow: var(--shadow-hover);
    }

    .option:hover{
        text-decoration: underline;
        background-color: var(--cor-hover);
    }

    .link{
        text-decoration: none;
        color: var(--cor-texto-tema);
    }

</style>
