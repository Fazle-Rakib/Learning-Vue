<template>
  <ul>
    <li v-for="goal of goals" :key="goal">
      <slot v-bind:item="goal" anotherProp="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Goal 1", "Goal 2"],
    };
  },
};
</script>

<style scoped></style>
