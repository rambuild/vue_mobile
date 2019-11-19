
<template>
  <div class="photolistdetail">
  	<!-- header -->
	<h3>{{ photodetails.title }}</h3>
	<p class='subtitle'>
		<span class="pubtime">发表时间：{{photodetails.add_time | dateFormat}}</span>
		<span>点击{{photodetails.click}}次</span>
	</p>
	<!-- 内容区域 -->
	<div class="thumbs">
		<vue-preview :slides="piclist" @close="handleClose"></vue-preview>
	</div>
	<div class='content'>
		<div v-html="photodetails.content"></div>
	</div>
	<!-- 评论组件 -->
	<v-comment :id='id'></v-comment>
  </div>
</template>

<script>
import comment from './comment'
export default {
  data () {
    return {
    	photodetails:[],
    	id:this.$route.params.id,
        piclist:[]
    }
  },
  methods:{
  	getinfo(id){
  		this.$http.get('api/getimageInfo/'+id).then(res=>{
  			this.photodetails = res.body.message[0]
  		})
  	},
  	handleClose(){

  	},
  	getthumbs(id){
  		this.$http.get('api/getthumimages/'+id).then(res=>{/*
  			console.log(res.body.message)*/
  			res.body.message.forEach(i=>{
  				i.w=600,
  				i.h=500,
  				i.msrc=i.src
  			})
  			this.piclist = res.body.message
  	console.log(this.piclist)
  		})
  	}
  },
  mounted(){
  	this.getinfo(this.id)
  	this.getthumbs(this.id)
  },/*
  filters:{
  	dateFormat(d){
  		return d.substring(0,10);
  	}
  },*/
  components:{
  	'v-comment':comment
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.photolistdetail{
	h3{
		font-size: 16px;
		color:rgb(38,162,255);
		text-align: center;
	}
	.subtitle{
		display: flex;
		justify-content:space-between;
		font-size: 14px;
		margin:0 12px;
		color:#666;
		border-bottom:solid 2px #666;
		padding-bottom:10px;
	}
	.content{
		padding:0 16px;
		text-align: justify;

	}
	.thumbs{
		/deep/ .my-gallery{
			display: flex;
			flex-wrap: wrap;
			figure{
				width:30%;
				margin:6px;
				img{
					width:100%;
				}
			}
		}

	}
}

</style>
