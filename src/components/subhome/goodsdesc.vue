<template>
  <div>
   <div class="goods_desc">
   		<h3>{{ goodsdesc.title }}</h3>
   </div>
   <div>
	   	<div class="desc_content" v-html='goodsdesc.content'>
	   		
	   </div>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     id:this.$route.params.id,
     goodsdesc:[]
    }
  },
  methods:{
  	get_desc(){
  		this.$http.get('api/goods/getdesc/'+this.id).then(res=>{
  			console.log(res.body.message[0])
  			this.goodsdesc = res.body.message[0]
  		})
  	}
  },
  mounted(){
  	this.get_desc()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.goods_desc{
	h3{
		color:rgb(42,161,255);
		text-align: center;
		border-bottom: solid 2px #eee;
		padding:15px 0;
		font-size: 20px;
		margin: 0 5px;
	}
}
.desc_content{
	padding: 0 10px;
	text-align: justify;
	img{
		width: 100% !important;
	}
	p{
		font-weight: bold;
	}
}

</style>
