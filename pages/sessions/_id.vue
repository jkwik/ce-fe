<template>
  <v-form class="pageContent">
    <div v-show="edit">
      <FormEditSession/>
      <ButtonViewStatus/>
    </div>
    <div v-show="!edit">
      <ViewSession/>
      <ButtonEditStatus/>
    </div>
  </v-form>
</template>

<script>
// We need an axios request that gets session data
// Then we pass that session data to the session components

// Or we need to get session data from the template level
// And pass that data to the session

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

import ButtonEditStatus from '~/components/ButtonEditStatus'
import ButtonViewStatus from '~/components/ButtonViewStatus'
import FormEditSession from '~/components/FormEditSession'
import ViewSession from '~/components/ViewSession'

export default {
  components: {
    ButtonEditStatus,
    ButtonViewStatus,
    FormEditSession,
    ViewSession
  },
  data: () => ({
  }),
  computed: {
    edit: function() {
      return this.$store.state.edit;
    }
  },
}
</script>

<style lang="scss">
</style>