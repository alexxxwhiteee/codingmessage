<script setup>
import { ref, onMounted } from 'vue'
import Mybutton from './MyButton.vue'

const minLength = ref(1)
const maxLength = defineModel('maxLength')

const manual = defineModel('manual')

const text = defineModel('text')

const height = ref(1)

const buttonClass = ref('text__button2_disabled')

const text__textArea = ref({
    height: '25px',
    padding: '100px 10%',
    transition: '1s ease-in-out'
})

function size(){
    let x = text.value.length
    if(x == 0){
      buttonClass.value = "text__button2_disabled"
    }
    else {
      buttonClass.value = "text__button2_enabled"
    }

    let y
    if (x >= 100){
        y = Math.ceil(x/40)
    }
    else {
        y = Math.ceil(x/86)
    }

    let d = Math.abs(y-height.value)
    let z = parseInt(text__textArea.value.height, 10)
    if (y > height.value){
        text__textArea.value.height = z + (20*d) + 'px'
        height.value = y
    }
    else {
        text__textArea.value.height = z - (20*d) + 'px'
        height.value = y
    }
}

onMounted(() => { 
    size() 
})

</script>

<template>

    <div class="text">

        <div class="text__form">
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

.text__form
{ 
    margin:30px; 
    display: flex;
    flex-direction: column;
    width: 60%;
}

textarea
{
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
    resize: none;
    scrollbar-width: none;
    overflow: hidden;
    border-radius: 0px;
}

@media screen and (max-width: 900px) {
    textarea{
        font-size: 15px;
    }
}

@media screen and (max-width: 500px) {
    textarea{
        font-size: 10px;
    }
}

.text__text-area:hover,
.text__text-area:focus
{
  outline: none;
}

.text__button1
{
  width: 100%;

}

.text__button2_enabled
{
  height: 60px;
  width: 200px;
  margin:30px;
  pointer-events: auto;
}

.text__button2_disabled
{
  color: rgb(118, 118, 118);
  background-color: black;
  height: 60px;
  width: 200px;
  margin:30px;
  pointer-events: none;
}

</style>