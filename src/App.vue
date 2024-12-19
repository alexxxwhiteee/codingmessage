<script setup>
import { ref } from 'vue'
import Start from './components/Start.vue'
// import Codingmessage from './components/CodingMessage.vue'
// import Uncodingmessage from './components/UncodingMessage.vue'




const activeComponent= ref(Start)

// function changeComponent(x){
//   if (x == 1){
//     activeComponent.value = Codingmessage
//   }
//   if (x == 2){
//     activeComponent.value = Uncodingmessage
//   }
// }




</script>



<template>


<!-- <component :is="activeComponent" @change="changeComponent"></component> -->

<component :is="activeComponent"  v-model:Component="activeComponent"></component>




</template>









<style>



</style>