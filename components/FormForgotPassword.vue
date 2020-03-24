<template>
  <v-form class="userForm">
    <v-text-field
      class="userInput"
      label="Email"
      v-model="email"
      :rules="emailRules"
      outlined
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
    ],
  })
}
</script>
