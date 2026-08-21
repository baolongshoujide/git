<script setup>
import { Store } from '@/store';
const useStore = Store()

</script>

<template>
    <div class="row">
      <h3>我是Son1 - {{ useStore.count }}</h3>
      <button @click="useStore.add" class="btn">+</button>
    </div>
</template>

<style scoped>
</style>
