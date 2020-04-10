<template>
  <div>
    <HeadingUserAuth message="Edit Template"/>
    <MessageSuccess v-if="success" :message="successMessage"/>
    <MessageError :error="error" :message="errorMessage" />
    <div v-if="!loading">
      <Loading v-if="loading" :loading="this.loading"/>

      <div
        v-for="(session, i) in sessionList"
        :key="i"
      >
        <p> Edit component for session {{ session.id }} </p>
      </div>
    </div>
    <button 
      @click='editTemplate'
      class="submitBtn"
    >
      <MessageButton m='Save'/>
    </button>
  </div>
</template>

<script>
import Loading from '~/components/Loading'
import MessageSuccess from '~/components/MessageSuccess'
import MessageError from '~/components/MessageError'
import MessageButton from '~/components/MessageButton'
import HeadingUserAuth from '~/components/HeadingUserAuth'
export default {
  components:{
    Loading,
    MessageSuccess,
    MessageError,
    MessageButton,
    HeadingUserAuth,
  },
  props: {
    t: Object
  },
  data() {
    return {
      loading: true,
      template: this.t,
      sessionList: {},
    }

  },
  methods: {
    updateSessionList: function () {
      this.sessionList = this.template.sessions;
      this.loading = false;
    },
    editTemplate: function() {
      this.$store.commit('editStatus');
    }
  },
  mounted() {
    this.updateSessionList();
  }
}
</script>

<style>

</style>
