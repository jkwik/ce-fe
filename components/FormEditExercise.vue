<template>
  <Div class="exerciseGrid">
    <v-text-field
      label="Exercise name"
      v-model="exercise.name"
      class="exerciseCol"
      readonly
      outlined></v-text-field>
    <v-text-field
      label="Sets"
      v-model="exercise.sets"
      type="number"
      class="exerciseCol"
      :rules="setRules"
      outlined></v-text-field>
    <v-text-field 
      label="Reps"
      v-model="exercise.reps"
      type="number"
      :rules="repRules"
      class="exerciseCol"
      outlined></v-text-field>
    <v-text-field 
      label="Weight"
      v-model="exercise.weight"
      type="number"
      :rules="weightRules"
      class="exerciseCol"
      suffix="lbs"
      outlined></v-text-field>
  </Div>
</template>

<script>
export default {
  props: {
    exercise: Object
  },
  data: () => ({
    setRules: [
      value => value >= 0 || 'sets cannot be negative',
    ],
    repRules: [
      value => value >= 0 || 'reps cannot be negative',
    ],
    weightRules: [
      value => value >= 0 || 'Weight cannot be negative',
    ],
  })
}
</script>

<style lang="scss">
  .exerciseGrid {
    display: flex;
  }

  .exerciseCol{
    flex:1
  }
</style>