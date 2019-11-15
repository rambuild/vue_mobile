<template>
  <div>

  	<ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" src="../../../static/img/shuijiao.jpg">
				<div class="mui-media-body">
					<p>幸福</p>
					<span>发表时间：{{date}}</span>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" src="../../../static/img/muwu.jpg">
				<div class="mui-media-body">
					木屋
					<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" src="../../../static/img/cbd.jpg">
				<div class="mui-media-body">
					CBD
					<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
				</div>
			</a>
		</li>
	</ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
     date:null
    }
  },
  methods:{
  	getDate(){
  		var date = new Date();
  		var year = date.getFullYear(),
  			month = date.getMonth()+1,
  			day = date.getDate();
  		var dateFormat= year+'-'+month+'-'+day
  		this.date = dateFormat;
  	}
  },
  created(){
  	this.getDate();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../../lib/mui/dist/css/mui.min.css';

.mui-media-body p{
	font-size: 15px;
}
</style>
