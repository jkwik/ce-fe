<template>
  <div>
    <FormEditExercise v-for="(exercise, index) in clientExercises" 
      :key="index" 
      :exercise="exercise" />
  </div>
</template>

<script>
// ******* need axios request to get session data ********
import axios from 'axios'
axios.defaults.withCredentials = true;
const url = 'https://coach-easy-deploy.herokuapp.com';

import HeadingPage from '~/components/HeadingPage'
import FormEditExercise from '~/components/FormEditExercise'

export default {
  components: {
    HeadingPage,
    FormEditExercise
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
        "weight": 100
      },
      {
        "id": 11, // This is the client exercise id that they need to do
        "name": "Incline Chest Press",
        "reps": 8,
        "sets": 4,
        "weight": 200
      },
      {
        "id": 12, // This is the client exercise id that they need to do
        "name": "Chest Press",
        "reps": 2,
        "sets": 3,
        "weight": 3000
      },
      {
        "id": 12, // This is the client exercise id that they need to do
        "name": "Test", 
      },
    ]
  }),
}
</script>

<style>
</style>