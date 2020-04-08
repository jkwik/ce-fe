<template>
  <a :href=link>{{message}}</a>
</template>

<script>
export default {
  props: {
    message: String,
    link: String,
  }
}
</script>

<style>

</style>