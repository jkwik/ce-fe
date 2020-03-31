<template>
  <div class="pageContent">
    <h1>Change Password</h1>
    <SpacerSmall />
    <v-text-field
      label="Old Password"
      v-model="oldPassword"
      outlined
    ></v-text-field>
    <v-text-field
      label="New Password"
      v-model="newPassword"
      outlined
    ></v-text-field>
    <v-text-field
      label="Confirm Password"
      v-model="confirmPassword"
      outlined
    ></v-text-field>
    <button 
      @click='changePassword'
      class="submitBtn"
    >
      <MessageButton m='Save'/>
    </button>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
import MessageButton from '~/components/MessageButton'
import SpacerSmall from '~/components/SpacerSmall'
export default {
  components:{
    MessageButton,
    SpacerSmall
  },
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      error: false
    }
  },
  computed: {
    userData: function(){
      return this.$store.state.userData;
    }
  },
  methods: {
    changePassword: function(){
      if(this.newPassword === this.confirmPassword && this.newPassword!==''){
        this.error = false;
        let em = this.$store.state.userData.email;
        axios.put(`${url}/updateProfile`, {
          email: em,
          newPassword: this.newPassword,
          oldPassword: this.oldPassword
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        this.error = true;
      }
    }
  },
}
</script>

<style lang="scss">
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #f5f5f5 !important;
    opacity: .6 !important; /* Firefox */
  }
</style>