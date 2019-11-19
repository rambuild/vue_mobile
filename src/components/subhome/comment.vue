<template>
  <div class="comment">
  	<h3>发表评论</h3>
  	<div class="textarea">
  		<textarea placeholder="请输入评论内容" v-model='msg'></textarea>
  	</div>
  	<mt-button type="primary" size="large" @click="pubComment" class='mybtn'>发表评论</mt-button>
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
  import {Toast} from 'mint-ui'
export default {
  data () {
    return {
     pageIndex:1,
     comment:[],
     msg:''
    }
  },
  methods:{
  	getComment(){
  		this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(res=>{
  			this.comment = this.comment.concat(res.body.message)
  		})
  	},
  	loadMore(){
  		this.pageIndex++;
  		this.getComment()
  	},
    pubComment(){
      this.$http.post("api/postcomment/"+this.$route.params.id,{
        content: this.msg.trim()
      }).then(res=>{
        if(res.body.status === 0){
          if(this.msg.trim() != ''){
              var cmt = {
              user_name:"匿名",
              add_time:Date.now(),
              content:this.msg.trim()
            }
            this.comment.unshift(cmt)
            this.msg=''
            Toast({
              message:'评论成功！',
              duration:1000,
              iconClass: 'mint-toast-icon mintui mintui-success'
            })
          }
          else{
            Toast({
              message:'评论不能为空！',
              duration:1000,
              iconClass: 'mint-toast-icon mintui mintui-field-error'
            })
          }
        }
      })
    }
  },
  created(){
  	this.getComment()
  },
  props:['id']/*,
  filters:{
  	dateFormat:function(d){
  		return d.substring(0,10)
  	}
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.comment{
  .mybtn{
    margin:8px 0;
  }
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
