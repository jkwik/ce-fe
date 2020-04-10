<template>
  <div class="fullRow">
    <ListClient 
      v-for="(client, id) in clientList"
      :key="id"
      :ref="`List${id}`"
      :client="client" 
      :clientType='clientType' />
  </div>
</template>

<script>
import ListClient from '~/components/ListClient'
export default {
  props:{
    clientList: Array,
    clientType: String
  },
  components:{
    ListClient
  }
}
</script>

<style>

</style>