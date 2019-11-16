<template>
  <div id="app">
    <!--  HEADER -->
    <mt-header fixed title="Vue移动端项目"></mt-header>
    <!-- MAIN -->
    <!-- ROUTER-VIEW -->
    <div class="view_content">
      <transition mode='out-in'>
        <router-view></router-view>
      </transition>
    </div>

    <!-- FOOTER -->
    <div class="page-tabbar"><!-- 
      <div class="page-wrap">
        <div class="page-title">Tabbar</div>
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>
       
    tabcontainer
        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="首页">
            <mt-cell v-for="n in 10" :title="'餐厅 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="会员">
            <mt-cell v-for="n in 5" :title="'订单 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="购物车">
            <mt-cell v-for="n in 7" :title="'发现 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="搜索">
            <div class="page-part">
         cell
              <mt-cell v-for="n in 12" :title="'我的 ' + n" />
            </div>
            <router-link to="/">
         button
              <mt-button type="danger" size="large">退出</mt-button>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div> -->
   
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="首页">
          <img slot="icon"  v-if="!(selected=='首页')" src="../static/img/shouye.png">
          <img slot="icon"  v-if="selected=='首页'" src="../static/img/shouye_ac.png">
          首页
        </mt-tab-item>

        <mt-tab-item id="会员">
          <img slot="icon" v-if="!(selected=='会员')" src="../static/img/huiyuan.png">
          <img slot="icon" v-if="selected=='会员'" src="../static/img/huiyuan_ac.png">
          会员
        </mt-tab-item>
        <mt-tab-item id="购物车">
          <img slot="icon" v-if="!(selected=='购物车')" src="../static/img/gouwuche.png">
          <img slot="icon" v-if="selected=='购物车'" src="../static/img/gouwuche_ac.png">
          购物车
        </mt-tab-item>
        <mt-tab-item id="搜索">
          <img slot="icon" v-if="!(selected=='搜索')" src="../static/img/search.png">
          <img slot="icon" v-if="selected=='搜索'" src="../static/img/search_ac.png">
          搜索
        </mt-tab-item>
      </mt-tabbar>
    </div>
  


  </div>
</template>

<script>
export default {
  data(){
    return{
      selected:'首页',
      test:'a'
    }
  },
  methods:{

  },
  watch:{
    selected(newVal,oldVal){
      switch(newVal){
        case "首页":this.$router.push({path:'/'});break;
        case "会员":this.$router.push({path:'/vip'});break;
        case "购物车":this.$router.push({path:'/shopCar'});break;
        case "搜索":this.$router.push({path:'/search'});break;
      }
    }
  }
}
</script>

<style lang='scss' scoped>
#app{
  padding-top: 40px;
  overflow-x: hidden;
  .view_content{
    padding-bottom:80px !important;
  }
}
.v-enter,{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position:absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.1s ease;
}
</style>
