<template>
  <div class="formContainer">
    <div class="formCreateHeading">
      <v-text-field
        label="Name">
      </v-text-field>
      <p v-if="deleteStatus" class="buttonDelete errorBackground"><v-icon dark>mdi-delete</v-icon></p>
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
</style>