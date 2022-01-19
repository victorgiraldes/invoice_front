<template>
  <div>
    <p>
      <router-link :to="{ name: 'create_users' }">Gerar Novo Token</router-link>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
  export default {
    mounted() {
      if (localStorage.getItem('token') == 'null') {
        this.$router.push({name: 'create_users'})
      } else {
        this.$router.push({name: 'list_invoices'})
      }
    }
  }
</script>

<style>
</style>
