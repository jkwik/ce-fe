<template>
    <v-form class="userForm">
    <v-text-field
      class="userInput"
      label="Password"
      v-model="password"
      :rules="passwordRules"
      outlined
      required
    ></v-text-field>
    <v-text-field
      label="New password"
      v-model="newPassword"
      :rules="newPasswordRules"
      outlined
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  components: {
  },
  data: (vm) => ({
    password: '',
    newPassword: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    newPasswordRules: [
      v => !!v || 'New password is required',
    ],
  }),
}
</script>

<style>

</style>
