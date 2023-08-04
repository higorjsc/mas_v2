<template>

    <!-- WAY CONTAINER-->
    <div 
        class="container"
        :style="{ 
            top: Top, 
            left: Left, 
            width: Width, 
            height: Height, 
            transform: Transform, 
            backgroundColor: BackgroundColor, 
            fontSize: FontSize, 
            color: FontColor, 
        }"
    >
        <!-- WAY TEXT -->
        <slot
            class="texto-way"
        />

    </div>

</template>
  
  
<script>

    export default {
        props:{
            BackgroundColor: {
                type: String,
                default: 'white'
            },
            Width: {
                type: String,
                default: 'auto'
            },
            Height: {
                type: String,
                default: '12px'
            },
            Top: {
                type: String,
                default: '0px'
            },
            Left: {
                type: String,
                default: '0px'
            },
            Transform: {
                type: String,
                default: 'rotate(0deg)'
            },
            FontSize: {
                type: String,
                default: '9pt'
            },
            FontColor: {
                type: String,
                default: 'black'
            },
            TextAlign: {
                type: String,
                default: 'center'
            },
            Text: {
                type: String,
                default: ''
            },
        }
        
    }
            
    
</script>
  
<style scoped>

   *{
        margin: 0;
        padding: 0;
    }

    .container{
        position: absolute;
        border-radius: 20;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .texto-way{
        z-index: 8;
    }


</style>
  