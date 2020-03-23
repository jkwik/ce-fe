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
import ButtonSubmit from '~/components/ButtonSubmit'
import FormLogin from '~/components/FormLogin'

export default {
  components: {
    ButtonSubmit,
    FormLogin
  }
}
</script>
