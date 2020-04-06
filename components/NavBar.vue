<template>
  <nav>
    <div class="navUserAuth">
      <nuxt-link to="/" class="logo">Coach Easy</nuxt-link>
      <span class="navSpacer"></span>
      <nuxt-link v-if="loggedIn && role" to="/dashboard" class="navLink">Dashboard</nuxt-link>
    </div>
    <div v-if="!loggedIn" class="navUserAuth">
      <nuxt-link to="/login" class="navLink">Log In</nuxt-link>
      <nuxt-link to="/signUp" class="navLink">Sign Up</nuxt-link>
    </div>
    <div v-if="loggedIn" class="navUserAuth">
      <v-menu v-model="showMenu" absolute offset-y style="max-width: 40px">
        <template v-slot:activator="{ on }">
          <span class="navIcon" v-on="on"><MdPersonIcon w="40px" h="40px"/></span>    
        </template>

        <v-list dark>
          <v-list-item>
            <nuxt-link class="navLink" to="/profile">View Profile</nuxt-link>
          </v-list-item>
         <v-list-item>
          <span class="navLink" @click="logOut()">Log Out</span>
         </v-list-item>
        </v-list>
      </v-menu>
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
  data: () => ({
    showMenu: false,
    items: [
      { title: 'View Profile', icon: 'mdi-account', action: 'logOut' },
      { title: 'Log Out', icon: 'mdi-flag', action: 'logOut()' },
    ]
  }),
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
    },
  },
}
</script>

<style lang="scss">
  .ion__svg{
    padding-top: 7px;
    path{
      fill: white;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 16px;
    background: #191919;
    a{
      text-decoration: none;
    }
    .logo{
      font-size: 28px;
      font-weight: 700;
    }
    .navLink{
      font-size: 18px;
      color: #f5f5f5;
      padding-left: 8px;
      cursor: pointer;
    }
    .navUserAuth{
      display: flex;
      align-items: center;
    }
    .navSpacer{
      width: 16px;
    }
  }
</style>
