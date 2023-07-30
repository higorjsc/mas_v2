<template>

  <RouterView></RouterView>
</template>
  
<script>
  import NavBar from '@/components/mainNavBar.vue'
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
