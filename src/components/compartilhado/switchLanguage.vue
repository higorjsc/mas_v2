<template>

    <div class="switch-container">
        <input type="checkbox" v-model="switchLanguage" class="switch" id="switch"/>
        <label for="switch" id="switch-language">
            <span
                v-if="!lang"
                class="pt"
            >
                {{ $t('ptSwitchLanguage') }}
            </span>
            <span
                v-if="lang"
                class="en"
            >
                {{ $t('enSwitchLanguage') }}
            </span>
        </label>
    </div>

</template>

<script>
import { verificarLocal, armazenarLocal } from "@/assets/javascript/globalFunctions.js"
export default {
    name: "vue-switch-language",
    data() {
        return {
            switchLanguage: false
        }
    },
    computed: {
        lang() {
            return this.$store.getters.currentLanguage === "pt"
        }
    },
    watch: {
        switchLanguage() {
            this.Language()
        }
    },
    mounted() {
        // Verifica a preferencia de idioma da localStorage
        this.switchLanguage = verificarLocal("switch-language")
    },
    updated() {
        armazenarLocal("switch-language", this.switchLanguage)
    },
    methods: {
        Language() {
            this.switchLanguage ? this.$store.dispatch("changeLanguage", "en") : this.$store.dispatch("changeLanguage", "pt")
        }
    }
}

</script>

<style scoped>

    .switch {
        display: none;
    }

    span {
        color: var(--cor-texto-tema);
        font: normal 8pt;
        position: inherit;
        top: 22%;
        margin-left: 1px;
        margin-right: 5px;
        z-index: 2;
    }
    .en{
        position: absolute;
        top: -5%;
        right: 1%;
    }
    .pt{
        position: absolute;
        top: -5%;
        left:5%;
    }

    label {
        display: inline-block;
        cursor: pointer;
        width: 50px;
        height: 20px;
        background-color: var(--cor-tema);
        border-radius: 15px;
        position: absolute;
        top: 45px;
        right: 2%;
        box-shadow: var(--shadow-tema)
    }
    label:hover {
        box-shadow: 0 0 20px var(--cor-tema);
        font: 12pt;
        font-weight: bold;
    }
    label::after {
        content: '';
        display: block;
        width: 19px;
        height: 17px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        top: 2px;
        transition: transform 0.2s ease-in-out;
    }

    label:hover::after {
        box-shadow: 0 0 20px var(--cor-tema);
        font: 12pt;
        font-weight: bold;
    }

    #switch:checked + label::after {
        transform: translateX(30px);
    }

</style>
