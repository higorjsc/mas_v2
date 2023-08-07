<template>    

    <body
        class="main-body"
    >
        <Header
            class="header"
        >
        {{ $t('tituloVergne') }}
        </Header>

        <main 
            class="main-container"
        >

            
            <NavBar class="main-elements navbar">
                {{ $t('pragrafoExplicacaoVergne') }}
            </NavBar>

            <inputs
              class="main-elements inputs"
            >
            </inputs>

            <Fluxograma
                class="main-elements Fluxograma"
                metodo = "vergne"
            />
            
            <Ilustrations 
                class="main-elements resultados"
                metodo = "cardozo"
            />

        </main>

        <Footer 
            class="footer"
        ></Footer>


    </body>

</template>

<script>
    import NavBar from '@/components/acessos/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'
    
    import Fluxograma from '@/components/acessos/fluxograma.vue'
    import Ilustrations from '@/components/acessos/ilustrations.vue'
    import inputs from '@/components/acessos/inputsVergne.vue'

    export default {
        name: 'vergne',
        props: '',
        components:{
            NavBar,
            inputs,
            Fluxograma,
            Ilustrations,
            Header,
            Footer,
        },
        data(){
            return {
            }
        }
    }
</script>
