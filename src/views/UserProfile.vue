<template>
    <div class="user-profile">
        <div class="user-profile-item user-profile-info" v-for="(table, index) in TableData.slice(2,3)" :key="index">
            <h2 class="user-profile__title">{{table.name}}</h2>
            <div class="user-profile__email">
                <span v-bind:class="`px-3 text-xs leading-5 bg-${table.statusColor}-100 text-${table.statusColor}-700 inline-flex rounded-full`">
                    {{table.status}}
                </span>
                <span >{{table.email}}</span>
            </div>
        </div>
        <div class="user-profile-data flex-col">
            <div class="user-profile-item__currency flex align-center">
                <div class="w-1/2 flex-col items-center">
                    <h3 class="title mr-10">Валюты</h3>
                    <Currency/>
                </div>
                <div class="w-1/2 flex-col items-center">
                    <h3 class="title mr-6">Криптовалюты</h3>
                    <Crypto/>
                </div>
     
            </div>
            <div class="user-profile-item__stock">
                <h3 class="title">Акции</h3>
                <Stock/>
            </div>
        
        </div>

    </div>

  
</template>
<script>
import Currency from '../components/profiles/Currency.vue'
import Crypto from '../components/profiles/Crypto.vue'
import Stock from '../components/profiles/Stock.vue'
import { useTableData } from '../interfaces/useTableData'

export default {
    name: 'UserProfile',
    components: { Currency, Crypto, Stock },
    setup() {
        const { TableData } = useTableData();
        return { TableData };
    }

}
</script>

<style>


</style>
