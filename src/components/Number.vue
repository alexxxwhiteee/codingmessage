<script setup>
import Mybutton from './MyButton.vue'
import dataObject from '@/assets/dataStorage.js'

const number = defineModel('number')

const manual = defineModel('manual')

const buttonClass = defineModel('buttonClass')

const numberSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function checkNumber(){
    let x = Array.from(number.value)
    let numberEdited = x.filter(symbol => numberSymbols.includes(symbol)).join('');
    number.value = numberEdited
    for( let i = 0; i < numberSymbols.length; i++){
    if (number.value[0] == 0 || number.value.length == 0){
          number.value=''
          buttonClass.value="number__button2_disabled"
    }
    else if (number.value[0] == numberSymbols[i]) {
        buttonClass.value="number__button2_enabled"
    }
  }
    
    dataObject.number = numberEdited.split('').map(item => +item).reduce((acc, number) => acc + number)
    if (dataObject.number <= 52){
        return
    }
    dataObject.number = dataObject.number.toString().split('').map(item => +item).reduce((acc, number) => acc + number)
}

</script>

<template>

    <div class="number">

        <div class="number__form">
            <input class="number__input" @input="checkNumber()" type="input" v-model="number" size=45 maxlength="9" placeholder="ВВЕДИТЕ ВАШЕ КОДОВОЕ ЧИСЛО В ЭТО ПОЛЕ"/>
            <Mybutton class="number__button1" @click="manual=!manual"> ? </Mybutton>
        </div>

        <div class="number__text">
        <h1>ВАШЕ КОДОВОЕ ЧИСЛО: {{ number }}</h1>
        </div>

        <Mybutton :class="buttonClass" @click="$emit('nextComponent')"> ПРОДОЛЖИТЬ </Mybutton>

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

.number__form
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

.number__button1
{
  width: 100%;
}

.number__button2_enabled
{
  height: 60px;
  width: 200px;
  margin:30px;
  pointer-events: auto;
}

.number__button2_disabled
{
  color: rgb(118, 118, 118);
  background-color: black;
  height: 60px;
  width: 200px;
  margin:30px;
  pointer-events: none;
}

</style>