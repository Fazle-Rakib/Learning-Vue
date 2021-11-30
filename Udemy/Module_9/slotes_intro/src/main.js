import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";
import CourseGoal from "./components/CourseGoal";

const app = createApp(App);

// Globally declared component
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
app.component("course-goal", CourseGoal);

app.mount("#app");
