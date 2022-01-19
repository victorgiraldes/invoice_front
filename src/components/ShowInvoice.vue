<template>
  <div class='container'>
    <div class="row">
      <div class="col"><h1>Número</h1></div>
      <div class="col"><h1>{{ invoice.number }}</h1></div>
      <div class="w-100"></div>
      <div class="col"><h1>Data</h1></div>
      <div class="col"><h1>{{ invoice.date }}</h1></div>
      <div class="w-100"></div>
      <div class="col"><h1>Informaçoes da Empresa</h1></div>
      <div class="col"><h1>{{ invoice.company_info }}</h1></div>
      <div class="w-100"></div>
      <div class="col"><h1>Informaçoes da Cobrança</h1></div>
      <div class="col"><h1>{{ invoice.company_info }}</h1></div>
      <div class="w-100"></div>
      <div class="col"><h1>Valor da Cobrança</h1></div>
      <div class="col"><h1>{{ (invoice.price_cents / 10).toFixed(2).replace('.', ',') }}</h1></div>
      <router-link :to="{ name: 'list_invoices' }" class="btn btn-primary">Voltar</router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
         invoice: {
           number:null,
           date:null,
           company_info:null,
           charge_info:null,
           price_cents:null
         }
      };
    },
    props: ['id'],
    mounted() {
      axios.get('http://localhost:3000/invoices/' + this.id, {
        headers: { 'Authorization': JSON.parse( localStorage.getItem('token') ) }
      })
        .then((result)=>{
          console.log(result.data)
          this.invoice = result.data.invoice
        }).catch((result)=>{
          if (result.response.status == 403) {
            this.$router.push({name: 'home'})
            this.$toastr.s('Verifique sua caixa de entrada e volte a acessar o app');
          } else {
            this.$toastr.e('Algo deu Errado!');
          }
        })
    }
  }
</script>

<style>
</style>
