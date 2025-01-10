<script setup>
import { ref, onMounted } from 'vue'
import Mybutton from './MyButton.vue'

const div = ref(false)

const count = ref(0)


const head = ref('')

const first = ref('ОБРАБОТКА ДАННЫХ')


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
    head.value=head.value+'.'
    if (head.value == '....'){
            head.value = ''
        }
    if (count.value == 100){
        z = setTimeout( function() {
        div.value = true }, 2000)
        clearInterval(y)
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

        <div v-if="!div" class="ls__loading">

            <span class="ls__loading__text">{{ first }}{{ head }}</span>
            <span class="ls__loading__persents">{{ count }} %</span>

        </div>

        <div v-if="div" class="ls__button"> 
        
            <span class="ls__button__message">ОБРАБОТКА ДАННЫХ ПРОШЛА УСПЕШНО!</span>
            <Mybutton class="ls__button__active" @click="$emit('changeManual')"> ПРОДОЛЖИТЬ </Mybutton>
        
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

.ls__loading__text,
.ls__button__message
{
    font-size: 40px;
    margin: 20px;
}

.ls__loading__persents
{
    font-size: 60px;
    margin: 20px;
}

.ls__button__active
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

.ls__button__active:hover
{
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
}



</style>