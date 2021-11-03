<template>
  <header class="flex-container">
    <Button
      @btn-click="buttonClicked"
      :fontAwesome="'fa fa-bars'"
      :borderRadius="'2px'"
    ></Button>
    <h3>{{ headerTitle }}</h3>
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  components: {
    Button,
  },
  emits: ["toggle-navbar"],
  data() {
    return {};
  },
  methods: {
    buttonClicked() {
      this.$emit("toggle-navbar");
    },
  },
  props: {
    headerTitle: String,
  },
};
</script>

<style scoped>
header {
  background: dodgerblue;
  /* background-color: DodgerBlue; */
  color: aliceblue;
  padding: 1px;
  border-radius: 5px;
}
header h3 {
  margin-left: 5px;
}
.flex-container {
  display: flex;
  /* background-color: DodgerBlue; */
  flex-wrap: wrap;
  /* justify-content: space-around; */
  /* min-height: 400px; */
  /* text-align: initial; */
  /* margin-top: 5px; */
  /* width: 100%; */
}
</style>
