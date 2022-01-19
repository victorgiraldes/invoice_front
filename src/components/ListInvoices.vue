<template>
  <div class='container'>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Numero do Invoice</th>
          <th scope="col">Data</th>
          <th scope="col">Informaçoes da Empresa</th>
          <th scope="col">Informaçoes da Cobrança</th>
          <th scope="col">Preço</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody v-if="invoices.length">
        <tr  v-for="invoice of invoices" :key="invoice.id">
          <td>{{ invoice.number }}</td>
          <td>{{ invoice.date }}</td>
          <td>{{ invoice.company_info }}</td>
          <td>{{ invoice.charge_info }}</td>
          <td>{{ (invoice.price_cents / 100).toFixed(2).replace('.', ',') }}</td>
          <td>
            <router-link class="btn btn-primary" :to="{ name: 'show_invoice', params: { id: invoice.id } }">Visualizar</router-link>
            <button type="button" class="btn btn-danger pull-right" data-toggle="modal" v-on:submit.prevent="deleteInvoice(invoice.id)" @click="deleteInvoice(invoice.id)">Deletar</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else></tbody>
    </table>
    <router-link :to="{ name: 'create_invoices' }" class="btn btn-primary">Criar Invoice</router-link>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
         invoices: []
      };
    },
    methods: {
      deleteInvoice(id) {
        axios.delete('http://localhost:3000/invoices/' + id, {
        headers: { 'Authorization': JSON.parse( localStorage.getItem('token') ) }
      })
        .then(() => {
            this.$toastr.s('Cobrança deletada com sucesso!');
        });
      }
    },
    mounted() {
      axios.get('http://localhost:3000/invoices', {
        headers: { 'Authorization': JSON.parse( localStorage.getItem('token') ) }
      })
        .then((result)=>{
          this.invoices = result.data.invoices
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
