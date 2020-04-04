<template>
  <div>
    <v-form class="userForm">
      <v-text-field
        class="userInput"
        label="Password"
        v-model="password"
        :rules="passwordRules"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        outlined
        required
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-text-field
        label="New password"
        v-model="newPassword"
        :rules="newPasswordRules"
        :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showNewPassword ? 'text' : 'password'"
        outlined
        required
        @click:append="showNewPassword = !showNewPassword"
      ></v-text-field>
    </v-form>
    <button 
      @click='resetPassword'
      class="submitBtn"
    >
      <MessageButton m='Continue'/>
    </button>
  </div>
</template>

<script>
import MessageButton from '~/components/MessageButton'
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
export default {
  components: {
    MessageButton
  },
  data: () => ({
    password: '',
    newPassword: '',
    showPassword: false,
    showNewPassword: false,
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    newPasswordRules: [
      v => !!v || 'New password is required',
    ],
  }),
  methods:{
    resetPassword: function() {
      var self = this;
      axios.post(`${url}/resetPassword`, {
        password: self.password,
        reset_token: self.$route.query.reset_token
      })
      .then(function (response){
        window.location.href = '/login'
      })
      .catch(function (error){
        console.log(error);
      })
    },
  },
}
</script>
