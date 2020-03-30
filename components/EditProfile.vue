<template>
  <div>
    <v-text-field
      label="First Name"
      :placeholder="userData.first_name"
      v-model="firstName"
      outlined
    ></v-text-field>
    <v-text-field
      label="Last Name"
      :placeholder="userData.last_name"
      v-model="lastName"
      outlined
    ></v-text-field>
    <v-text-field
      label="Email"
      :placeholder="userData.email"
      v-model="email"
      outlined
    ></v-text-field>
    <button 
      @click='editProfile'
      class="submitBtn"
    >
      <MessageButton m='Save'/>
    </button>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
import MessageButton from '~/components/MessageButton'
export default {
  components:{
    MessageButton
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    }
  },
  computed: {
    userData: function(){
      return this.$store.state.userData;
    }
  },
  methods: {
    editProfile: function(){
      let fn = this.$store.state.userData.first_name;
      let ln = this.$store.state.userData.last_name;
      let em = this.$store.state.userData.email;
      if(this.firstName!==''){
        fn = this.firstName;
      }
      if(this.lastName!==''){
        ln = this.lastName;
      }
      if(this.email!==''){
        em = this.email;
      }
      console.log(`${fn} ${ln} ${em}`)
      axios.put(`${url}/updateProfile`, {
        email: this.em,
        first_name: this.fn,
        last_name: this.ln
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
}
</script>

<style lang="scss">
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #f5f5f5 !important;
    opacity: .6 !important; /* Firefox */
  }
</style>