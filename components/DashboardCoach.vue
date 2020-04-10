<template>
  <div class="cardRow">
    <div class="cardCol" v-for="i in 3" :key="i">
      <DashboardCard 
        type="clients"
      />
    </div>
  </div>
</template>

<script>
import DashboardCard from '~/components/DashboardCard'
export default {
  components: {
    DashboardCard
  },
}
</script>

<style lang="scss">
  .cardRow{
    display: flex;
    flex-wrap: wrap;
  }
  .cardCol{
    flex: 0 0 21%;
  }
</style>