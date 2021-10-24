// By mounting a vue app to a certain DOM in HTML code,
// we make the part of the html code template of the vue app
const app = Vue.createApp({
  template: `
      <h2>How Vue Works</h2>
      <input type="text" @input="saveInput" />
      <button @click="setText">Set Text</button>
      <p>{{ message }}</p>
  `,
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");
