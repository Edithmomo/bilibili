import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const ShopCard =  ()=>import(/* webpackChunkName: "group-foo" */'@/pages/shopCard');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shopCard',
      name: 'shopCard',
      component: ShopCard
    }
  ]
})
