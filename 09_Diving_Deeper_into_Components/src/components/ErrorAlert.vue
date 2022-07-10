<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>
<style scoped>
dialog {
  position: fixed;
  margin: 0;
  top: 20vh;
  left: 30%;
  width: 40%;
  padding: 1rem;
  border-radius: 1rem;
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 10px black;
}
</style>
