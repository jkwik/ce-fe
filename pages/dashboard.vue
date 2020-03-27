<template>
  <div class="pageContent">
    <h1>Dashboard</h1>
    <v-row>
      <v-col 
        cols="4">
        <nuxt-link to="/clientList">
          <v-card 
          class="dashCard">
            Client List
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
  .dashCard{
    display: flex;
    width: 100%;
    height: 250px;
    align-items: center;
    justify-content: center;
  }
</style>