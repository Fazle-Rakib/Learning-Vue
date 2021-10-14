const app = Vue.createApp({
  data() {
    return {
      counter: 100,
      name: "",
      confirmedName: "",
      // fullName: "",
    };
  },
  // Wachers are methods that takes a data or computed
  // property to watch the changes and execute the defined
  // methods in watch with the same data or computed props name
  watch: {
    // name(newValue, oldValue) {
    //   console.log(newValue, oldValue);
    //   this.fullName = newValue + " " + "Mr.X";
    // },
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },

  // For multiple data property change listening
  // we should use computed property rather than watchers
  // watchers are helpful for single data change listening
  // Like {{counter}}

  // computed properties is same as methods diff between
  // them are : vue knows the dependecies of computed and reexecute
  // when something on dependencies changes
  computed: {
    fullName() {
      console.log("Running Computed props!");
      return this.name === "" ? "" : this.name + " " + "Rakib";
    },
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    addParam(event, value) {
      console.log(event, value);
      this.counter += value;
    },
    reduceParam(value) {
      this.counter -= value;
    },
    setName(event, lastName) {
      // console.log(event.target.value);
      this.name = event.target.value;
      if (event.target.value == "") this.name = "";
    },
    submitForm(event) {
      alert("Form is submitting!!!");
      console.log("not rendered!");
      // this could be done by event modifiers also
      // event.preventDefault();
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
