<template>
  <div>
   <comment :id='id'></comment>
  </div>
</template>

<script>
import comment from './comment'
export default {
  data () {
    return {
     id:this.$route.params.id
    }
  },
  components:{
  	comment
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
