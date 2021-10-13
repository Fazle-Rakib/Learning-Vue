<template>
  <button @click="clicked()" class="btn" :style="{ background: color }">
    {{ text }}
  </button>

  <!-- v-on:click = "clicked()" -->
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    clicked() {
      console.log("Button clicked!");
      this.$emit("btn-click");
    },
  },
};
</script>