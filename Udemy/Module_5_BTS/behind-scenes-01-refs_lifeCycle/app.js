const app = Vue.createApp({
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
      // this.message = this.currentUserInput;
      this.message = this.$refs.userInput.value;
      // console.log(this.$refs.userInput);
      // console.dir(this.$refs.userInput);
    },
  },

  // These are the vue Life Cycle methods
  beforeCreate() {
    console.log("Before Create!");
  },
  created() {
    console.log("Created!");
  },
  beforeMount() {
    console.log("Before Mounted");
  },
  mounted() {
    console.log("Mounted!");
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("Before Unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);
