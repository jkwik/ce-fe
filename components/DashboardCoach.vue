<template>
  <v-row>
    <v-col 
      cols="4">
      <DashboardCard 
        type="clients"
      />
    </v-col>
  </v-row>
</template>

<script>
import DashboardCard from '~/components/DashboardCard'
export default {
  components: {
    DashboardCard
  },
}
</script>