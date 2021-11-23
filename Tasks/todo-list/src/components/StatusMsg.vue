<template>
  <div :class="['basicStyle', type]" v-if="$store.state.errorMessage != null">
    <p>{{ $store.state.errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>

<style scoped>
.basicStyle {
  margin: 10px 0px 0px 0;
  padding: 5px 20px;
  text-align: center;
  border-radius: 5px;
}
.success {
  background-color: rgba(135, 236, 76, 0.753);
  color: black;
}
.error {
  background-color: #e5383b;
  color: white;
}
</style>
