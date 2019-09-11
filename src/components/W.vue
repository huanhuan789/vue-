<template>
  <div>
     
    
    <div style="padding:15px;">
      <x-button @click.native="showPosition('top')" type="primary">提交</x-button>
      
    </div>

    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="添加成功 " :position="position">{{ 'Basic Usage' }}</toast>

    
  </div>
</template>



<script>
import {XInput, Toast, XButton, } from 'vux'
export default {
    
  components: {
   
    Toast,
   
    XButton,
    XInput,
   
  },
  methods: {
    showPosition (position) {
      this.position = position
      this.showPositionValue = true
    } 
   
  },
  data () {
    return {
 
      position: 'default',
      showPositionValue: false
    }
  }

  }


</script>