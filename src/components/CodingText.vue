<script setup>
import { ref } from 'vue'
import Manual from './Manual.vue'
import Mybutton from './MyButton.vue'


const manual = ref(true)

const minLength = ref(1)
const maxLength = ref(99)

const text = ref('')


const textSymbols = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", 
                        "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я",
                            ".", ",", ":", "-", "!", "?", " ", "\"", "\'", "(", ")",
                                "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]


function checkText(){
    
    let x = Array.from(text.value.toUpperCase())
    

    let textEdited = x.filter(symbol => textSymbols.includes(symbol)).join('');

    text.value=textEdited
}



</script>


<template>
    
    <div>

        <div class="code" v-if="!manual">

            <div class="coding__text">
                <textarea class="coding__text-area" @keyup="checkText" type="input" v-model="text" 
                :minlength="minLength" :maxlength="maxLength" cols="40" rows="3" placeholder="ВВЕДИТЕ ВАШЕ СООБЩЕНИЕ В ЭТО ПОЛЕ">
                </textarea>
                <Mybutton class="text__button1" @click="manual=!manual"> ? </Mybutton>
            </div>
<h1>TEXT {{ text }}</h1>
            <Mybutton class="text__button2" @click="$emit('nextComponent')"> ПРОДОЛЖИТЬ </Mybutton>

        </div>

        <div v-else="manual">

            <Manual v-model:manual="manual">
                КОДОВОЕ ЧИСЛО УСПЕШНО СОХРАНЕНО! <br /> 
                ДАЛЕЕ ВАМ НУЖНО ВВЕСТИ СООБЩЕНИЕ КОТОРОЕ ВЫ ХОТИТЕ ЗАШИФРОВАТЬ.
            </Manual>

        </div>

    </div>

</template>


<style>


.code
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.coding__text
{ 

  margin:30px; 
}

.coding__text-area
{
  padding: 100px 150px;
  font-size: 20px;
  color: rgb(8, 224, 0);
  background-color: black;
  border: 1px solid rgb(8, 224, 0);
  text-align: center;
  resize: none;
  display: flex;
}

.coding__text-area:hover,
.coding__text-area:focus
{
  outline: none;
}

.text__button1,
.text__button2
{
    color: black;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgb(8, 224, 0);
    font-size: 20px;
}

.text__button1
{
  width: 100%;
  border: 1px solid rgb(8, 224, 0);
}

.text__button2
{
  border: 0;
  height: 60px;
  width: 200px;
  margin:30px;  
}

.text__button1:hover,
.text__button2:hover
{
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
}

</style>