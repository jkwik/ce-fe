<template>
  <div>
    <v-form class="userForm">
      <v-text-field
        class="userInput"
        label="Email"
        v-model="email"
        :rules="emailRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        :rules="passwordRules"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        outlined
        required
        @click:append="show = !show"
      ></v-text-field>
      <MessagePrompt link='/forgotPassword' m='Forgot password?' />
    </v-form>
    <button 
      @click='loginSubmit'
      class="submitBtn"
    >
      <MessageButton m='Log In'/>
    </button>
    <MessageRedirect link="/signup" m="Sign Up" />
    <MessageError :errorText="errorText" v-if="errorText !== ''"/> 
  </div>
</template>

<script>
import MessageButton from '~/components/MessageButton'
import MessageError from '~/components/MessageError'
import MessagePrompt from '~/components/MessagePrompt'
import MessageRedirect from '~/components/MessageRedirect'
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
export default {
  components: {
    MessageButton,
    MessageError,
    MessagePrompt,
    MessageRedirect
  },
  data: () => ({
      email: '',
      password: '',
      show: false,
      emailRules: [
        v => !!v || 'Email is required',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      errorText: '',
  }),
  methods:{
    async loginSubmit () {
      try {
        var self = this;
        axios.post(`${url}/auth/login`, {
            email: self.email,
            password: self.password
          })
          .then(function (response){
            console.log(response)
            self.$store.commit('setUserData', response.data.user)
            self.$store.commit('logIn')
            self.errorText = ''
            window.location.href = '/dashboard'
          })
          .catch(function (error){ 
            // on login promise failure
            console.log(error);
            self.errorText = error.response.data.error
          })
      } catch (error){
        console.log(error)
      }
    },
    viewSignup() {
      window.location.href = '/signUp'
    }
  },
}
</script>
