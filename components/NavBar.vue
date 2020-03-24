<template>
  <nav>
    <div class="navUserAuth">
      <nuxt-link to="/" class="logo">Coach Easy</nuxt-link>
    </div>
    <div v-if="!loggedIn" class="navUserAuth">
      <nuxt-link to="/login" class="navLink">Log In</nuxt-link>
      <nuxt-link to="/signUp" class="navLink">Sign Up</nuxt-link>
    </div>
    <div v-if="loggedIn" class="navUserAuth">
      <span class="navIcon"><MdPersonIcon w="40px" h="40px"/></span>
      <nuxt-link to="/dashboard" class="navLink">Dashboard</nuxt-link>
      <nuxt-link to="/profile" class="navLink">View Profile</nuxt-link>
      <span class="navLink" @click="logOut()">Log Out</span>

    </div>
  </nav>
</template>

<script>
import MdPersonIcon from 'vue-ionicons/dist/md-person.vue'
export default {
  components: {
    MdPersonIcon
  },
  computed: {
    loggedIn(){
      return this.$store.state.loggedIn;
    },
    role(){
      if(this.$store.state.userData){
        return this.$store.state.userData.role;
      }
      return 'none'
    }
  },
  methods: {
    logOut: function() {
      console.log('logOut')
    }
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
  }
</style>
