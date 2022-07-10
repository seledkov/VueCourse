<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <ErrorAlert v-if="inputIsInvalid">
      <h2>input must no empty</h2>
      <button @click="confirmError">Okay</button>
    </ErrorAlert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredGoal = this.$refs.goal.value;
      console.log(enteredGoal);
      if (enteredGoal === '') {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
  components: {
    ErrorAlert,
  },
};
</script>
