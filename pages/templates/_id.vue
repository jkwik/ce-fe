<template>
  <div class="pageContent">
    <HeadingPage v-if="!edit" />
    <ButtonEditStatus v-if="!edit" />
    <ViewTemplate v-if="!loading && !edit" :template="temp"/>  
    <EditTemplate v-if="edit" :t="this.temp" />
  </div>
</template>

<script>
import ViewTemplate from '~/components/ViewTemplate'
import ButtonEditStatus from '~/components/ButtonEditStatus'
import EditTemplate from '~/components/EditTemplate'
import HeadingPage from '~/components/HeadingPage'

export default {
  components: {
    ViewTemplate,
    ButtonEditStatus,
    EditTemplate,
    HeadingPage,
  },
  data() {
    return {
      loading: true,
      temp: {},
    }
  },
  methods: {
    getTemplate: function() {
      const self = this;
      const id= this.$route.params.id;
      console.log(`templates/id page: ${id}`);
      if (id == 1) {
        self.temp = {
          "id": 1,
          "start_date": "01/01/2020",
          "end_date": null,
          "completed": false,
          "sessions": [
            {
              "id": 5,
              "name": "Leg day baby",
              "client_exercise": {
                "id": 10,
                "reps": 10,
                "sets": 4,
                "weight": 100,

              },
              "completed": true,
              "training_entry": {
                "id": 7,
                "client_id": 1,
                "client_session_id": 5,
                "client_exercise_id": 10,
                "exercise_id": null,
                "reps": null,
                "sets": null,
                "weight": null
              }
            },
            {
              "id": 6,
              "name": "Arm day gainz",
              "client_exercise": {
                "id": 11,
                "reps": 10,
                "sets": 4,
                "weight": 100,

              },
              "completed": true,
              "training_entry": {
                "id": 9,
                "client_id": 1,
                "client_session_id": 6,
                "client_exercise_id": 10,
                "exercise_id": null,
                "reps": null,
                "sets": null,
                "weight": null
              }
            }
          ]
        }
      }
      else if (id == 2) {
        self.temp = {
          "id": 2,
          "start_date": "01/01/2020",
          "end_date": null,
          "completed": false,
          "sessions": [
            {
              "id": 7,
              "name": "Pulls up or gfto",
              "client_exercise": {
                "id": 10,
                "reps": 10,
                "sets": 4,
                "weight": 100,

              },
              "completed": true,
              "training_entry": {
                "id": 7,
                "client_id": 1,
                "client_session_id": 5,
                "client_exercise_id": 10,
                "exercise_id": null,
                "reps": null,
                "sets": null,
                "weight": null
              }
            },
            {
              "id": 8,
              "name": "Strictly calves",
              "client_exercise": {
                "id": 11,
                "reps": 10,
                "sets": 4,
                "weight": 100,

              },
              "completed": true,
              "training_entry": {
                "id": 9,
                "client_id": 1,
                "client_session_id": 6,
                "client_exercise_id": 10,
                "exercise_id": null,
                "reps": null,
                "sets": null,
                "weight": null
              }
            }
          ]
        }
      }
      this.loading = false;
    }
  },
  mounted() {
    this.getTemplate();
  },
  computed: {
    edit: function() {
      return this.$store.state.edit;
    }
  },

}
</script>

<style>

</style>
