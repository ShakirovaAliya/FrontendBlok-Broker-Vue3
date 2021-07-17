<template>
<ul class="dashboard-info">
    <li class="dashboard-info__item currency" v-for="value in currencyUSD" :key="value.currencyUSD">
        <span>{{value.name}}</span>
        <span>{{value.price.toFixed(2)}} ₽</span>
    </li>
    <li class="dashboard-info__item currency" v-for="value in currencyEUR" :key="value.currencyEUR">
        <span>{{value.name}}</span>
        <span>{{value.price.toFixed(2)}} ₽</span>
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
            axios.get('https://financialmodelingprep.com/api/v3/quote/USDRUB?apikey=24c2ec7896a036bf0e6c3fd19db95037')
                .then(responce => {
                    this.currencyUSD = responce.data
                    console.log(responce)
                })
                .catch(e => {
                    this.errors.push(e)
                }),
            axios.get('https://financialmodelingprep.com/api/v3/quote/EURRUB?apikey=24c2ec7896a036bf0e6c3fd19db95037')
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

</style>