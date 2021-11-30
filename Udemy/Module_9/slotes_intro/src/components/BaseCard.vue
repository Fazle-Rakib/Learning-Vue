<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- this defalut will work if this named slot
         is not defined where component is used -->
        <h2>This is defalut from slot</h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // for every time this component is this mounted will be called
  // and we will be able to access the $slots
  mounted() {
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
