<script setup>
import { ref } from 'vue'
import Manual from './Manual.vue'
import Number from './Number.vue'


const manual = ref(true)

const number = ref('')

const buttonClass = ref('number__button2_disabled')

</script>

<template>

    <div>

        <div v-if="!manual">
            <Number v-model:manual="manual" v-model:number="number" v-model:buttonClass="buttonClass" to="/codingtext"></Number>
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