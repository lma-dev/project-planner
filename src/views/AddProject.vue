<template>
  <h1>Add Project</h1>
  <form>
    <label>Project Title</label>
    <input type="text" />
    <label>Project Detail</label>
    <input type="text" />
    <button>Add Project</button>
  </form>
</template>

<script>
export default {};
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
</style>
