<template>
  <div class="pageContent">
    <h1 class="userHeading">Sign Up</h1>
    <FormSignup></FormSignup>
    <ButtonSubmit
      message = "Log In"
      type = "signup"
    />
  </div>
</template>

<script>
import ButtonSubmit from '~/components/ButtonSubmit'
import FormSignup from '~/components/FormSignup'

export default {
  components: {
    ButtonSubmit,
    FormSignup
  }
}
</script>

<style>

</style>
