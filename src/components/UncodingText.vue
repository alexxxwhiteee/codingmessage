<script setup>
import { ref } from 'vue'
import Manual from './Manual.vue'
import Text from './Text.vue'
import Uncodedmessage from './UncodedMessage.vue'
import dataFunctions from '/Users/Aleksandr/vue-project/src/assets/dataStorage.js'

const manual = ref(true)

const maxLength = ref(400)

const component = defineModel('Component')

function changeComponent(name){
    component.value = name
}

const { textCode }  = dataFunctions.useTextData()

const text = ref('')

const textSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ",", " "]                                

function checkText(){
    let x = Array.from(text.value.toUpperCase())
    let textEdited = x.filter(symbol => textSymbols.includes(symbol)).join('');
    text.value=textEdited
    if (text.value[0] == ',' || text.value[0] == ' '){
        text.value = ''
    }
    textCode.value = text.value
}

</script>

<template>
    
    <div>

        <div v-if="!manual">
            <Text v-model:manual="manual" v-model:text="text" v-model:maxLength="maxLength" @nextComponent="changeComponent(Uncodedmessage)" @checkText="checkText()"></Text>
        </div>

        <div v-else="manual">

            <Manual v-model:manual="manual">
                КОДОВОЕ ЧИСЛО УСПЕШНО СОХРАНЕНО! <br /> 
                ДАЛЕЕ ВАМ НУЖНО ВВЕСТИ СООБЩЕНИЕ КОТОРОЕ ВЫ ХОТИТЕ РАСШИФРОВАТЬ. <br />
                ОБРАТИТЕ ВНИМАНИЕ НА ТО, ЧТО ПОЛУЧЕННОЕ ВАМИ СООБЩЕНИЕ НЕ ДОЛЖНО БЫТЬ ДЛИННЕЕ 400 СИМВОЛОВ, НЕ ДОЛЖНО НАЧИНАТЬСЯ С ЗАПЯТОЙ ИЛИ ПРОБЕЛА И ДОЛЖНО СОСТОЯТЬ ТОЛЬКО ИЗ: <br /> 
                <ul class="ut__ul-text">
                        <li>ЦИФР ОТ 0 ДО 9</li>
                        <li>ПРОБЕЛОВ</li>
                        <li>ЗАПЯТЫХ</li>
                </ul>
            </Manual>

        </div>

    </div>

</template>

<style>

.ut__ul-text
{
    text-align: left;
}

</style>