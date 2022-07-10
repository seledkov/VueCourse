<template>
  <div>
    <h2>username: {{ name }}</h2>
    <h3>age: {{ age }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: false,

      default: 'default name',
    },
    age: {
      type: Number || String,
      required: false,
      default: 'default age',
    },
  },
};
</script>
