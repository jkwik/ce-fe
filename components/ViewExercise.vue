<template>
  <v-row>
    <v-col>
      <v-text-field
        label="Exercise name"
        v-model="exerciseName"
        readonly
        outlined></v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        label="Sets"
        v-model="sets"
        type="number"
        :rules="setRules"
        outlined></v-text-field>
    </v-col>
    <v-col>
      <v-text-field 
        label="Reps"
        v-model="reps"
        type="number"
        :rules="repRules"
        outlined></v-text-field>
    </v-col>
    <v-col>
      <v-text-field 
        label="Weight"
        v-model="weight"
        type="number"
        :rules="weightRules"
        suffix="lbs"
        outlined></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
// Will take in props
// Given an exercise, set, rep, weight display them
export default {
  props: {
    exerciseName: String,
    sets: Number,
    reps: Number,
    weight: Number,
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
  }),
}
</script>

<style>

</style>