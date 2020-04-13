<template>
  <div class="listRow">
    <v-card class="listCard"  :to="`/template/${template.id}`">
      <p class="listItem">{{ template.name }}</p>
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
  .listRow{
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .buttonDelete{
    border-radius: 4px;
    padding: 6px 10px;
    margin-left: 8px;
    border: 1px solid $text;
    box-shadow: $elevation2;
  }
</style>

