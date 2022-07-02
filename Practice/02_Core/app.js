const app = Vue.createApp({
  data() {
    return {
      name: 'Max',
      age: 20,
      imgUrl:
        'https://givotniymir.ru/wp-content/uploads/2016/07/shmel-nasekomoe-obraz-zhizni-i-sreda-obitaniya-shmelya-1.jpg',
    };
  },
  methods: {
    getAgePlusFive() {
      return this.age + 5;
    },
    getRandomNum() {
      return Math.random();
    },
  },
});

app.mount('#assignment');

Vue.createApp({
  data() {
    return {
      firstText: 'first text message',
      secondText: 'second text message',
      thirdText: 'third text message',
    };
  },
  methods: {
    alert() {
      console.log('hi');
    },
    alertMsg() {
      alert(this.firstText);
    },
    setSecondMsg(event) {
      this.secondText = event.target.value;
    },
    setThirdMsg(event) {
      this.thirdText = event.target.value;
    },
  },
}).mount('#events');

Vue.createApp({
  data() {
    return { counter: 0, winValue: 21 };
  },
  watch: {
    counter() {
      setTimeout(() => {
        this.counter = 0;
      }, 4000);
    },
  },
  computed: {
    resultMsg() {
      if (this.counter < this.winValue) {
        return this.counter + ' low';
      } else if (this.counter > this.winValue) {
        return this.counter + ' over';
      } else {
        return 'you won';
      }
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
}).mount('#event-binding');

Vue.createApp({
  data() {
    return {
      userEnteredClass: '',
      visibleClass: 'visible',
      userEnteredBackgroundColor: '',
    };
  },
  methods: {
    addUserStyle(event) {
      this.userEnteredClass = event.target.value;
    },
    addBackgroundColor(event) {
      this.userEnteredBackgroundColor = event.target.value;
    },
    toogleVisible() {
      if (this.visibleClass === 'visible') {
        this.visibleClass = 'hidden';
      } else {
        this.visibleClass = 'visible';
      }
    },
  },
}).mount('#classes-styling');
