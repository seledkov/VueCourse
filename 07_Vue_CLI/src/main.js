import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const app = createApp(App);
const friendContact = createApp(FriendContact);

app.component('friend-contact', friendContact);
app.mount('#app');
