<script setup>
import { ref } from 'vue'
import Manual from './Manual.vue'
import Text from './Text.vue'
import Codedmessage from './CodedMessage.vue'
import { useDataStore } from '@/stores/DataStore';

const dataStore = useDataStore()

const manual = ref(true)

const maxLength = 99

const component = defineModel('Component')

function changeComponent(name){
    component.value = name
}

const text = ref('')

const textSymbols = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", 
                        "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я",
                            ".", ",", ":", "-", "!", "?", " ", "(", ")",
                                "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function checkText(){
    let x = Array.from(text.value.toUpperCase())
    let textEdited = x.filter(symbol => textSymbols.includes(symbol)).join('');
    text.value=textEdited
    dataStore.text = text.value
}

</script>

<template>
    
    <div>

        <div v-if="!manual">
            <Text v-model:manual="manual" v-model:text="text" v-model:maxLength="maxLength" @nextComponent="changeComponent(Codedmessage)" @checkText="checkText()"></Text>
        </div>

        <div v-else="manual">

            <Manual v-model:manual="manual">
                КОДОВОЕ ЧИСЛО УСПЕШНО СОХРАНЕНО! <br />
                ДАЛЕЕ ВАМ НУЖНО ВВЕСТИ СООБЩЕНИЕ КОТОРОЕ ВЫ ХОТИТЕ ЗАШИФРОВАТЬ. <br />
                ОБРАТИТЕ ВНИМАНИЕ НА НЕСКОЛЬКО ПРАВИЛ НАПИСАНИЯ СООБЩЕНИЯ: <br /> 
                <ol class="ct__ol-text">
                <li>ДОСТУПНЫМИ ДЛЯ НАПИСАНИЯ ЯВЛЯЮТСЯ:
                    <ul>
                        <li>БУКВЫ ОТ А ДО Я</li>
                        <li>ЦИФРЫ ОТ 0 ДО 9</li>
                        <li>СИМВОЛЫ: " " "." "," ":" "-" "!" "?" "(" ")"</li>
                    </ul>
                </li>
                <li>ДЛИННА СООБЩЕНИЯ ОТ 1 ДО 99 СИМВОЛОВ.</li>
                <li>ВСЕ БУКВЫ БУДУТ ПРЕВЕДЕНЫ К ВЕРХНЕМУ РЕГИСТРУ.</li>
                </ol>
            </Manual>

        </div>

    </div>

</template>

<style>

.ct__ol-text
{
    text-align: left;
}

</style>