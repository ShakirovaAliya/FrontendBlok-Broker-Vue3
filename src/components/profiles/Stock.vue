<template>
<div class="box-stock--profile">
    <div class="box-stock__item--profile currency" v-for="(value) in stock" :key="value.stock">
        <div  class="box-stock__title">
            <div class="box-stock__image">
                <img  :src="value.image" :alt="value.companyName">
            </div>
            <h3> 
                {{value.companyName}}  <span>{{value.symbol}}</span>
            </h3>
        </div>
    </div>
</div>
</template>
<script lang="ts">
    import axios from 'axios'
    export default {
        name: 'Stock',
        data() {
            return {
                stock: [],
                errors: []  
            }
        },
        created() {
            axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL,PYPL,QCOM,NKE,PNC,NEE,AXP,AMT?apikey=24c2ec7896a036bf0e6c3fd19db95037')
                .then(responce => {
                    this.stock = responce.data
                    console.log(responce)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }   
    }


</script>

<style>

.box-stock--profile { 
    @apply grid grid-cols-3 gap-4 mb-6;
}
.box-stock__item--profile {
    @apply px-2 py-2 border-2 rounded-md;
}


</style>