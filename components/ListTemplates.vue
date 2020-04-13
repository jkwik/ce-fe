<template>
  <div class="listRow">
    <v-card class="listCard"  :to="`/template/${template.id}`">
      <p class="listItem">{{ template.name }}</p>
      <!-- {{template}} -->
    </v-card>
    <p v-if="deleteStatus" class="buttonDelete errorBackground"><v-icon dark>mdi-delete</v-icon></p>
  </div>
</template>

<script>
export default {
  props: {
    deleteStatus: Boolean,
    template: Object,
  }
}
</script>

<style lang="scss">
</style>

