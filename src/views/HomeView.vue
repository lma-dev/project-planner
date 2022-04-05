<template>
  <h1>Home</h1>
  <div class="home">
    <div v-for="project in projects" :key="project.id">
      <SingleProject :project="project"></SingleProject>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject';
// @ is an alias to /src

export default {
  components: { SingleProject },
  name: 'Home',
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        this.projects = datas;
      })
      .catch((err) => {});
  },
};
</script>
