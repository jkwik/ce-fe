<template>
  <div class="session">
    <div class="formCreateHeading">
      <v-text-field
        label="Name"
        v-model="sessionName"
        @input="updateSession">   
      </v-text-field>
      <ButtonAddForm @newExerciseForm="addExcerciseForm()" type="Exercise" v-if="exerciseCount===0"/>
    </div>
    <FormCreateExercise v-if="!creating" v-for="i in exerciseCount" :key="i" :session="session"/>
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
  props: {
    template: Object
  },
  data() {
    return {
      exerciseCount: 0,
      session: {},
      sessionName: '',
      index: 0,
      order: 0,
      creating: true,
    }
  },
  methods: {
    addForm: function(){
      this.$emit('newForm')
    },
    addExcerciseForm: function(){
      this.exerciseCount++;
    },
    createSession: function() {
        this.session = {
          name: this.sessionName,
          order: this.$props.template.sessions.length + 1,
            coach_exercises: [],
        }
        this.$props.template.sessions.push(this.session);
        this.index = this.$props.template.sessions.length - 1;
        this.creating = false;
    },
    updateSession: function() {
      if (this.creating) {
        this.createSession();
      } else {
        this.$props.template.sessions[this.index].name = this.sessionName;
      }

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