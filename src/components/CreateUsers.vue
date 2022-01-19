<template>
  <div v-if="!isLoggedIn" class='container'>
    <p>
      Digite o email no campo abaixo para gerarmos um token
    </p>
    <form @submit="postData" method="post">
      <input type="text" name="email" placeholder="email" v-model="user.email">
      <button type="submit" style="margin: 10px;" class="btn btn-primary">Gerar Token</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
         user: { email:null }
      };
    },
    methods:{
      postData(e) {
        axios.post('http://localhost:3000/users/registrations', this.user)
        .then(()=>{
          this.$toastr.s('Verifique sua caixa de entrada e volte a acessar o app');
        }).catch(()=>{
          this.$router.push({name: 'home'})

          this.$toastr.e('Algo deu errado!');
        })
        e.preventDefault();
      }
    },
    computed: {
      isLoggedIn() {
        return localStorage.token !== 'null' ;
      }
    }
  }
</script>

<style>
</style>
