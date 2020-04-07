<template>
  <div class="pageContent">
    <HeadingUserAuth message="Change Password" />
    <SpacerSmall />
    <FormChangePassword />
  </div>
</template>

<script>
import HeadingUserAuth from '~/components/HeadingUserAuth'
import SpacerSmall from '~/components/SpacerSmall'
import FormChangePassword from '~/components/FormChangePassword'
export default {
  components:{
    HeadingUserAuth,
    SpacerSmall,
    FormChangePassword
  },
  
}
</script>
