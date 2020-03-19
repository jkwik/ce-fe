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
  }
}
</script>

<style lang="scss">
  // Text Styling
  *{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, .logo, .v-label--active{
    font-family: 'Bodoni', serif !important;
  }
  // Container Classes
  .pageContent{
    padding: 64px 128px 128px 128px;
  }
  // User Authentication Classes
  .userForm{
    max-width: 256px;
    margin: 16px 0px;
  }
  .userHeading{
    font-size: 4em;
    font-weight: 700;
  }
</style>
