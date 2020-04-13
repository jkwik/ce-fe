<template>
  <div @click="setStatus()" class="actionBtn">
    <p><strong>{{message}}</strong></p>
  </div>
</template>

<script>
export default {
  props:{
    message: String
  },
  methods: {
    setStatus: function(){
      this.$emit('setStatus')
    }
  },
}
</script>

<style>

</style>