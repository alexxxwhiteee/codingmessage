<script setup>
import { ref, onMounted } from 'vue'
import Mybutton from './MyButton.vue'

const loadingProcess = ref(false)

const count = ref(0)

const dots = ref('')

const text = 'ОБРАБОТКА ДАННЫХ'

function persentsCounter(){
    let x = setInterval(function(){
    count.value++
    if (count.value == 100){
            clearInterval(x)
        }
        }, 50)
}

function loadingMessage(){
    let y = setInterval(function(){
        dots.value=dots.value+'.'
    if (dots.value == '....'){
        dots.value = ''
        }
    if (count.value == 100){
     let z = setTimeout( function() {
        loadingProcess.value = true }, 2000)
    }
        }, 400)
}

onMounted(() => { 
    loadingMessage(),
    setTimeout(persentsCounter, 2000)
})

</script>

<template>

    <div class="loading-screen">

        <div v-if="!loadingProcess" class="ls__loading">

            <span class="ls__loading-text">{{ text }}{{ dots }}</span>
            <span class="ls__loading-persents">{{ count }} %</span>

        </div>

        <div v-if="loadingProcess" class="ls__button"> 
        
            <span class="ls__button-message">ОБРАБОТКА ДАННЫХ ПРОШЛА УСПЕШНО!</span>
            <Mybutton class="ls__button-active" @click="$emit('changeManual')"> ПРОДОЛЖИТЬ </Mybutton>
        
        </div>

    </div>

</template>

<style>

.loading-screen
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.ls__loading,
.ls__button
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
}

.ls__loading-text,
.ls__button-message
{
    font-size: 40px;
    margin: 20px;
}

@media screen and (max-width: 1000px) {
    .ls__loading-text,
    .ls__button-message
    {
        font-size: 30px;
        margin: 20px;
    }
    .ls__loading-persents
{
    font-size: 50px;
    margin: 20px;
}
}

@media screen and (max-width: 600px) {
    .ls__loading-text,
    .ls__button-message
    {
        font-size: 25px;
        margin: 20px;
    }
    .ls__loading-persents
    {
        font-size: 40px;
        margin: 20px;
    }
}

.ls__loading-persents
{
    font-size: 60px;
    margin: 20px;
}

.ls__button-active
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

.ls__button-active:hover
{
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
}

</style>