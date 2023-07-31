<template>

    <NavBar>
      
    </NavBar>
  
  </template>
    
  <script>
    import NavBar from '@/components/compartilhado/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'
    export default {
      components: {
        NavBar
      }
      ,
      data(){
        return {
        }
      }
    }
  </script>
  
  
  <style scoped>
  
      #main-nav {
        display: block;
        position: relative;
        margin: auto;
      }
  
  </style>
  