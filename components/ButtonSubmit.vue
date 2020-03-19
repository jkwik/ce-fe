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
    background: #0060A5;
    color: #f5f5f5;
    border: 2px solid #404040;
    border-radius: 12px;
  }
</style>
