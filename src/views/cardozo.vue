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
            </NavBar>

            <inputs class="main-elements inputs"></inputs>

            <Fluxograma
                class="main-elements fluxograma"
            />
            
            <Ilustrations 
                class="main-elements resultados"
            />
        </main>

        <Footer class="footer"></Footer>


    </body>
    
</template>

<script>
    import NavBar from '@/components/acessos/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'
    
    import Fluxograma from '@/components/acessos/fluxograma.vue'
    import Ilustrations from '@/components/acessos/ilustrations.vue'
    import inputs from '@/components/acessos/inputsCardozo.vue'

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
        beforeMount(){
            this.$store.dispatch('changeMetodo', 'Cardozo')
        }
    }
</script>


