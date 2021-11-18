<template>
  <Header></Header>
  <task-list></task-list>
</template>

<script>
export default {
  name: "Home",
  components: {
    Header: require("@/components/Header.vue").default,
    "task-list": require("@/components/TaskList.vue").default,
  },
};
</script>
