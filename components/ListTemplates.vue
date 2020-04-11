<template>
  <div>
    <div
      v-for="(template, i) in this.templates"
      :key="i"
    >
      <v-row>
        <v-card class="listTemplateCard" :to="`/templates/${template.id}`">
          <div>
            Template {{ template.id }} <br>
            Name: {{ template.name }}
          </div>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    templates: Array,
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
