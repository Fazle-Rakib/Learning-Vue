import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { guest } from "./plugins/axios";

const app = createApp(App);
app.config.globalProperties.$guest = guest;

app.use(store).use(router).mount("#app");
