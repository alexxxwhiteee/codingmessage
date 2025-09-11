<template>
    <div>
  <RouterLink v-bind="$attrs" class="router-btn">
    <slot />
  </RouterLink>
  </div>
</template>

<style>
.router-btn
{
    color: black;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgb(8, 224, 0);
    font-size: 20px;
    border: 1px solid rgb(8, 224, 0);
    text-decoration: none;
}

.router-btn:hover
{
    color: rgb(8, 224, 0);
    background-color: black;
    border: 1px solid rgb(8, 224, 0);
}
</style>