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
    <v-text-field
      label="Password"
      v-model="password"
      :rules="passwordRules"
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
      password: '',
      emailRules: [
        v => !!v || 'Email is required',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
  })
}
</script>
