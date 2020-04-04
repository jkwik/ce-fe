<template>
  <div class="pageContent">
    <HeadingUserAuth message="Change Password" />
    <SpacerSmall />
    <FormChangePassword />
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
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
