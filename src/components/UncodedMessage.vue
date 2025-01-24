<script setup>
import { ref, onMounted } from 'vue'
import Loadingscreen from './LoadingScreen.vue'
import Mybutton from './MyButton.vue'
import dataObject from '@/assets/dataStorage.js'

const manual = ref(true)

function loadingScreen(){
    manual.value = false
}

function copiedText() {
    navigator.clipboard.writeText(text.value);
}

function reloadPage(){
   return location.reload()
}

const arr = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", ".", ",", ":", "-", "!", "?", " ", "(", ")", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const text = ref('');

function uncodedMessage(){
    let x = [...arr.slice(dataObject.number-1, arr.length), ...arr.slice(0, dataObject.number-1)]
    let y = dataObject.text.split(', ').map(string => +string)
    let z = []

    for(let i=0; i<y.length; i++){
        for(let j=0; j<x.length; j++){
            if(y[i] == j){
                z.push(x[j])
            }
        }
    }
    text.value=z.join('')
}

onMounted(() => { 
    uncodedMessage()
})

</script>

<template>

    <div>

        <div class="uncoded-message" v-if="!manual">

            <div class="um__message">
            
                <div class="um__text">
                    {{ text }}
                </div>
                
                <Mybutton class="um__button" @click="copiedText()"> СКОПИРОВАТЬ СООБЩЕНИЕ </Mybutton>

            </div>

            <Mybutton  class="um__ss-button" @click="reloadPage"> ВЫЙТИ </Mybutton>

        </div>

        <div v-else="manual">
        
            <Loadingscreen @changeManual="loadingScreen()" />

        </div>

    </div>
    

</template>

<style>

.uncoded-message
{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.um__message
{
    margin: 50px 50px;
    font-size: 20px;
}

.um__text
{
    height: 30vh;
    width: 40vw;
    padding: 50px 80px;
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
}

.um__button
{
    width: 100%;
}

.um__ss-button
{
    height: 60px;
    width: 200px;
    margin:30px; 
}

</style>