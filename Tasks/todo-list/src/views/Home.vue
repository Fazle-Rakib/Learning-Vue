<template>
  <div class="home">
    <section class="header">
      <h2>To Do List</h2>
      <section class="alignContent">
        <input type="text" placeholder="Add a task" v-model="taskInput" />
        <button class="addBtn" @click="addItem">ADD</button>
      </section>
    </section>
    <div>
      <ul v-for="(item, index) in todoList" :key="index">
        <li
          :class="[item.checked ? 'checked' : '']"
          @click="item.checked = !item.checked"
        >
          {{ item.task }}
          <button class="close" @click="deleteItem(index)">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      todoList: [],
      taskInput: "",
    };
  },
  methods: {
    addItem() {
      this.todoList.push({ task: this.taskInput, checked: false });
      this.taskInput = "";
    },
    deleteItem(idx) {
      this.todoList = this.todoList.filter((item, index) => index != idx);
    },
  },
};
</script>

<style scoped>
ul {
  margin: 5px 0px 0px 0px;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  border: 1px snow black;
  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 2px;
  /* margin: 0px 0px 5px 0px; */
}

/* Darker background-color on hover */
ul li:hover {
  background: #04aa6d;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 16px 22px 14px 22px;
  border: none;
  background-color: #fff;
  color: red;
  border-radius: 4px;
  margin: 2px 2px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

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
