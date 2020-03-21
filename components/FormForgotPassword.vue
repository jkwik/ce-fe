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
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
    ],
  })
}
</script>
