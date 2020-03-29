<template>
  <div>
    <v-form class="userForm">
      <v-text-field
        class="userInput"
        label="First name"
        v-model="signUpInfo.firstName"
        :rules="firstNameRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        class="userInput"
        label="Last name"
        v-model="signUpInfo.lastName"
        :rules="lastNameRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        class="userInput"
        label="Email"
        v-model="signUpInfo.email"
        :rules="emailRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        class="userInput"
        label="Password"
        v-model="signUpInfo.password"
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
    <button 
      @click='viewLogin'
      class="submitBtn"
    >
      <MessageButton m='Log In'/>
    </button>
  </div>
</template>

<script>
import MessageButton from '~/components/MessageButton'
import axios from 'axios'
axios.defaults.withCredentials = true;
export default {
  components: {
    MessageButton
  },
  data: () => ({
    signUpInfo: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
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
  }),
  methods:{
    async signUp(signupInfo) {
      try {
            await this.$axios.post('https://coach-easy-deploy.herokuapp.com/auth/signUp', signupInfo)

          await this.$auth.loginWith('local', {
            data: signupInfo
          })
          this.$store.commit('setUserData', this.result.user)
          this.$store.commit('logIn')
          window.location.href = '/'
        } catch (error) {
          //Do something if it fails
          console.log(error)
        }
    },
    viewLogin() {
      window.location.href = '/login'
    }
  }
}
</script>

<style>

</style>
