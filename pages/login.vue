<template>
  <div class="pageContent">
    <h1 class="userHeading">Log In</h1>
    <FormLogin />
    <ButtonSubmit
      message = "Log In"
      type = "login"
    />
  </div>
</template>

<script>
import FormLogin from '~/components/FormLogin'
import ButtonSubmit from '~/components/ButtonSubmit'

export default {
  components: {
    FormLogin,
    ButtonSubmit
  }
}
</script>
