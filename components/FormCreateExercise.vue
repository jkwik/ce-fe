<template>
  <div class="formCreateExercise">
    <v-text-field
      class="formCreateItem smallItem"
      label="ID"
      type="number"
      v-model="id"
      @input="updateExerciseId"
    />
    <!-- <v-text-field
      class="formCreateItem"
      label="Exercise"
      v-model="exerciseName"
      @input="updateExerciseName"
    /> -->
    <!-- <v-text-field
      class="formCreateItem smallItem"
      label="Sets"
      type="number"
      v-model="numSets"
      @input="updateExerciseSets"
    />
    <v-text-field
      class="formCreateItem smallItem"
      label="Reps"
      type="number"
      v-model="numReps"
      @input="updateExerciseReps"
    /> -->
  </div>
</template>

<script>
import SpacerHorizontalSmall from '~/components/SpacerHorizontalSmall'
export default {
  components: {
    SpacerHorizontalSmall
  },
  props: {
    session: Object,
  },
  data() {
    return {
      id: 0,
      exerciseName: "",
      numSets: 0,
      numReps: 0,
      exercise: {},
      index: 0,
      creating: true,
    }
  },
  methods: {
    createExercise: function() {
        this.order = this.$props.session.coach_exercises.length + 1;
        this.exercise = {
          //name: this.exerciseName,\
          exercise_id: this.id,
          order: this.order,
          // sets: this.numSets,
          // reps: this.numReps,
        }
        this.$props.session.coach_exercises.push(this.exercise);
        this.index = this.$props.session.coach_exercises.length - 1;
        this.creating = false;
    },
    updateExerciseName: function() {
      if (this.creating) {
        this.createExercise();
      } else {
        this.$props.session.coach_exercises[this.index].name = this.exerciseName;
      }

    },
    updateExerciseSets: function() {
      this.$props.session.coach_exercises[this.index].sets = this.numSets;
    },
    updateExerciseReps: function() {
      this.$props.session.coach_exercises[this.index].reps = this.numReps;
    },
    updateExerciseId: function() {
      if (this.creating) {
        this.createExercise();
      } else {
        this.$props.session.coach_exercises[this.index].exercise_id = this.id;
      }
    }
  },
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