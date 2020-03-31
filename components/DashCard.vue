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