<template>
<ul class="dashboard-info">
    <li class="dashboard-info__item currency" v-for="value in cryptoBTC" :key="value.cryptoBTC">
        <span>{{value.name}}</span>
        <span>{{value.price.toFixed(2)}} $</span>
    </li>
    <li class="dashboard-info__item currency" v-for="value in cryptoETH" :key="value.cryptoETH">
        <span>{{value.name}}</span>
        <span>{{value.price.toFixed(2)}} $</span>
    </li>
</ul>
</template>
<script lang="ts">
    import axios from 'axios'
    export default {
        name: 'Crypto',
        data() {
            return {
                cryptoETH: [],
                cryptoBTC: [],
                errors: []  
            }
        },
        created() {
            axios.get('https://financialmodelingprep.com/api/v3/quote/BTCUSD?apikey=24c2ec7896a036bf0e6c3fd19db95037')
                .then(responce => {
                    this.cryptoBTC = responce.data
                    console.log(responce)
                })
                .catch(e => {
                    this.errors.push(e)
                }),
            axios.get('https://financialmodelingprep.com/api/v3/quote/ETHUSD?apikey=24c2ec7896a036bf0e6c3fd19db95037')
                .then(responce => {
                    this.cryptoETH = responce.data
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