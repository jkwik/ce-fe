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
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      outlined
      required
      @click:append="show = !show"
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
      show: false,
      emailRules: [
        v => !!v || 'Email is required',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
  })
}
</script>
