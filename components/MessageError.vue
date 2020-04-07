<template>
  <div v-if="error">
    <h1 class="errorText">Error. Please contact support.</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: Boolean,
    message: String
  }
}
</script>

<style lang="scss">
</style>
