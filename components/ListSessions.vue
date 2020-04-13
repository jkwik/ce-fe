<template>
  <div>
    <v-card class="listCard"  :to="`/session/${session.id}`">
      <p class="listItem">{{ session.name }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    session: Object,
  }
}
</script>

