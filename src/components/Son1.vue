<script setup>
import { Store } from '@/store';
import { useChannelStore } from '@/store/channel';
const useStore = Store()
const ChannelStore = useChannelStore()

</script>

<template>
    <div class="row">
      <h3>我是Son1 - {{ useStore.count }}</h3>
      <button @click="useStore.add" class="btn">+</button>
      <button @click="ChannelStore.getList">获取频道数据</button>
      <ul>
        <li v-for="item in ChannelStore.channelList" key="item">{{item.name}}</li>
        <li>2</li>
      </ul>
    </div>
</template>

<style scoped>
</style>
