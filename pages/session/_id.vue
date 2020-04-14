<template>
  <div class="pageContent" >
    <Loading v-if="loading" :loading="this.loading"/>
    <MessageError v-if="error" :message="errorMessage" />
    <div v-if="!loading && !edit">
      <HeadingPage @sendRequest="setEdit()" status="Edit" :name="session.name"/>
      <SpacerSmall />
      <ListItem 
        v-for="(exercise) in this.session.coach_exercises"
        :key="exercise.id"
        type="exercise"
        :items="exercise"/>
    </div>
    <div v-if="!loading && edit">
      <HeadingPage @sendRequest="saveRequest()" status="Save" :name="session.name"/>
      <SpacerSmall />
      <FormEditTemplate 
        :templateList="this.session"
      />
    </div>
  </div> 
</template>

<script>
// We need an axios request that gets session data
// Then we pass that session data to the session components

// Or we need to get session data from the template level
// And pass that data to the session

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

import HeadingPage from '~/components/HeadingPage'
import Loading from '~/components/Loading'
import MessageError from '~/components/MessageError'
import SpacerSmall from '~/components/SpacerSmall'
import ListItem from '~/components/ListItem'
import FormEditTemplate from '~/components/FormEditTemplate'

export default {
  components: {
    HeadingPage,
    Loading,
    MessageError,
    SpacerSmall,
    ListItem,
    FormEditTemplate
  },
  data: () => ({
    loading: true,
    error: false,
    errorMessage: '',
    session: {},
    user: {},
    edit: false,
  }),
  methods: {
    saveRequest: function(){
      this.setEdit();
    },
    setEdit: function(){
      console.log(this.edit)
      this.edit = !this.edit
    },
    getUserSession: function(){
      Promise.all([ this.$store.state.userData ]).then( () => {
        this.user = this.$store.state.userData
        this.loading = false
        this.updateSession();
      },() => {
      })
    },
    updateSession: function() {
        let self = this;
        let route = this.$route.params.id
        let arg = self.user.role == 'COACH' ? `/coach/session?coach_session_id=${route}` : `/client/session?user_template_id=${route}`;
        axios.get(`${url}${arg}`).then(result => {
          self.session = result.data;
          self.loading = false;
          self.error = false;
        }).catch(error => {
          self.error = true;
          self.loading = false;
        }); 
    },
  },
  mounted() {
    this.getUserSession();
  }
}
</script>

<style lang="scss">
</style>