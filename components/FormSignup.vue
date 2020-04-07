<template>
  <div>
    <v-form class="userForm">
      <v-text-field
        class="userInput"
        label="First name"
        v-model="firstName"
        :rules="firstNameRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        class="userInput"
        label="Last name"
        v-model="lastName"
        :rules="lastNameRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        class="userInput"
        label="Email"
        v-model="email"
        :rules="emailRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        class="userInput"
        label="Password"
        v-model="password"
        :rules="passwordRules"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        outlined
        required
        @click:append="show = !show"
      ></v-text-field>
    </v-form>
    <button 
      @click='signUp'
      class="submitBtn"
    >
      <MessageButton m='Sign Up'/>
    </button>
    <MessageRedirect link="/login" m="Log in" />
    <MessageError :error="error" :message="errorMessage" />
  </div>
</template>

<script>
import MessageButton from '~/components/MessageButton'
import MessageError from '~/components/MessageError'
import MessageRedirect from '~/components/MessageRedirect'
import axios from 'axios';
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
export default {
  components: {
    MessageButton,
    MessageError,
    MessageRedirect
  },
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    show: false,
    firstNameRules: [
      v => !!v || 'First name is required',
    ],
    lastNameRules: [
      v => !!v || 'Last name is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
    ],
    passwordRules: [
      v => !!v || 'password is required',
    ],
    errorMessage: '',
    error: false,
  }),
  methods:{
    async signUp() {
      try {
          var self = this;
          self.error = false 
          self.errorMessage = ''
          axios.post(`${url}/signUp`, {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            role: "CLIENT"
          })
          .then(function (response) {
            console.log(response)
            axios.post(`${url}/auth/login`, {
              email: self.email,
              password: self.password
            })
            .then(function (response){
              console.log(response)
              self.$store.commit('setUserData', response.data.user)
              self.$store.commit('logIn')
              window.location.href = '/dashboard'
            })
            .catch(function (error){
              //if the login request fails
              console.log(error);
              self.error = true
              self.errorMessage = error.response.data.error
            })
          })
          .catch(function (error) {
            //if the signup request fails
            console.log(error);              
            self.error = true
            self.errorMessage = error.response.data.error
          }); 
        } catch (error) {
          //if the try fails
          console.log(error)
          self.error = true
          self.errorMessage = 'Something unexpected happened'
        }
    },
  }
}
</script>
