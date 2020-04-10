<template>

    <div v-if="!loading">
      <Loading v-if="loading" :loading="this.loading"/>

      <div
        v-for="(session, i) in sessionList"
        :key="i"
      >
        <v-row>
          <v-col>
            <v-card class="sessionListCard">
              <div>Session: {{session.id}} <br> Name: {{session.name}}</div>
              <div>
                <nuxt-link
                  class="primaryBackground actionBtn"
                  to="/session">
                  View
                </nuxt-link>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div> 
</template>

<script>

import HeadingPage from '~/components/HeadingPage'
import Loading from '~/components/Loading'
import EditTemplate from '~/components/EditTemplate'
export default {
  components: {
    HeadingPage,
    Loading,
    EditTemplate,
  },
  props: {
    template: Object
  },
  data() {
    return {
      error: false,
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
    width: 100%;
    background: #353535 !important;
    padding: 4px 8px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
