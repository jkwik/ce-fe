<template>
  <v-card>
    <ViewSession/>
  </v-card>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
import ViewSession from '~/components/ViewSession'

export default {
  components: {
    ViewSession
  }
}
</script>

<style>

</style>
