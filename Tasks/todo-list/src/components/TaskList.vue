<template>
  <loader v-if="!$store.state.isDataReady"></loader>
  <div>
    <ul v-for="(item, index) in $store.state.todoList" :key="index">
      <li
        :class="[item.completed ? 'checked' : '']"
        @click="item.completed = !item.completed"
      >
        {{ item.description }}
        <button class="close" @click="$store.dispatch('deleteItem', index)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    loader: require("@/components/Loader.vue").default,
  },
  created() {
    this.$store.dispatch("getAllTasks");
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
</style>
