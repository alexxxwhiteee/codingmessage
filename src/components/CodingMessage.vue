<script setup>
import { ref } from 'vue'
import Manual from './Manual.vue'
import Number from './Number.vue'
import Codingtext from './CodingText.vue'
import dataFunctions from '/Users/Aleksandr/vue-project/src/assets/dataStorage.js'

const manual = ref(true)

const number = ref('')

const component = defineModel('Component')

function changeComponent(name){
    component.value = name
}

const { numberCode }  = dataFunctions.useNumberData()

const numberSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const buttonClass = ref('number__button2__disabled')

function checkNumber(){
    let x = Array.from(number.value)
    let numberEdited = x.filter(symbol => numberSymbols.includes(symbol)).join('');
    number.value = numberEdited
    if (number.value[0] == 0){
          number.value=''
    }
    if (number.value.length >= 1){
        buttonClass.value="number__button2__enabled"
    }
    if (number.value.length == 0){
     buttonClass.value="number__button2__disabled"
    }
    
    numberCode.value = number.value.split('').map(item => +item).reduce((acc, number) => acc + number)
    if (numberCode.value <= 2){
        return
    }
    numberCode.value = numberCode.value.toString().split('').map(item => +item).reduce((acc, number) => acc + number)
}




</script>

<template>

    <div>

        <div v-if="!manual">
            <Number :clss="buttonClass" v-model:manual="manual" v-model:number="number" @nextComponent="changeComponent(Codingtext)" @checkNumber="checkNumber()"></Number>
        </div>

        <div v-else="manual">
            <Manual v-model:manual="manual">
                ДЛЯ ТОГО, ЧТОБЫ ЗАШИФРОВАТЬ СООБЩЕНИЕ ВАМ НУЖНО ВВЕСТИ КОДОВОЕ ЧИСЛО, ПРИДУМАЙТЕ И ЗАПОМНИТЕ ЕГО, 
                ОНО ПОНАДОБИТСЯ В ДАЛЬНЕЙШЕМ ДЛЯ РАСШИФРОВКИ ВАШЕГО СООБЩЕНИЯ, БЕЗ ЭТОГО ЧИСЛА РАСШИФРОВАТЬ ВАШЕ СООБЩЕНИЕ БУДЕТ НЕВОЗМОЖНО.
                ОБРАТИТЕ ВНИМАНИЕ НА ТО, ЧТО ВАШЕ КОДОВОЕ ЧИСЛО НЕ ДОЛЖНО НАЧИНАТЬСЯ С НУЛЯ.
            </Manual>
        </div>

    </div>


</template>

<style>

</style>