<template>
  <div id="app">
    <!--  HEADER -->
    <mt-header fixed title="Vue移动端项目"></mt-header>
    <!-- MAIN -->
    <h2>实施地方还是大家看法</h2>
    <!-- ROUTER-VIEW -->
    <router-view></router-view>


    <!-- FOOTER -->
    <div class="page-tabbar">
      <div class="page-wrap">
        <div class="page-title">Tabbar</div>
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>
   
    <!-- tabcontainer -->
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
         <!-- cell -->
              <mt-cell v-for="n in 12" :title="'我的 ' + n" />
            </div>
            <router-link to="/">
         <!-- button -->
              <mt-button type="danger" size="large">退出</mt-button>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
   
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="首页">
          <img slot="icon"  v-if="!(selected=='首页')" src="./assets/shouye.png">
          <img slot="icon"  v-if="selected=='首页'" src="./assets/shouye_ac.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="会员">
          <img slot="icon" v-if="!(selected=='会员')" src="./assets/huiyuan.png">
          <img slot="icon" v-if="selected=='会员'" src="./assets/huiyuan_ac.png">
          会员
        </mt-tab-item>
        <mt-tab-item id="购物车">
          <img slot="icon" v-if="!(selected=='购物车')" src="./assets/gouwuche.png">
          <img slot="icon" v-if="selected=='购物车'" src="./assets/gouwuche_ac.png">
          购物车
        </mt-tab-item>
        <mt-tab-item id="搜索">
          <img slot="icon" v-if="!(selected=='搜索')" src="./assets/search.png">
          <img slot="icon" v-if="selected=='搜索'" src="./assets/search_ac.png">
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
      selected:'首页'
    }
  },
  methods:{

  }
}
</script>

<style scoped>
#app{
  padding-top: 40px;
}
</style>
