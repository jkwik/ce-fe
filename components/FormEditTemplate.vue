<template>
  <div>
    <HeadingUserAuth message="Edit Template"/>
    <MessageError :error="error" :message="errorMessage" />
    <div v-if="!loading">
      <Loading v-if="loading" :loading="this.loading"/>
      <draggable v-model="sessionList" @end="reorderSessionList(sessionList)">
        <div
          v-for="(session, i) in sessionList"
          :key="i"
        >
          <v-row>
              <v-card class="listSessionsCard" to="/session">
                <div> 
                  <span> Name: {{ session.name }} </span> <br>
                  <span> Order: {{ session.order}} </span>
                </div>
              </v-card>
          </v-row>
        </div>
      </draggable>
    </div>
    <button 
      @click='editTemplate'
      class="submitBtn"
    >
      <MessageButton message='Save'/>
    </button>
  </div>
</template>

<script>
import Loading from '~/components/Loading'
import MessageSuccess from '~/components/MessageSuccess'
import MessageError from '~/components/MessageError'
import MessageButton from '~/components/MessageButton'
import HeadingUserAuth from '~/components/HeadingUserAuth'
import draggable from 'vuedraggable'


export default {
  components:{
    Loading,
    MessageSuccess,
    MessageError,
    MessageButton,
    HeadingUserAuth,
    draggable
  },
  props: {
    template: Object
  },
  data() {
    return {
      loading: true,
      error: false,
      errorMessage: '',
      temp: this.template,
      sessionList: [],
      drag: false,
    }

  },
  methods: {
    updateSessionList: function () {
      this.sessionList = this.temp.sessions;
      this.loading = false;
    },
    editTemplate: function() {
      this.$store.commit('editStatus');
    },
    reorderSessionList: function (sessionList) {
      let index = 1;
      sessionList.forEach(session => {
        session.order = index;
        index++;
      });
      this.temp.sessions = sessionList;
    },
  },
  mounted() {
    this.updateSessionList();
  },
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
