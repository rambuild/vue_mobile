<template>
  <div>

  	<ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList">
			<router-link :to="'/home/newsInfo/'+item.id">
				<img class="mui-media-object mui-pull-left" src="../../../static/img/shuijiao.jpg">
				<div class="mui-media-body">
					<p>{{item.title}}</p>
					<p class="mui-publishContent">
						<span>发表时间：{{item.add_time | dateFormat}}</span><span>点击：{{item.click}}</span>
					</p>
				</div>
			</router-link>
		</li>
	</ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
     newsList:[]
    }
  },
  methods:{
  	getNewsList(){
  		this.$http.get('api/getnewsList').then(res=>{
  			this.newsList=res.data.message
  		})
  	}
  	
  },
  created(){
  	this.getNewsList();
  }
}
</script>


<style lang="scss" scoped>

@import '../../lib/mui/dist/css/mui.css';

.mui-media-body{
	background-size: 10%;
	text-decoration: none;
	text-decoration:none;
	p{		
		font-size: 16px;
		color:#000;
		margin-bottom:5px;
	}
	span{
		font-size:12px;
		color:rgb(38,162,255);
	}
	.mui-publishContent{
		display: flex;
		justify-content: space-between;
	}
}
</style>
