<template>
  <div>
    <p v-if="msg" class="successText">Updated Profile</p>
    <SpacerSmall v-if="msg" />
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
    <MessageError :errorText="errorText" v-if="errorText !== ''"/> 
  </div>
</template>

<script>
import axios from 'axios'
import MessageError from '~/components/MessageError'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';
import MessageButton from '~/components/MessageButton'
import SpacerSmall from '~/components/SpacerSmall'
export default {
  components:{
    MessageButton,
    MessageError,
    SpacerSmall
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      msg: false,
      errorText: '',
    }
  },
  computed: {
    userData: function(){
      return this.$store.state.userData;
    }
  },
  methods: {
    editProfile: function(){
      var self = this;
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
      axios.put(`${url}/updateProfile`, {
        email: em,
        first_name: fn,
        last_name: ln
      })
      .then(function (response) {
        self.$store.commit('setUserData', response.data.user);
        self.msg = true;
        window.location.href = '/profile'
      })
      .catch(function (error) {
        //if the update profile request fails
        self.errorText = error.response.data.error
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