<template>
  <Div>
    <HeadingPage />
    <ViewClientExercise v-if="role==='CLIENT'" v-for="(exercise, index) in exerciseList" 
      :key="index" 
      :exercise="exercise"  />
    <ViewCoachExercise v-if="role==='COACH'" v-for="(exercise, index) in exerciseList" 
      :key="index" 
      :exercise="exercise"  />
  </Div>
</template>

<script>
// ******* need axios request to get session data ********

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

import HeadingPage from '~/components/HeadingPage'
import ViewClientExercise from '~/components/ViewClientExercise'
import ViewCoachExercise from '~/components/ViewCoachExercise'

export default {
  props: {
    session: Object
  },
  components: {
    HeadingPage,
    ViewClientExercise,
    ViewCoachExercise
  },
  data() {
    return {
      exerciseList: {},
      role: ''
    }
  },
  methods: {
    updateExerciseList: function() {
      this.exerciseList = (this.role == 'COACH') ? this.$props.session.coach_exercises : this.$props.session.client_exercises  ;
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