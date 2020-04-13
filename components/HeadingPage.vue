<template>
  <div class="headingContainer">
    <h1 class="headingPage" v-if="this.name">{{this.name}}</h1>
    <h1 class="headingPage" v-if="!this.name">{{this.$router.currentRoute.name}}</h1>
    <div>
      <ButtonHeading @sendRequest="save()" v-if="this.status==='Save' || this.status==='Edit' || this.status==='Done'" :message="this.status"/>
      <ButtonHeading @setStatus="updateStatus()" v-if="hasButton() && this.status!=='Done'" :message="this.message"/>
    </div>
  </div>
</template>

<script>
import ButtonHeading from '~/components/ButtonHeading'
export default {
  props:{
    name: String,
    message: String,
    status: String
  },
  components: {
    ButtonHeading
  },
  data() {
    return {
      role: '',
      buttonPages: ['template', 'template-id'],
    }
  },
  methods:{
    save: function(){
      this.$emit('sendRequest')
    },
    updateStatus: function(){
      this.$emit('updateStatus')
    },
    hasButton: function(){
      let route = this.$router.currentRoute.name;
      if(this.buttonPages.includes(route) && this.role==='COACH'){
        return true;
      } else {
        return false;
      }
    },
    pandaTest: function(){
      console.log('clicked')
      this.$emit('pandaTest')
    }
  },
  mounted(){
    Promise.all([ this.$store.state.userData ]).then( () => {
      this.role = this.$store.state.userData.role
    },() => {
    })
  }
}
</script>

<style lang="scss">
  .headingContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .headingPage{
    text-transform: capitalize;
    margin-right: 16px;
  }
</style>