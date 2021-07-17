<template>
<table class="table mb-4">
    <thead>
        <tr>
            <th>Класс акций</th>
            <th>Название фонда</th>
            <th>Управляющая компания</th>
            <th>Стоимость</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="value in funds.slice(0,10)" :key="value.funds">
            <td>{{value.symbol}}</td>
            <td>{{value.name}}</td>
            <td>{{value.exchange}}</td>
            <td>{{value.price}}</td>
        </tr>
    </tbody>
</table>
</template>
<script lang="ts">
    import axios from 'axios'
    export default {
        name: 'Funds',
        data() {
            return {
                funds: [],
                errors: []  
            }
        },
        created() {
            axios.get('https://financialmodelingprep.com/api/v3/etf/list?apikey=24c2ec7896a036bf0e6c3fd19db95037')
                .then(responce => {
                    this.funds = responce.data
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