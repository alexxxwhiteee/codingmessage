<script setup>
import { ref } from 'vue'
import Manual from './Manual.vue'
import Number from './Number.vue'

const manual = ref(true)

</script>

<template>

    <div>
        <KeepAlive>

            <Number v-if="!manual" v-model:manual="manual" to="/codingtext"></Number>

            <Manual v-else="manual" v-model:manual="manual">
                ДЛЯ ТОГО, ЧТОБЫ ЗАШИФРОВАТЬ СООБЩЕНИЕ ВАМ НУЖНО ВВЕСТИ КОДОВОЕ ЧИСЛО, ПРИДУМАЙТЕ И ЗАПОМНИТЕ ЕГО, 
                ОНО ПОНАДОБИТСЯ В ДАЛЬНЕЙШЕМ ДЛЯ РАСШИФРОВКИ ВАШЕГО СООБЩЕНИЯ, БЕЗ ЭТОГО ЧИСЛА РАСШИФРОВАТЬ ВАШЕ СООБЩЕНИЕ БУДЕТ НЕВОЗМОЖНО.
                ОБРАТИТЕ ВНИМАНИЕ НА ТО, ЧТО ВАШЕ КОДОВОЕ ЧИСЛО НЕ ДОЛЖНО НАЧИНАТЬСЯ С НУЛЯ.
            </Manual>
            
        </KeepAlive>
    </div>


</template>

<style>

</style>