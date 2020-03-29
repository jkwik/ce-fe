<template>
  <v-app class="defaultLayout">
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
  .v-application p {
    text-decoration: none !important;
  }
  .row{
    margin: 0 !important;
  }
  // Other Overwrites
  a:-webkit-any-link {
    text-decoration: none !important;
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
  .subHeading{
    color: #79DEF2 !important;
    font-family: 'Bodoni', serif !important;
    font-size: 1.5em;
  }
  .prompt{
    color: #00C9F2 !important;
    text-decoration: none;
  }
  // Container Classes
  .defaultLayout{
    background: #202020;
  }
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
  .actionBtn{
    font-size: 14px;
    text-decoration: none !important;
    padding: 6px 10px;
    background: #00C9F2;
    border: 1px solid #191919;
    border-radius: 4px;
    margin-left: 8px;
    color: #191919 !important;
  }
  .primaryBackground{
    background: #79DEF2 !important;
    color: #191919 !important;
  }
  .errorText{
    color: #F20050 !important;
  }
  .errorBackground{
    background: #F279A1 !important;
    color: #191919 !important;
  }
  .successText{
    color: #79F28D !important;
  }
  .successBackground{
    background: #79F28D !important;
    color: #191919 !important;
  }
  // client list

</style>
