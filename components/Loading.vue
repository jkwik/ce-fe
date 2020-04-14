<template>
  <div class="loadingMessage">
    <v-progress-circular 
      indeterminate>
    </v-progress-circular>
    <div class="break"></div>
    <SpacerSmall />
    <p>Loading Content..</p>
  </div>
</template>

<script>
import SpacerSmall from '~/components/SpacerSmall'
export default {
  components: {
    SpacerSmall
  },
}
</script>

<style lang="scss">
  .loadingMessage{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    width: 100%; height: 100%;
  }
  .break {
    width: 100%;
    height: 0;
  }
</style>