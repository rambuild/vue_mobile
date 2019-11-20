import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
		buyGoods:[]
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
		},
		decreaseCount(state,id){
			state.buyGoods.some(i=>{
				if(i.id == id){
					if(i.count > 0){						
						i.count--;
					}
				}
			})
		},
		increaseCount(state,id){
			state.buyGoods.some(i=>{
				if(i.id == id){
					i.count++;
				}
			})
		},
		delItem(state,id){
			state.buyGoods.forEach((i,index)=>{
				if(i.id == id){
					state.buyGoods.splice(index,1)
					console.log('okokoko')
				}
			})
		}
	},
	getters:{
		getCount(state){
			var count=0;
			state.buyGoods.forEach(i=>{
				if(i.selected){
					count += i.count
				}
			})
			return count;
		},
		getAllAmount(state){
			var count = 0
			state.buyGoods.forEach(i=>{
				if(i.selected){
					count += i.count
				}
			})
			return count;
		},
		getAllPrice(state){
			var price = 0;
			state.buyGoods.forEach(i=>{
				if(i.selected){
					price += (i.price)*(i.count)
				}
			})
			return price;
		}
	}
})
export default store;