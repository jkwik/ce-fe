<template>
  <div>
    <div>
      
    </div>
    <div v-if="!loading">
      <ListTemplate
        v-for="(session, i) in sessionList"
        :key="i"
        :session="session"
      />
    </div> 
  </div>
</template>

<script>
import ListTemplate from '~/components/ListTemplate'
export default {
  components:{
    ListTemplate
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
