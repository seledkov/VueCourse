<template>
  <ul>
    <li v-for="goal of goals" :key="goal">
      <slot :props1="goal" props2="another props"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return { goals: ['learn vue', 'finish course'] };
  },
};
</script>
