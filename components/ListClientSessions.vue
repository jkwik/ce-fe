<template>

    <div v-if="!loading">
      <Loading v-if="loading" :loading="this.loading"/>

      <div
        v-for="(session, i) in this.sessionList"
        :key="i"
      >
        <v-row>
            <v-card class="listSessionsCard" :to="`/sessions/${session.id}`">
              <div> 
                <span> Name: {{ session.name }} </span> <br>
                <span> Completed: {{ isCompleted(session.completed) }} </span>
              </div>
            </v-card>
        </v-row>
      </div>
      <div v-if="isEmpty(this.sessionList)">
        <span> No sessions to view. </span>
      </div>
    </div> 
</template>

<script>

import HeadingPage from '~/components/HeadingPage'
import Loading from '~/components/Loading'
export default {
  components: {
    HeadingPage,
    Loading,
  },
  props: {
    template: Object
  },
  data() {
    return {
      error: false,
      loading: true,
      sessionList: {},
      name: null,
    }
  },
  methods: {
    updateSessionList: function() {
      this.sessionList = this.$props.template.sessions;
      this.loading = false;
    },
    isCompleted: function(completed) {
      return completed ? "Yes" : "No";
    },
    isEmpty: function(sessionList) {
      return Object.keys(sessionList).length == 0;
    }
  },
  mounted() {
    this.updateSessionList();
  }
}
</script>

<style lang="scss">
  .listSessionsCard{
  width: 100%;
  background: $background-secondary !important;
  padding: 8px 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
