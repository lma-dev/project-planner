<template>
  <nav class="main-nav">
    <router-link to="/">Project</router-link>
    <router-link :to="{ name: 'addProject' }">Add Project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>
