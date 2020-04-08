<template>
  <a :href=link>{{m}}</a>
</template>

<script>
export default {
  props: {
    m: String,
    link: String,
  }
}
</script>

<style>

</style>