<template>
  <ul>
    <LearningResource
      v-for="resource of storedResources"
      :key="resource.id"
      :resource="resource"
    ></LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  props: ['storedResources'],
  components: {
    LearningResource,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
