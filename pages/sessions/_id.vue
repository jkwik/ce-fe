<template>
  <v-form class="pageContent">
    <div v-if="edit">
      <FormEditSession :session="this.session"/>
      <ButtonViewStatus/>
    </div>
    <div v-if="!edit">
      <ViewSession v-if="!loading" :session="this.session" />
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
    loading: true,
    loadingFailed: false,
    error: false,
    errorMessage: '',
    session: {},
    role: '',
  }),
  methods: {
    getSession: function() {
      const self = this;
      const id = self.$route.params.id;
      let arg = self.role = 'COACH' ? '/coach/session?coach_session_id' : 'client/session?client_session_id';
      axios.get(`${url}${arg}=${id}`).then(result => {
        self.session = result.data;
        self.loading = false;
        self.error = false;
      }).catch(error => {
        self.error = true;
        self.errorMessage = "failed";
        self.loading = false;
      });
    }
  },
  computed: {
    edit: function() {
      return this.$store.state.edit;
    }
  },
  mounted() {
    Promise.all([ this.$store.state.userData ]).then( () => {
        this.role = this.$store.state.userData.role
        this.loading = false
      },() => {
        this.loadingFailed = true
    });
    this.getSession();
  }
}
</script>

<style lang="scss">
</style>