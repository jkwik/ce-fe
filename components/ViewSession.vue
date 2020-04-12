<template>
  <Div>
    <HeadingPage />
    <draggable v-if="!loading" v-model="exerciseList">
      <ViewClientExercise v-if="role==='CLIENT'" v-for="(exercise, index) in exerciseList" 
        :key="index" 
        :exercise="exercise"  />
      <ViewCoachExercise v-if="role==='COACH'" v-for="(exercise, index) in exerciseList" 
        :key="index" 
        :exercise="exercise"  />
    </draggable>
  </Div>
</template>

<script>

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

import HeadingPage from '~/components/HeadingPage'
import ViewClientExercise from '~/components/ViewClientExercise'
import ViewCoachExercise from '~/components/ViewCoachExercise'
import draggable from 'vuedraggable'
export default {
  props: {
    session: Object
  },
  components: {
    HeadingPage,
    ViewClientExercise,
    ViewCoachExercise,
    draggable
  },
  data() {
    return {
      loading: true,
      exerciseList: [],
      role: ''
    }
  },
  methods: {
    updateExerciseList: function() {
      this.exerciseList = (this.role == 'COACH') ? this.$props.session.coach_exercises : this.$props.session.client_exercises;
      console.log(this.exerciseList);
      this.loading = false;
    }
  },
  mounted() {
    this.role = this.$store.state.userData.role;
    this.updateExerciseList();

  }
}
</script>

<style>

</style>