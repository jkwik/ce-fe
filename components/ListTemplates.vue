<template>
  <v-card class="listTemplateCard" :to="`/templates/${template.id}`">
    <div>
      {{template.name}}
    </div>
    <div>{{template.completed}}</div>
  </v-card>
</template>

<script>
export default {
  props:{
    template: Object,
  }
}
</script>

<style lang="scss">
.listTemplateCard{
  width: 100%;
  background: $background-secondary !important;
  padding: 8px 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>