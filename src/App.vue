<script setup>
  import Son1 from './components/Son1.vue';
  import Son2 from './components/Son2.vue';
</script>

<template>
    <div class="box">
      <h3>App.vue根组件 - 0</h3>
      <Son1></Son1>
      <Son2></Son2>
    </div>
</template>

<style scoped>
.box{
  width: 400px;
  height: 400px;
  background-color: #fff;
  border: 1px solid black;
  margin: auto;
}
</style>
