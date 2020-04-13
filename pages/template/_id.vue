<template>
  <div class="pageContent">
    <Loading v-if="loading" />
    <div v-if="!loading && !status">
      <HeadingPage @updateStatus="setStatus()" :name="template.name" message="Edit"/>
      <SpacerSmall />
      <ListSessions 
        v-for="session in this.template.sessions"
        :key="session.id"
        :session="session"/>
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
import HeadingPage from '~/components/HeadingPage'
import SpacerSmall from '~/components/SpacerSmall'
import ListSessions from '~/components/ListSessions'
import ButtonEditStatus from '~/components/ButtonEditStatus'
import FormEditTemplate from '~/components/FormEditTemplate'

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

export default {
  components: {
    Loading,
    HeadingPage,
    SpacerSmall,
    ListSessions,
    ButtonEditStatus,
    FormEditTemplate,
  },
  data() {
    return {
      error: false,
      status: false,
      errorMessage: '',
      template: {},
      role: '',
    }
  },
  computed: {
    loading: function(){
      return !this.template.hasOwnProperty('name')
    }
  },
  methods: {
    setStatus: function(){
      this.status = !this.status;
    },
    getUserTemplateId: function(){
      Promise.all([ this.$store.state.userData ]).then( () => {
        this.user = this.$store.state.userData
        // this.loading = false
        this.updateTemplateListId();
      },() => {
      })
    },
    updateTemplateListId: function() {
      const self = this;
      const id = self.$route.params.id;
      self.role = self.$store.state.userData.role;
      let arg = self.role == 'COACH' ? '/coach/template?coach_template_id' : '/client/template?id';
      axios.get(`${url}${arg}=${id}`).then(result => {
        self.template = result.data;
        self.error = false;
      }).catch(error => {
        self.error = true;
        self.errorMessage = 'Failed to load template';
      });
    }
  },
  mounted() {
    this.getUserTemplateId();
  },

}
</script>

<style>

</style>
