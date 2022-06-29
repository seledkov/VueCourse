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
