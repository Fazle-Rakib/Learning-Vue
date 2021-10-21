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
      this.message = this.currentUserInput;
    },
  },
});

app.mount("#app");

// In vanilla JS it is not reactive,
// so if we changes one of the variables and it
// changes then the dependent var doesn't affect the changes
let msg = "Hello",
  longMsg = msg + " " + "World";
console.log(longMsg);

msg = "Hello!!!";
console.log(longMsg);

// But in Vue proxies is used to bring reactivity in JS
const data = {
  msg: "Hello",
  longMsg: "Hello World",
};
const handler = {
  set(target, key, value) {
    // console.log(target);
    // console.log(key);
    // console.log(value);
    if (key == "msg") {
      target.longMsg = value + " World!";
    }
    target.msg = value;
  },
};

// In vue it keeps tracks of all the data properties &
// whenever some property changes it updates by wrapping
// the property by proxies... It is just a simple view of
// the BTS of Vue's reactivity as there are computed and watchers also
const proxy = new Proxy(data, handler);

proxy.msg = "Hello!!!";
console.log(proxy.longMsg);

// one app vs multi app
const app2 = Vue.createApp({
  data() {
    return {
      favoriteMeal: "Soup",
    };
  },
});

app2.mount("#app2");
