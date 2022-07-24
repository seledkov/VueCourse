<template>
  <base-container title="Vuex">
    <TheCounter></TheCounter>
    <button @click="addOne">add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script setup>
import { useStore } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

const store = useStore();

const addOne = () => {
  store.commit('increment');
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
