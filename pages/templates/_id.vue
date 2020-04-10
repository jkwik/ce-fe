<template>
  <div class="pageContent">
    <HeadingPage v-if="!edit" />
    <ButtonEditStatus v-if="!edit" />
    <ListSessions v-if="!loading && !edit" :template="this.template"/>  
    <EditTemplate v-if="edit" :template="this.template" />
  </div>
</template>

<script>
import ListSessions from '~/components/ListSessions'
import ButtonEditStatus from '~/components/ButtonEditStatus'
import EditTemplate from '~/components/EditTemplate'
import HeadingPage from '~/components/HeadingPage'

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

export default {
  components: {
    ListSessions,
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
    }
  },
  methods: {
    getTemplate: function() {
      const self = this;
      const id= this.$route.params.id;
      axios.get(`${url}/coach/template?coach_template_id=${id}`).then(result => {
        this.template = result.data;
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
