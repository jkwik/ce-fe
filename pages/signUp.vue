<template>
  <div class="pageContent">
    <HeadingUserAuth message="Sign Up" />
    <FormSignup/>
  </div>
</template>

<script>
import HeadingUserAuth from '~/components/HeadingUserAuth'
import FormSignup from '~/components/FormSignup'

export default {
  components: {
    HeadingUserAuth,
    FormSignup
  }
}
</script>
