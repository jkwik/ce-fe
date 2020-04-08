<template>
  <div>
    <div v-if="!loading">
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
                  :to="`/sessions/${session.id}`">
                  View
                </nuxt-link>
                <button
                  @click="editSession(session)"
                  class="successBackground actionBtn">
                  Edit
                </button>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>   
</template>

<script>
export default {
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
    editSession: function(data) {
      let actionText = `Editing session ${data.id}`;
      console.log(actionText)
    }
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
