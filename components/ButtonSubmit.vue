<template>
  <div>
    <button 
      v-if="type === 'login'"
      @click='loginSubmit'
      class="submitBtn"
    >
      <MessageButton v-if="message" :m='message'/>
    </button>

    <button 
      v-if="type === 'continue'"
      @click='continueSubmit'
      class="submitBtn"
    >
      <MessageButton v-if="message" :m='message'/>
    </button>
  </div>
</template>

<script>
import MessageButton from '~/components/MessageButton'
export default {
  props: {
    message: String,
    type: String
  },
  components: {
    MessageButton
  },
  methods: {
    loginSubmit: function() {
      console.log("got Login");
      this.$store.commit('logIn');
    },
    continueSubmit: function() {
      console.log("got Continue");
    }
  }
}
</script>

<style lang="scss">
  .submitBtn{
    padding: 8px 48px;
    background: #00C9F2;
    border: 2px solid #191919;
    border-radius: 12px;
  }
</style>
