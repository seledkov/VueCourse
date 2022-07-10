<template>
  <div>
    <!-- work any syntax upperCamelCase or kebab-case -->
    <TheHeader />
    <the-header />
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CurseGoals>
      <template v-slot:default="slotProps">
        <h2>{{ slotProps }}</h2>
      </template>
    </CurseGoals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CurseGoals from './components/CourseGoals.vue';

export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  components: {
    TheHeader: TheHeader,
    BadgeList,
    CurseGoals,
    UserInfo,
    // 'the-header': TheHeader,
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
