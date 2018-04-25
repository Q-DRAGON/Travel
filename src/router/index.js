import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
  },{
      path: '/city',
      name: 'City',
      component: City
  },{
      path: '/detail/:id',  // 后面可以是参数，参数放在 id 变量里
      name: 'Detail',
      component: Detail
  }]
})
