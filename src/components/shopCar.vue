<template>
  <div class=shopcar>
   		<div class="shop_content"  v-if='this.$store.state.buyGoods.length !=0 '>
   			<div class="goods_info" v-for='i in this.$store.state.buyGoods'>
	   			<div class="goods_info_list">
	   				<mt-switch v-model="i.selected" @change='selectedCondition(i)'></mt-switch>
					<div class="img_box">
						<img :src="i.img">
					</div>
					<div class="goods_desc">
						<h3>{{ i.title }}</h3>
						<div class="price_box">
							<div class="price">￥{{ i.price }}</div>
							<div class="input_box">
								<mt-button type="primary" @click='reduce_count(i.id)' :disabled='i.count==0'>-</mt-button>
								<input type="number" v-model='i.count'>
								<mt-button type="primary" @click='add_count(i.id)'>+</mt-button>
							</div>
							<span @click='deleteItem(i.id)' class="del">删除</span>
						</div>
					</div>
	   			</div>
	   		</div>
	   		<div class="settle">
	   			<div class="settle_box">
	   				<div class="settle_info">
		   				<h3>总计（不含运费）</h3>
		   				<p>已勾选商品<span class="goods_amount"> {{  this.$store.getters.getAllShopCarInfo.count }} </span>件，总价:<span class="goods_price"> ￥{{ this.$store.getters.getAllShopCarInfo.price }}</span></p>
		   			</div>
		   			<div class="settle_btn">
		   				<mt-button type='danger'>去结算</mt-button>
		   			</div>
	   			</div>
	   		</div>
   		</div>
   		<div v-else class="toggle">
   			<h3>没有选择商品！</h3>
   			<router-link to='/home/goods' class='chooseGoods'>前去选择</router-link>
   		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     value:false
    }
  },
  methods:{
    add_count(id){
      this.$store.commit('increaseCount',id)
    },
    reduce_count(id){
      this.$store.commit('decreaseCount',id)
    },
    deleteItem(id){
      this.$store.commit('delItem',id)
    },
    selectedCondition(item){
    	this.$store.commit('setSelectCondition',item)
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.goods_info{
	box-sizing: border-box;
	background: #ddd;
	padding: 6px 5px;
	.goods_info_list{
		background: #fff;
		padding: 15px;
		border-radius: 8px;
		display: flex;
		justify-content: space-between;
		.img_box{
			width: 20%;
			height: 70px;
			margin: 0 8px;
			border-radius: 6px;
			overflow: hidden;
			img{
				width: 100%;
			}
		}
		.goods_desc{
			h3{
				margin:0;
				font-size: 14px;
			}
			.price_box{
				padding: 16px 0 0;
				vertical-align: middle;
				display: flex;
				justify-content: space-between;
				.price{
					color: red;
				}
				button{
					height: 25px;
					vertical-align: top;
				}
				input{
					width: 25px;
					vertical-align: top;
					height: 20px;
					text-align: center;
				}
				.del{
					color:red;
				}
			}
		}
	}
}
.settle{
	background: #ddd;
	padding: 8px;
	.settle_box{
		display: flex;
		justify-content: space-between;
		background: #fff;
		padding: 15px 13px;
		border-radius: 8px;
		color:#333;
	}
	h3{
		margin:0;
	}
	.settle_info{
		p{
			margin-bottom: 0px;
			font-size: 14px;
			.goods_amount,.goods_price{
				color:red;
				font-weight: bold;
				font-size: 16px;
			}
		}
		
	}
	.settle_btn{
		button{
			margin:10px 0;
		}
	}
}
.toggle{	
	padding: 10px;
	.chooseGoods{
		font-size: 16x;
		font-weight: bold;
		color:red;
		text-decoration: none;
	}
}
</style>
