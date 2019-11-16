<template>
  <div>
   <mt-swipe :auto="3000" :speed="2000">
	  <mt-swipe-item></mt-swipe-item>
	  <mt-swipe-item></mt-swipe-item>
	  <mt-swipe-item></mt-swipe-item>
	</mt-swipe>
	<div class="mui-content">
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		   		<router-link to='/home/newsList'>
		   			<a href="#">
			   			<img src="../../static/img/news.png">
				        <div class="mui-media-body">新闻资讯</div>
			    	</a>
		   		</router-link>
		   </li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		   		<a href="#">
			        <img src="../../static/img/picshare.png">
			        <div class="mui-media-body">图片分享</div>
		    	</a>
		   </li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		   		<a href="#">
			        <img src="../../static/img/buy.png">
			        <div class="mui-media-body">商品购买</div>
			    </a>
		   </li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		   		<a href="#">
			        <img src="../../static/img/lvmessage.png">
			        <div class="mui-media-body">留言反馈</div>
		    	</a>
		   </li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		   		<a href="#">
			        <img src="../../static/img/video.png">
			        <div class="mui-media-body">视频专区</div>
		    	</a>
		   </li>
		   <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		   		<a href="#">
			        <img src="../../static/img/contact.png">
			        <div class="mui-media-body">联系我们</div>
		    	</a>
		   </li>
		</ul> 
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import '../lib/mui/dist/css/mui.min.css';
.mint-swipe{
	height: 200px;
	.mint-swipe-item{
		&:nth-child(1){
			background: url(../../static/img/c.jpg) 50% 50%;
		}
		&:nth-child(2){
			background: url(../../static/img/b.jpg) 50% 50%;
		}
		&:nth-child(3){
			background: url(../../static/img/a.jpg) 50% 50%;
		}
	}
}
.mui-grid-view.mui-grid-9[data-v-957c9522]{
	background-color: #fff;
	border:none;
	margin-top: 25px;
	img{
		width:60px;
		height: 60px;
	}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell[data-v-957c9522]{
	border: none;
}
</style>
