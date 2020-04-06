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
    </v-form>
    <button 
      @click='forgotPassword'
      class="submitBtn"
    >
      <MessageButton m='Continue'/>
    </button>
    <MessageError :errorText="errorText" v-if="errorText !== ''"/>
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
    errorText: '',
  }),
  methods:{
    async forgotPassword() {
      try{
        var self = this;
        await this.$axios.get(`https://coach-easy-deploy.herokuapp.com/forgotPassword?email=${this.email}`)
        .then(function (response){
          console.log(response)
          window.location.href = '/'
        })
        .catch(function (error){
          //if the forget password request fails
          self.errorText = error.response.data.error
          console.log(error);
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
