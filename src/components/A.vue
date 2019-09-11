<template>
  <div id='person'>
    
    <x-header >个人博客</x-header>
   <group title="">
      <x-input label-width="4em"  placeholder="搜索" v-model="search"></x-input>
    </group>

     
       
      <div v-for="(blog,index) in filtereBlogs" :key='index' class="con">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
        </div>
     
  
       
      
  
     
    
  </div>
</template>

<script>

import { XHeader,Group, Cell, CellBox } from 'vux'
  import { XInput } from 'vux'
export default {
  name:'person',
  components: {
    XHeader,
       Group,
    Cell,
    CellBox,
     XInput, 
  },

  data () {
    return {
      results: [],
      blogs:[],
search:''
    }
  },
  created(){
    this.$http.get('http://localhost:8080/mock/posts.json')
    .then(function(data){
      console.log(data);
this.blogs=data.body;
    })
  },

  computed:{
    filtereBlogs:function(){
      return this.blogs.filter((blog) =>{
return blog.title.match(this.search);
      })
    }
  }

}


</script>


<style>

.overwrite-title-demo {
  margin-top: 5px;

}
.con{
  padding: 10px;
  margin:10px 0;
  box-sizing:border-box;
  border-bottom:solid 1px #D7D6DC ;
  color: #2c3e50;
  
  
  
}
 
  
</style>