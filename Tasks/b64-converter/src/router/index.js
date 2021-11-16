import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import b64Converter from "../components/b64Converter.vue";
import SshKeyGen from "../components/SshKeyGen.vue";
import HashingText from "../components/HashingText";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/b64Converter",
    name: "b64Converter",
    component: b64Converter,
  },
  {
    path: "/SshKeyGen",
    name: "SshKeyGen",
    component: SshKeyGen,
  },
  {
    path: "/HashingText",
    name: "Hashing String",
    component: HashingText,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
