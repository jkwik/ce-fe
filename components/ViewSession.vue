<template>
  <v-form>
    <v-container>
      <HeadingPage/>
      <ViewExercise v-for="(exercise, index) in clientExercises" :key="index" 
        :exerciseName="exercise.name" 
        :sets="exercise.sets" 
        :reps="exercise.reps" 
        :weight="exercise.weight" />
    </v-container>
  </v-form>
</template>

<script>
// ******* need axios request to get session data ********
//Create ViewExercise components for each item in the array 

import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

import HeadingPage from '~/components/HeadingPage'
import ViewExercise from '~/components/ViewExercise'

export default {
  components: {
    HeadingPage,
    ViewExercise
  },
  data: () => ({
    "id": 1, //session id
    "name": "Chest and Back Day 1",
    clientExercises : [
      {
        "id": 10, // This is the client exercise id that they need to do
        "name": "Chest Fly",
        "reps": 10,
        "sets": 3,
        "weight": "100"
      },
      {
        "id": 11, // This is the client exercise id that they need to do
        "name": "Incline Chest Press",
        "reps": 8,
        "sets": 4,
        "weight": "200"
      },
      {
        "id": 12, // This is the client exercise id that they need to do
        "name": "Chest Press",
        "reps": 2,
        "sets": 3,
        "weight": "3000"
      },
    ]
  }),
}
</script>

<style>

</style>