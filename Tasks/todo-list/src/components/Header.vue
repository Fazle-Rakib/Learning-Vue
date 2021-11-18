<template>
  <div class="home">
    <section class="header">
      <h2>To Do List</h2>
      <section class="alignContent">
        <input type="text" placeholder="Add a task" v-model="taskInput" />
        <button class="addBtn" @click="$store.dispatch('addItem')">ADD</button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    taskInput: {
      get() {
        return this.$store.state.taskInput;
      },
      set(newValue) {
        this.$store.dispatch("setTaskInput", newValue);
      },
    },
  },
};
</script>

<style>
/* Style the header */
.header {
  background-color: dodgerblue;
  padding: 10px 20px;
  color: white;
  text-align: center;
  border-radius: 2px;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

.alignContent {
  display: flex;
  align-content: flex-start;
  gap: 10px;
}

/* Style the input */
input {
  /* margin: 0px 5px; */
  border: none;
  border-radius: 5px;
  width: 75%;
  padding: 14px 28px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  border: 0px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  border-color: #04aa6d;
  color: green;
  border-radius: 5px;
  float: left;
  /* margin-left: 5px; */
}

.addBtn:hover {
  background-color: #04aa6d;
  color: white;
}
</style>
