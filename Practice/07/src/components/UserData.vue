<template>
  <form @submit.prevent="setData">
    <label for="name">
      <span>Name </span>
      <input type="text" v-model="enteredName" />
    </label>
    <label for="age">
      <span>Age </span>
      <input type="text" v-model="enteredAge" />
    </label>
    <button>Set data</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    setData() {
      this.$emit('set-data', this.enteredName, this.enteredAge);
    },
  },
};
</script>
