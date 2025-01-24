<script setup>

</script>

<template>

   <button class="my-button">
    <slot />
   </button>

</template>

<style>

.my-button
{
   color: black;
   display: flex;
   text-align: center;
   justify-content: center;
   align-items: center;
   background-color: rgb(8, 224, 0);
   font-size: 20px;
   border: 1px solid rgb(8, 224, 0);
}

.my-button:hover
{
   color: rgb(8, 224, 0);
   background-color: black;
   border: 1px solid rgb(8, 224, 0);
}

</style>