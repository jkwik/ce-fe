<template>
  <v-row>
    <v-col
      :lg="4"
      :md="4"
      :sm="6"
      cols="12">
      <DashboardCard
        type="clients"
      />
    </v-col>
    <v-col
      :lg="4"
      :md="4"
      :sm="6"
      cols="12">
      <DashboardCard
        type="templates"
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