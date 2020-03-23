<template>
  <div class = "pageContent">
    <h1 class = "userHeading"> Reset Password</h1>
    <FormResetPassword></FormResetPassword>
    <ButtonSubmit
      message = "Continue"
      type = "continue"
    />
  </div>
</template>

<script>
import ButtonSubmit from '~/components/ButtonSubmit'
import FormResetPassword from '~/components/FormResetPassword'

export default {
  components: {
    ButtonSubmit,
    FormResetPassword
  }
}
</script>

<style>

</style>
