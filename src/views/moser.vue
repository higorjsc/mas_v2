<template>

    <body
      class="main-body"
    >

        <Header 
          class="header"
        >
          {{ $t('tituloMoser') }}
        </Header>

        <main 
          class="main-container"
        >
          
            <NavBar 
              class="main-elements navbar"
            >
                {{ $t('pragrafoExplicacaoCardozo') }}
            </NavBar>

            <inputs
              class="main-elements inputs"
            >
            </inputs>

            <Fluxograma
                class="main-elements Fluxograma"
                metodo = "moser"
            >
            </Fluxograma>


        </main>

        <Footer
          class="footer"
        >
        </Footer>

        <Resultados 
                class="main-elements resultados"
        />


    </body>
    
</template>

  <script>
    import NavBar from '@/components/compartilhado/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'

    import inputs from '@/components/inputsMoser.vue'
    import Fluxograma from '@/components/compartilhado/fluxograma.vue'
    import Resultados from '@/components/compartilhado/resultadosAcessos.vue'

    export default {
      name: 'moser',
      props: '',
      components:{
        NavBar,
        inputs,
        Fluxograma,
        Header,
        Footer,
        Resultados,
      },
      data(){
        return {
        }
      }
    }
  </script>
