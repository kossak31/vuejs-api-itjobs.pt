<template>
  <div id="app" class="container">
    <h1 class="pb-2">
      <icons :icon="['fas', 'laptop-code']" />
      itjobs.pt
    </h1>

    <DataTable :showJobs="showJobs" :trabalhos="trabalhos" />

    <div v-if="loading" class="justify-content-center">
      <icons :icon="['fas', 'spinner']" class="fa-spinner" />
    </div>
    <div v-else></div>

    <div class="my-4">
      <!-- Pagination -->
      <ul class="pagination pagination-md justify-content-center text-center">
        <li class="page-item" :class="page === 1 ? 'disabled' : ''">
          <a class="page-link" @click="prevPage"> Previous </a>
        </li>
        <li class="page-link" style="background-color: inherit">
          {{ page }} of {{ lastPage }}
        </li>
        <li class="page-item" :class="page === lastPage ? 'disabled' : ''">
          <a class="page-link" @click="nextPage"> Next </a>
        </li>
      </ul>
    </div>
    <!--./Pagination -->
  </div>
</template>

<script>
import DataTable from "./components/DataTable.vue";

import axios from "axios";
const key = "5b39c7f95aa2801daee3c54f3fffaca2";
const location = 14;
const limit = 50;
const itjobsAPI =
  "https://api.itjobs.pt/job/list.json?api_key=" +
  key +
  "&location=" +
  location +
  "&limit=" +
  limit;

export default {
  name: "app",
  components: {
    DataTable,
  },
  data() {
    return {
      itjobsPage: 0, //page 1
      trabalhos: [],
      page: 1,
      loading: false,
      perPage: 20, //how many jobs we what to show
    };
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get(itjobsAPI + this.itjobsPage)
        .then(({ data }) => {
          console.log(data);
          this.trabalhos = this.trabalhos.concat(data.results);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    prevPage() {
      //this.loading = true;
      this.page--;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    nextPage() {
      if (this.page === this.lastPage - 1) {
        //keep fetching more jobs from the API
        this.itjobsPage++;
        this.fetchData();
      }
      //this.loading = true;
      this.page++;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  computed: {
    showJobs() {
      let start = (this.page - 1) * this.perPage;
      let end = start + this.perPage;
      return this.trabalhos.slice(start, end);
    },
    lastPage() {
      let length = this.trabalhos.length;
      return length / this.perPage;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:hover {
  cursor: pointer;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.fa-spinner {
  animation: spinner 1s linear infinite;
}
</style>
