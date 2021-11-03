<template>
  <button @click="clicked()" :style="{ background: color }">
    <i :class="fontAwesome"> </i>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
    fontAwesome: String,
    borderRadius: String,
  },
  emits: ["btn-click"],
  methods: {
    clicked() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style scoped>
button {
  /* background-color: #04aa6d; */
  border: none;
  /* color: white; */
  border-radius: 4px;
  padding: 2px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 14px 5px;
}
button:hover {
  background-color: black;
  color: white;
}
</style>
