<template>
  <nav>
    <nuxt-link to="/" class="logo">Coach Easy</nuxt-link>
    |
    <nuxt-link to="/login" class="navLink">Log In</nuxt-link>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  nav {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 16px;
    background: #191919;
    a{
      text-decoration: none;
    }
    .logo{
      font-size: 28px;
      color: #00C9F2;
    }
    .navLink{
      font-size: 22px;
      color: #f5f5f5;
    }
  }
</style>
