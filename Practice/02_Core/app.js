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
