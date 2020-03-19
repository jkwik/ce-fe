<template>
  <button class="submitBtn">
    {{this.message}}
  </button>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style lang="scss">
  .submitBtn{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 8px 48px;
    background: #00C9F2;
    color: #191919;
    border: 2px solid #191919;
    border-radius: 12px;
    font-size: 18px;
  }
</style>
