<template>
  <div class="formCreateExercise" >
    <v-select
      v-bind:items="exerciseList"
      v-model="selectedExercise"
      item-text="name"
      label="Choose Exercise"
      return-object
      @change="updateExercise"
    >
    </v-select>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

export default {
  components: {
  },
  props: {
    session: Object,
  },
  data() {
    return {
      exerciseName: "",
      selectedExercise: {},
      exercise: {},
      index: 0,
      creating: true,
      exerciseList: [],
    }
  },
  methods: {
    createExercise: function() {
        this.order = this.$props.session.coach_exercises.length + 1;
        this.exercise = {
          exercise_id: this.selectedExercise.id,
          order: this.order,
        }
        this.$props.session.coach_exercises.push(this.exercise);
        this.index = this.$props.session.coach_exercises.length - 1;
        this.creating = false;
    },
    updateExercise: function() {
      if (this.creating) {
        this.createExercise();
      } else {
        this.$props.session.coach_exercises[this.index].exercise_id = this.selectedExercise.id;
      }
    },
    getExercises: function() {
      axios.get(`${url}/exercises`).then(result => {
        this.exerciseList = result.data.exercises;
        console.log(this.exerciseList);
      }).catch(error => {
        this.error = true;
        console.log(error)
      });
    }
  },
  mounted() {
    this.getExercises();
  }
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