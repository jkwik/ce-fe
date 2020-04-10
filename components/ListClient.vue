<template>
    <v-card class="listClientCard" @click.self="viewClient(client)">
      <div>{{client.first_name}} {{client.last_name}}</div>
      <div>
        <button 
          v-if="approve.includes(clientType)"
          @click="changeClient(client, 'approveClient')"
          class="primaryLightBackground actionBtn">
          Approve
        </button>
        <button 
          v-if="remove.includes(clientType)"
          @click.stop="deleteClient(client)"
          class="errorBackground actionBtn">
          Delete
        </button>
        <button 
          v-if="terminate.includes(clientType)"
          @click="changeClient(client, 'terminateClient')"
          class="errorBackground actionBtn">
          Terminate
        </button>
      </div>
    </v-card>
</template>

<script>
import axios from 'axios'
const url = 'https://coach-easy-deploy.herokuapp.com';
axios.defaults.withCredentials = true;
export default {
  props:{
    client: Object,
    clientType: String
  },
  data() {
    return {
      approve: ['unapprovedClients','pastClients'],
      remove: ['unapprovedClients','pastClients'],
      terminate: ['approvedClients'],
    }
  },
  methods: {
    viewClient: function(client){
      const newPath = `/${this.$router.currentRoute.name}/${client.id}`;
      console.log(newPath)
      this.$router.push({ path: newPath })
      // :to=
    },
    updateClientList: function(){
      let self = this;
      axios.get(`${url}/clientList`).then(result => {
        self.clientList = result.data
        // self.loading = false;
        // self.error = false;
      }).catch(error => {
        // self.error = true;
        // self.errorMessage = error;
      });
    },
    changeClient: function(data, endpoint){
      var self = this;
      axios.put(url+`/${endpoint}`, {
        id: data.id
      })
      .then(function (response) {
        self.updateClientList()
        // self.error = false;
        // self.errorMessage = `Update client list failed`;
      })
      .catch(function (error) {
        // self.error = true;
        // self.errorMessage = `${endpoint} failed: ${data.first_name} ${data.last_name}`;
      });
    },
    deleteClient: function(data){
      var self = this;
      axios.delete(url+`/user?id=${data.id}`)
      .then(function (response) {
        self.updateClientList()
        // self.error = false;
      })
      .catch(function (error) {
        // self.error = true;
        // self.errorMessage = `Delete failed: ${data.first_name} ${data.last_name}`;
      });
    },
  },
}
</script>

<style lang="scss">
  .listClientCard{
    width: 100%;
    background: $background-secondary !important;
    padding: 8px 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>