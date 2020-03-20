<template>
  <div>
    <h1 class="userHeading">Log In</h1>
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
      <ButtonSubmit
        message = "Log In"
        type = "login"
      />
  </div>
</template>

<script>
import ButtonSubmit from '~/components/ButtonSubmit'

export default {
  components: {
    ButtonSubmit
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
