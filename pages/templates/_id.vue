<template>
  <div class="pageContent">
    <HeadingPage v-if="!edit" />
    <ButtonEditStatus v-if="!edit" />
    <ListCoachSessions v-if="!loading && !edit && role==='COACH'" :template="this.template"/>  
    <ListClientSessions v-if="!loading && !edit && role==='CLIENT'" :template="this.template"/>  
    <EditTemplate v-if="edit" :template="this.template" />
  </div>
</template>

<script>
import ListCoachSessions from '~/components/ListCoachSessions'
import ListClientSessions from '~/components/ListClientSessions'
import ButtonEditStatus from '~/components/ButtonEditStatus'
import EditTemplate from '~/components/EditTemplate'
import HeadingPage from '~/components/HeadingPage'

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

export default {
  components: {
    ListCoachSessions,
    ListClientSessions,
    ButtonEditStatus,
    EditTemplate,
    HeadingPage,
  },
  data() {
    return {
      loading: true,
      error: false,
      errorMessage: '',
      template: {},
      role: '',
    }
  },
  methods: {
    getTemplate: function() {
      const self = this;
      const id = self.$route.params.id;
      self.role = self.$store.state.userData.role;
      let arg = self.role == 'COACH' ? '/coach/template?coach_template_id' : '/client/template?client_template_id';
      axios.get(`${url}${arg}=${id}`).then(result => {
        self.template = result.data;
        self.loading = false;
        self.error = false;
      }).catch(error => {
        self.error = true;
        self.errorMessage = error;
        self.loading = false;
      });
    }
  },
  mounted() {
    this.getTemplate();
  },
  computed: {
    edit: function() {
      return this.$store.state.edit;
    }
  },

}
</script>

<style>

</style>
