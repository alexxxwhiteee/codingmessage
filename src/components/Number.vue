<script setup>
import { ref } from 'vue';
import Mybutton from './MyButton.vue'

defineProps({
  clss: String,
})

const number = defineModel('number')

const manual = defineModel('manual')


</script>

<template>

    <div class="number">
        
        <div class="number__div">
            <input class="number__input" @input="$emit('checkNumber')" type="input" v-model="number" size=45 maxlength="9" placeholder="ВВЕДИТЕ ВАШЕ КОДОВОЕ ЧИСЛО В ЭТО ПОЛЕ"/>
            <Mybutton class="number__button1" @click="manual=!manual"> ? </Mybutton>
        </div>

        <div class="number__text">
        <h1>ВАШЕ КОДОВОЕ ЧИСЛО: {{ number }}</h1>
        </div>

        <Mybutton :class="clss" @click="$emit('nextComponent')"> ПРОДОЛЖИТЬ </Mybutton>

    </div>

</template>

<style>

.number
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.number__div
{ 
  margin:30px;  
}

.number__input
{
  padding: 10px 15px;
  font-size: 20px;
  color: rgb(8, 224, 0);
  background-color: black;
  border: 1px solid rgb(8, 224, 0);
  text-align: center;
}

.number__input::placeholder {
  color: rgb(118, 118, 118);
}

.number__input:hover,
.number__input:focus
{
  outline: none;
}

.number__text
{
  background-color: black;
  margin:30px;
  text-align: center;
  height: 50px;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid rgb(8, 224, 0);
}

.number__button1,
.number__button2__enabled
{
  color: black;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgb(8, 224, 0);
  font-size: 20px;
}

.number__button1
{
  width: 100%;
  border: 1px solid rgb(8, 224, 0);
}

.number__button2__enabled
{
  border: 0;
  height: 60px;
  width: 200px;
  margin:30px;
  pointer-events: auto;
}

.number__button2__disabled
{
  color: rgb(118, 118, 118);
  border: 1px solid rgb(8, 224, 0);
  background-color: black;
  height: 60px;
  width: 200px;
  margin:30px;
  font-size: 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.number__button1:hover,
.number__button2__enabled:hover
{
  color: rgb(8, 224, 0);
  background-color: black;
  border: 1px solid rgb(8, 224, 0);
}

</style>