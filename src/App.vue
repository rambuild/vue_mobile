<template>
  <div id="app">
    <!--  HEADER -->
    <div class="header">
      <span class="back" @click='back' v-show='backToggle'><i class='mintui mintui-back'></i>返回</span>
      <mt-header fixed title="Vue移动端项目"></mt-header>
    </div>

    <!-- MAIN -->
    <!-- ROUTER-VIEW -->
    <div class="view_content">
      <transition mode='out-in'>
        <router-view></router-view>
      </transition>
    </div>

    <!-- FOOTER -->
    <div class="page-tabbar">   
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="首页">
          <img slot="icon"  v-if="!(selected=='首页')" src="../static/img/shouye.png">
          <img slot="icon"  v-if="selected=='首页'" src="../static/img/shouye_ac.png">
          首页
          <div class="routers" @click='toIndex'></div>
        </mt-tab-item>

        <mt-tab-item id="会员">
          <img slot="icon" v-if="!(selected=='会员')" src="../static/img/huiyuan.png">
          <img slot="icon" v-if="selected=='会员'" src="../static/img/huiyuan_ac.png">
          会员
          <div class="routers" @click='toVip'></div>
        </mt-tab-item>
        <mt-tab-item id="购物车" class='shopcar'>
          <mt-badge size="small" color='red' id='badgePos'>{{ this.$store.getters.getAllAmount }}</mt-badge>
          <img slot="icon" v-if="!(selected=='购物车')" src="../static/img/gouwuche.png">
          <img slot="icon" v-if="selected=='购物车'" src="../static/img/gouwuche_ac.png">
          购物车
          <div class="routers" @click='toShopCar'></div>
        </mt-tab-item>
        <mt-tab-item id="搜索">
          <img slot="icon" v-if="!(selected=='搜索')" src="../static/img/search.png">
          <img slot="icon" v-if="selected=='搜索'" src="../static/img/search_ac.png">
          搜索
          <div class="routers" @click='toSearch'></div>
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
      carlist:[],
      backToggle:true
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    toIndex(){
      this.$router.push('/')
    },
    toVip(){
      this.$router.push('/vip')
    },
    toShopCar(){
      this.$router.push('/shopCar')
    },
    toSearch(){
      this.$router.push('/search')
    }
  },
  created(){
    (this.$route.path=='/home')?this.backToggle=false:this.backToggle=true;
  },
  watch:{
    '$route.path':function(newVal,oldVal){
      if(newVal == '/home'){
        this.backToggle = false
      }else{
        this.backToggle = true
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
  .shopcar{
    position: relative;
    .mint-badge{
      position: absolute;
      top:0;
      right:10px;
      padding:3px 6px;
    }
  }
}
.v-enter{
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
.header{
  position: relative;
  .back{
    position: fixed;
    top:10px;
    left:20px;
    color:#fff;
    z-index:100;
  }
}
.mint-tab-item{
  position: relative;
  .routers{
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
  }
}
</style>
