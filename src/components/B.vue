<template>
  <div>
    <x-header>写博客</x-header>

    <group :title="'我的博客'">
      <x-input :placeholder="'标题'" v-model="obj.txt" required></x-input>
      <x-textarea :max="400" name="description" :placeholder="'博客内容'" v-model="obj.content"></x-textarea>
    </group>

     <W/>
       
    <!-- <button v-on:click="see=!see">click {{see}}</button> -->
    <div id="preview">
      <h2>博客预览</h2>
      <p>博客标题：{{obj.txt}}</p>
      <p>博客内容：{{obj.content}}</p>
    </div>
   
  </div>
</template>

<script>
// http://jsonplaceholder.typicode.com/
// http://jsonplaceholder.typicode.com/posts
import { XHeader } from "vux";
import  W  from './W';
import{XInput,Box, Group, XButton, XTextarea } from "vux";
export default {
  components: {
    Box,
    XHeader,
    XButton,
    Group,
    XInput,
    XTextarea,
    W
  },
  data() {
    return {
      obj: {
        txt: "",
        content: "",
     
      }
    };
  }



}
</script>



<style lang="less">
.overwrite-title-demo {
  margin-top: 10px;
}
#preview{
  color:#2c3e50;

}
p{
  text-align: left;
  margin: 5px;
}
</style>