<template>
  <div>
    <UserData @set-data="setData" />
    <ActiveUser :name="name" :age="age" />
  </div>
</template>

<script>
import UserData from './components/UserData.vue';
import ActiveUser from './components/ActiveUser.vue';
export default {
  components: { UserData, ActiveUser },
  data() {
    return { name: 'max', age: 30 };
  },
  methods: {
    setData(name, age) {
      this.name = name;
      this.age = age;
    },
  },
};
</script>
