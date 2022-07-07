<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleVisibleDetail">show/hide detail</button>
    <ul v-if="isVisibleDetail">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.mail }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      friend: {
        id: '125',
        name: 'alex',
        phone: '2345',
        mail: 'alex@localhost.ru',
      },
      isVisibleDetail: false,
    };
  },
  methods: {
    toggleVisibleDetail() {
      this.isVisibleDetail = !this.isVisibleDetail;
    },
  },
};
</script>
