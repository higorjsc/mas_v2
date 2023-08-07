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
            />
            

            <Fluxograma
                class="main-elements Fluxograma"
                metodo = "moser"
            />
           

            <Ilustrations 
                class ="main-elements resultados"
                metodo = "moser"
            />

        </main>

        <Footer
          class="footer"
        />

    </body>
    
</template>

<script>
    import NavBar from '@/components/acessos/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'
    
    import Fluxograma from '@/components/acessos/fluxograma.vue'
    import Ilustrations from '@/components/acessos/ilustrations.vue'
    import inputs from '@/components/acessos/inputsMoser.vue'

    export default {
        name: 'moser',
        props: '',
        components:{
            NavBar,
            inputs,
            Fluxograma,
            Header,
            Footer,
            Ilustrations,
        },
        data(){
            return {
            }
        }
    }
</script>
