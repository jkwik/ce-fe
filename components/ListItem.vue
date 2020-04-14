<template>
  <div class="listRow">
    <v-card class="listCard"  :to="`/${type}/${items.id}`">
      <p class="listItem">{{ items.name }}</p>
    </v-card>
    <p v-if="deleteStatus" class="buttonDelete errorBackground"><v-icon dark>mdi-delete</v-icon></p>
  </div>
</template>

<script>
export default {
  props: {
    deleteStatus: Boolean,
    items: Object,
    type: String,
    id: Number
  }
}
</script>

<style lang="scss">
</style>

