<template>
  <h1>Add Project</h1>
  <form @submit.prevent="addProject">
    <label>Project Title</label>
    <input type="text" v-model="title" />
    <label>Project Detail</label>
    <input type="text" v-model="detail" />
    <div class="flex">
      <button>Add Project</button>
      <router-link :to="{ name: 'home' }">Back</router-link>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      detail: '',
    };
  },
  methods: {
    addProject() {
      fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
          complete: false,
        }),
      })
        .then(() => {
          this.$router.push({ name: 'home' });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
label {
  display: block;
  color: #bbb;
  font-weight: bold;
  text-transform: uppercase;
  margin: 20px 0 10px 0;
}
form {
  background: white;
  border-radius: white;
  border-radius: 10px;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
}
form button {
  display: inline-block;
  margin: 30px auto 0;
  background: black;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
