<template>
  <div class="pageContent">
    <h1 v-if="!loading">Dashboard</h1>
    <Loading v-if="loading" :loading="this.loading"/>
    <DashboardCoach v-if="isCoach && !loading"/>
  </div>
</template>

<script>
import Loading from '~/components/Loading'
import DashboardCoach from '~/components/DashboardCoach'
export default {
  components: {
    Loading,
    DashboardCoach
  },
  data() {
    return {
      loading: true,
      isLoggedIn: false,
      isCoach: false
    }
  },
  mounted(){
    this.isLoggedIn = this.$store.state.loggedIn
    let role = this.$store.state.userData.role;
    if(role === 'COACH') {
      this.isCoach=true;
    } else if (role === 'CLIENT') {
      this.approvedClient=true;
    } else {
      this.unapprovedClient=true;
    }
    console.log(this.role)
    this.loading = false;
  },
  // computed: {
  //   xloggedIn: function(){
  //     return this.$store.state.loggedIn;
  //   },
  //   xcoach: function(){
  //     if(this.$store.state.userData){
  //       return ;
  //     }
  //     return false
  //   }
  // },
}
</script>

<style lang="scss">
  .dashCard{
    display: flex !important;
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