<template>
  <div>
  <div class="pageContent">
    <h1 class="userHeading">Forgot Password</h1>
    <p>Enter your email for your account</p>
    <FormForgotPassword />
    <ButtonSubmit
      message = "Continue"
      type = "continue"
    />
  </div>
  </div>
</template>

<script>
import ButtonSubmit from '~/components/ButtonSubmit'
import FormForgotPassword from '~/components/FormForgotPassword.vue'

export default {
  components: {
    ButtonSubmit,
    FormForgotPassword
  }
}
</script>

<style>

</style>
