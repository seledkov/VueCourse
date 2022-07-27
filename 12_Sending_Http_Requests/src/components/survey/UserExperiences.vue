<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadResults"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">data loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        no data
      </p>

      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      // results: null,
      results: null,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async loadResults() {
      console.log('get data');
      try {
        this.isLoading = true;
        this.error = null;
        const response = await fetch(
          'https://order-list-4e084-default-rtdb.europe-west1.firebasedatabase.app/' +
            'surveys.json', // .json need for firebase
          // 'surveys', // error emulation
          {
            method: 'GET',
          }
        );
        if (response.ok) {
          const data = await response.json();
          this.isLoading = false; //todo why not 61 line
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        }
      } catch (error) {
        this.isLoading = false;
        console.log('err', error);
        this.error = 'try again later';
      }
    },
  },
  mounted() {
    this.loadResults();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
