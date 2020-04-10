<template>
  <div class="pageContent" >
    <Loading v-if="loading" :loading="this.loading"/>
    <HeadingPage />
    <div>
      <div
        v-for="(template, i) in templateList.templates"
        :key="i"
      >
        <v-row>
          <v-card class="templateListCard">
            <div>
              Template {{ template.template_id }} <br>
              Start Date: {{ template.start_date }} <br>
              End Date: {{ template.end_date }}   
            </div>
            <div>
              <nuxt-link
                class="primaryBackground actionBtn"
                :to="`/${$router.currentRoute.name}/${template.template_id}`">
                View
              </nuxt-link>
            </div>
          </v-card>
        </v-row>
      </div>
    </div>
  </div> 

</template>

<script>
import HeadingPage from '~/components/HeadingPage'
import Loading from '~/components/Loading'
export default {
  components: {
    HeadingPage,
    Loading
  },
  data() {
    return {
      loading: true,
      templateList: {
        "templates": [
          {
            "template_id": 1,
            "start_date": "01/01/2020",
            "end_date": "01/08/2020",
            "completed": false,
            "sessions": [
            ],
          },
          {
            "template_id": 2,
            "start_date": "01/01/2020",
            "end_date": "01/08/2020",
            "completed": false,
            "sessions": [
            ],
          },
        ]
      }
    }
  },
  methods: {
    updateTemplateList: function() {
      let actionText = "updating template list";
      this.loading = false;
      console.log(actionText);
    },
  },
  mounted() {
    this.updateTemplateList();
  },
}
</script>

<style lang="scss">
  .templateListCard{
    width: 100%;
    background: #353535 !important;
    padding: 8px 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
