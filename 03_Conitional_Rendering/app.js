const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalValue: '' };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      console.log(this.goals);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
