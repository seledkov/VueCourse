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
      counter: 10,
      name: '',
      title: '',
    };
  },
  computed: {
    fullName() {
      // work as returned data but foo
      return this.name + ' ' + 'miller';
    },
  },
  watch: {
    name(newValue, oldValue) {
      // see to key into data > name(gdata.name)
      console.log('hi i am watch: name', newValue, oldValue);
      this.title = newValue + ' fon miller';
    },
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
    // outputFullName() {
    //   return this.name + ' ' + 'miller';
    // },
    resetName() {
      this.name = '';
    },
  },
}).mount('#events');
