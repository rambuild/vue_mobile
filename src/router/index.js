import Vue from 'vue'
import Router from 'vue-router'


import home from '@/components/home'
import search from '@/components/search'
import shopCar from '@/components/shopCar'
import vip from '@/components/vip'
import newslist from '@/components/home/newslist'
import newsInfo from '@/components/home/newsInfo'
import photolist from '@/components/subhome/photolist'
import photolistdetails from '@/components/subhome/photolistdetails'
import goods from '@/components/subhome/goods'
import goodsinfo from '@/components/subhome/goodsinfo'
import goodsdesc from '@/components/subhome/goodsdesc'
import goodscomment from '@/components/subhome/goodscomment'

import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/home' },
    { path: '/home', name: 'home', component: home  },
    { path:'/search', name:'search', component:search  },
    { path:'/shopCar', name:'shopCar', component:shopCar  },
    { path:'/vip', name:'vip', component:vip  },
    { path:'/home/newslist', name:'newslist', component:newslist  },
    { path:'/home/newsInfo/:id', name:'newsInfo', component:newsInfo  },
    { path:'/home/photolist', component: photolist},
    { path:'/home/photolistdetails/:id', component: photolistdetails },
    { path:'/home/goods', component: goods },
    { path:'/home/goodsinfo/:id', component: goodsinfo },
    { path:'/home/goodsdesc/:id', component: goodsdesc ,name : 'goodsdesc'},
    { path:'/home/goodscomment/:id', component: goodscomment ,name : 'goodscomment'},
    {
      path:'/test',
      component:test
    }
  ]
})
