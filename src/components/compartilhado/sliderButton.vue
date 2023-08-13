<template>

    <div class="slider-container">
        <h3>
            {{ $t(`${texto}`)  }}
        </h3>
        <input
            type="range"
            min="0"
            max="100"
            v-model='valorInput'
            :id="id"
            @change="enviarValor"
            class="slider"
        >
        <div class="label-container">
            <label id="left-label">1/9</label>
            <label id="center-label">0</label>
            <label id="right-label">9</label>
        </div>
    </div>

</template>
<script>
export default {
    name: "vue-range-button",
    props: {
        texto: {
            type: String,
            default: "undefined"
        },
        id: {
            type: String,
            default: "undefined"
        }
    },
    emits: ["slider-value"],
    data() {
        return {
            valorInput: "50"
        }
    },
    methods: {
        enviarValor() {
            this.$emit("slider-value", [this.id, this.valorInput])
        }
    }
}
</script>
<style scoped>

.slider-container{
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
}

h3 {
    text-align: center;
    font-size: 11pt;
}

.label-container {
    width: 100%;
    background-color: aqua;
}
#left-label{
    position: absolute;
    left: 0%;
}
#center-label{
    position: absolute;
    left: 49%;
}
#right-label{
    position: absolute;
    right: 0%;
}
.slider {
  width: 100%;
  height: 6px;
  border-radius: 50px;
  opacity: 0.7;
  background: linear-gradient(90deg, red 50%, blue 50%);
  border: 1pt solid black;
  appearance: none;
  outline: none;
  transition: .2s;
  transition: opacity .2s;
  position: relative;
}

/* THUMB do CHROME */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 15px;
  height:15px;
  border-radius: 50%;
  background: white;
  border: var(--borda-simples) ;
  cursor: pointer;
}

/* THUMB do MOZILA */
.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

</style>
