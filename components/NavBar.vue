<template>
  <nav>
    <div class="navCol">
      <nuxt-link to="/" class="logo">Coach Easy</nuxt-link>
      <span class="navSpacer"></span>
      <nuxt-link v-if="loggedIn && role" to="/dashboard" class="navLink">Dashboard</nuxt-link>
    </div>
    <div v-if="!loggedIn" class="navCol">
      <nuxt-link to="/login" class="navLink">Log In</nuxt-link>
      <nuxt-link to="/signUp" class="navLink">Sign Up</nuxt-link>
    </div>
    <div v-if="loggedIn" class="navCol">
      <!-- <span class="navIcon"><MdPersonIcon w="40px" h="40px"/></span> -->
      <nuxt-link to="/profile" class="navLink">View Profile</nuxt-link>
      <span class="navLink" @click="logOut()">Log Out</span>

    </div>
  </nav>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
import MdPersonIcon from 'vue-ionicons/dist/md-person.vue'
export default {
  components: {
    MdPersonIcon
  },
  computed: {
    loggedIn: function(){
      return this.$store.state.loggedIn;
    },
    role: function(){
      if(this.$store.state.userData){
        return this.$store.state.userData.role;
      }
      return 'none'
    }
  },
  methods: {
    logOut: function() {
      var self = this
      axios.get(`${url}/auth/logout`)
      .then(function (response){
        self.$store.commit('logOut')
        window.location.href = '/'
      })
      .catch(function (error){
        if(error.response.status===400){
          self.$store.commit('logOut')
          console.log('not logged in');
        } else {
          console.log(error);
        }
      })
    }
  },
}
</script>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 16px;
    background: #191919;
    .navCol{
      display: flex;
      align-items: center;
    }
    .navLink{
      color: #f5f5f5;
      padding-left: 8px;
      cursor: pointer;
    }
    .navSpacer{
      width: 16px;
    }
  }
</style>
