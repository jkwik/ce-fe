<template>
  <div class="pageContent">
    <HeadingUserAuth message="Log In" />
    <FormLogin />
  </div>
</template>

<script>
import HeadingUserAuth from '~/components/HeadingUserAuth'
import FormLogin from '~/components/FormLogin'

export default {
  components: {
    HeadingUserAuth,
    FormLogin,
  }
}
</script>
