import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../components/main/pages/infosPage.vue')
    },
    {
      path: "/experience",
      component: () => import('../components/main/experience/experiencePage.vue')
    },
    {
      path: "/skills",
      component: () => import('../components/main/skills/skillsPage.vue')
    },
    {
      path: "/education",
      component: () => import('../components/main/pages/educationPage.vue')
    },
    {
      path: "/projects",
      component: () => import('../components/main/projects/projectsPage.vue')
    },
  ],
});

export default router;
