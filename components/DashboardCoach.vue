<template>
  <div class="cardRow">
    <div class="cardCol" v-for="i in 3" :key="i">
      <DashboardCard 
        v-bind:type="cardList[i-1]"
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
  data() {
    return {
      cardList: ["clients", "templates", "other"],
    }
  },
  methods: {
    getType: function(index) {
      console.log(this.cardList[index]);
      return this.cardList[index];
    },
  }
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