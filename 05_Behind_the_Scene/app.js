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
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('before create()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('before mount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('before update()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('before unmount()');
  },
  unmounted() {
    console.log('unmounted()');
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
  beforeUnmount() {
    console.log('template before unmount()');
  },
  unmounted() {
    console.log('template unmounted()');
  },
});
appTemplate.mount('#template');

appTemplate.unmount();

// const data = {
//   message: 'hello',
//   longMessage: 'hello proxy',
// };

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' proxy';
//     }
//     target.key = value;
//     console.log(target);
//     console.log(key);
//     console.log(value);
//   },
// };

// const proxy = new Proxy(data, handler);

// proxy.message = 'hello now';

// console.log(proxy);
