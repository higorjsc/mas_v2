<template>

    <body>

        <Header  class="header">{{ $t('tituloMoser') }}</Header>

        <main>

            <switchLanguage class="main-elements switch-language"></switchLanguage>
            
            <navBar class="main-elements navbar">
                {{ $t('pragrafoExplicacao') }}
            </navBar>

            <inputs class="main-elements inputs"></inputs>

            <Fluxograma class="main-elements Fluxograma"></Fluxograma>

        </main>

        <Footer class="footer"></Footer>


    </body>
    
  </template>

  <script>
    import Header from '@/components/header.vue'
    import switchLanguage from '@/components/buttons/switchLanguage.vue'
    import navBar from '@/components/navbar.vue'
    import inputs from '@/components/inputsMoser.vue'
    import Footer from '@/components/footer.vue'
    import Fluxograma from '@/components/fluxogramaMoser.vue'
    export default {
      name: 'moser',
      props: '',
      components:{
        navBar,
        switchLanguage,
        inputs,
        Fluxograma,
        Header,
        Footer,
      },
      data(){
        return {
        }
      }
    }
  </script>
  <style scoped>
    body{
        position: relative;
        display: flex;
        justify-content: left;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    main{
      display: grid;
    }
    .header{
        margin: 0.2%;
    }
    .main-elements{
        box-sizing: border-box;
    }
    .navbar{
        grid-column: 1/2;
        margin-left: 0%;
    }
    .inputs{
        grid-column: 2/3;
        margin-left: 1%;
    }
    .switch-language{
        position: absolute;
        left: 41%;
        top: 6.5%;
    }
    .Fluxograma{
        grid-column: 3/4;
    }

    .footer{
        margin: 0.2%;
    }

  </style>