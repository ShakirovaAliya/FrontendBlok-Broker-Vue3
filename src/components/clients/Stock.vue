<template>
<div class="box-stock">
    <div class="box-stock__item currency" v-for="(value) in stock" :key="value.stock">
        <div  class="box-stock__title">
            <div class="box-stock__image">
                <img  :src="value.image" :alt="value.companyName">
            </div>
            <h3> 
                {{value.companyName}}  <span>{{value.symbol}}</span>
            </h3>
        </div>
          <span class="box-stock__price">{{value.price.toFixed(2)}} $</span>
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
            axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL,NVDA,AMD,TSLA,INTC,MSFT,AMZN,FB,JPM,JNJ,GOOG,GOOGL,XOM,BAC,WFC,KO,NFLX,MDT,BMY,UTX,AVGO,PYPL,QCOM,NKE,COST,PNC,NEE,AXP,AMT?apikey=24c2ec7896a036bf0e6c3fd19db95037')
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
.box-stock { 
    @apply grid grid-cols-4 gap-4 mb-6;
}

.box-stock__item { 
    @apply bg-white rounded-md flex-1 px-8 py-4 flex items-center justify-between;
}

.box-stock__title { 
    @apply flex items-center w-8/12;
}

.box-stock__title h3 { 
    @apply truncate;
}

.box-stock__title span { 
    @apply block text-gray-400 text-sm;
}

.box-stock__image {
  @apply overflow-hidden mr-4 h-8 w-8 min-w-max;
}

.box-stock__image img {
  @apply h-8 w-8 object-contain;
}

.box-stock__price {
  @apply w-4/12 text-right;
}



</style>