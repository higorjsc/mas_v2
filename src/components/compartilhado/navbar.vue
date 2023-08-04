Copy code
<template>
  <section>
    <nav>
      <ul class="ul-parent">
        <li class="li-titulo">{{ $t('selectMethod') }}</li>
        <ul class="menu-option">
          <li class="escolhida">
            <span class= 'link' id='pagina-atual'>{{ presente.titulo }}</span>
          </li> 
          <li class="option">
            <RouterLink class= 'link' :to="option1.path">{{ option1.titulo }}</RouterLink>
          </li>
          <li class="option">
            <RouterLink class= 'link' :to="option2.path">{{ option2.titulo }}</RouterLink>
          </li>
        </ul>            
      </ul>
    </nav>
    <p>
      <slot id="paragrafo-explicacao"></slot>
    </p>
</section>

</template>

    <script>
    export default {
        name: 'navBar',
        props: {
                    tema:{
                        type: String,
                        default: ''
                    },
                },
        data() {
            return {
            presente: {
                titulo: '',
                path: ''
            },
            option1: {
                titulo: '',
                path: ''
            },
            option2: {
                titulo: '',
                path: ''
            },
            cardozo: {
                titulo: 'Cardozo (2023)',
                path: '/cardozo'
            },
            vergne: {
                titulo: 'La Vergne (2003)',
                path: '/vergne'
            },
            moser: {
                titulo: 'Moser (1996)',
                path: '/moser'
            }
            }
        },
        mounted() {
            let url = window.location.href
            if (url.includes('cardozo')) {
            this.presente = this.cardozo
            this.option1 = this.vergne
            this.option2 = this.moser
            } else if (url.includes('vergne')) {
            this.presente = this.vergne
            this.option1 = this.cardozo
            this.option2 = this.moser
            } else if (url.includes('moser')) {
            this.presente = this.moser
            this.option1 = this.cardozo
            this.option2 = this.vergne
            }
        }
        }
</script>

<style scoped>

    *{
        margin: 0;
        padding: 0;
    }
    section{
        border-left: var(--borda-simples);
        border-right: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-radius: 20px;
    }

    p{
        display: flex;
        padding: 2%;
        text-align: justify;
        font-size: 9pt;
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
      background: var(--cor-tema);
      color: white;
    }
    
    .li-titulo{
      background-color: white;
      color: var(--cor-tema);
      font-weight: bold;
      border: var(--borda-simples);
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .escolhida{
        display: block;
    }

    .option{
        display: none;
    }

    ul:hover .option{
        display: block;
    }

    .option:hover{
        background-color: var(--cor-hover);
        text-decoration: underline;
    }

    .link{
        text-decoration: none;
        color: white;
    }

</style>
