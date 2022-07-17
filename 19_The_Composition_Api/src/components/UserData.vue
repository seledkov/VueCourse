<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from 'vue';
export default {
  props: ['firstName', 'lastName'],

  setup(props, context) {
    const userName = computed(() => props.firstName + ' ' + props.lastName);

    console.log(context);

    const age = inject('keyName');
    return { userName, age };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
};
</script>
