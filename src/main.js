import Vue from 'vue'
import VueToastr from "vue-toastr";
import App from "./App.vue";
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import CreateUsers from './components/CreateUsers.vue';
import Auth from './components/Auth.vue';
import Logout from './components/Logout.vue';
import CreateInvoices from './components/CreateInvoices.vue';
import ListInvoices from './components/ListInvoices.vue';
import ShowInvoice from './components/ShowInvoice.vue';

Vue.use(VueRouter);
Vue.use(VueToastr);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/create_users', component: CreateUsers, name: 'create_users' },
    { path: '/auth/:token', component: Auth, name: 'auth', props: true },
    { path: '/logout', component: Logout, name: 'logout' },
    { path: '/create_invoices', component: CreateInvoices, name: 'create_invoices' },
    { path: '/list_invoices', component: ListInvoices, name: 'list_invoices' },
    { path: '/show_invoice/:id', component: ShowInvoice, name: 'show_invoice', props: true }
  ]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
