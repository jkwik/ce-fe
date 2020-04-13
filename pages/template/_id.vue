<template>
  <div class="pageContent">
    <Loading />
    <div v-if="!loading && !status">
      <HeadingPage @updateStatus="setStatus()" :name="template.name" message="Edit"/>
      <SpacerSmall />
      {{template.sessions[0]}}
      <!-- <ListCoachSessions v-if="!loading  && role==='COACH'" :template="this.template"/>  
      <ListClientSessions v-if="!loading  && role==='CLIENT'" :template="this.template"/>   -->
    </div>
    <div v-if="!loading && status">
      <HeadingPage @updateStatus="setStatus()" :name="template.name" message="Done"/>
      <SpacerSmall />
      <FormEditTemplate :template="this.template" />
    </div>
  </div>
</template>

<script>
import Loading from '~/components/Loading'
import ListCoachSessions from '~/components/ListCoachSessions'
import ListClientSessions from '~/components/ListClientSessions'
import ButtonEditStatus from '~/components/ButtonEditStatus'
import FormEditTemplate from '~/components/FormEditTemplate'
import HeadingPage from '~/components/HeadingPage'

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

export default {
  components: {
    Loading,
    ListCoachSessions,
    ListClientSessions,
    ButtonEditStatus,
    FormEditTemplate,
    HeadingPage,
  },
  data() {
    return {
      loading: true,
      error: false,
      status: false,
      errorMessage: '',
      template: {},
      role: '',
    }
  },
  methods: {
    setStatus: function(){
      this.status = !this.status;
    },
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
