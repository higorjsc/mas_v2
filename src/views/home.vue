<template>
    <Header></Header>
    <navBar
      metodo1.name="Cardozo (2023)"
    ></navBar>
    <Footer></Footer>
  
  </template>
  <script>
    import navBar from '@/components/navbar.vue'
    import Header from '@/components/header.vue'
    import Footer from '@/components/footer.vue'
    export default {
      name: 'cardozo',
      props: '',
      components:{
        navBar,
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
  
  
  </style>