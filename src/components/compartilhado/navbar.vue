<template>
    <section
        class="section-navbar"
    >
        <nav
            class="navbar-principal"
        >
            <ul class="ul-parent">
                <li class="li-titulo">
                    {{ $t('selectMethod') }}
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
        <p
            class="paragrafo-explicacao"
            v-html="`${$t('paragrafoExplicacao'+ metodo)}`"
        >
        </p>

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
                this.option3 = this.moser
                break
            }
        }
    }
}
</script>

<style scoped>
    *{
        padding: 0;
        font-size: 11pt;
    }
    .section-navbar{
        border-left: var(--borda-simples);
        border-right: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-top: var(--borda-simples);
        border-radius: 20px;
        min-width: 250px;
        margin-right: 2px;
        overflow: hidden !important;
    }

    .paragrafo-explicacao{
        display: flex;
        flex-direction: column;
        padding: 2%;
        text-align: justify;
        margin: 0;
    }

    .navbar-principal{
      width: 100%;
      text-align: center;
    }

    .menu-option{
      list-style-type: none;
    }

    .menu-option li{
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

    .menu-option:hover .option{
        display: block;
        box-shadow: var(--shadow-hover);
    }
    .menu-option:hover{
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
