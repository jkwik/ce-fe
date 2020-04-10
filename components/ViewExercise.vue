<template>
  <div class="exerciseGrid">
    <p class="exerciseCol"> {{exercise.name}} </p>
    <p class="exerciseCol"> {{exercise.sets}} </p>
    <p class="exerciseCol"> {{exercise.reps}} </p>
    <p class="exerciseCol"> {{exercise.weight}} </p>
  </div>
</template>

<script>
export default {
  props: {
    exercise: Object,
  }
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