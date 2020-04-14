<template>
  <div class="fullRow">
    <ListClient 
      v-for="(client, id) in clientList"
      :key="id"
      :ref="`List${id}`"
      :client="client" 
      :clientType='clientType' 
      @setUpdate="shouldUpdate()"/>
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
  },
  methods: {
    shouldUpdate: function() {
      this.$emit('shouldUpdate');
    },
    sortList: function() {
      this.clientList.sort((a, b) => (a.first_name > b.first_name) ? 1 :
      (a.first_name == b.first_name) ? ((a.last_name > b.last_name) ? 1: -1) : -1);
    }
  },
  mounted() {
    this.sortList();
  }
}
</script>

<style>

</style>