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
      <nuxt-link to="/forgotPassword" class="prompt">Forgot password?</nuxt-link>
    </v-form>
    <button 
      @click='loginSubmit'
      class="submitBtn"
    >
      <MessageButton m='Log In'/>
    </button>
    <button 
      @click='viewSignup'
      class="submitBtn"
    >
      <MessageButton m='Sign Up'/>
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
      email: '',
      password: '',
      show: false,
      emailRules: [
        v => !!v || 'Email is required',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
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
            self.$store.commit('setUserData', response.user)
            self.$store.commit('logIn')
            window.location.href = '/dashboard'
          })
          .catch(function (error){
            console.log(error);
          })
      } catch (e){
        console.log(e)
      }
    },
    viewSignup() {
      window.location.href = '/signUp'
    }
  },
}
</script>
