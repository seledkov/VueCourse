Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: '',
      isShowList: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleShowList() {
      this.isShowList = !this.isShowList;
    },
  },
}).mount('#assignment');
