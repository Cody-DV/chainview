<template>
  <v-container>
    <!-- <button @click="fetchData()">Get Data</button> -->
    <v-card v-for="(pool, index) in pools" :key="index">
      <v-card-title>
        {{ pool.token0.symbol }} / {{ pool.token1.symbol }}
      </v-card-title>
      <v-card-subtitle>Pool ID: {{ pool.id }}</v-card-subtitle>
      <v-card-text>

        <!-- Token 0 -->
        <h4>{{ pool.token0.name }}</h4>
        <ul>
          <li>Price: {{ pool.token0Price }}</li>
          <li>Volume USD: {{ pool.token0.volumeUSD }}</li>
          <li>ID: {{ pool.token0.id }}</li>
        </ul>

        <!-- Token 1 -->
        <h4>{{ pool.token1.name }}</h4>
        <ul>
          <li>Price: {{ pool.token1Price }}</li>
          <li>Volume USD: {{ pool.token1.volumeUSD }}</li>
          <li>ID: {{ pool.token1.id }}</li>
        </ul>

      </v-card-text>
    </v-card>
  </v-container>
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
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let queryString = {
        query: `
          {
            pools (
              orderBy:totalValueLockedETH, 
              orderDirection:desc,
              first: 10
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
                volumeUSD
              }
              token1 {
                id
                symbol
                name
                decimals
                volumeUSD
              }
            }
          }
        `,
      };

      let url =
        "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-subgraph";
      let headers = {};

      const returnedData = await axios.post(url, queryString, {
        headers: headers,
      });
      this.pools = returnedData.data.data.pools;
    },
  },
};
</script>

<style scoped>
.v-card {
  margin: 3%;
}
</style>