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
      <MessageButton v-if="message" m='Log In'/>
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
  }),
  methods:{
    signUp: function() {
      this.$store.commit('setUserData', this.result.user)
      this.$store.commit('logIn')
      window.location.href = '/'
    },
  },
}
</script>

<style>

</style>
