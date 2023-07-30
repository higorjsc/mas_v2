<template>

    <body>
      <Header>{{ $t('tituloMoser') }}</Header>
      <main>
        <switchLanguage class="switch-language"></switchLanguage>
        <navBar class="navbar">{{ $t('pragrafoExplicacao') }}</navBar>
        <inputs class="inputs"></inputs>
      </main>
      <Footer></Footer>
    </body>
    
  </template>

  <script>
    import Header from '@/components/header.vue'
    import switchLanguage from '@/components/buttons/switchLanguage.vue'
    import navBar from '@/components/navbar.vue'
    import inputs from '@/components/inputsMoser.vue'
    import Footer from '@/components/footer.vue'
    export default {
      name: 'cardozo',
      props: '',
      components:{
        navBar,
        switchLanguage,
        inputs,
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
    }
    main{
      display: grid;
    }
    .navbar{
      grid-column: 1/2;
    }
    .inputs{
      grid-column: 2/3;
      width: 290px;
    }
    .switch-language{
      position: absolute;
      left: 10%;
    }
    
  </style>