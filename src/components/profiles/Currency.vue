<template>
<ul class="dashboard-info">
    <li class="dashboard-info__item--profile currency" v-for="value in currencyUSD" :key="value.currencyUSD">
        <span>{{value.symbol}}</span>
    </li>
    <li class="dashboard-info__item--profile currency" v-for="value in currencyEUR" :key="value.currencyEUR">
        <span>{{value.symbol}}</span>
    </li>
</ul>
</template>
<script lang="ts">
    import axios from 'axios'
    export default {
        name: 'Currency',
        data() {
            return {
                currencyUSD: [],
                currencyEUR: [],
                errors: []  
            }
        },
        created() {
            axios.get('https://financialmodelingprep.com/api/v3/quote/USD?apikey=24c2ec7896a036bf0e6c3fd19db95037')
                .then(responce => {
                    this.currencyUSD = responce.data
                    console.log(responce)
                })
                .catch(e => {
                    this.errors.push(e)
                }),

            axios.get('https://financialmodelingprep.com/api/v3/quote/EUR?apikey=24c2ec7896a036bf0e6c3fd19db95037')
                .then(responce => {
                    this.currencyEUR = responce.data
                    console.log(responce)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }   
    }


</script>

<style>

.dashboard-info__item--profile {
   @apply bg-transparent rounded-md flex-1 px-2 py-2 flex items-center;
}


</style>