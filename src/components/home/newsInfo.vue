<template>
  <div class='newsInfo'>
	<h3>{{newsInfo.title}}</h3>
	<p>
		<span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
		<span>点击{{newsInfo.click}}次</span>
	</p>
	<div v-html="newsInfo.content" class="newsContent"></div>
  <v-comment :id='this.id'></v-comment>
  </div>
</template>

<script>	
import comment from '../subhome/comment'

export default {
  data () {
    return {
      id:this.$route.params.id,
      newsInfo:{}
    }
  },
  methods:{
  	getNewsInfo(){
  		this.$http.get('api/getnew/'+ this.id).then(res=>{
  			/*this.newsInfo=res.*/
  			this.newsInfo=res.body.message[0]
  		})
  	}
  },
  mounted(){
  	this.getNewsInfo()
  },
  components:{
  	'v-comment':comment
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.newsInfo{
	h3{
		text-align: center;
		color:red;
	}
	p{
		display: flex;
		justify-content: space-between;
		padding:0 6px;
	}
	.newsContent{
		padding:6px;
	}
		
}



</style>
