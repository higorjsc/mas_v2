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

            <Inputs class="main-elements inputs"></Inputs>

            <Fluxograma
                class="main-elements fluxograma"
            />
            
            <Ilustrations 
                class="main-elements resultados"
            />
        </main>

        <Footer class="footer"></Footer>

        <Balao class="balao"></Balao>


    </body>
    
</template>

<script>
    import NavBar from '@/components/acessos/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'
    import Balao from '@/components/compartilhado/balao.vue'
    
    import Fluxograma from '@/components/acessos/fluxograma.vue'
    import Ilustrations from '@/components/acessos/ilustrations.vue'
    import Inputs from '@/components/acessos/inputsCardozo.vue'

    export default {
        name: 'view-cardozo',
        props: '',
        components:{
            NavBar,
            Inputs,
            Fluxograma,
            Header,
            Footer,
            Ilustrations,
            Balao,
        },
        beforeMount(){
            this.$store.dispatch('changeMetodo', 'Cardozo')
        }
    }
</script>


