<script setup>
import Mybutton from './MyButton.vue'

const manual = defineModel('manual')

</script>

<template>

    <div class="manual">

        <div class="manual__text">
            <slot />
        </div>

        <div class="manual__buttons">
            <Mybutton class="manual__button1" @click="manual=!manual"> ПРОДОЛЖИТЬ </Mybutton>
        </div>

    </div>

</template>

<style>

.manual
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.manual__text
{
    background-color: black;
    margin: 30px;
    text-align: center;
    width: 40vw;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    font-size: 20px;
    line-height: 50px;
    border: 1px solid rgb(8, 224, 0);
}

.manual__button1
{
    color: black;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgb(8, 224, 0);
    font-size: 20px;
    border: 0;
    height: 60px;
    width: 200px;
    margin:30px; 
}

.manual__button1:hover
{
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
}

</style>