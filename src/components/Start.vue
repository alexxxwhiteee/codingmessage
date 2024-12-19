<script setup>
import { ref } from 'vue'
import Mybutton from './MyButton.vue'
import Codingmessage from './CodingMessage.vue'
import Uncodingmessage from './UncodingMessage.vue'

const component = defineModel('Component')

function changeComponent(name){
    component.value = name
}

</script>



<template>




<!-- <div class="main">
  <div class="main__button">
  <Mybutton class="main__button1" @click="$emit('change', 1)"> ЗАШИФРОВАТЬ СООБЩЕНИЕ </Mybutton>
  <Mybutton class="main__button2" @click="$emit('change', 2)"> РАСШИФРОВАТЬ СООБЩЕНИЕ </Mybutton>
  </div>
</div> -->

<div class="main">
  <div class="main__button">
  <Mybutton class="main__button1" @click="changeComponent(Codingmessage)"> ЗАШИФРОВАТЬ СООБЩЕНИЕ </Mybutton>
  <Mybutton class="main__button2" @click="changeComponent(Uncodingmessage)"> РАСШИФРОВАТЬ СООБЩЕНИЕ </Mybutton>
  </div>
</div>





</template>





<style>



/* @keyframes Appearance 
{
    0% {opacity: 0;}
    90% {opacity: 0;}
    100% {opacity: 1;}
} */

.main
{
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.main__button
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  animation-name: Appearance;
  animation-duration: 2.9s;
  transition-timing-function: ease-in-out;
}

.main__button1,
.main__button2
{
    width: 300px;
    height: 100px;
    margin:100px;
}





</style>