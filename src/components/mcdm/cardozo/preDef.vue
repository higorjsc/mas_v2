<template>

    <select
        v-if="selectSolicitado==='Aval. Econômica'"
    >
        <option value="">{{ $ft('eco') }}</option>
    </select>
    <select
        v-if="selectSolicitado==='Risco Energético'"
    >
        <option value="">{{ $ft('RE') }}</option>
    </select>
    <select
        v-if="selectSolicitado==='Custo Ambiental'"
    >
        <option value="">{{ $ft('RE') }}</option>
    </select>


</template>
<script>
export default{
    name: 'slideres-predefinidos-cardozo',
    props:{
        selectSolicitado:{
            type: String,
            default: ''
        }
    },
    data(){
        return{
        }
    }
    
}

</script>