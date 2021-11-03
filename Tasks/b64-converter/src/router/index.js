import { createRouter, createWebHistory } from "vue-router";
import Form from "../components/Form.vue";
import SshKeyGen from "../components/SshKeyGen.vue";
const routes = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/SshKeyGen",
    name: "SshKeyGen",
    component: SshKeyGen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
