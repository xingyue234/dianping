import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index';
import Shop from '@/components/Shop/index';
import Shoptype from '@/components/Shoptype/index';
import Goods from '@/components/goods/index';
import Gallery from '@/components/gallery/index';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
    	path:'/Shoptype',
    	name:'Shoptype',
    	component:Shoptype
    },
     {
    	path:'/shop/goods/:id',
    	name:'Goods',
    	component:Goods
    },
    {
    	path:'/shop/gallery/:id',
    	name:'Gallery',
    	component:Gallery
    }
  ]
})

