<script setup>
import { ref, onMounted, useTemplateRef } from 'vue'
import Startscreen from './components/StartScreen.vue'

const activeComponent= ref(Startscreen)

const canvas = useTemplateRef('canvas')

onMounted(() => { 

const C = canvas.value,
  $ = C.getContext("2d"),
  W = (C.width = window.innerWidth),
  H = (C.height = window.innerHeight);

const str = "А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я",
  matrix = str.split("");

let font = 11,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  $.fillStyle = "rgba(0,0,0,.05)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#0f0";
  $.font = font + "px Tiny5";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    $.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}

setInterval(draw, 30);

window.addEventListener("resize", () => location.reload());

})

</script>

<template>

<canvas ref="canvas" class="matrix"></canvas>

<component :is="activeComponent"  v-model:Component="activeComponent"></component>

</template>

<style>

.matrix
{
    z-index: -10;
    position: absolute;
}

</style>


