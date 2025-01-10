<script setup>
import { ref, onMounted } from 'vue'
import Mybutton from './MyButton.vue'

const minLength = ref(1)
const maxLength = defineModel('maxLength')

const manual = defineModel('manual')

const text = defineModel('text')

const height = ref(1)

const buttonClass = ref('text__button2__disabled')

const text__textArea = ref({
    height: '25px',
    padding: '100px 200px',
    transition: '1s ease-in-out'
})

function size(){
    let x = text.value.length
    let y = Math.ceil(x/40)
    let d = Math.abs(y-height.value)
    let z = parseInt(text__textArea.value.height, 10)
    if (y > height.value){
        text__textArea.value.height = z + (20*d) + 'px'
        height.value = y
    }
    if (y < height.value ){
        text__textArea.value.height = z - (20*d) + 'px'
        height.value = y
    }
    if(x == 0){
      buttonClass.value = "text__button2__disabled"
    }
    if(x >= 1){
      buttonClass.value = "text__button2__enabled"
    }
}

onMounted(() => { 
    size() 
})

</script>

<template>

    <div class="text">

        <div class="text__div">
            <textarea class="text__text-area" :style="text__textArea" @keyup="size()" @input="$emit('checkText')" type="input" v-model="text" 
            :minlength="minLength" :maxlength="maxLength" cols="40" rows="3" placeholder="ВВЕДИТЕ ВАШЕ СООБЩЕНИЕ В ЭТО ПОЛЕ">
            </textarea>
            <Mybutton class="text__button1" @click="manual=!manual"> ? </Mybutton>
        </div>

        <Mybutton :class="buttonClass" @click="$emit('nextComponent')"> ПРОДОЛЖИТЬ </Mybutton>

    </div>

</template>

<style>

.text
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text__div
{ 
    margin:30px; 
}

.text__text-area
{
  font-size: 20px;
  color: rgb(8, 224, 0);
  background-color: black;
  border: 1px solid rgb(8, 224, 0);
  text-align: center;
  resize: none;
  display: flex;
  justify-content: center;
  align-items: center;
  scrollbar-width: none;
  overflow: hidden;
}

.text__text-area:hover,
.text__text-area:focus
{
  outline: none;
}

.text__button1,
.text__button2__enabled
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

.text__button2__enabled
{
  border: 0;
  height: 60px;
  width: 200px;
  margin:30px;
  pointer-events: auto;
}

.text__button2__disabled
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

.text__button1:hover,
.text__button2__enabled:hover
{
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
}


</style>