<template>
  <Header></Header>
  <NavBar></NavBar>
  <Footer></Footer>

</template>
<script>
    import NavBar from '@/components/compartilhado/navbar.vue'
    import Header from '@/components/compartilhado/header.vue'
    import Footer from '@/components/compartilhado/footer.vue'
  export default {
    name: 'cardozo',
    props: '',
    components:{
      NavBar,
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