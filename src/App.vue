<template>
  <v-app>
    <v-main>
      <GetRequest/>
    </v-main>
  </v-app>
</template>

<script>
import GetRequest from './components/GetRequest.vue'

export default {
  name: 'App',

  components: {
    GetRequest
  },

  data: () => ({
    //
  }),
}
</script>

<style>
  body {
    margin: 0 !important;
  }
</style>