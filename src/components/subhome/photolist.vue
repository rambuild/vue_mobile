<template>
  <div class='photolist'><!-- 
  		<header class="mui-bar mui-bar-nav">
  			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  			<h1 class="mui-title">顶部选项卡-可左右拖动(webview)</h1>
  		</header> -->

  		<!-- 顶部HEADER区域 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<span>						
						<a class="mui-control-item mui-active" @click='reqphoto(0)'>全部</a>
					</span>
					<span v-for='i in photomsg'>
						<a class="mui-control-item" @click='reqphoto(i.id)'>
							{{ i.title }}
						</a>
					</span>
				</div>
			</div>
		</div>

		<!-- 图片区域 -->

		<ul>
		  <li v-for="item in photolist">
		    <router-link :to="'/home/photolistdetails/'+item.id">
		    	<img v-lazy="item.img_url">
			    <div class="info">
			    	<div class="info-title">
			    		{{item.title}}
			    	</div>
			    	<div class="info-content">
			    		<div v-html='item.zhaiyao'></div>
			    	</div>
			    </div>
		    </router-link>
		  </li>
		</ul>
  </div>
</template>

<script>
import mui from '../../lib/mui/dist/js/mui.js'
export default {
  data () {
    return {
    	photomsg:null,
    	photolist:null
    }
  },
  methods:{
  	getphotolist(){
  		this.$http.get('api/getimgcategory').then(res=>{
  			if(res.body.status === 0){
  				this.photomsg = res.body.message
  				console.log(res.body.message)
  			}
  		})
  	},
  	reqphoto(photoid){
  		this.$http.get('api/getimages/'+photoid).then(res=>{
  			this.photolist = res.body.message
  			console.log(res.body.message)
  		})
  	}
  },
  mounted(){
  	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 
	})
	this.getphotolist()
	this.reqphoto(0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import '../../lib/mui/dist/css/mui.css';
.photolist{
	#slider{
		touch-action: none;
	}
	img{
		width:100%;
		vertical-align: middle;
	}
	img[lazy=loading] {
	  width: 40px;
	  height: 350px;
	  margin: auto;
	}
	ul{
		margin:0;
		padding:0 8px;
		li{
			list-style-type:none;
			margin-bottom:10px;
			background:#eee;
			text-align: center;
			box-shadow: 0 0 6px #999;
			position: relative;
			text-align: center;
			line-height:20px;
			.info{
				position: absolute;
				bottom:0;
				left:0;
				text-align: left;
				background:rgba(100,100,100,0.7);
				color:#fff;
				.info-title{
					font-size: 16px;
				}
				.info-content{
					font-size:12px;
				}
			}
		}
	}
}
</style>
