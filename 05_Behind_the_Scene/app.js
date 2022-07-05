const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText;
    },
  },
});

app.mount('#app');

const appTemplate = Vue.createApp({
  template: `
    <p>{{ message}} </p>
  `,
  data() {
    return {
      message: 'template area',
    };
  },
}).mount('#template');

const data = {
  message: 'hello',
  longMessage: 'hello proxy',
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' proxy';
    }
    target.key = value;
    console.log(target);
    console.log(key);
    console.log(value);
  },
};

const proxy = new Proxy(data, handler);

proxy.message = 'hello now';

console.log(proxy);
