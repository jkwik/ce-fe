<template>
<div>
    <v-text-field
      label="Old Password"
      v-model="oldPassword"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"
      outlined
    ></v-text-field>
    <v-text-field
      label="New Password"
      v-model="newPassword"
      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show2 ? 'text' : 'password'"
      @click:append="show2 = !show2"
      outlined
    ></v-text-field>
    <v-text-field
      label="Confirm Password"
      v-model="confirmPassword"
      :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show3 ? 'text' : 'password'"
      @click:append="show3 = !show3"
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

import MessageButton from '~/components/MessageButton'

export default {
  components:{
    MessageButton
  },
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      error: false,
      show1: false,
      show2: false,
      show3: false
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
          window.location.href = '/profile'
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