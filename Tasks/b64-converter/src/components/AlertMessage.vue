<template>
  <div class="alert">
    <strong>{{ message.type }}</strong> {{ message.text }}
  </div>
</template>
<script>
export default {
  props: {
    message: Object,
  },
};
</script>
<style scoped>
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}
</style>
