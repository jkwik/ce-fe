<template>
  <div class="session">
    <div class="formCreateHeading">
      <v-text-field
        label="Name">
      </v-text-field>
      <ButtonAddForm @newExerciseForm="addExcerciseForm()" type="Exercise" v-if="exerciseCount===0"/>
    </div>
    <FormCreateExercise v-for="i in exerciseCount" :key="i" />
    <ButtonAddForm @newExerciseForm="addExcerciseForm()" type="Exercise" v-if="exerciseCount!==0"/>
  </div>
</template>

<script>
import ButtonAddForm from '~/components/ButtonAddForm'
import FormCreateExercise from '~/components/FormCreateExercise'
export default {
  components:{
    ButtonAddForm,
    FormCreateExercise,
  },
  data() {
    return {
      exerciseCount: 0
    }
  },
  methods: {
    addForm: function(){
      this.$emit('newForm')
    },
    addExcerciseForm: function(){
      this.exerciseCount++;
    }
  },
}
</script>

<style lang="scss">
  .session{
    border-radius: 5px;
    background: $background-secondary;
    box-shadow: $elevation2;
    margin: 8px;
    padding: 8px;
  }
</style>