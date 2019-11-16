<template>
  <div class="comment">
  	<h3>发表评论</h3>
  	<div class="textarea">
  		<textarea placeholder="请输入评论内容"></textarea>
  	</div>
  	<mt-button type="primary" size="large">发表评论</mt-button>
	<div class="cmtList" v-for="(item,index) in comment">
		<div class="cmt_title">
			<span>第{{index+1}}楼</span><span>用户：{{item.user_name}}</span><span>发表时间：{{item.add_time | dateFormat}}</span>
		</div>
		<div class="cmt_content">
			<p>{{item.content}}</p>
		</div>
	</div>
  	<mt-button type="primary" size="large" plain @click='loadMore'>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
     pageIndex:1,
     comment:[]
    }
  },
  methods:{
  	getComment(){
  		this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(res=>{
  			this.comment = this.comment.concat(res.body.message)
  			console.log(this.comment)
  		})
  	},
  	loadMore(){
  		this.pageIndex++;
  		this.getComment()
  	}
  },
  created(){
  	this.getComment()
  },
  props:['id'],
  filters:{
  	dateFormat(d){
  		return d.substring(0,10)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.comment{
	padding:6px;
	h3{
		margin-bottom:6px;
		padding-bottom:10px;
		border-bottom:solid 2px #999;
	}
	textarea{
		height:50px;
		width:98%;
	}
	.textarea{
		text-align: center;
	}
	.cmtList{
		.cmt_title{
			font-size: 13px;
			display: flex;
			justify-content: space-between;
			background:#ccc;
			padding:6px 0;
			border-radius:3px;
		}
	}
	p{
		text-align: justify;
	}
}

</style>
