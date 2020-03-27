<template>
  <div class="pageContent" v-if="myClientList">
    <div
      v-for="(client, i) in myClientList"
      :key="i">
      <h2 style="display: block;">{{i}}</h2>
      <v-row
        v-for="c in client"
        :key="c.id"
      >
      {{c.first_name}} {{c.last_name}} 
      <button v-if="i==='unapprovedClients' || i==='pastClients'">Approve</button>
      <button v-if="i==='approvedclients'">View</button>
      <button v-if="i=='approvedclients'">Terminate</button>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setCurrentClient: function(el){
      return this.$store.commit('setCurrentClient', el);
    }
  },
  computed: {
    myClientList: function(){
      return this.$store.state.clientList;
    }
  }
}
</script>