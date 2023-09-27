<template>
    <section
        class="section-fluxograma-acessos"
    >
        <!-- TITULO SEÇÃO -->
        <h2
            class="titulo-section-acessos "
        >
            {{ $t('tituloFluxograma') }}
        </h2>
        <!-- CONTAINER DE TODO O FLUXOGRAMA -->
        <div class="container-fluxograma">
            <!-- CONTAINER DOS OBJETOS PRINCIPAIS DO FLUGRAMA -->
            <div
                v-for ="(item, index) in objeto"
                :key="index"
                class="itens"
                :id="item.id"
                :style="{
                    top: item.top,
                    left: item.left,
                    background: this.$store.getters.currentColor[`${item.backgroundKey}`],
                    transform: item.transform,
                    width: item.width,
                    height: item.height
                }"
                @mouseout="balaoSai()"
            >
                {{ $t(`${objeto[index]['Text']}`) }}
            </div>
            <!-- CONTAINER DAS SETAS -->
            <Seta
                v-for="(item, index) in seta"
                class="setas"
                :key="index"
                :Cabecalho="item.head"
                :Color="item.color"
                :Top="item.top"
                :Left="item.left"
                :Width="item.width"
                :Transform="item.transform"
            >
            </Seta>
            <!-- CONTAINER DE TEXTOS SOBRE AS SETAS -->
            <Way
                v-for="(item, index) in way"
                class="way"
                :key="index"
                :BackgroundColor="item.backgroundColor"
                :FontColor="item.color"
                :FontSize="item.fontSize"
                :TextAlign="item.textAlign"
                :Top="item.top"
                :Left="item.left"
                :Width="item.width"
                :Height="item.height"
                :Transform="item.transform"
            >
                {{ item.Text }}
            </Way>

        </div>

    </section>
</template>

<script>

import Seta from "./seta.vue"
import Way from "./way.vue"
import fluxoDataMixin from "@/components/acessos/mixins/fluxoDataMixin.vue"
import Balao from "@/components/compartilhado/balao.vue"

export default {
    name: "vue-fluxograma-acessos",
    components: {
        Seta,
        Way
    },
    mixins: [
        fluxoDataMixin,
        Balao
    ],
    computed: {
        objeto() {
            // Retorna os objetos principais do fluxograma de cada método
            return this.objetos[`${this.$store.getters.currentMetodo}`]
        },
        way() {
            // Retorna os textos sobre as setas do fluxograma de cada método
            return this.ways[`${this.$store.getters.currentMetodo}`]
        },
        seta() {
            // Retorna as setas do flugrama de cada método
            return this.setas[`${this.$store.getters.currentMetodo}`]
        }
    },
    mounted() {
        this.adicionarEventListeners()
        this.removerEventListeners()
    },
    methods: {
        adicionarEventListeners() {
            // Adiciona o evento do balão em mouseover a todos os ojbetos do fluxograma
            const objetos = document.querySelectorAll(".itens")
            objetos.forEach(element => {
                element.addEventListener("mouseover", this.eventoMouseover)
            })
        },
        removerEventListeners() {
            // Remove o evento do balão em mouseover dos objetos indesejados
            const objetos = document.querySelectorAll("#start-cardozo, #start-vergne")
            objetos.forEach(element => {
                element.removeEventListener("mouseover", this.eventoMouseover)
            })
        },
        eventoMouseover(event) {
            // Chama a função balaoEntra do mixin "Balao" from /compartilhado/balao.vue
            this.balaoEntra(event.target.id)
        }
    }

}

</script>

<style scoped>
   *{
        padding: 0;
        --IDENT: 20px;
        --WIDTH: 80px;
        --SPACING: 70px
    }
    .section-fluxograma-acessos{
        position: relative;
        margin: 0;
        border-top: var(--borda-simples);
        border-bottom: var(--borda-simples);
        border-right: var(--borda-simples);
        /* min-width: 653px; */
    }
    .container-fluxograma{
        position: relative;
        display: flex;
        margin: auto;
        margin-top: 20%;
        width: 430px;
        height: 500px;
        overflow: hidden;
        transform: scale(1);
    }
    .itens{
        position: absolute;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: white;
        padding: 5px;
        border: var(--borda-simples);
        border-radius: 10px;
        left: var(--IDENT);
        width: var(--WIDTH);
        z-index: 2;
        text-align: center;
        font-size: 9pt;
        font-weight: bold;
        line-height: 1;
    }
    .itens:hover{
        cursor: pointer;
        box-shadow: var(--shadow-hover);
    }

    .container-fluxograma .setas {
        position: absolute;
    }

    .container-fluxograma .way {
        position: absolute;
        cursor: default;
    }
</style>
