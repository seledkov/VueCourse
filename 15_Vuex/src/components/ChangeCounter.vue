<template>
  <button @click="addOne">add 1</button>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

const addOne = () => {
  store.commit('increment');
};
</script>
