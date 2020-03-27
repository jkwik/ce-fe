<template>
  <div>
    <v-form class="userForm">
      <v-text-field
        class="userInput"
        label="Email"
        v-model="user.email"
        :rules="emailRules"
        outlined
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="user.password"
        :rules="passwordRules"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        outlined
        required
        @click:append="show = !show"
      ></v-text-field>
    </v-form>
    <button 
      @click='loginSubmit'
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
      user: {
        email: '',
        password: '',
      },
      show: false,
      emailRules: [
        v => !!v || 'Email is required',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
  }),
  methods:{
    loginSubmit: function() {
      this.$store.commit('setUserData', this.result.user)
      this.$store.commit('logIn')
      window.location.href = '/'
    },
  },
  beforeUpdate() {
    this.$store.commit('setFormData', this.user)
  },
}
</script>
