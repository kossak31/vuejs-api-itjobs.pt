<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Nº</th>
        <th scope="col">id</th>
        <th scope="col">Sobre Empresa</th>
        <th scope="col">Logotipo</th>
        <th scope="col">Ofertas</th>
        <th scope="col">Homepage</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr v-for="repo in trabalhos" :key="repo.id"></tr> -->
      <tr v-for="repo in showJobs" :key="repo.id" class="mt-2">
        <th scope="row">
          {{ trabalhos.indexOf(repo) + 1 }}
        </th>
        <td>
          {{ repo.id }}
        </td>
        <td>
          {{ repo.company.description }}
        </td>
        <td>
          <img v-if="repo.company.logo" class="logo" :src="repo.company.logo" />
          <p>{{ repo.company.address }}</p>
          <p>{{ repo.company.phone }}</p>
          <p>{{ repo.company.email }}</p>
        </td>
        <td>
          <a
            :href="'https://itjobs.pt/oferta/' + repo.id + '/' + repo.slug"
            target="_blank"
            >Ver Oferta para {{ repo.title }}</a
          >
        </td>
        <td>
          <!-- website -->
          <span v-if="repo.company.url">
            <a :href="repo.company.url" target="_blank">Website</a><br
          /></span>
          <p v-else>Sem Website</p>
          <br />

          <!-- facebook -->
          <span v-if="repo.company.url_facebook"
            ><a :href="repo.company.url_facebook" target="_blank">Facebook</a
            ><br
          /></span>
          <p v-else>Sem Facebook</p>
          <br />

          <!-- linkedin -->
          <span v-if="repo.company.url_linkedin"
            ><a :href="repo.company.url_linkedin" target="_blank">Linkedin</a
            ><br />
          </span>
          <p v-else>Sem Linkedin</p>
          <br />

          <!-- twitter -->
          <span v-if="repo.company.url_twitter"
            ><a :href="repo.company.url_twitter" target="_blank">Twitter</a><br
          /></span>

          <p v-else>Sem Twitter</p>
          <br />
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  name: "DataTable",
  props: {
    trabalhos: Array,
    showJobs: Array,
  },
};
</script>


<style scoped>
.logo {
  max-width: 900px;
}
</style>