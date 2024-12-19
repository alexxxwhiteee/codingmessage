
<template>

<div>

   <button>
    <slot />
   </button>

</div>




</template>

<style>

button
{
    color: black;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgb(8, 224, 0);
    height: 100%;
    width: 100%;
    font-size: 20px;
    border: 1px solid black;
}

button:hover
{
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
}



</style>