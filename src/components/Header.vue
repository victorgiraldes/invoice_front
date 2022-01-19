<template>
  <div class="float-right">
    <router-link v-if="isLoggedIn" class="btn btn-primary" :to="{ name: 'logout' }">Logout</router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      isLoggedIn() {
        return localStorage.token !== 'null' ;
      }
    }
  }
</script>

<style>
</style>
