<template>
<div>
  <div class="pageContent" v-if="myClientList">
    <div
      v-for="(client, i) in myClientList"
      :key="i">
      <h2 class="clientListHeader">{{getHeader(i)}}</h2>
      
      <v-row
        v-for="c in client"
        :key="c.id"
      >
        <v-card class="clientListCard">
          <div>{{c.first_name}} {{c.last_name}}</div>
          <div>
            <button
              class="primaryBackground actionBtn"
              @click="setCurrentClient(c)">
              View
            </button>
            <button 
              v-if="i==='unapprovedClients' 
              || i==='pastClients'"
              @click="approveClient(c)"
              class="successBackground actionBtn">
              Approve
            </button>
            <button 
              v-if="i==='unapprovedClients' 
              || i==='pastClients'"
              @click="deleteClient(c)"
              class="errorBackground actionBtn">
              Delete
            </button>
            <button 
              v-if="i=='approvedClients'"
              @click="terminateClient(c)"
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
import axios from 'axios'
const url = 'http://coach-easy-deploy.herokuapp.com';
axios.defaults.withCredentials = true;

export default {
  methods: {
    setCurrentClient: function(data){
      this.$store.commit('isLoading')
      console.log(data.id)
      this.$store.commit('setCurrentClient', data);
      window.location.href = `/clients/${data.id}`
    },
    getHeader: function (header) {
      let slicePoint = header.indexOf("Clients");
      let str = header.slice(0, slicePoint);
      return str.charAt(0).toUpperCase() + str.slice(1) + " Clients";
    },
    approveClient: function(data){
      var self = this;
      axios.put(url+`/approveClient`, {
        id: data.id
      })
      .then(function (response) {
        console.log(response);
        self.$store.dispatch("getClientList");
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    terminateClient: function(data){
      var self = this;
      axios.put(url+`/terminateClient`, {
        id: data.id
      })
      .then(function (response) {
        console.log(response);
        self.$store.dispatch("getClientList");
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    deleteClient: function(data){
      var self = this;
      axios.delete(url+`/user?id=${data.id}`)
      .then(function (response) {
        console.log(response);
        self.$store.dispatch("getClientList");
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted() {
    this.$store.dispatch("getClientList");
  },
  computed: {
    myClientList: function(){
      return this.$store.state.clientList;
      //  this.$store.state.clientList;
    }
  }
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