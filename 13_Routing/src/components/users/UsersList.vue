<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
    },
  },
  beforeRouteEnter(_to, _from, next) {
    console.log('before router enter');
    next();
  },
  beforeRouteLeave(_to, _from, next) {
    // first call, before other route guards
    console.log('before route leave');
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('you unsave change!');
      /// user want save or not changed, before leave component / page
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
