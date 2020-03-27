<template>
  <div class="pageContent">
    <h1>Welcome, {{userData.first_name}}</h1>
    <h3>Name</h3>
    <p>{{userData.first_name}} {{userData.last_name}}</p>
    <h3>Email</h3>
    <p>{{userData.email}}</p>
    <nuxt-link to="/forgotPassword" class="prompt">Change Password?</nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    userData: function(){
      return this.$store.state.userData;
    }
  }
}
</script>
<style>

</style>
