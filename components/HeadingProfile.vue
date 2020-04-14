<template>
  <div class="profileHeading">
    <HeadingWelcome :name="this.name"/>
    <ButtonEditStatus />
  </div>
</template>

<script>
import HeadingWelcome from '~/components/HeadingWelcome'
import ButtonEditStatus from '~/components/ButtonEditStatus'
export default {
  props: {
    name: String
  },
  components:{
    HeadingWelcome,
    ButtonEditStatus
  }
}
</script>