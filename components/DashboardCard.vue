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
        <div 
          v-if="type==='template'"
          class="dashContents">
          <MdFolderIcon w="75px" h="75px"/>
          <h2 class="subHeading">Templates</h2>
        </div>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
import MdPeopleIcon from 'vue-ionicons/dist/md-people.vue'
import MdFolderIcon from 'vue-ionicons/dist/md-folder.vue'
export default {
  props:{
    type: String,
  },
  components:{
    MdPeopleIcon,
    MdFolderIcon,
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
    background: $background-secondary !important;
    border-radius: 10px !important;
    text-decoration: none !important;
    color: $text !important;
    box-shadow: $elevation1 !important;
  }
  .dashCard:hover{
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
    .dashContents{
      .subHeading{
        color: $primary !important;
      }
    }
    .ion__svg{
      padding-top: 7px;
      path{
        fill: $primary;
      }
    }
  }
  .dashContents{
    text-align: center;
    .subHeading{
      color: $text !important;
    }
    .ion__svg{
      padding-top: 7px;
    }
  }
</style>
