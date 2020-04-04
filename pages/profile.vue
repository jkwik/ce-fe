<template>
  <div class="pageContent">
    <div class="profileHeading">
      <h1>Welcome, {{userData.first_name}}</h1>
      <div
        @click="edit=!edit"
      >
        <p class="actionBtn">Edit &#9998;</p>
      </div>
    </div>
    <SpacerSmall />
    <ProfileUser 
      v-if="!edit"
      :userData="this.userData"
    />
    <EditProfile
      v-if="edit"
    />
    <SpacerSmall />
    <nuxt-link to="/changePassword" class="prompt">Change Password?</nuxt-link>
  </div>
</template>

<script>
import ProfileUser from '~/components/ProfileUser'
import EditProfile from '~/components/EditProfile'
import SpacerSmall from '~/components/SpacerSmall'
export default {
  components: {
    ProfileUser,
    EditProfile,
    SpacerSmall
  },
  data() {
    return {
      edit: false,
    }
  },
  mounted() {
    console.log(this.$store.state.userData)
  },
  computed: {
    userData: function(){
      return this.$store.state.userData;
    }
  }
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
