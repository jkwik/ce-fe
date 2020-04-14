<template>
  <div class="pageContent">
    <HeadingUserAuth message="Forgot Password" />
    <p>Enter your email for your account</p>
    <FormForgotPassword />
  </div>
</template>

<script>
import HeadingUserAuth from '~/components/HeadingUserAuth'
import FormForgotPassword from '~/components/FormForgotPassword'

export default {
  components: {
    HeadingUserAuth,
    FormForgotPassword
  }
}
</script>
