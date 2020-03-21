<template>
  <v-form class="userForm">
    <v-text-field
      class="userInput"
      label="First name"
      v-model="email"
      :rules="firstNameRules"
      outlined
      required
    ></v-text-field>
    <v-text-field
      class="userInput"
      label="Last name"
      v-model="email"
      :rules="lastNameRules"
      outlined
      required
    ></v-text-field>
    <v-text-field
      class="userInput"
      label="Email"
      v-model="email"
      :rules="emailRules"
      outlined
      required
    ></v-text-field>
    <v-text-field
      class="userInput"
      label="Password"
      v-model="email"
      :rules="passwordRules"
      outlined
      required
    ></v-text-field>
    <ButtonSubmit
      message = "Continue"
    />
  </v-form>
</template>

<script>
import ButtonSubmit from '~/components/ButtonSubmit'

export default {
  components: {
    ButtonSubmit
  },
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    firstNameRules: [
      v => !!v || 'First name is required',
    ],
    lastNameRules: [
      v => !!v || 'Last name is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
    ],
    passwordRules: [
      v => !!v || 'password is required',
    ],
  })
}
</script>

<style>

</style>
