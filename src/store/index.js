import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const Store = defineStore('one',()=>{
    const count = ref(100)
    const count2 = ref(100)

    const add =()=>{
        count.value++
    }
    const sub = ()=> count.value--

    const double = computed(()=>(count.value *2))




    return{count,count2,add,sub,double}
},{
    // persist:true
    persist:{
        // 修改本地存储的名字
        key:'index.one',
        pick:['count2']
    }
})