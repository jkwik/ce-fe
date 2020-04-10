<template>
  <div class="pageContent" >
    <HeadingPage />
    <div
      v-for="(template, i) in templates"
      :key="i">
      <ListTemplates :template="template"/> 
    </div>
  </div> 
</template>

<script>
import ListTemplates from "~/components/ListTemplates"
import HeadingPage from "~/components/HeadingPage"
export default {
  components:{
    ListTemplates,
    HeadingPage
  },
  data() {
    return {
      templates: [
        {
          "completed": false,
          "end_date": null,
          "id": 1,
          "name": "Soldier Program",
          "start_date": "04-08-2020",
          "user_id": 355
        },
        {
          "completed": true,
          "end_date": "06-10-2020",
          "id": 2,
          "name": "Fat Burner",
          "start_date": "04-10-2020",
          "user_id": 355
        }
      ]
    }
  },
  methods: {
    updateTemplateList: function() {
      let actionText = "updating template list";
      console.log(actionText);
    },
    editTemplate: function(data) {
      let actionText = `Editing template: ${data.template_id}`;
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
    width: 33%;
    background: #353535 !important;
    padding: 8px 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
