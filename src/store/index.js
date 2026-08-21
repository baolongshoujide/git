import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const Store = defineStore('one',()=>{
    const count = ref(100)

    const add =()=>{
        count.value++
    }
    const sub = ()=> count.value--

    const double = computed(()=>(count.value *2))




    return{count,add,sub,double}
})