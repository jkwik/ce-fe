<template>
  <div class="listRow">
    <v-card class="listCard"  :to="`/${type}/${items.id}`" :class="{disable: (isDisabled)}">
      <p class="listItem">{{ items.name }}</p>
    </v-card>
    <button @click="sendDelete" v-if="deleteStatus" class="buttonDelete errorBackground"><v-icon dark>mdi-delete</v-icon></button>
  </div>
</template>

<script>
export default {
  props: {
    deleteStatus: Boolean,
    items: Object,
    type: String,
    id: Number,
  },
  data() {
    return {
      role: ''
    }
  },
  computed:{
    isDisabled: function(){
      return this.$route.params.sid
    }
  },
  mounted(){
    Promise.all([ this.$store.state.userData ]).then( () => {
      this.role = this.$store.state.userData.role
    },() => {
    })
  }
}
</script>

<style lang="scss">
.disable{
    pointer-events: none; 
    /* -webkit-user-select: none; */
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>

