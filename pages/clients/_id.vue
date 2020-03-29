<template>
  <div class="pageContent">
    <div v-if="currentClient">
      <h1>{{currentClient.first_name}}</h1>
      <span
        v-if="currentClient.approved"
        class="subHeading">
        Approved
      </span>
      <span 
        v-if="currentClient.approved==false"
        class="subHeading">
        Potential
      </span>
      <span
        v-if="currentClient.approved==null"
        class="subHeading">
        Terminated
      </span>
      <span class="subHeading"> Client</span>
      <h3>Name</h3>
      <p>{{currentClient.first_name}} {{currentClient.last_name}}</p>
      <h3>Email</h3>
      <p>{{currentClient.email}}</p>
    </div>
    <div v-if="error">
      Cannot Find Client
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      error: false
    }
  },
  computed:{
    currentClient () {
      if(this.$store.state.currentClient.id == this.$route.params.id){
        this.error = false;
        this.$store.commit('loaded')
        return this.$store.state.currentClient;
      } else{
        console.log('here')
        this.$store.dispatch('getCurrentClient', this.$route.params.id)
      }
    },
  },
}
</script>
