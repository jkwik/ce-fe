<template>
  <div @click="emitFunction()" class="actionBtn">
    <p><strong>{{message}}</strong></p>
  </div>
</template>

<script>
export default {
  props:{
    message: String
  },
  methods: {
    emitFunction: function(){
      if(this.message==="Create" || this.message==="Edit" || this.message==="Done" || this.message==="Save"){
        this.sendRequest();
      } else {
        this.setStatus();
      }
    },
    sendRequest: function(){
      this.$emit('sendRequest')
    },
    setStatus: function(){
      this.$emit('setStatus')
    }
  },
}
</script>

<style>

</style>