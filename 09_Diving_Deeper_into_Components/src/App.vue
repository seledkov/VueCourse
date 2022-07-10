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
    <CurseGoals v-slot:default="slotProps">
      <!-- <template v-slot:default="slotProps"> // not need if 1  stot-template -->
      <h2>{{ slotProps }}</h2>
      <!-- </template> -->
    </CurseGoals>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CurseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
  components: {
    TheHeader: TheHeader,
    BadgeList,
    CurseGoals,
    ManageGoals,
    ActiveGoals,
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
