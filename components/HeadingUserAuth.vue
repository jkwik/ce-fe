<template>
  <h1 class="userHeading">{{message}}</h1>
</template>

<script>
export default {
  props:{
    message: String
  }
}
</script>

<style lang="scss">
  .userHeading{
    font-size: 4em;
    font-weight: 700;
  }
</style>
