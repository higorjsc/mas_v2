<template>    

    <body
        class="main-body"
    >
        <Header
            class="header"
        >
        {{ $t('tituloCardozo') }}
        </Header>

        <main 
            class="main-container"
        >

            
            <NavBar class="main-elements navbar">
                {{ $t('pragrafoExplicacaoVergne') }}
            </NavBar>

            <switchLanguage 
                class="main-elements switch-language"
            />

            
            
            <inputs 
                class="main-elements inputs"
            />

            <Fluxograma
                class="main-elements Fluxograma"
                metodo = "vergne"
            />

        </main>

        <Footer 
            class="footer"
        ></Footer>


    </body>

</template>
<script>
    import NavBar from '@/components/compartilhado/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'
    import Fluxograma from '@/components/compartilhado/fluxograma.vue'
    import switchLanguage from '@/components/compartilhado/switchLanguage.vue'

  export default {
    name: 'vergne',
    props: '',
    components:{
      NavBar,
      Header,
      Footer,
      switchLanguage,
      Fluxograma,
    },
    data(){
      return {
      }
    }
  }
</script>
