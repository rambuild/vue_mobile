import Vue from 'vue'
import Router from 'vue-router'


import home from '@/components/home'
import search from '@/components/search'
import shopCar from '@/components/shopCar'
import vip from '@/components/vip'
import newsList from '@/components/home/newsList'
import newsInfo from '@/components/home/newsInfo'
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/home' },
    { path: '/home', name: 'home', component: home  },
    { path:'/search', name:'search', component:search  },
    { path:'/shopCar', name:'shopCar', component:shopCar  },
    { path:'/vip', name:'vip', component:vip  },
    { path:'/home/newsList', name:'newsList', component:newsList  },
    { path:'/home/newsInfo/:id', name:'newsInfo', component:newsInfo  }
  ]
})
