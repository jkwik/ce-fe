<template>
  <div class="listRow">
    <v-card class="listCard"  :to="`/${type}/${items.id}`">
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
    id: Number
  },
  methods: {
    sendDelete: function() {
      this.$emit('sendDelete');
    }
  }
}
</script>

<style lang="scss">
</style>

