<template>
  <v-card class="listSessionCard" :to="`/sessions/${session.id}`">
    <div>
      {{session.name}}
    </div>
    <div>{{session.completed}}</div>
  </v-card>
</template>

<script>
export default {
  props:{
    session: Object,
  }
}
</script>

<style lang="scss">
.listSessionCard{
  width: 100%;
  background: black !important;
  padding: 8px 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>