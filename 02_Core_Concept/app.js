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
