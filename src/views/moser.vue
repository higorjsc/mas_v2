<template>
    <Header></Header>
    <navBar></navBar>
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