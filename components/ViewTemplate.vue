<template>
  <div>
    <div v-if="!loading">
      <ListSessions
        v-for="(session, i) in sessionList"
        :key="i"
        :session="session"
      />
    </div> 
  </div>
</template>

<script>
import ListSessions from '~/components/ListSessions.vue'
export default {
  components:{
    ListSessions
  },
  props: {
    template: Object
  },
  data() {
    return {
      loading: true,
      currentTemplate: null,
      sessionList: {
      },
      name: null,
    }
  },
  methods: {
    updateSessionList: function () {
      this.sessionList = this.currentTemplate.sessions;
      this.loading = false;
    },
  },
  mounted() {
    this.currentTemplate = this.$props.template
    this.updateSessionList();
  }
}
</script>

<style>
  .sessionListCard{
    width: 33%;
    background: #353535 !important;
    padding: 4px 8px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
