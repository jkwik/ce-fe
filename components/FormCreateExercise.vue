<template>
  <div class="formCreateExercise">
    <v-text-field
      class="formCreateItem"
      label="Exercise"
    />
    <v-text-field
      class="formCreateItem smallItem"
      label="Sets"
      type="number"
    />
    <v-text-field
      class="formCreateItem smallItem"
      label="Reps"
      type="number"
    />
  </div>
</template>

<script>
import SpacerHorizontalSmall from '~/components/SpacerHorizontalSmall'
export default {
  components:[
    SpacerHorizontalSmall
  ]
}
</script>

<style lang="scss">
.formCreateExercise{
  display: flex;
  min-width: 100px;
}
.formCreateItem{
  flex: 1;
}
.smallItem{
  max-width: 50px;
  min-width: 30px;
  margin-left:12px;
}
</style>