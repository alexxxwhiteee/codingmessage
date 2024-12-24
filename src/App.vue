<script setup>
import { ref } from 'vue'
import Startscreen from './components/StartScreen.vue'

const activeComponent= ref(Startscreen)

</script>

<template>

<component :is="activeComponent"  v-model:Component="activeComponent"></component>

</template>

<style>

</style>