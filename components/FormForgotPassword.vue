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
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
    ],
  }),
  methods:{
    async forgotPassword() {
      try{
        await this.$axios.get(`https://coach-easy-deploy.herokuapp.com/forgotPassword?email=${this.email}`)
        .then(function (response){
          console.log(response)
        })
        .catch(function (error){
          console.log(error);
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
