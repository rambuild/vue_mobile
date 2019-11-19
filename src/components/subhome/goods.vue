<template>
  <div>
	   <div class="goods_list">					
			<div class="goods_item" v-for="i in goodsList">
				<router-link :to="'/home/goodsinfo/'+i.id" tag='div'>
					<div class="img">
						<img :src="i.img_url">
						<h3 class="img_title">{{ i.title }}</h3>
					</div>
				</router-link>
				<router-link :to="'/home/goodsinfo/'+i.id" tag='div'>
					<div class="sale_info">
						<p class="price">
							<span class="new_price">￥{{ i.sell_price }}</span>
							<span class="old_price">￥{{ i.market_price }}</span>
						</p>
						<p class='hot_sale'>
							<span>热卖中</span>
							<span>剩{{ i.stock_quantity }}件</span>
						</p>
					</div>					
				</router-link>
			</div>
	   </div>
	   <div class="load_more">
	   		<mt-button type="danger" size='large' @click='load_more'>加载更多</mt-button>
	   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     pageIndex:1,
     goodsList:[]
    }
  },
  methods:{
  	getGoodsList(){
  		this.$http.get('api/getgoods?pageIndex='+this.pageIndex).then(res=>{
  			this.goodsList = this.goodsList.concat(res.body.message)
  			console.log(res)
  		})
  	},
  	load_more(){
  		this.pageIndex++;
  		this.getGoodsList()
  	}
  },
  mounted(){
  	this.getGoodsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.goods_list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 8px;
	.goods_item{
		box-shadow: 0px 0px 3px #333;
		width:48%;
		margin:5px 0;
		padding: 2px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 270px;
		img{
			width: 100%;
		}
		.img_title{
			font-size: 18px;
			text-align: left;
			flex-direction: column;
			margin:5px 0;
		}
		.sale_info{
			background: #eee;
			font-size: 13px;
			.hot_sale{
				margin:0;
				padding: 5px;
				display: flex;
				justify-content: space-between;
				color:#666;
			}
			.price{
				margin:0;
				padding: 8px 0;
				.new_price{
					font-size: 20px;
					font-weight: bold;
					color:red;
				}
				.old_price{
					text-decoration: line-through;
					margin-left:8px;
				}
			}
			
		}
	}
}
.load_more{
	margin:8px;
}
</style>
