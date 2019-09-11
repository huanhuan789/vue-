<template>
  <div id='app'>
   
    <!-- <div id="nav">
       <router-link to="/"></router-link> 
      <router-link to="/about"></router-link> -->
    <!-- </div>  -->

    <router-view/>

  </div>
</template>
<script>
import Home from './views/Home.vue'

export default {
  components:{
  Home,
 
  }
}
</script>

<style lang="less">

body{
  text-align: center;
   @import '~vux/src/styles/reset.less';
}



</style>
