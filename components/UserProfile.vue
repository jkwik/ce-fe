<template>
  <div>
    <h3>Name</h3>
    <p>{{userData.first_name}} {{userData.last_name}}</p>
    <h3>Email</h3>
    <p>{{userData.email}}</p>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object
  }
}
</script>