<template>
<div class="pageContent" >
  <Loading v-if="loading" :loading="this.loading"/>
  <MessageError v-if="error" :error="this.error" :message="errorMessage"/>
  <div v-if="!loading && !error">
    <div
      v-for="(client, i) in clientList"
      :key="i">
      <h2 class="clientListHeader">{{getHeader(i)}}</h2>
      
      <v-row
        v-for="(c, id) in client"
        :key="id"
      >
        <v-card class="clientListCard">
          <div>{{c.first_name}} {{c.last_name}}</div>
          <div>
            <nuxt-link
              class="primaryBackground actionBtn"
              :to="`/${$router.currentRoute.name}/${c.id}`">
              View
            </nuxt-link>
            <button 
              v-if="approve.includes(i)"
              @click="changeClient(c, 'approveClient')"
              class="successBackground actionBtn">
              Approve
            </button>
            <button 
              v-if="remove.includes(i)"
              @click="deleteClient(c)"
              class="errorBackground actionBtn">
              Delete
            </button>
            <button 
              v-if="terminate.includes(i)"
              @click="changeClient(c, 'terminateClient')"
              class="errorBackground actionBtn">
              Terminate
            </button>
          </div>
        </v-card>
      </v-row>
    </div>
  </div>
</div>
</template>

<script>
import Loading from '~/components/Loading'
import MessageError from '~/components/MessageError'

import axios from 'axios'
const url = 'https://coach-easy-deploy.herokuapp.com';
axios.defaults.withCredentials = true;

export default {
  components: {
    Loading,
    MessageError
  },
  data() {
    return {
      loading: true,
      error: false,
      errorMessage: '',
      clientList: {},
      approve: ['unapprovedClients','pastClients'],
      remove: ['unapprovedClients','pastClients'],
      terminate: ['approvedClients'],
    }
  },
  methods: {
    getHeader: function (header) {
      let slicePoint = header.indexOf("Clients");
      let str = header.slice(0, slicePoint);
      return str.charAt(0).toUpperCase() + str.slice(1) + " Clients";
    },
    updateClientList: function(){
      let self = this;
      axios.get(`${url}/clientList`).then(result => {
        self.clientList = result.data
        self.loading = false;
        self.error = false;
      }).catch(error => {
        self.error = true;
        self.errorMessage = error;
      });
    },
    changeClient: function(data, endpoint){
      var self = this;
      axios.put(url+`/${endpoint}`, {
        id: data.id
      })
      .then(function (response) {
        self.updateClientList()
        self.error = false;
        self.errorMessage = `Update client list failed`;
      })
      .catch(function (error) {
        self.error = true;
        self.errorMessage = `${endpoint} failed: ${data.first_name} ${data.last_name}`;
      });
    },
    deleteClient: function(data){
      var self = this;
      axios.delete(url+`/user?id=${data.id}`)
      .then(function (response) {
        self.updateClientList()
        self.error = false;
      })
      .catch(function (error) {
        self.error = true;
        self.errorMessage = `Delete failed: ${data.first_name} ${data.last_name}`;
      });
    },
    viewClient: function(data){
      window.location.href = `/${this.$router.currentRoute.name}/${data.id}`;
    }
  },
  mounted() {
    this.updateClientList();
  },
}
</script>

<style lang="scss">
  .clientListHeader{
    margin-bottom: 16px;
  }
  .clientListCard{
    width: 100%;
    background: #353535 !important;
    padding: 8px 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>