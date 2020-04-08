<template>
  <nuxt-link :to=link class="prompt">{{m}}</nuxt-link>
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