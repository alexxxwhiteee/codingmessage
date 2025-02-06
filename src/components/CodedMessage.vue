<script setup>
import { ref, onMounted } from 'vue'
import Loadingscreen from './LoadingScreen.vue'
import Mybutton from './MyButton.vue'
import { useDataStore } from '@/stores/DataStore';

const dataStore = useDataStore()

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

function codedMessage(){
    let x = [...arr.slice(dataStore.number-1, arr.length), ...arr.slice(0, dataStore.number-1)]
    let y = dataStore.text.split('')
    let z = []

    for(let i=0; i<y.length; i++){
        for(let j=0; j<x.length; j++){
            if(y[i] == x[j]){
                z.push(j)
            }
        }
    }
    text.value=z.join(', ')
}

onMounted(() => { 
    codedMessage()
})

</script>

<template>

    <div>

        <div class="coded-message" v-if="!manual">

            <div class="cm__message">
            
            <div class="cm__text">
                 {{ text }}
            </div>
            
            <Mybutton class="cm__button" @click="copiedText()"> СКОПИРОВАТЬ СООБЩЕНИЕ </Mybutton>

            </div>

           <Mybutton  class="cm__ss-button" @click="reloadPage"> ВЫЙТИ </Mybutton>

        </div>

        <div v-else="manual">
        
            <Loadingscreen @changeManual="loadingScreen()" />
 
        </div>

    </div>
    

</template>

<style>

.coded-message
{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cm__message
{
    margin: 50px 50px;
    font-size: 20px;
}

.cm__text
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
}

@media screen and (max-width: 650px) {
    .cm__message
    {
        font-size: 15px;
    }
    .cm__text
    {
        height: 40vh;
    }
}

.cm__button
{
    width: 100%;
}

.cm__ss-button
{
    height: 60px;
    width: 200px;
    margin:30px; 
}

</style>