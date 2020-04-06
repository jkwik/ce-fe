<template>
  <div>
    <nuxt-link :to="`/${type}`">
      <v-card 
      class="dashCard">
        <div 
          v-if="type==='clients'"
          class="dashContents">
          <MdPeopleIcon w="75px" h="75px"/>
          <h2 class="subHeading">Client List</h2>
        </div>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
import MdPeopleIcon from 'vue-ionicons/dist/md-people.vue'
export default {
  props:{
    type: String,
  },
  components:{
    MdPeopleIcon
  }
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
