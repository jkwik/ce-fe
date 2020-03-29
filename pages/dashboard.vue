<template>
  <div class="pageContent">
    <h1>Dashboard</h1>
    <div v-if="loggedIn && role==='COACH'">
      <v-row>
        <v-col 
          cols="4">
          <nuxt-link to="/clients">
            <v-card 
            class="dashCard">
            <div class="dashContents">
              <MdPeopleIcon w="75px" h="75px"/>
              <h2 class="subHeading">Client List</h2>
            </div>
            </v-card>
          </nuxt-link>
        </v-col>
        <v-col>
          <p @click="testMethod()">Click</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MdPeopleIcon from 'vue-ionicons/dist/md-people.vue'
export default {
  components: {
    MdPeopleIcon
  },
  methods: {
    testMethod: function(){
      // axios.post('http://coach-easy-deploy.herokuapp.com/signUp', {
      //   first_name: 'Fred',
      //   last_name: 'Flintstone',
      //   email: 'cfarris@wisc.edu',
      //   password: 'testPass',
      //   role: "COACH"
      // })
      axios.post('http://coach-easy-deploy.herokuapp.com/auth/login', {
        email: 'cfarris@wisc.edu',
        password: 'testPass',
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
// - first_name: string - REQUIRED
// - last_name: string - REQUIRED
// - email: string - REQUIRED
// - password: string - REQUIRED
// - role: enum(COACH, CLIENT) - REQUIRED
  },
  computed: {
    loggedIn: function(){
      return this.$store.state.loggedIn;
    },
    role: function(){
      if(this.$store.state.userData){
        return this.$store.state.userData.role;
      }
      return 'none'
    }
  },
}
</script>

<style lang="scss">
  .dashCard{
    display: flex;
    width: 100%;
    height: 250px;
    align-items: center;
    justify-content: center;
    background: #353535 !important;
    border: 2px solid #191919 !important;
    text-decoration: none !important;
    color: #f5f5f5 !important;
  }
  .dashCard:hover{
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
    .dashContents{
      color: #79DEF2;
      .subHeading{
        color: #79DEF2 !important;
      }
    }
    .ion__svg{
      padding-top: 7px;
      path{
        fill: #79DEF2;
      }
    }
  }
  .dashContents{
    background: #353535;
    text-align: center;
    .subHeading{
      color: #f5f5f5 !important;
    }
    .ion__svg{
      padding-top: 7px;
      path{
        fill: #f5f5f5;
      }
    }
  }
</style>