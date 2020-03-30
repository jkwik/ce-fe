<template>
  <p class="messageButton">{{m}}</p>
</template>

<script>
export default {
  props: {
    m: String
  }
}
</script>

<style lang="scss">
  .messageButton{
    color: #191919;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
