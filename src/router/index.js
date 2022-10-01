import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inbox",
      component: () => import("../views/InboxView.vue"),
    },
    {
      path: "/archive",
      name: "archive",
      component: () => import("../views/ArchiveView.vue"),
    },
  ],
});

export default router;
