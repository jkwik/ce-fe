<template>
  <div class="pageContent">
    <Loading :loading="this.loading" />
    <div v-if="!loading">
      <HeadingProfile :name="this.user.first_name"/>
      <SpacerSmall />
      <ProfileUser 
        v-if="!error 
          && !edit" 
        :user="this.user" 
        :coach="this.user.role==='COACH'" />
      <FormEditProfile
        v-if="edit"
        :u="this.user" />
      <SpacerSmall />
      <nuxt-link to="/changePassword" class="prompt">Change Password?</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';


import HeadingProfile from '~/components/HeadingProfile'
import ProfileUser from '~/components/ProfileUser'
import FormEditProfile from '~/components/FormEditProfile'
import SpacerSmall from '~/components/SpacerSmall'
import Loading from '~/components/Loading'
export default {
  components: {
    HeadingProfile,
    ProfileUser,
    FormEditProfile,
    SpacerSmall,
    Loading
  },
  data() {
    return {
      user: {},
      error: false,
      loading: true,
      loadingFailed: false,
      myId: null,
    }
  },
  methods: {
    getUser: function(){
      Promise.all([ this.$store.state.userData ]).then( () => {
        this.user = this.$store.state.userData
        this.loading = false
      },() => {
        this.loadingFailed = true
      })
    }
  },
  computed: {
    edit: function() {
      return this.$store.state.edit;
    }
  },
  created() {
    this.getUser();
  },
}
</script>

<style lang="scss">
  .profileHeading{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
