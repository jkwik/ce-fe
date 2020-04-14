<template>
  <div>
      <v-card class="exerciseCol"> 
        Session ID: {{exercise.coach_session_id}} <br>
        Exercise ID: {{exercise.exercise_id}} <br>
         Order: {{exercise.order}} 
      </v-card>
  </div>
</template>

<script>
export default {
  props: {
    exercise: Object,
  },
}
</script>

<style lang="scss">
  .exerciseGrid {
    display: flex;
  }

  .exerciseCol{
    width: 100%;
    background: $background-secondary !important;
    padding: 8px 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>