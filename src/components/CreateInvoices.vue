<template>
  <div class='container'>
    <p>
      Informações da Cobrança
    </p>
    <form @submit="postData" method="post">
      <div class="row">
        <div class="col">
          <label>Numero do Invoice</label>
          <input type="text" class="form-control" name="number" placeholder="1234" v-model="invoice.number">
        </div>
        <div class="col">
          <label for="exampleFormControlInput1">Data</label>
          <date-picker class="form-control" v-model="invoice.date" valueType="format"></date-picker>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="exampleFormControlInput1">Informações da Empresa</label>
          <textarea class="form-control" rows="3" v-model="invoice.company_info"></textarea>
        </div>
        <div class="col">
          <label for="exampleFormControlInput1">Informações da Cobrança</label>
          <textarea class="form-control" rows="3" v-model="invoice.charge_info"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="exampleFormControlInput1">Preço</label>
          <input type="text" class="form-control" name="price" placeholder="10,00" v-model="invoice.price_cents">
        </div>
        <div class="col">
          <label for="exampleFormControlInput1">Emails</label>
          <input type="text" class="form-control" name="price" placeholder="email@test.com, email2@test.com" v-model="invoice.emails">
        </div>
      </div>

      <div class="form-group">
        <button type="submit" style="margin: 10px;" class="btn btn-primary">Create Invoice</button>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  export default {
    components: { DatePicker },
    data() {
      return {
         invoice: { number:null,
                     date:null,
                     company_info:null,
                     charge_info:null,
                     price_cents:null,
                     emails:null }
      };
    },
    methods:{
      postData() {
        axios.post('http://localhost:3000/invoices', this.invoice, {
        headers: { 'Authorization': JSON.parse( localStorage.getItem('token') ) }
      })
        .then(()=>{
          this.$toastr.s('Cobrança cadastrada com Sucesso');
        }).catch((result)=>{
          if (result.response.status == 403) {
            this.$router.push({name: 'home'})
            this.$toastr.s('Verifique sua caixa de entrada e volte a acessar o app');
          } else {
            this.$toastr.e('Algo deu Errado!');
            this.$router.push({name: 'create_invoices'})
          }
        })

        this.$router.push({name: 'list_invoices'})
      }
    }
  }
</script>

<style>
</style>
