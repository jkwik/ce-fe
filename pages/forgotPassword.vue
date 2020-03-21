<template>
  <div>
  <div class="pageContent">
    <h1 class="userHeading">Forgot Password</h1>
    <p>Enter your email for your account</p>
    <FormForgotPassword />
  </div>
  </div>
</template>

<script>
import FormForgotPassword from '~/components/FormForgotPassword.vue'

export default {
  components: {
    FormForgotPassword
  }
}
</script>

<style>

</style>
