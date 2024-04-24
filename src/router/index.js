import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../components/main/infosPage.vue')
    },
    {
      path: "/experience",
      component: () => import('../components/main/experiencePage.vue')
    },
    {
      path: "/skills",
      component: () => import('../components/main/skills/skillsPage.vue')
    },
    {
      path: "/projects",
      component: () => import('../components/main/projectsPage.vue')
    },
  ],
});

export default router;
