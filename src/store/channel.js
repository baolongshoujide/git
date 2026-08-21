import axios from 'axios'
import {ref} from'vue'
import {defineStore} from 'pinia'
export  const useChannelStore = defineStore('channel',()=>{
    const channelList = ref([])
    
    const getList = async()=>{
        const {data:{data}} = await axios.get('http://geek.itheima.net/v1_0/channels')
        console.log(data);
        channelList.value =data.channels
        console.log(channelList.value);
        
    }


    return{ channelList,getList}
})
