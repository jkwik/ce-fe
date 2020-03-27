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
      <MessageButton v-if="message" m='Continue'/>
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
    forgotPassword: function() {
      console.log('forgotPassword')
      window.location.href = '/'
    },
  },
}
</script>
