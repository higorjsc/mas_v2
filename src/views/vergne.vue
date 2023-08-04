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
            
            <Resultados 
                    class="main-elements resultados"
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
    import Resultados from '@/components/compartilhado/resultadosAcessos.vue'
    import inputs from '@/components/inputsVergne.vue'

    export default {
        name: 'vergne',
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
