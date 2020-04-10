<template>
  <div class="pageContent" >
    <Loading v-if="loading" :loading="this.loading"/>
    <HeadingPage />
    <ListTemplates :templates="this.templateList" />
    <MessageError :error="error" :message="errorMessage" />
  </div> 

</template>

<script>
import HeadingPage from '~/components/HeadingPage'
import Loading from '~/components/Loading'
import ListTemplates from '~/components/ListTemplates'
import MessageError from '~/components/MessageError'

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

export default {
  components: {
    HeadingPage,
    Loading,
    ListTemplates,
    MessageError,
  },
  data() {
    return {
      loading: true,
      error: false,
      errorMessage: '',
      templateList: [],
    }
  },
  methods: {
    updateTemplateList: function() {
        let self = this;
        axios.get(`${url}/coach/templates`).then(result => {
          self.templateList = result.data.result;
          self.loading = false;
          self.error = false;
        }).catch(error => {
          self.error = true;
          self.errorMessage = error;
          self.loading = false;
        }); 
    },
    setNoEdit: function() {
      this.$store.commit('noEdit');
    },
  },
  mounted() {
    this.updateTemplateList();
    this.setNoEdit();
  },
}
</script>

<style lang="scss">

</style>
