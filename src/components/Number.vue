<script setup>
import AppLink from './AppLink.vue'
import Mybutton from './MyButton.vue'
import { useDataStore } from '@/stores/DataStore'
import { computed, ref, watch } from 'vue'

defineProps({
  to: {
    type: String,
    required: true
  }
})

const dataStore = useDataStore()

const number = ref('')

const manual = defineModel('manual')

const numberSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const activeButton = computed(() => {
  return number.value.length >=1
})

watch (number, (newValue) => {
  let cleaned = Array.from(newValue).filter(symbol => numberSymbols.includes(symbol)).join('')
  if (newValue !== cleaned) {
    number.value = cleaned
  }
  for( let i = 0; i < numberSymbols.length; i++){
 if (number.value[0] == 0 || number.value.length == 0){
          number.value=''
    }
  }

  let currentValue = number.value
  let sum = currentValue.split('').map(item => +item).reduce((acc, number) => acc + number)
  while (sum > 52){
    sum = sum.toString().split('').map(item => +item).reduce((acc, number) => acc + number)
  }
  dataStore.number = sum
}, { flush: 'sync' })

</script>

<template>

    <div class="number">

        <div class="number__form">
            <input class="number__input" type="input" v-model="number" size=45 maxlength="9" placeholder="ВВЕДИТЕ ВАШЕ КОДОВОЕ ЧИСЛО В ЭТО ПОЛЕ"/>
            <Mybutton class="number__button1" @click="manual=!manual"> ? </Mybutton>
        </div>

        <div class="number__text">
        <h1>ВАШЕ КОДОВОЕ ЧИСЛО: {{ number }}</h1>
        </div>

        <AppLink :to="to" :class="[activeButton ? 'number__button2_enabled' : 'number__button2_disabled']"> ПРОДОЛЖИТЬ </AppLink>

    </div>

</template>

<style>

.number
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.number__form
{ 
  margin:30px;  
  width: 500px;
  display: flex;
  flex-direction: column;
}

.number__input
{
  padding: 10px 15px;
  font-size: 20px;
  color: rgb(8, 224, 0);
  background-color: black;
  border: 1px solid rgb(8, 224, 0);
  text-align: center;
  border-radius: 0px;
}

.number__input::placeholder {
  color: rgb(118, 118, 118);
}

.number__input:hover,
.number__input:focus
{
  outline: none;
}

.number__text
{
  background-color: black;
  margin:30px;
  text-align: center;
  height: 50px;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid rgb(8, 224, 0);
}

.number__button1
{
  width: 100%;
}

.number__button2_enabled
{
  height: 60px;
  width: 200px;
  margin-top: 20px;
  pointer-events: auto;
}

.number__button2_disabled
{
  color: rgb(118, 118, 118);
  background-color: black;
  height: 60px;
  width: 200px;
  margin-top: 20px;
  pointer-events: none;
}

@media screen and (max-width: 600px) {
  .number__form
  {   
    width: 300px;
  }
  .number__text
  {
    font-size: 10px;
  }
  .number__input::placeholder 
  {
    font-size: 10px;
  }
}

</style>