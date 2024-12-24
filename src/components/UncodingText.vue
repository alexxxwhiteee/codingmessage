<script setup>
import { ref } from 'vue'
import Manual from './Manual.vue'


const manual = ref(true)



</script>


<template>
    
    <div class="code" v-if="!manual">

    DECODING TEXT

    </div>


    <div class="manual" v-else="manual">

        <Manual v-model:manual="manual">
            КОДОВОЕ ЧИСЛО УСПЕШНО СОХРАНЕНО! <br /> 
            ДАЛЕЕ ВАМ НУЖНО ВВЕСТИ СООБЩЕНИЕ КОТОРОЕ ВЫ ХОТИТЕ РАСШИФРОВАТЬ.
        </Manual>

    </div>

</template>


<style>

.code,
.manual
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>