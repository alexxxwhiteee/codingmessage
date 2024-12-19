<script setup>
import { ref } from 'vue'
import Mybutton from './MyButton.vue'

const manual = ref(true)

const number = ref('')

// function checkNumber(){
//     let x = number.value.length-1
//     if (isNaN(number.value[x]) == true){
//         number.value=number.value.replace(/[^+\d]/g, '')
//     }
//     if(number.value > 999999999){
//         number.value=number.value.slice(0, -1)
//     }
//     if(number.value == 0){
//         number.value=''
//     }
// }



function checkNumber(){
    for(let i=0; i<=number.value.length; i++){
        if (isNaN(number.value[i]) == true){
        number.value=number.value.replace(/[^+\d]/g, '')
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
    


<div class="code" v-if="!manual">

    <div class="code__number">
    <input class="code__input" @keyup="checkNumber" type="input" v-model="number" size=45 placeholder="ВВЕДИТЕ ВАШЕ КОДОВОЕ ЧИСЛО В ЭТО ПОЛЕ" required/>
    <Mybutton class="manual__button2" @click="manual=!manual"> ? </Mybutton>
    </div>

    <div class="code__text">
    <h1>ВАШЕ КОДОВОЕ ЧИСЛО: {{ number }}</h1>
    </div>

    <Mybutton class="code__button"> ПРОДОЛЖИТЬ </Mybutton>

</div>

<div class="manual" v-else="manual">

    <div class="manual__text">
        ДЛЯ ТОГО, ЧТОБЫ ЗАШИФРОВАТЬ СООБЩЕНИЕ ВАМ НУЖНО ВВЕСТИ КОДОВОЕ ЧИСЛО, ПРИДУМАЙТЕ И ЗАПОМНИТЕ ЕГО, 
        ОНО ПОНАДОБИТСЯ В ДАЛЬНЕЙШЕМ ДЛЯ РАСШИФРОВКИ ВАШЕГО СООБЩЕНИЯ, БЕЗ ЭТОГО ЧИСЛА РАСШИФРОВАТЬ ВАШЕ СООБЩЕНИЕ БУДЕТ НЕВОЗМОЖНО.

        <!-- <Mybutton @click="manual=!manual"> ПРОДОЛЖИТЬ </Mybutton> -->
    </div>
    <div class="manual__button">
        <Mybutton class="manual__button1" @click="manual=!manual"> ПРОДОЛЖИТЬ </Mybutton>
    </div>
    
</div>



</template>









<style>

.code,
.manual
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.code__number
{ 
  margin:30px;  
}

.code__input
{
  padding: 10px 15px;
  font-size: 20px;
  color: rgb(8, 224, 0);
  background-color: black;
  border: 1px solid rgb(8, 224, 0);
  text-align: center;
}

.code__input::placeholder {
  color: rgb(118, 118, 118);
}

.code__input:hover,
.code__input:focus
{
  outline: none;
}

.code__text
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
    border: 1px solid rgb(8, 224, 0);;
}

.manual__text
{
    background-color: black;
    margin:30px;
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

.code__button,
.manual__button1
{
    height: 60px;
    width: 200px;
    margin:30px;  
}

.manual__button2
{
    /* border: 1px solid rgb(8, 224, 0); */
    margin: -1px;
}

.manual__button2:hover
{
    /* border: 1px solid rgb(8, 224, 0); */
    margin: -1px 0 -1px 0;
}




</style>