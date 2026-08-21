<script setup>
import { Store } from '@/store';
const useStore = Store()

</script>

<template>
    <div class="row">
      <h3>我是Son2 - {{useStore.count}}</h3>
      <button @click="useStore.sub " class="btn">-</button>
    </div>
</template>

<style scoped>
</style>
