<script setup>
import Mybutton from './MyButton.vue'

const manual = defineModel('manual')

const number = defineModel('number')

function checkNumber(){
    for(let i=0; i<=number.value.length; i++){
        if (isNaN(number.value[i]) == true){
        number.value=number.value.replace(/[^0-9]/g, '')
    }
    }
    if(number.value > 999999999){
        number.value=number.value.slice(0, -1)
    }
    if(number.value == 0){
        number.value=''
    }
}

</script>

<template>

    <div class="number">
        
        <div class="number__div">
            <input class="number__input" @keyup="checkNumber" type="input" v-model="number" size=45 placeholder="ВВЕДИТЕ ВАШЕ КОДОВОЕ ЧИСЛО В ЭТО ПОЛЕ"/>
            <Mybutton class="number__button1" @click="manual=!manual"> ? </Mybutton>
        </div>

        <div class="number__text">
        <h1>ВАШЕ КОДОВОЕ ЧИСЛО: {{ number }}</h1>
        </div>

        <Mybutton class="number__button2" @click="$emit('nextComponent')"> ПРОДОЛЖИТЬ </Mybutton>

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
.number__button2
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

.number__button2
{
  border: 0;
  height: 60px;
  width: 200px;
  margin:30px;  
}

.number__button1:hover,
.number__button2:hover
{
  color: rgb(8, 224, 0);
  background-color: black;
  border: 1px solid rgb(8, 224, 0);
}

</style>