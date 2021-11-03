<template>
  <textarea
    id=""
    cols="30"
    rows="10"
    type="text"
    v-model="inputData"
    name="text"
    :placeholder="placeHolder"
    @keyup="onChangeText"
    spellcheck="false"
    @click="clicked"
  />
</template>

<!-- @input="$emit('update:inputData', $event.target.value)" -->

<script>
export default {
  name: "TextArea",
  props: { placeHolder: String, parentData: String },
  emits: ["on-change-text"],
  data() {
    return {
      inputData: this.parentData || "",
    };
  },
  watch: {},
  methods: {
    onChangeText() {
      //   console.log(this.inputData);
      this.$emit("on-change-text", this.inputData);
    },
    // clicked() {
    //   this.inputData += this.inputData++;
    //   console.log("TextArea", this.parentData, this.inputData);
    // },
  },
};
</script>

<style scoped>
textarea {
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  resize: none;
  width: 100%;
  min-height: 400px;
}
textarea[type="text"]:focus {
  /* border: 3px solid #3cbc8d; */
  /* background-color: #fff; */
  border: 2px solid DodgerBlue;
}
</style>
