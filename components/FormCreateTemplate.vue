<template>
  <div>
    <div class="formCreateHeading">
      <v-text-field
        label="Name">
      </v-text-field>
      <ButtonAddForm @newForm="addForm()" type="Session" v-if="sessionCount===0"/>
    </div>
    <FormCreateSession @newForm="addForm()" v-for="i in sessionCount" :key="i"/>
    <SpacerExtraSmall />
    <ButtonAddForm @newForm="addForm()" type="Session" v-if="sessionCount!==0"/>
  </div>
</template>

<script>
import ButtonAddForm from '~/components/ButtonAddForm'
import FormCreateSession from '~/components/FormCreateSession'
import SpacerExtraSmall from '~/components/SpacerExtraSmall'
export default {
  props:{
    type: String,
  },
  data() {
    return {
      sessionCount: 0,
    }
  },
  components:{
    ButtonAddForm,
    FormCreateSession,
    SpacerExtraSmall
  },
  methods:{
    addForm: function(){
      this.sessionCount++;
    }
  }
}
</script>

<style lang="scss">
</style>