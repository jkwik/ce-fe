<template>
  <div class="pageContent" >
    <Loading v-if="loading" :loading="this.loading"/>
    <div v-if="!loading && !status">
      <HeadingPage @updateStatus="setStatus()" message="Create"/>
      <SpacerSmall />
      <ListTemplates 
        v-for="(template) in this.templateList"
        :key="template.id"
        :template="template"/>
      <MessageError :error="error" :message="errorMessage" />
    </div>
    <div v-if="!loading && status">
      <HeadingPage @updateStatus="setStatus()" message="Done"/>
      <SpacerSmall />
    </div>
  </div> 

</template>

<script>
import Loading from '~/components/Loading'
import HeadingPage from '~/components/HeadingPage'
import SpacerSmall from '~/components/SpacerSmall'
import ListTemplates from '~/components/ListTemplates'
import MessageError from '~/components/MessageError'

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

export default {
  components: {
    HeadingPage,
    Loading,
    SpacerSmall,
    ListTemplates,
    MessageError,
  },
  data() {
    return {
      loading: true,
      error: false,
      status: false,
      errorMessage: '',
      templateList: [],
      user: {},
    }
  },
  methods: {
    setStatus: function(){
      this.status = !this.status;
    },
    getUserTemplate: function(){
      Promise.all([ this.$store.state.userData ]).then( () => {
        this.user = this.$store.state.userData
        this.loading = false
        this.updateTemplateList();
      },() => {
        this.loadingFailed = true
      })
    },
    updateTemplateList: function() {
        console.log('Update')
        let self = this;
        let arg = self.user.role == 'COACH' ? '/coach/templates' : `/client/templates?user_id=${self.user.id}`;
        console.log(`${url}${arg}`)
        axios.get(`${url}${arg}`).then(result => {
          self.templateList = result.data.templates;
          self.loading = false;
          self.error = false;
        }).catch(error => {
          self.error = true;
          self.errorMessage = "Unable to load content.";
          self.loading = false;
        }); 
    },
    setNoEdit: function() {
      this.$store.commit('noEdit');
    },
  },
  mounted() {
    this.getUserTemplate();
    this.setNoEdit();
  },
}
</script>
