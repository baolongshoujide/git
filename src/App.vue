<script setup>
  import Son1 from './components/Son1.vue';
  import Son2 from './components/Son2.vue';
  import {Store} from '@/store'
  import {storeToRefs} from 'pinia'
  const useone = Store()
  console.log(useone);
  // 解构后丢失响应式
  const {count,double} = storeToRefs(useone)
</script>

<template>
    <div class="box">
      <h3>App.vue根组件 - {{ count }}-{{ double }}</h3>
      <Son1></Son1>
      <Son2></Son2>
    </div>
</template>

<style scoped>
.box{
  width: 400px;
  
  background-color: #fff;
  border: 1px solid black;
  margin: auto;
}
</style>
