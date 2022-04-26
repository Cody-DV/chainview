<template>
  <button @click="fetchData()">Get Data</button>
  <div v-for="( pool, index ) in pools" :key="index">
    <div class="grid grid-cols-3 grid-flow-cols">
      <div class="card text-center m-3">
        <h5 class="card-header">Pool ID {{ pool.id }}</h5>
        <div class="card-body">
          {{ pool.token0.symbol }} / {{ pool.token1.symbol }}
          <ul>
            <li>Token0 Price: {{ pool.token0Price }}</li>
            <li>Token1 Price: {{ pool.token1Price }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pools: [],
    };
  },
  mounted() {
      console.log("MOUNTED")
      this.fetchData()
  },
  methods: {  
    async fetchData() {
      let queryString = {
        query: `
          {
            pools (
              orderBy:totalValueLockedETH, 
              orderDirection:desc
            ) {
              id
              totalValueLockedETH
              token0Price
              token1Price
              token0 {
                id
                symbol
                name
                decimals
              }
              token1 {
                id
                symbol
                name
                decimals
              }
            }
          }
        `,
      };

      let url =
        "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-subgraph";
      let headers = {};

      const returnedData = await axios.post(url, queryString, { "headers": headers });
      this.pools = returnedData.data.data.pools;

    },
  },
};
</script>