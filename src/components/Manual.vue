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
    font-size: 20px;
    line-height: 50px;
    border: 1px solid rgb(8, 224, 0);
}

@media screen and (max-width: 1200px) {
    .manual__text
    {
        font-size: 20px;
        line-height: 20px;
    }
}

@media screen and (max-width: 650px) {
    .manual__text
    {
        font-size: 15px;
        line-height: 15px;
    }
    .manual__button1
    {
        font-size: 10px;
    }
}

.manual__button1
{
    height: 60px;
    width: 200px;
    margin:30px; 
}

</style>