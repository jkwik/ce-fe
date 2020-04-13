<template>
  <div>
    <v-card class="listCard"  :to="`/template/${template.id}`">
      <p class="listItem">{{ template.name }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    template: Object,
  }
}
</script>

