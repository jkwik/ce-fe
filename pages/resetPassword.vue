<template>
  <div class="pageContent">
    <HeadingUserAuth message="Reset Password" />
    <FormResetPassword/>
  </div>
</template>

<script>
import HeadingUserAuth from '~/components/HeadingUserAuth'
import FormResetPassword from '~/components/FormResetPassword'

export default {
  components: {
    HeadingUserAuth,
    FormResetPassword
  }
}
</script>

<style>

</style>
