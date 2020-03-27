<template>
  <v-app>
    <NavBar />
    <nuxt />
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar'
export default {
  components:{
    NavBar
  },
  beforeUpdate(){
    if(loggedIn && role==='coach'){
      this.$store.commit('setClientList');
    }
  }
}
</script>

<style lang="scss">
  // Vuetify Overwrites
  .v-application p {
    margin-bottom: 0px;
  }
  // Text Styling
  *{
    color: #f5f5f5;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, .logo{
    color: #00C9F2 !important;
    font-family: 'Bodoni', serif !important;
  }
  .prompt{
    color: #00C9F2 !important;
    text-decoration: none;
  }
  // Container Classes
  .pageContent{
    background: #202020;
    padding: 64px 128px 128px 128px;
    min-height: calc(100vh - 60px) !important;
  }
  // User Authentication Classes
  .userForm{
    max-width: 256px;
    margin: 16px 0px;
  }
  .v-label, .v-application .primary--text{
    color: #0093B1 !important;
    background: transparent !important;
  }
  .v-input__slot .error--text{
    color: #ff5252 !important;
  }
  .v-input__slot {
    background: #191919 !important;
  }
  .v-input input{
    color: #f5f5f5 !important;
  }
  .userHeading{
    font-size: 4em;
    font-weight: 700;
  }
  //button
  .submitBtn{
    padding: 8px 48px;
    background: #00C9F2;
    border: 2px solid #191919;
    border-radius: 12px;
  }
</style>
