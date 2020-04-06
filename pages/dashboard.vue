<template>
  <div class="pageContent">
    <Loading v-if="loading" :loading="this.loading"/>
    <HeadingPage v-if="!loading" />
    <DashboardCoach v-if="isCoach() && !loading"/>
  </div>
</template>

<script>
import Loading from '~/components/Loading'
import HeadingPage from '~/components/HeadingPage'
import DashboardCoach from '~/components/DashboardCoach'
export default {
  components: {
    Loading,
    HeadingPage,
    DashboardCoach
  },
  data() {
    return {
      loading: true,
      role: ''
    }
  },
  methods: {
    isCoach: function(){
      return this.role === 'COACH'
    }
  },
  mounted(){
    Promise.all([ this.$store.state.userData ]).then( () => {
      this.role = this.$store.state.userData.role
      this.loading = false
    },() => {
      this.loadingFailed = true
    })
  }
}
</script>
