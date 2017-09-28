import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import reg from '@/components/reg';
import login from '@/components/login';
import newHome from '@/components/newHome';
import discovery from '@/components/discovery';
import order from '@/components/order';
import edit from '@/components/editUser';
import choseAdress from '@/components/choseAdress';
import editAddress from '@/components/editAddress';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/user/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/user/login',
      name: 'login',
      component: login
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: discovery
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/newhome',
      name: 'newhome',
      component: newHome
    },
    {
      path: '/user/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/user/edit/choseAdress',
      name: 'choseAdress',
      component: choseAdress
    },
    {
      path: '/user/edit/editAddress',
      name: 'editAddress',
      component: editAddress
    }
  ]
})
