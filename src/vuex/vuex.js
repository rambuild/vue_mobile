import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/*localStorage实现本地存储数据持久化*/
var carlist = JSON.parse(localStorage.getItem('carlist') || "[]") 

const store = new Vuex.Store({
	state:{
		buyGoods:carlist
	},
	mutations:{
		updateGoods(state,goods){
			var flag= false;
			state.buyGoods.some(i=>{
				if(i.id == goods.id){
					i.count += parseInt(goods.count)
					flag=true;
				}
			})
			if(!flag){
				this.state.buyGoods.push(goods)
			}
			localStorage.setItem('carlist',JSON.stringify(state.buyGoods))
			console.log(typeof (state.buyGoods))
		},
		decreaseCount(state,id){
			state.buyGoods.some(i=>{
				if(i.id == id){
					if(i.count > 0){						
						i.count--;
					}
				}
			})
			localStorage.setItem('carlist',JSON.stringify(state.buyGoods))
		},
		increaseCount(state,id){
			state.buyGoods.some(i=>{
				if(i.id == id){
					i.count++;
				}
			})
			localStorage.setItem('carlist',JSON.stringify(state.buyGoods))
		},
		delItem(state,id){
			state.buyGoods.some((i,index)=>{
				if(i.id == id){
					state.buyGoods.splice(index,1)
					console.log('okokoko')
				}
			})
			localStorage.setItem('carlist',JSON.stringify(state.buyGoods))
		},
		setSelectCondition(state,condition){
			state.buyGoods.forEach(i=>{
				if( i.id == condition.id){
					i.selected = condition.selected
				}
			})
			localStorage.setItem('carlist',JSON.stringify(state.buyGoods))
		}
	},
	getters:{
		getAllAmount(state){
			var count = 0;
			state.buyGoods.forEach(i=>{
				if(i.selected){
					count += i.count
				}
			})
			return count;
		},
		getAllShopCarInfo(state){
			var shopCar = {
				count:0,
				price:0
			}
			state.buyGoods.forEach(i=>{
				if(i.selected){
					shopCar.count += i.count
					shopCar.price += (i.price)*(i.count)
				}
			})
			return shopCar;
		}
	}
})
export default store;