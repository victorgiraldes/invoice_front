<script>
  import axios from 'axios';

  export default {
    props: {
      token: String
    },
    mounted() {
      axios.get('http://localhost:3000/users/verify_token?token=' + this.token)
        .then(()=>{
          localStorage.setItem( 'token', JSON.stringify(this.token) );
          this.$router.push({name: 'list_invoices'})
        }).catch(()=>{
          this.$router.push({name: 'home'})

          this.$toastr.s('Algo deu errado!');
        })
    }
  }
</script>

<style>
</style>
