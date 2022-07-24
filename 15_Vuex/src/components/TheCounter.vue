<template>
  <h3>{{ counter }}</h3>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const counter = computed(() => {
  // return 1;
  return store.state.counter;
});
</script>
