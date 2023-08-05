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

          
            <NavBar 
                class="main-elements navbar"
            >
                {{ $t('pragrafoExplicacaoCardozo') }}
            </NavBar>

            <inputs class="main-elements inputs"></inputs>

            <Fluxograma
                class="main-elements fluxograma"
                metodo = "cardozo"
            />
            
            <Ilustrations 
                class="main-elements resultados"
                metodo = "cardozo"
            />
        
        </main>

        <Footer class="footer"></Footer>


    </body>
    
</template>

<script>
    import NavBar from '@/components/compartilhado/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'
    import Fluxograma from '@/components/compartilhado/fluxograma.vue'
    import Ilustrations from '@/components/compartilhado/ilustrationsAcessos.vue'
    import inputs from '@/components/inputsCardozo.vue'

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


