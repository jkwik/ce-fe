<template>
  <div class="exerciseGrid">
    <p class="exerciseCol"> Session ID: {{exercise.coach_session_id}} </p>
    <p class="exerciseCol"> Exercise ID: {{exercise.exercise_id}} </p>
    <p class="exerciseCol"> Order: {{exercise.order}} </p>
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
    flex:1
  }
</style>