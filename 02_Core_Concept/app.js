const app = Vue.createApp({
  data() {
    return {
      goalText: 'Vue Master',
      vueLink: 'https://vuejs.org/',
      // htmlLink: '<i>link google</i>',
    };
  },
  methods: {
    outputGoal() {
      if (Math.random() > 0.5) {
        return 'Study';
      } else {
        return 'More Study';
      }
    },
  },
});

app.mount('#user-goal');

Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    console(event) {
      console.log(event);
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
  },
}).mount('#events');
