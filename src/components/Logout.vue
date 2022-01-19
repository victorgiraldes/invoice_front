<script>
  import axios from 'axios';

  export default {
    mounted() {
      axios.delete('http://localhost:3000/auth', {
        headers: { 'Authorization': JSON.parse( localStorage.getItem('token') ) }
      })
        .then(()=>{
          this.$toastr.s('Usuário deslogado com sucesso');
          localStorage.setItem('token', null)

        }).catch(()=>{
          this.$toastr.e('Algo deu errado!');
        })

        this.$router.push({name: 'home'})
      }
    }
</script>

<style>
</style>
