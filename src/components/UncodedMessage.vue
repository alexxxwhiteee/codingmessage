<script setup>
import { ref } from 'vue'
import Loadingscreen from './LoadingScreen.vue'
import Mybutton from './MyButton.vue'
import Startscreen from './StartScreen.vue'

const manual = ref(false)

const component = defineModel('Component')

const text = ref('123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 ');

function changeComponent(name){
    component.value = name
}

function loadingScreen(){
    manual.value = false
}

function copiedText() {
    navigator.clipboard.writeText(text.value);
}

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

            <Mybutton  class="um__ss-button" @click="changeComponent(Startscreen)"> ВЫЙТИ </Mybutton>

        </div>

        <div v-else="manual">
        
            <Loadingscreen @changeManual="loadingScreen()">
               
            </Loadingscreen>

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
}

.um__button,
.um__ss-button
{
    color: black;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgb(8, 224, 0);
    font-size: 20px;
    border: 0;
}

.um__button
{
    width: 100%;
    border: 1px solid rgb(8, 224, 0);
}

.um__ss-button
{
    height: 60px;
    width: 200px;
    margin:30px; 
}

.um__button:hover,
.um__ss-button:hover
{
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
}

</style>