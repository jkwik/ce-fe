<template>
  <div>
    <MessageError :error="error" :message="errorMessage" />
    <v-form class="userForm">
      <v-text-field
        class="userInput"
        label="Email"
        v-model="email"
        :rules="emailRules"
        outlined
        required
      ></v-text-field>
    </v-form>
    <button 
      @click='forgotPassword'
      class="submitBtn"
    >
      <MessageButton message='Continue'/>
    </button>
  </div>
</template>

<script>
import MessageButton from '~/components/MessageButton'
import MessageError from '~/components/MessageError'
import axios from 'axios'
axios.defaults.withCredentials = true;
export default {
  components: {
    MessageButton,
    MessageError
  },
  data: () => ({
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
    ],
    errorMessage: "Failed to Submit Form",
    error: false,
  }),
  methods:{
    async forgotPassword() {
      try{
        var self = this;
        self.error = false
        await this.$axios.get(`https://coach-easy-deploy.herokuapp.com/forgotPassword?email=${this.email}`)
        .then(function (response){
          console.log(response)
          window.location.href = '/'
        })
        .catch(function (error){
          //if the forget password request fails
          self.error = true
        })
      } catch (error) {
        error = true
      }
    },
  },
}
</script>
