<template>
  <div  class="goodsinfo">
  	<div class="img_banner">
  		<mt-swipe :auto="3000" :speed="2000">
        <mt-swipe-item v-for="i in sell_list" :key='i.id'>
          <img :src="i.src" alt="">
        </mt-swipe-item>
      </mt-swipe>
  	</div>
  	<div class="goods_seller">
  		<div class="seller_title">
  			<h3>{{ goodsinfo.title }}</h3>
  		</div>
		<div class="seller_info">
			<span>市场价</span>：<span class='market_price'>￥{{ goodsinfo.market_price }}</span>
			<span>销售价</span>：<span class='sell_price'>￥{{ goodsinfo.sell_price }}</span>
			<p class='seller_count'>

        <!-- 小球半场动画 -->
        <transition
        @before-enter='beforeEnter'
        @enter='enter'
        @after-enter='afterEnter'>
          <div class="ball" v-show='ballFlag' ref='ball'></div>
        </transition>

				<span>购买数量</span>
				<mt-button type="primary" @click="reduce_count" :disabled="sell_count<=1">-</mt-button>
				<input type="number" v-model='sell_count' :maxlength='goodsinfo.stock_quantity' />
				<mt-button type="primary" @click="add_count">+</mt-button>
			</p>
			<p>
				<mt-button type="primary" size='small'>立即购买</mt-button>
				<mt-button type="danger" size='small' @click='addshopcar'>加入购物车</mt-button>
			</p>
		</div>
  	</div>		
  	<div class="goods_params">
  		<h3>商品参数</h3>
      <p>商品货号：{{ goodsinfo.goods_no }}</p>
      <p>库存情况：{{ goodsinfo.stock_quantity }}</p>
      <p>上架时间：{{ goodsinfo.add_time | dateFormat}}</p>
      <mt-button type="primary" size='large' plain @click='godesc'>图文介绍</mt-button>
      <mt-button type="danger" size='large' plain @click='gocomment'>商品评论</mt-button>
  	</div>
  </div>
</template>

<script>	
import comment from './comment'
export default {
  data () {
    return {
     id:this.$route.params.id,
     sell_count:1,
     sell_list:[],
     goodsinfo:[],
     ballFlag:false
    }
  },
  methods:{
    beforeEnter(el){
      el.style.transform = 'translate(0,0)'
    },
    enter(el,done){
      const ballPos = this.$refs.ball.getBoundingClientRect()
      const badgePos = document.getElementById('badgePos').getBoundingClientRect()
      const transX = badgePos.left - ballPos.left
      const transY = badgePos.top - ballPos.top
      el.offsetWidth
      el.style.transform = 'translate('+transX+'px,'+transY+'px)'
      el.style.transition = 'all 0.5s cubic-bezier(0.4,-0.3,1,0.68)'
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    },
    add_count(){
      this.sell_count++;
    },
    reduce_count(){
      if(this.sell_count > 1){
        this.sell_count--;
      }
    },
    getgoodsinfo(){
      this.$http.get('api/getthumimages/'+this.id).then(res=>{
        this.sell_list = res.body.message;
        console.log('图片信息：')
        console.log(res.body.message[0].src)
      })
      this.$http.get('api/goods/getinfo/'+this.id).then(res=>{
        this.goodsinfo = res.body.message[0];
      })
    },
    godesc(){
      this.$router.push({
        name:'goodsdesc',
        params:{
          id:this.id
        }
      })
    },
    gocomment(){
      this.$router.push({
        name:'goodscomment',
        params:{
          id:this.id
        }
      })
    },
    addshopcar(){
      this.ballFlag = ! this.ballFlag
      var goodsinfo = {
          id:this.goodsinfo.id,
          price:this.goodsinfo.sell_price,
          count:this.sell_count,
          selected:true,
          title:this.goodsinfo.title,
          img:this.sell_list[0].src
      }
      console.log(goodsinfo)
      this.$store.commit('updateGoods',goodsinfo)
      this.sell_count = 1
    }
  },
  mounted(){
    this.getgoodsinfo()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.seller_count{
  button{      
    width:40px;
    height: 30px;
  }
  input{
    width: 40px;
    height: 23px;
    outline: none;
    text-align: center;
  }
}
.img_banner{
  margin:10px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 3px;
}
.mint-swipe{
  height: 250px;
  text-align: center;
  img{
    width: 70%;
  }
}
.market_price{
  text-decoration: line-through;
}
.sell_price{
  font-weight: bold;
  color: red;
  font-size: 18px;
}
.goods_seller,.goods_params{
  margin:10px;
  padding: 3px 10px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 3px;
}
.goods_params{
  button{
    margin:10px 0;
  }
  p{
    color:#333;
  }
}
.seller_count{
  position: relative;
  .ball{
    position: absolute;
    width:20px;
    height:20px;
    background:red;
    top:6px;
    left:125px;
    z-index: 1000;
    border-radius:10px;
  }
}
</style>
