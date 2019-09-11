<template>
  <div class="home">
   
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
  <div class="hh">
   <router-link to=/A >个人博客</router-link>
   <div >
   <router-link to=/B >写博客</router-link>
   </div>
  </div>

  </div>

</template>

<script>
// @ is an alias to /src




export default {
  name: 'home',
 
  components: {
  
  }
}
</script>
<style lang="less">
a {
    font-weight: bold;
    color: #2c3e50;
   
  }
  .hh{
    font-size: 50px;
    margin-top: 200px;

  }
</style>