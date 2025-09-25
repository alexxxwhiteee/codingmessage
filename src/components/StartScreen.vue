<script setup>
import AppLink from './AppLink.vue';

</script>

<template>

  <div class="start-screen">

    <div class="ss__buttons">
      <AppLink to="/codingmessage" class="ss__button1"> ЗАШИФРОВАТЬ СООБЩЕНИЕ </AppLink>
      <AppLink to="/uncodingmessage" class="ss__button2"> РАСШИФРОВАТЬ СООБЩЕНИЕ </AppLink>
    </div>

  </div>

</template>

<style>

@keyframes Appearance 
{
    0% {opacity: 0;}
    90% {opacity: 0;}
    100% {opacity: 1;}
}

.start-screen
{
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.ss__buttons
{
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
  animation-name: Appearance;
  animation-duration: 2.8s;
  transition-timing-function: ease-in-out;
}

@media screen and (max-width: 900px) {
  .ss__buttons
  {
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: space-around;
  }
}

.ss__button1,
.ss__button2
{
    border: 0;
    width: 300px;
    height: 100px;
}

</style>